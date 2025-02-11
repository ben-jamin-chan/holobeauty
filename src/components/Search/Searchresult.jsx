import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../Products/Products';
import ProductCard from '../Products/ProductCard';
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
} from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon } from '@heroicons/react/20/solid';

// Reuse the same filters and sort options from Shop.jsx
const sortOptions = [
  { name: 'Price: Low to High', href: '#', current: true },
  { name: 'Price: High to Low', href: '#', current: false },
];

const filters = [
  {
    id: 'brands',
    name: 'Brands',
    options: [
      { value: 'Agustinus Bader', label: 'Agustinus Bader' },
      { value: 'La Mer', label: 'La Mer' },
      // ... rest of your brands
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
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const SearchResult = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const [results, setResults] = useState([]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    if (query) {
      const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase()) ||
        product.brand.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredProducts);
    }
  }, [query]);

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

  // Apply filters to search results
  const filteredResults = results.filter((product) => {
    const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    return brandMatch && categoryMatch;
  });

  return (
    <div>
      <div>
        {/* Mobile filter dialog */}
        <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40 lg:hidden">
          {/* Copy the entire mobile filter dialog from Shop.jsx */}
          {/* ... */}
        </Dialog>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Search Results for: {query}
            </h1>
            
            {/* Copy the sort and filter buttons from Shop.jsx */}
            <div className="flex items-center">
              {/* ... */}
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">Products</h2>
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
              {filters.map((section) => (
                  <Disclosure key={section.id} as="div" className="border-b border-gray-200 py-6">
                    <h3 className="-my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between  py-3 text-sm text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">{section.name}</span>
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
                            <label htmlFor={`${section.id}-${option.value}`} className="text-sm text-gray-600">
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
              {filteredResults.length > 0 ? (
                    filteredResults.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))
                ) : (
                    <p className="text-center text-gray-500">No products found.</p>
                )
                }
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default SearchResult;