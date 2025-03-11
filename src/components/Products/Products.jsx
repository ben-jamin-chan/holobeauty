import Heading from "../Shared/Heading";
import ProductCard from "./ProductCard";
import { productlist } from "./productlist";

const Products = () => {
  return (
    <div className="min-h-[550px]">
      <div className="container">
        {/* Header section */}
        <Heading title="Our Products" subtitle={"Explore Our Products"} />
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
          {productlist.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
