import Container from "@/app/components/Container";
import ProductDetails from "./ProductDetails";
import ListRating from "./ListRating";
import { products } from "@/utils/products";

// Define type according to Next.js App Router convention
interface ProductPageProps {
  params: {
    productId: string;
  };
}

// ✅ Static params generation for SSG
export async function generateStaticParams() {
  return products.map((product) => ({
    productId: product.id,
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { productId } = params;

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
}
