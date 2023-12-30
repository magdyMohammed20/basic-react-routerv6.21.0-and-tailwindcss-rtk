import { ShoppingBasket } from "lucide-react";

const Card = ({ product, addToCart }) => {
  const { image, title, description, price } = product;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-md relative">
      <div className="absolute top-6 right-0 bg-slate-800 bg-opacity-85 text-blue-300 py-2 px-2 rounded-l-lg font-bold">
        $ {price.toFixed(2)}
      </div>
      {/* Set a fixed height for the card */}
      <div className="h-64">
        {/* Use object-cover to maintain the aspect ratio of the image */}
        <img className="w-full h-full object-cover" src={image} />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          {title.length > 20 ? title.slice(0, 20) + "..." : title}
        </div>
        <p className="text-slate-500 font-medium text-sm">
          {description.length > 70
            ? description.slice(0, 70) + "..."
            : description}
        </p>
      </div>
      <div className="px-6 py-4 pt-0">
        <button
          className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full flex items-center gap-2"
          onClick={addToCart}>
          Add To Cart
          <ShoppingBasket />
        </button>
      </div>
    </div>
  );
};

export default Card;
