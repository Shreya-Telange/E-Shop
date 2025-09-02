"use client";

import { CartProductType, SelectedImgType } from "@/app/product/[productId]/ProductDetails";
import Image from "next/image";

interface ProductImageProps {
    cartProduct: CartProductType;
    product: { images: SelectedImgType[] };
    handleColorSelect: (value: SelectedImgType) => void;
}

const ProductImage: React.FC<ProductImageProps> = ({
    cartProduct,
    product,
    handleColorSelect,
}) => {
    return (
        <div className="grid grid-cols-6 gap-2 h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]">
            {/* Color options in the sidebar */}
            <div className="flex flex-col items-center justify-center gap-4 cursor-pointer border h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]">
                {product.images?.map((image: SelectedImgType) => (
                    <div
                        key={image.color}
                        onClick={() => handleColorSelect(image)}
                        className={`relative w-[80%] aspect-square rounded border-teal-300 ${
                            cartProduct.selectedImg.color === image.color
                                ? "border-[1.5px]"
                                : "border-none"
                        }`}
                    >
                        <Image
                            src={image.image}
                            alt={image.color}
                            width={80} // specify a width
                            height={80} // specify a height
                            className="object-contain"
                            onError={(e) => {
                                (e.target as HTMLImageElement).src =
                                    "/fallback-image.png"; // Use a fallback image path
                            }}
                        />
                    </div>
                ))}
            </div>

            {/* Main product image display */}
            <div className="col-span-5 flex items-center justify-center">
                <div className="relative w-full h-full">
                    <Image
                        src={cartProduct.selectedImg.image}
                        alt={cartProduct.selectedImg.color}
                        fill
                        className="object-contain"
                        onError={(e) => {
                            (e.target as HTMLImageElement).src = "/fallback-image.png"; // Use a fallback image
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductImage;
