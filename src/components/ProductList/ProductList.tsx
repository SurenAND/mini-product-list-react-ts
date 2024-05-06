import Product from "../Product/Product";
import { useFetch } from "./hooks/useFetch";

const ProductList = () => {
  const { data: products } = useFetch("http://localhost:5001/cars");

  return (
    <div>
      <h1 className="font-poppins-b text-2xl mx-1 my-2">Product List</h1>
      <div className="px-5 flex justify-center flex-wrap gap-4">
        {products?.map((product, index) => {
          return (
            <Product
              key={index}
              ProductTitle={product.title}
              ProductImage={product.image}
              ProductPrice={product.price}
              ProductDescription={product.description}
              ProductAvailable={product.isAvailable}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
