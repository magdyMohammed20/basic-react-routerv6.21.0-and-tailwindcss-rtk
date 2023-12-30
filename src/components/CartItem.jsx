import { Trash } from "lucide-react";

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div className="relative flex flex-row items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src={item?.image}
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {item.title}
        </h5>
        <div className="my-3 flex gap-4">
          <p className="text-blue-500 font-semibold">
            Quantity: {item.quantity}
          </p>

          <p className="text-orange-500 font-semibold">
            Price: ${item.price.toFixed(2)}
          </p>
        </div>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">
          {item.description}
        </p>
        <div className="my-3 flex gap-4">
          <p className="text-green-500 font-bold">
            Total Price: ${(item.quantity * item.price).toFixed(2)}
          </p>
        </div>
      </div>
      <div className=" absolute top-4 right-4">
        <button
          onClick={removeFromCart}
          type="button"
          className="flex items-center gap-2 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
          <Trash />
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
