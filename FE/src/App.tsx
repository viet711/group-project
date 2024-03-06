import { Routes, Route } from "react-router-dom";
import { AdminLayout, BaseLayout, Cart, CartAdmin, CategoryAdd, CategoryEdit, CategoryList, ColorAdd, ColorEdit, ColorList, Customers, DashBoardPage, ProductAdd, ProductEdit, SizeAdd, SizeEdit, SizeList } from "./components";
import { HomePages, NotFound, Order, Signin, Signup, Detail_Product, Account, Address, Wishlist, OrderHistory, SigninAdmin, ListProduct, Contact, About, Blog } from "./pages";
import ListMenuAccount from './pages/account/ListMenuAccount';
import Shop_Products from "./pages/User/Shop-Products/Shop_Products";
import ProductsSearch from "./pages/User/Products_Search/ProductsSearch";
import Addresses_Edit from "./pages/account/page/From/Address_Edit";
import Add_Addressses from "./pages/account/page/From/Add_Addressses";
import ListOrder from "./components/Admin/order/ListOrder";
function App() {
  return (
    <div className="App">
      <Routes>
        {/* client */}
        <Route path="*" element={<NotFound />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />

        <Route path="/" element={<BaseLayout />}>
          <Route index element={<HomePages />} />
          <Route path="order" element={<Order />} />
          <Route path="/products/:id" element={<Detail_Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/list-productsAll" element={<Shop_Products />} />
          <Route path="/result" element={<ProductsSearch />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />

          <Route path="/account" element={<ListMenuAccount />}>
            <Route index element={<Account />} />
            <Route path="address" element={<Address />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="history" element={<OrderHistory />} />
            <Route path="edit/:id" element={<Addresses_Edit />} />
            <Route path="add" element={<Add_Addressses />} />
          </Route>

        </Route>
        {/* admin */}
        <Route path="/admin/signin" element={<SigninAdmin />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<DashBoardPage />} />
          <Route path="products/add" element={<ProductAdd />} />
          <Route path="products/:id" element={<ProductEdit />} />
          <Route path="products" element={<ListProduct />} />
          <Route path="carts" element={<CartAdmin />} />
          <Route path="orders" element={<ListOrder />} />
          <Route path="customers" element={<Customers />} />
          <Route path="products/colors/add" element={<ColorAdd />} />
          <Route path="products/colors" element={<ColorList />} />
          <Route path="products/colors/:id" element={<ColorEdit />} />
          <Route path="products/sizes/add" element={<SizeAdd />} />
          <Route path="products/sizes" element={<SizeList />} />
          <Route path="products/sizes/:id" element={<SizeEdit />} />
          <Route path="categorys" element={<CategoryList />} />
          <Route path="categorys/add" element={<CategoryAdd />} />
          <Route path="categorys/:id" element={<CategoryEdit />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
