import { createContext, useState } from "react";
import Search from "./component/Search";
import FoodList from "./component/FoodList";
import Nav from "./component/Nav";

import "./App.css";
import Container from "./component/Container";
import InnerContainer from "./component/InnerContainer";
import FoodDetail from "./component/FoodDetail";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("658615");

  return (
    <div>
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList setFoodId={setFoodId} foodData={foodData} />{" "}
        </InnerContainer>
        <InnerContainer>
          <FoodDetail foodId={foodId}></FoodDetail>
        </InnerContainer>
      </Container>
    </div>

    // <BrowserRouter>
    //   <Navs />
    //   <Routes>
    //     <Route path="*" element={<PageNotFound />} />
    //     <Route path="/" element={<Homepage />} />
    //     </Route>
    //     <Route path="/Products/:id" element={<Products />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
