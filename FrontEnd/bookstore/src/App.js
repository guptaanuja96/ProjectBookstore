import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import AllProduct from './components/AllProduct';
import RegSupplier from './components/RegSupplier';
import RegCustomer from './components/RegCustomer';
import CustomerLogin from './components/CustomerLogin';
import AdminLogin from './components/AdminLogin';
import SellerLogin from './components/SellerLogin';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
import MyProducts from './components/MyProducts';
import MyOrders from './components/MyOrders';
import Orders from './components/Orders';
import AdminProfile from './components/AdminProfile';
import ViewCart from './components/ViewCart';
import SellerProfile from './components/SellerProfile';
import CustomerProfile from './components/CustomerProfile';
import AllSellers from './components/AllSellers';
import AllCustomers from './components/AllCustomers';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <NavBar />
        <div className="container-fluid p-2">
        </div>
        <Routes>
          <Route element={<AllProduct />} path="/" exact />
          <Route element={<AllProduct />} path="/cat/:pcat/:subcat" />
          <Route element={<RegSupplier />} path="/regsupplier" />
          <Route element={<RegCustomer />} path="/register" />
          <Route element={<CustomerLogin />} path="/clogin" />
          <Route element={<AdminLogin />} path="/alogin" />
          <Route element={<SellerLogin />} path="/slogin" />
          <Route element={<AdminProfile />} path="/aprofile" />          
          <Route element={<SellerProfile/>} path="/sprofile" />          
          <Route element={<CustomerProfile />} path="/cprofile" />          
          <Route element={<AllCustomers/>} path="/customers" />          
          <Route element={<AllSellers/>} path="/sellers" />
          <Route element={<AddProduct/>} path="/add-product" />
          <Route element={<EditProduct/>} path="/edit/:prodid" />
          <Route element={<MyProducts/>} path="/myproducts" />
          <Route element={<MyOrders/>} path="/myorders" />
          <Route element={<Orders/>} path="/orders" />
          <Route element={<ViewCart/>} path="/cart" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
