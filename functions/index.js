require('dotenv').config(); // Load environment variables from .env file
const { onDocumentCreated } = require('firebase-functions/v2/firestore');
const { initializeApp } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const nodemailer = require('nodemailer');
const { setGlobalOptions } = require('firebase-functions/v2');
const { defineString } = require('firebase-functions/params');

// Define environment variables
const gmailEmail = defineString('GMAIL_EMAIL');
const ownerEmail = defineString('OWNER_EMAIL');
const gmailPassword = defineString('GMAIL_PASSWORD');

// Set the region
setGlobalOptions({ region: 'asia-southeast1' });

initializeApp();

// Use environment variables in transporter configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail.value(),
    pass: gmailPassword.value()
  }
});

// Updated syntax for Firebase Functions v2
exports.sendOrderNotification = onDocumentCreated('orders/{orderId}', async (event) => {
  const orderData = event.data.data();
  const orderId = event.params.orderId;

  console.log('New order received:', orderId);

  // Owner Email notification
  const ownerMailOptions = {
    from: gmailEmail.value(), // Use environment variable
    to: ownerEmail.value(),
    subject: `New Order Received - ${orderData.orderId}`,
    html: `
      <h2>New Order Details</h2>
      <p><strong>Order ID:</strong> ${orderData.orderId}</p>
      <p><strong>Customer Name:</strong> ${orderData.guestInfo.name}</p>
      <p><strong>Customer Email:</strong> ${orderData.guestInfo.email}</p>
      <p><strong>Customer Phone:</strong> ${orderData.guestInfo.phone}</p>
      <p><strong>Delivery Address:</strong> ${orderData.guestInfo.address}</p>
      
      <h3>Order Items:</h3>
      <ul>
        ${orderData.items.map(item => `
          <li>${item.title} - Quantity: ${item.quantity} - RM${item.price}</li>
        `).join('')}
      </ul>
      
      <p><strong>Total Amount:</strong> RM${orderData.totalAmount}</p>
      <p><strong>Order Status:</strong> ${orderData.status}</p>
      <p><strong>Payment Status:</strong> ${orderData.paymentStatus}</p>
    `
  };

  // Customer email notification
  const customerMailOptions = {
    from: gmailEmail.value(),
    to: orderData.guestInfo.email,
    subject: `Order Confirmation - ${orderData.orderId}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Thank you for your order!</h2>
        <p>Dear ${orderData.guestInfo.name},</p>
        <p>We have received your order and it is being processed. Here are your order details:</p>
        
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <p><strong>Order ID:</strong> ${orderData.orderId}</p>
          <p><strong>Order Date:</strong> ${new Date().toLocaleDateString()}</p>
          
          <h3 style="color: #444;">Order Summary:</h3>
          <ul style="list-style: none; padding: 0;">
            ${orderData.items
              .map(
                (item) => `
              <li style="margin-bottom: 10px;">
                <span style="font-weight: bold;">${item.title}</span><br>
                Quantity: ${item.quantity}<br>
                Price: RM${item.price}
              </li>
            `
              )
              .join("")}
          </ul>
          
          <p style="font-size: 18px; font-weight: bold; margin-top: 15px;">
            Total Amount: RM${orderData.totalAmount}
          </p>
        </div>
        
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
          <h3 style="color: #444;">Delivery Information:</h3>
          <p><strong>Delivery Address:</strong><br>${
            orderData.guestInfo.address
          }</p>
        </div>
        
        <div style="background-color: #f3f3f3; padding: 15px; border-radius: 5px; margin: 20px 0;">

          <div style="padding: 1rem; border-radius: 0.5rem;">
          <p style="font-weight: bold; margin-bottom: 0.5rem;">Payment Instructions:</p>
          <div style="margin-top: 0.5rem; margin-bottom: 0.5rem;">
          <p>Please transfer the total amount to:</p>
          <div style="font-family: monospace; padding: 0.75rem; border-radius: 0.25rem; border: 1px solid #e5e7eb;">
            <p>Bank: Standard Chartered</p>
            <p>Account Number: 312194160295</p>
            <p>Account Name: Bui Khanh Linh</p>
          </div>
        </div>
      </div>

          <div style="font-size: 0.875rem; color: #4b5563; margin-top: 1.5rem; font-weight: 600;">
            <p>Please send your payment proof to:</p>
            <p>WhatsApp: +60 11-6980-9879</p>
            <p>Email: khanhlinh14498@gmail.com</p>
          </div>

          <p>Please notify us so that we may ship out your order as soon as possible!</p>
          <p>Thank you for shopping with Hơ Lơ Beauty. ❤️</p>
        </div>
        
        <div style="margin-top: 30px; color: #666; font-size: 14px;">
          <p>Best regards,<br>Hơ Lơ Beauty Team</p>
        </div>
      </div>
    `,
  };

  // <p style="margin-top: 20px;">
        //   We will notify you once your order has been shipped. If you have any questions, 
        //   please don't hesitate to contact us.
        // </p>

  try {
    console.log('Attempting to send emails...');
    
    // Send both emails concurrently
    await Promise.all([
      transporter.sendMail(ownerMailOptions),
      transporter.sendMail(customerMailOptions)
    ]);
    
    console.log('Order notification emails sent successfully');

    // Update the order with notification status
    const db = getFirestore();
    await db.collection('orders').doc(orderId).update({
      notificationSent: true,
      notificationSentAt: new Date(),
      customerNotificationSent: true
    });

  } catch (error) {
    console.error('Error sending notifications:', error);
    throw new Error('Failed to send notification emails');
  }
});