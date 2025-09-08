import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  
  const dispatch = useDispatch();
  
  const handleClearCart = () => {
      dispatch(clearCart());

  }

  return (
    <div className="bg-[url('/img.webp')] bg-repeat min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Floating White Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
            🛒 Your Cart
          </h1>
          <button className="text-center bg-orange-300 rounded-lg text-gray-600 mb-4 hover:text-red-500 transition p-4 m-4"
          onClick={handleClearCart}
          >
            Clear Cart
          </button>

          {/* Empty State */}
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center text-gray-500 space-y-4">
              <img
                src="/empty-cart.png"
                alt="Empty Cart"
                className="w-32 h-32 mb-9 opacity-80"
              />
              <p className="text-lg">Your cart is empty.</p>
              <p className="text-sm mt-1">Add some delicious meals to get started!</p>
            </div>
          ) : (
            <>
              {/* Items */}
              <ItemList items={cartItems} showAddButton={false} />

              {/* Checkout Summary */}
              <div className="flex justify-between items-center mt-8 border-t pt-6">
                <span className="text-xl font-semibold text-gray-800">
                  Total: ₹
                  {cartItems.reduce(
                    (sum, item) =>
                      sum + (item.price ?? item.defaultPrice) / 100,
                    0
                  )}
                </span>

              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
