import HomePage from "./Pages/Home/HomePage";
import { BrowserRouter ,Route ,Routes } from "react-router-dom";
import NavbarLogin from "./Components/Utility/NavbarLogin";
import Footer from './Components/Utility/Footer';
import LoginPage from './Pages/Auth/LoginPage';
import RigesterPage from './Pages/Auth/RigesterPage';
import AllCategoryPage from './Pages/Category/AllCategoryPage';
import AllBrandPage from './Pages/Brand/AllBrandPage';
import ShopProducsPage from './Pages/Products/ShopProducsPage';
import ProductDetalisPage from './Pages/Products/ProductDetalisPage';
import CartPage from './Pages/Cart/CartPage';
import ChoosePayMethoudPage from './Pages/Checkout/ChoosePayMethoudPage';
import AdminAllProductsPage from './Pages/Admin/AdminAllProductsPage';
import AdminAllOrdersPage from './Pages/Admin/AdminAllOrdersPage';
import AdminOrderDetalisPage from './Pages/Admin/AdminOrderDetalisPage';
import AdminAddBrandPage from './Pages/Admin/AdminAddBrandPage';
import AdminAddCategoryPage from './Pages/Admin/AdminAddCategoryPage';
import AdminAddSubCategoryPage from './Pages/Admin/AdminAddSubCategoryPage';
import AdminAddProductsPage from './Pages/Admin/AdminAddProductsPage';
import UserAllOrdersPage from './Pages/User/UserAllOrdersPage';
import UserFavoriteProductsPage from './Pages/User/UserFavoriteProductsPage';
import UserAllAddresPage from './Pages/User/UserAllAddresPage';
import UserAddAddressPage from './Pages/User/UserAddAddressPage';
import UserEditAddressPage from './Pages/User/UserEditAddressPage';
import UserProfilePage from "./Pages/User/UserProfilePage";
import AdminEditProductsPage from "./Pages/Admin/AdminEditProductsPage";


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
            <Route path="/products/:id" element={<ProductDetalisPage />}/>
            <Route path="/cart" element={<CartPage />}/>
            <Route path="/order/paymethoud" element={<ChoosePayMethoudPage />}/>
            <Route path="/admin/allproducts" element={<AdminAllProductsPage />} />
            <Route path="/admin/allorders" element={<AdminAllOrdersPage />} />
            <Route path="/admin/orders/:id" element={<AdminOrderDetalisPage />} />
            <Route path="/admin/addbrand" element={<AdminAddBrandPage />} />
            <Route path="/admin/addcategory" element={<AdminAddCategoryPage />} />
            <Route path="/admin/addsubcategory" element={<AdminAddSubCategoryPage />} />
            <Route path="/admin/addproduct" element={<AdminAddProductsPage />} />
            <Route path="/user/allorders" element={<UserAllOrdersPage />} />
            <Route path="/user/favoriteproducts" element={<UserFavoriteProductsPage />} />
            <Route path="/user/addresses" element={<UserAllAddresPage />} />
            <Route path="/user/add-address" element={<UserAddAddressPage />} />
            <Route path="/user/edit-address" element={<UserEditAddressPage />} />  
            <Route path="/user/profile" element={<UserProfilePage />} /> 
            <Route path="/admin/editproduct/:id" element={<AdminEditProductsPage />} /> 
        </Routes>
      </BrowserRouter>
      <Footer />  
    </div>
  );
}

export default App;
