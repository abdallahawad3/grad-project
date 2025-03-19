import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "../layouts";
import HomePage from "../pages/Home";
import AboutPage from "../pages/About";
import ContactPage from "../pages/Contact";
import ShopPage from "../pages/Shop";
import UserLayout from "../layouts/UserLayout";
import ProductPage from "../pages/Product";
import UserHomePage from "../pages/user";
import OrdersHistory from "../pages/user/Orders";
import Addresses from "../pages/user/Addresses";
import ShoppingCart from "../pages/user/ShoppingCart";
import Wishlist from "../pages/user/Wishlist";
import TrackOrder from "../pages/user/TrackOrders";
import Settings from "../pages/user/Settings";
import AdminLayout from "../layouts/AdminLayout";
import AddProduct from "../pages/admin/AddProduct";
import AddBrand from "../pages/admin/AddBrand";
import AddCategory from "../pages/admin/AddCategory";
import AddSubCategory from "../pages/admin/AddSubCategory";
import Coupon from "../pages/admin/Coupon";
import Orders from "../pages/admin/Orders";
import AdminDashboard from "../pages/admin/AdminDashboard";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Public Routes */}
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="product/:id" element={<ProductPage />} />
      </Route>

      {/* Admin Layout */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="add-product" element={<AddProduct />} />
        <Route path="add-brand" element={<AddBrand />} />
        <Route path="add-category" element={<AddCategory />} />
        <Route path="add-subcategory" element={<AddSubCategory />} />
        <Route path="add-coupon" element={<Coupon />} />
        <Route path="all-orders" element={<Orders />} />
      </Route>

      {/* User Layout */}
      <Route path="/user" element={<UserLayout />}>
        <Route index element={<UserHomePage />} />
        <Route path="orders" element={<OrdersHistory />} />
        <Route path="address" element={<Addresses />} />
        <Route path="cart" element={<ShoppingCart />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="track-order" element={<TrackOrder />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </>
  )
);
