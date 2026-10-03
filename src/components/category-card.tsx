import Image from "next/image";

interface CategoryCardProps {
  imageUri: string;
  caption: string;
  subtext?: string;
}

export default function CategoryCard({ imageUri, caption, subtext }: CategoryCardProps) {
  const isProcessOrMaterialImage =
    imageUri.includes("/processes/") || imageUri.includes("/materials/") || imageUri.includes("/industries/");

  return (
    <div className="border border-gray-200 rounded-lg relative">
      <div
        className={`flex justify-center items-center bg-gray-100 h-52 sm:h-40 overflow-hidden ${
          isProcessOrMaterialImage ? "p-0" : "py-2 px-4"
        }`}
      >
        <Image
          src={imageUri}
          alt={caption}
          width={180}
          height={180}
          className={
            isProcessOrMaterialImage
              ? "h-full w-full object-cover object-center"
              : "max-h-40 sm:max-h-36 max-w-full object-contain"
          }
        />
      </div>
      <div className="py-3 px-2">
        <p className="font-medium text-sm text-gray-900">{caption}</p>
        {subtext && <p className="text-sm text-gray-500">{subtext}</p>}
      </div>
    </div>
  );
}
