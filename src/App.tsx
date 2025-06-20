import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts";
import HomePage from "./pages/Home";
import About from "./pages/About";
import ContactPage from "./pages/ContactPage";
import ShopPage from "./pages/Shop";
import ProductPage from "./pages/Product";
import AdminLayout from "./layouts/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageBrands from "./pages/admin/ManageBrands/ManageBrands";
import ManageCategories from "./pages/admin/ManageCategories/ManageCategories";
import Orders from "./pages/admin/Orders";
import UserLayout from "./layouts/UserLayout";
import UserHomePage from "./pages/user";
import OrdersHistory from "./pages/user/Orders";
import Addresses from "./pages/user/Addresses";
import { Settings } from "lucide-react";
import Wishlist from "./pages/user/Wishlist";
import TrackOrder from "./pages/user/TrackOrders";
import LoginPage from "./pages/auth/Login";
import RegisterPage from "./pages/auth/Register";
import { Toaster } from "@/components/ui/toaster";
import { AppRoutes } from "./enums";
import CartDrawer from "./components/Drawer/CartDrawer";
import ShoppingCart from "./pages/user/ShoppingCart";
import Checkout from "./pages/Checkout";
import ManageProducts from "./pages/admin/ManageProducts/ManageProducts";
import { useAppSelector } from "./app/hooks";
import type { RootState } from "./app/store";
import ProtectedRoute from "./components/Auth/ProtectedRoutes";
import ManageSubCategories from "./pages/admin/ManageSubCategories/ManageSubCategories";
import ManageCoupons from "./pages/admin/ManageCoupons/ManageCoupons";

const App = () => {
  const { isAuthenticated, role } = useAppSelector(
    (state: RootState) => state.auth
  );
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* Public Routes */}
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path={AppRoutes.ABOUT} element={<About />} />
          <Route path={AppRoutes.CONTACT} element={<ContactPage />} />
          <Route path={AppRoutes.PRODUCTS} element={<ShopPage />} />
          <Route path={AppRoutes.PRODUCT} element={<ProductPage />} />
          <Route
            path={AppRoutes.LOGIN}
            element={
              <ProtectedRoute
                isAuthenticated={!isAuthenticated}
                redirectPath={AppRoutes.HOME}
              >
                <LoginPage />
              </ProtectedRoute>
            }
          />
          <Route
            path={AppRoutes.REGISTER}
            element={
              <ProtectedRoute
                isAuthenticated={!isAuthenticated}
                redirectPath={AppRoutes.HOME}
              >
                <RegisterPage />
              </ProtectedRoute>
            }
          />

          <Route
            path={AppRoutes.CART}
            element={
              <ProtectedRoute
                redirectPath="/"
                isAuthenticated={isAuthenticated}
              >
                <ShoppingCart />
              </ProtectedRoute>
            }
          />
          <Route
            path={AppRoutes.CHECKOUT}
            element={
              <ProtectedRoute
                redirectPath="/"
                isAuthenticated={isAuthenticated}
              >
                <Checkout />
              </ProtectedRoute>
            }
          />
        </Route>

        {/* Admin Layout */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              userRole={role}
              allowedRoles={["admin"]}
              redirectPath="/"
            >
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="products" element={<ManageProducts />} />
          <Route path="brands" element={<ManageBrands />} />
          <Route path="subcategories" element={<ManageSubCategories />} />
          <Route path="categories" element={<ManageCategories />} />
          <Route path="coupons" element={<ManageCoupons />} />
          <Route path="orders" element={<Orders />} />
        </Route>

        {/* User Layout */}
        <Route
          path="/user"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              userRole={role}
              allowedRoles={["user"]}
              redirectPath="/"
            >
              <UserLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<UserHomePage />} />
          <Route path="orders" element={<OrdersHistory />} />
          <Route path="address" element={<Addresses />} />
          <Route path="wishlist" element={<Wishlist padding="0" />} />
          <Route path="track-order" element={<TrackOrder />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </>
    )
  );

  return (
    <>
      <CartDrawer />
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
};

export default App;
