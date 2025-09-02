import Container from "@/app/components/Container";
import ProductDetails from "./ProductDetails";
import ListRating from "./ListRating";
import { products } from "@/utils/products";

interface IParams {
  productId?: string;
}

const Product = async ({ params }: { params: IParams }) => {
  console.log('params', params);

  // Ensure `params.productId` is accessed after resolving
  const productId = params?.productId;

  // Find the product
  const product = products.find((item) => item.id === productId);

  if (!product) {
    return (
      <div className="p-8">
        <Container>
          <h1>Product not found</h1>
        </Container>
      </div>
    );
  }

  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product} />
        <div className="flex flex-col mt-20 gap-4">
          <div>Add Rating</div>
          <ListRating product={product} />
        </div>
      </Container>
    </div>
  );
};

export default Product;
