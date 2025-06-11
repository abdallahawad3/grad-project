import {
  addProductToWishlist,
  getAllWishlistItems,
  removeProductFromWishlist,
} from "@/app/features/wishlist/wishlistSlice";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import type { RootState } from "@/app/store";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Heart } from "lucide-react";
import { Fragment, useEffect } from "react";
import toast from "react-hot-toast";
const Wishlist = () => {
  const { isAuthenticated } = useAppSelector((state: RootState) => state.auth);
  const { items, loading } = useAppSelector(
    (state: RootState) => state.wishlist
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getAllWishlistItems());
    }
  }, [isAuthenticated, dispatch]);

  if (loading) {
    return (
      <section className="container py-20">
        <div className="flex justify-center items-center h-[50vh]">
          <h2 className="text-body-lg-500">Loading...</h2>
        </div>
      </section>
    );
  }
  return (
    <section className="container py-20">
      <Table className="border rounded-md">
        <TableCaption>
          Your Wishlist Items are: <strong>{items.length}</strong>
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Stock Status</TableHead>
            <TableHead className="text-right">Remove from wishlist</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.length > 0 &&
            items.map((product) => (
              <Fragment key={product._id}>
                <TableRow key={product._id} className="py-10">
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <img
                        src={`http://127.0.0.1:8000/products/${product.imageCover}`}
                        alt="product"
                        className="size-[50px] object-cover rounded-full"
                      />
                      <div className="flex flex-col">
                        <h2 className="text-body-md-500">{product.title}</h2>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="flex items-center space-x-3">
                    {product.description.length > 20
                      ? `${product.description.slice(0, 20)}...`
                      : `${product.description}`}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <span className="text-body-md-500">
                        $
                        {product.priceAfterDiscount != null
                          ? product.priceAfterDiscount
                          : product.price}
                      </span>
                      <span className="text-body-sm-500 text-gray-500 line-through">
                        ${product.price}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="">{product.quantity}</TableCell>
                  <TableCell>
                    <Badge
                      variant={`${
                        product.quantity > 0 ? "success" : "destructive"
                      }`}
                      className="text-body-sm-400 font-[400]"
                    >
                      {product.quantity > 0 ? "In Stock" : "Out of Stock"}
                    </Badge>
                  </TableCell>
                  <TableCell className="flex items-center gap-2 justify-end">
                    <Button
                      disabled={loading}
                      onClick={() => {
                        if (isAuthenticated) {
                          if (items.some((item) => item._id === product._id)) {
                            dispatch(removeProductFromWishlist(product._id));
                            toast.success(
                              "Product removed from wishlist successfully"
                            );
                          } else {
                            dispatch(addProductToWishlist(product._id));
                            toast.success(
                              "Product added to wishlist successfully"
                            );
                          }
                        } else {
                          toast.error("Please login to add items to wishlist");
                        }
                      }}
                      className=" w-12 h-12 border-none hover:bg-white relative focus:outline-none focus:ring-2 focus:ring-success-400 bg-white border-gray-50 rounded-full"
                      aria-label="Add to Wishlist"
                      style={{
                        backgroundColor: items.some(
                          (item) => item._id === product._id
                        )
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
                  </TableCell>
                </TableRow>
              </Fragment>
            ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default Wishlist;
