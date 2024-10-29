import { createContext, useState } from "react";
import Search from "./component/Search";
import FoodList from "./component/FoodList";
import Nav from "./component/Nav";

import "./App.css";
import Container from "./component/Container";
import InnerContainer from "./component/InnerContainer";
import FoodDetail from "./component/FoodDetail";
import UseReducerObj from "./pages/UseReducerObj";
import BankAccEx from "./pages/BankAccEx";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";
import Navs from "./Navs";
import Profile from "./pages/Profile";
import Seetings from "./pages/Seetings";
import Products from "./pages/Products";
import CheckoutContext from "./pages/CheckoutContext";
import Login from "./pages/Login";
import { UserProvider } from "./context/UserContext";
import Logout from "./pages/Logout";
import { UserProvider_Reducer } from "./pages/UserContextReducer";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("658615");

  return (
    // <div>
    //   <Nav />
    //   <Search foodData={foodData} setFoodData={setFoodData} />
    //   <Container>
    //     <InnerContainer>
    //       <FoodList setFoodId={setFoodId} foodData={foodData} />{" "}
    //     </InnerContainer>
    //     <InnerContainer>
    //       <FoodDetail foodId={foodId}></FoodDetail>
    //     </InnerContainer>
    //   </Container>
    //   <BankAccEx />
    //   </div>

    // <BrowserRouter>
    //   <Navs />
    //   <Routes>
    //     <Route path="*" element={<PageNotFound />} />
    //     <Route path="/" element={<Homepage />} />
    //     <Route path="/DashBoard" element={<Dashboard />}>
    //       <Route path="Profile" element={<Profile />} />
    //       <Route path="Seetings" element={<Seetings />} />
    //     </Route>
    //     <Route path="/Products/:id" element={<Products />} />
    //   </Routes>
    // </BrowserRouter>

    <>
      {/* <input
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      /> */}
      {/* value context provider  */}
      <UserProvider_Reducer>
        <CheckoutContext />
        <Logout />
        <Login />
      </UserProvider_Reducer>
    </>
  );
}

export default App;
