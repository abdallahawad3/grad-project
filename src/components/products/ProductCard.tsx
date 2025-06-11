import { Eye, Heart, ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import type { IProduct } from "@/interface";
import { RatingComponent } from "../ui/Rating";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "@/app/store";
import { useAppDispatch } from "@/app/hooks";
import { useEffect } from "react";
import {
  addProductToWishlist,
  getAllWishlistItems,
  removeProductFromWishlist,
} from "@/app/features/wishlist/wishlistSlice";
import toast from "react-hot-toast";

interface IProps {
  product: IProduct;
  isAuthenticated: boolean;
  count: number;
  inCart: boolean;
  onAdd: () => void;
  onRemove: () => void;
  onAddToCart: () => void;
}

const ProductCard = ({
  product,
  isAuthenticated,
  count,
  inCart,
  onAdd,
  onRemove,
  onAddToCart,
}: IProps) => {
  const { items, loading } = useSelector((state: RootState) => state.wishlist);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getAllWishlistItems());
    }
  }, [isAuthenticated, dispatch]);

  if (!product) return null;

  return (
    <div className="bg-[#FFFFFF] border-[1px] border-[#E6E6E6] rounded-[8px] overflow-hidden relative group p-5 hover:border-success-600 hover:shadow-product">
      <div>
        <div>
          <img
            src={product.imageCover}
            alt="Product Image"
            className="w-full h-[245px] object-cover"
          />
        </div>
        <div>
          <div className="flex justify-between items-center">
            <h3 className="text-gray-700 flex-1 text-body-lg-400">
              {product.title}
            </h3>
          </div>
          <div className="flex justify-between items-center mt-2">
            <p className="text-gray-900 text-body-xl-500">${product.price}</p>
            {inCart && count !== 0 && isAuthenticated ? (
              <div>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2 items-center justify-between p-2 border border-[#FCF7AE] h-[40px] rounded-full">
                    <button
                      onClick={onAdd}
                      className="bg-[#FCF7AE] size-[30px] block rounded-full"
                    >
                      +
                    </button>
                    <span>{count}</span>
                    <button
                      onClick={onRemove}
                      className="bg-[#FCF7AE] size-[30px] block rounded-full"
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <Button
                onClick={onAddToCart}
                className="w-12 h-12 border-none bg-gray-50 text-gray-900 group-hover:bg-success-400 group-hover:text-white relative focus:outline-none focus:ring-2 focus:ring-success-400 border-gray-50 rounded-full cursor-pointer"
                aria-label="Add to Wishlist"
              >
                <ShoppingCart size={20} />
              </Button>
            )}
          </div>
          <div className="flex gap-[.5px] items-center mt-2">
            <RatingComponent isReadOnly ratingVal={4} />
          </div>
        </div>
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col justify-start">
          <div className="flex flex-col gap-4">
            <Button
              disabled={loading}
              onClick={() => {
                if (isAuthenticated) {
                  if (items.some((item) => item._id === product._id)) {
                    dispatch(removeProductFromWishlist(product._id));
                    toast.success("Product removed from wishlist successfully");
                  } else {
                    dispatch(addProductToWishlist(product._id));
                    toast.success("Product added to wishlist successfully");
                  }
                } else {
                  toast.error("Please login to add items to wishlist");
                }
              }}
              className=" w-12 h-12 border-none hover:bg-white relative focus:outline-none focus:ring-2 focus:ring-success-400 bg-white border-gray-50 rounded-full"
              aria-label="Add to Wishlist"
              style={{
                backgroundColor: items.some((item) => item._id === product._id)
                  ? "#FF0000"
                  : "#FFFFFF",
              }}
            >
              {items.some((item) => item._id === product._id) ? (
                <Heart size={20} fill="#FF0000" />
              ) : (
                <Heart size={20} color="#000" />
              )}
            </Button>
            <Button
              className="w-12 h-12 border-none hover:bg-white relative focus:outline-none focus:ring-2 focus:ring-success-400 bg-white border-gray-50 rounded-full"
              aria-label="Show Details Of Product"
            >
              <Link to={`/products/${product._id}`}>
                <Eye size={20} color="#000" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
