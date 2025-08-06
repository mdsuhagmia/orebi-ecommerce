import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import RootLayout from "./components/root/RootLayout"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import About from "./pages/About"
import Contacts from "./pages/Contacts"
import Journal from "./pages/Journal"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import MyAccount from "./pages/MyAccount"
import Dashboard from "./pages/Dashboard"
import Others from "./pages/Others"
import Downloads from "./pages/Donwloads"
import Addresses from "./pages/Addresses"
import AccountDetails from "./pages/AccountDetails"
import NotFound from "./pages/NotFound"
import Logout from "./pages/Logout"
import Checkout from "./pages/Checkout"
import Cart from "./pages/Cart"

let routing = createBrowserRouter(createRoutesFromElements(
 <>
  <Route element={<RootLayout/>}>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/shop" element={<Shop/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/contacts" element={<Contacts/>}></Route>
    <Route path="/journal" element={<Journal/>}></Route>
    <Route path="checkout" element={<Checkout/>}></Route>
    <Route path="cart" element={<Cart/>}></Route>
       {/* Sub-pages */}
    <Route path="/myaccount" element={<MyAccount/>}>
      <Route index element={<Dashboard />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="others" element={<Others />} />
      <Route path="downloads" element={<Downloads />} />
      <Route path="addresses" element={<Addresses />} />
      <Route path="accountdetails" element={<AccountDetails />} />
      <Route path="logout" element={<Logout/>}></Route>
    </Route>
  </Route>
       {/* RootLayout out */}
  <Route path="*" element={<NotFound/>}></Route>
  <Route path="/login" element={<Login/>}></Route>
  <Route path="/signup" element={<SignUp/>}></Route>
 </>
))

function App() {

  return (
    <>
     <RouterProvider router={routing}></RouterProvider>
    </>
  )
}

export default App
