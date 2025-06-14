import ProductCard from "../components/Products/ProductCard"
import { productlist } from "../components/Products/productlist"
import { useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon } from '@heroicons/react/20/solid'


const sortOptions = [
  // { name: 'Newest', href: '#', current: true },
  { name: 'Price: Low to High', href: '#', current: true },
  { name: 'Price: High to Low', href: '#', current: false },
]

const filters = [
  {
    id: 'brands',
    name: 'Brands',
    options: [
      { value: 'Agustinus Bader', label: 'Agustinus Bader' },
      { value: 'La Mer', label: 'La Mer' },
      { value: 'Estee Lauder', label: 'Estee Lauder' },
      { value: 'L\'occitane', label: `L'occitane` },
      { value: 'SkinPharm', label: 'SkinPharm' },
      { value: 'FRESH', label: 'FRESH' },
      { value: 'Clinique', label: 'Clinique' },
    ],
  },
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'Skincare, skin care', label: 'Skincare' },
      { value: 'Make up, makeup', label: 'Make up' },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Shop = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortOption, setSortOption] = useState('');
  const [notification, setNotification] = useState('');

  const handleFilterChange = (filterType, value) => {
    if (filterType === 'brand') {
      setSelectedBrands((prev) =>
        prev.includes(value) ? prev.filter((b) => b !== value) : [...prev, value]
      );
    } else if (filterType === 'category') {
      setSelectedCategories((prev) =>
        prev.includes(value) ? prev.filter((c) => c !== value) : [...prev, value]
      );
    }
  };

const handleSortChange = (option) => {
  setSortOption(option)
}

const handleAddToCart = (product) => {
  // Logic to add the product to the cart goes here
  // For example, you might call a function from a context or state management library

  // Show notification
  setNotification(`${product.title} successfully added to cart!`);

  // Clear notification after 3 seconds
  setTimeout(() => {
    setNotification('');
  }, 5000);
};

  const filteredProducts = productlist.filter((product) => {
    const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    return brandMatch && categoryMatch;
  }).sort((a, b) => {
    if (sortOption === "Price: Low to High") {
      return a.price - b.price
    } else if (sortOption === "Price: High to Low") {
      return b.price - a.price
    }
  })
  
  return (
    <div>
      {notification && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-7 rounded-md shadow-lg z-50 text-xl transition duration-500 ease-in-out">
          {notification}
        </div>
      )}
      <div className="">
        <div>
          {/* MOBILE View/FILTER dialog TODO: */}
          <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40 lg:hidden">
            <DialogBackdrop
              transition
              className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
            />
            <div className="fixed inset-0 z-40 flex">
              <DialogPanel
                transition
                className="relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
              >
                <div className="flex items-center justify-between px-4">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  <button
                    type="button"
                    onClick={() => setMobileFiltersOpen(false)}
                    className="-mr-2 flex size-10 items-center justify-center rounded-md  p-2 text-gray-400"
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon aria-hidden="true" className="size-6" />
                  </button>
                </div>
                {/* Filters */}
                <form className="mt-4 border-t border-gray-200">
                  {filters.map((section) => (
                    <Disclosure key={section.id} as="div" className="border-t border-gray-200 px-4 py-6">
                      <h3 className="-mx-2 -my-3 flow-root text-red-600">
                        <DisclosureButton className="group flex w-full items-center justify-between  px-2 py-3 text-gray-400 hover:text-gray-500">
                          <span className="font-medium text-gray-900 ">{section.name}</span>
                          <span className="ml-6 flex items-center">
                            <PlusIcon aria-hidden="true" className="size-5 group-data-[open]:hidden" />
                            <MinusIcon aria-hidden="true" className="size-5 group-[&:not([data-open])]:hidden" />
                          </span>
                        </DisclosureButton>
                      </h3>
                      <DisclosurePanel className="pt-6">
                        <div className="space-y-6">
                          {section.options.map((option) => (
                            <div key={option.value} className="flex gap-3">
                              <div className="flex h-5 shrink-0 items-center">
                                <div className="group grid size-4 grid-cols-1">
                                <input
                                    type="checkbox"
                                    id={`${section.id}-${option.value}`}
                                    value={option.value}
                                    checked={section.id === 'brands' 
                                      ? selectedBrands.includes(option.value)
                                      : selectedCategories.includes(option.value)}
                                    onChange={() => handleFilterChange(section.id === 'brands' ? 'brand' : 'category', option.value)}
                                    className="col-start-1 row-start-1 appearance-none rounded border border-gray-300  checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                  />
                                <svg
                                  fill="none"
                                  viewBox="0 0 14 14"
                                  className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                >
                                  <path
                                    d="M3 8L6 11L11 3.5"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-[:checked]:opacity-100"
                                  />
                                  <path
                                    d="M3 7H11"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-[:indeterminate]:opacity-100"
                                  />
                                </svg>
                              </div>
                            </div>
                            <label
                              htmlFor={option.value}
                              className="min-w-0 flex-1 text-gray-500"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </form>
            </DialogPanel>
          </div>
        </Dialog>

        {/* TODO: */}
        {/*  Desktop View/FILTER  */}
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">New Arrivals</h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-white">
                    Sort
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                  </MenuButton>
                </div>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                  <div className="py-1">
                  {/* SORT OPTION FIXME: */} 
                    {sortOptions.map((option) => (
                      <MenuItem key={option.name}>
                        <button
                          value={option.name}
                          onClick={() => handleSortChange(option.name)}
                          className={classNames(
                            option.name === sortOption ? 'font-medium text-gray-900' : 'text-gray-500',
                            'block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900 data-[focus]:bg-gray-100 data-[focus]:outline-none'
                          )}
                        >
                          {option.name}
                        </button>
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              </Menu>

              {/* // FILTER BUTTON FOR MOBILE */}
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                >
                <span className="sr-only">Filters</span>
                <FunnelIcon aria-hidden="true" className="size-5" />
              </button>
                </div>
            </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              <form className="hidden lg:block">
                {filters.map((section) => (
                  <Disclosure key={section.id} as="div" className="border-b border-gray-200 py-6">
                    <h3 className="-my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between  py-3 text-sm text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900 dark:text-white">{section.name}</span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon aria-hidden="true" className="size-5 group-data-[open]:hidden" />
                          <MinusIcon aria-hidden="true" className="size-5 group-[&:not([data-open])]:hidden" />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-4">
                        {section.options.map((option) => (
                          <div key={option.value} className="flex gap-3">
                            <div className="flex h-5 shrink-0 items-center">
                              <div className="group grid size-4 grid-cols-1">
                              <input
                                  type="checkbox"
                                  id={`${section.id}-${option.value}`}
                                  value={option.value}
                                  checked={section.id === 'brands' 
                                    ? selectedBrands.includes(option.value)
                                    : selectedCategories.includes(option.value)}
                                  onChange={() => handleFilterChange(section.id === 'brands' ? 'brand' : 'category', option.value)}
                                  className="col-start-1 row-start-1 appearance-none rounded border border-gray-300  checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                />
                                <svg
                                  fill="none"
                                  viewBox="0 0 14 14"
                                  className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                >
                                  <path
                                    d="M3 8L6 11L11 3.5"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-[:checked]:opacity-100"
                                  />
                                  <path
                                    d="M3 7H11"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-[:indeterminate]:opacity-100"
                                  />
                                </svg>
                              </div>
                            </div>
                            <label htmlFor={`${section.id}-${option.value}`} className="text-sm text-gray-600 dark:text-gray-100">
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} onAddToCart={() => handleAddToCart(product)} />
                  ))
                ) : (
                  <p className="text-center text-gray-500">No products found.</p>
                )}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
    </div>
  )
}

export default Shop



