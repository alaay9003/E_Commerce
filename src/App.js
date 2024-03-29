import HomePage from "./Pages/Home/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarLogin from "./Components/Utility/NavbarLogin";
import Footer from "./Components/Utility/Footer";
import LoginPage from "./Pages/Auth/LoginPage";
import RigesterPage from "./Pages/Auth/RigesterPage";
import AllCategoryPage from "./Pages/Category/AllCategoryPage";
import AllBrandPage from "./Pages/Brand/AllBrandPage";
import ShopProducsPage from "./Pages/Products/ShopProducsPage";
import ProductDetalisPage from "./Pages/Products/ProductDetalisPage";
import CartPage from "./Pages/Cart/CartPage";
import ChoosePayMethoudPage from "./Pages/Checkout/ChoosePayMethoudPage";
import AdminAllProductsPage from "./Pages/Admin/AdminAllProductsPage";
import AdminAllOrdersPage from "./Pages/Admin/AdminAllOrdersPage";
import AdminOrderDetalisPage from "./Pages/Admin/AdminOrderDetalisPage";
import AdminAddBrandPage from "./Pages/Admin/AdminAddBrandPage";
import AdminAddCategoryPage from "./Pages/Admin/AdminAddCategoryPage";
import AdminAddSubCategoryPage from "./Pages/Admin/AdminAddSubCategoryPage";
import AdminAddProductsPage from "./Pages/Admin/AdminAddProductsPage";
import UserAllOrdersPage from "./Pages/User/UserAllOrdersPage";
import UserFavoriteProductsPage from "./Pages/User/UserFavoriteProductsPage";
import UserAllAddresPage from "./Pages/User/UserAllAddresPage";
import UserAddAddressPage from "./Pages/User/UserAddAddressPage";
import UserEditAddressPage from "./Pages/User/UserEditAddressPage";
import UserProfilePage from "./Pages/User/UserProfilePage";
import AdminEditProductsPage from "./Pages/Admin/AdminEditProductsPage";
import VerifyPasswordPage from "./Pages/Auth/VerifyPasswordPage";
import ForgetPasswordPage from "./Pages/Auth/ForgetPasswordPage";
import RsetPasswordPage from "./Pages/Auth/ResetPasswordPage";
import AdminDeletCategoryPage from "./Pages/Admin/AdminDeletCategoryPage";
import AdminDeletBrandPage from "./Pages/Admin/AdminDeletBrandPage";
import OneCategoryPage from "./Pages/Category/OneCategoryPage";
import OnBrandPage from "./Pages/Brand/OnBrandPage";
import UserFileUpdatePage from "./Pages/User/UserFileUpdatePage";

function App() {
  return (
    <div className="font">
      <NavbarLogin />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RigesterPage />} />
          <Route path="/allcategory" element={<AllCategoryPage />} />
          <Route path="/allbrand" element={<AllBrandPage />} />
          <Route path="/products" element={<ShopProducsPage />} />
          <Route path="/products/:id" element={<ProductDetalisPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/order/paymethoud" element={<ChoosePayMethoudPage />} />
          <Route path="/admin/allproducts" element={<AdminAllProductsPage />} />
          <Route path="/admin/allorders" element={<AdminAllOrdersPage />} />
          <Route path="/admin/orders/:id" element={<AdminOrderDetalisPage />} />
          <Route path="/admin/addbrand" element={<AdminAddBrandPage />} />
          <Route path="/admin/addcategory" element={<AdminAddCategoryPage />} />
          <Route path="/onecategory/:id" element={<OneCategoryPage />} />
          <Route path="/onebrand/:id" element={<OnBrandPage />} />
          <Route
            path="/admin/addsubcategory"
            element={<AdminAddSubCategoryPage />}
          />
          <Route path="/admin/addproduct" element={<AdminAddProductsPage />} />
          <Route path="/admin/deletbrand" element={<AdminDeletBrandPage />} />
          <Route
            path="/admin/deletcategory"
            element={<AdminDeletCategoryPage />}
          />
          <Route path="/user/allorders" element={<UserAllOrdersPage />} />
          <Route
            path="/user/favoriteproducts"
            element={<UserFavoriteProductsPage />}
          />
          <Route path="/user/addresses" element={<UserAllAddresPage />} />
          <Route path="/user/add-address" element={<UserAddAddressPage />} />
          <Route path="/user/update" element={<UserFileUpdatePage />} />
          <Route
            path="/user/edit-address/:id"
            element={<UserEditAddressPage />}
          />
          <Route path="/user/profile" element={<UserProfilePage />} />
          <Route
            path="/admin/editproduct/:id"
            element={<AdminEditProductsPage />}
          />
          <Route
            path="/user/forget-password"
            element={<ForgetPasswordPage />}
          />
          <Route path="/user/verify-code" element={<VerifyPasswordPage />} />
          <Route path="/user/rest-password" element={<RsetPasswordPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
