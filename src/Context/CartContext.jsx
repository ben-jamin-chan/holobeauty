import { createContext, useState, useContext, useEffect } from "react"
import { collection, addDoc, updateDoc, deleteDoc, doc, getDocs, query, where } from "firebase/firestore"
import { db } from '../Firebase/config'

const CartContext = createContext()
const CART_STORAGE_KEY = 'shopping_cart'
const SESSION_ID_KEY = 'guest_session_id'

const generateSessionId = () => {
    return 'guest_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now()
}

const getOrCreateSessionId = () => {
    let sessionId = localStorage.getItem(SESSION_ID_KEY)
    if (!sessionId) {
        sessionId = generateSessionId()
        localStorage.setItem(SESSION_ID_KEY, sessionId)
    }
    return sessionId
}

export const useCart = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    const [sessionId, setSessionId] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    
    // Initialize session and load cart data
    useEffect(() => {
        const initializeCart = async () => {
            try {
                setIsLoading(true)
                const currentSessionId = getOrCreateSessionId()
                setSessionId(currentSessionId)

                // Try to load from localStorage first for immediate display
                const savedCart = localStorage.getItem(CART_STORAGE_KEY)
                if (savedCart) {
                    const parsedCart = JSON.parse(savedCart)
                    const sessionCart = parsedCart[currentSessionId] || []
                    setCart(sessionCart)
                }

                // Then fetch from Firestore and merge if needed
                const cartRef = collection(db, 'carts')
                const q = query(cartRef, where("sessionId", "==", currentSessionId))
                const cartSnapshot = await getDocs(q)
                const firestoreCart = cartSnapshot.docs.map(doc => ({
                    ...doc.data(),
                    docId: doc.id
                }))

                // Merge localStorage and Firestore data
                if (firestoreCart.length > 0) {
                    setCart(firestoreCart)
                    // Update localStorage with Firestore data
                    const allCarts = JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || '{}')
                    allCarts[currentSessionId] = firestoreCart
                    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(allCarts))
                }
            } catch (error) {
                console.error("Error initializing cart:", error)
            } finally {
                setIsLoading(false)
            }
        }

        initializeCart()
    }, [])

    // Update total and save to localStorage when cart changes
    useEffect(() => {
        const calculateTotal = () => {
            const sum = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)
            setTotal(sum)
        }
        calculateTotal()

        // Save to localStorage
        if (sessionId) {
            const allCarts = JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || '{}')
            allCarts[sessionId] = cart
            localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(allCarts))
        }
    }, [cart, sessionId])

    const addToCart = async (product) => {
        try {
            const existingItem = cart.find(item => item.id === product.id)
            
            if (existingItem) {
                // Update both state and Firestore
                const updatedCart = cart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
                setCart(updatedCart)
                
                const cartRef = doc(db, 'carts', existingItem.docId)
                await updateDoc(cartRef, { quantity: existingItem.quantity + 1 })
            } else {
                // Add to both state and Firestore
                const cartRef = collection(db, 'carts')
                const docRef = await addDoc(cartRef, {
                    ...product,
                    quantity: 1,
                    sessionId
                })
                
                setCart([...cart, { ...product, quantity: 1, docId: docRef.id, sessionId }])
            }
        } catch (error) {
            console.error("Error adding to cart:", error)
        }
    }

    const removeFromCart = async (productId) => {
        try {
            const item = cart.find(item => item.id === productId)
            if (item) {
                // Remove from both state and Firestore
                await deleteDoc(doc(db, "carts", item.docId))
                setCart(cart.filter(item => item.id !== productId))
            }
        } catch (error) {
            console.error("Error removing from cart:", error)
        }
    }

    const updateQuantity = async (productId, newQuantity) => {
        try {
            const item = cart.find(item => item.id === productId)
            if (item) {
                // Update both state and Firestore
                const cartRef = doc(db, "carts", item.docId)
                await updateDoc(cartRef, { quantity: newQuantity })

                const updatedCart = cart.map(item => 
                    item.id === productId
                        ? { ...item, quantity: newQuantity}
                        : item
                )
                setCart(updatedCart)
            }
        } catch (error) {
            console.error("Error updating quantity:", error)
        }
    }

    const clearCart = async () => {
        try {
            // Clear from localStorage
            if (sessionId) {
                const allCarts = JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || '{}')
                delete allCarts[sessionId]
                localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(allCarts))
            }

            // Clear from Firestore
            const deletePromises = cart.map(item => 
                deleteDoc(doc(db, "carts", item.docId))
            )
            await Promise.all(deletePromises)

            setCart([])
        } catch (error) {
            console.error("Error clearing cart:", error)
        }
    }

    const startNewSession = async () => {
        await clearCart()
        const newSessionId = generateSessionId()
        localStorage.setItem(SESSION_ID_KEY, newSessionId)
        setSessionId(newSessionId)
    }
    
    return (
        <CartContext.Provider value={{
            cart,
            total,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            startNewSession,
            sessionId,
            isLoading
        }}>
            {children}
        </CartContext.Provider>
    )
}