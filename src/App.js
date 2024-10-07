import { Container } from "react-bootstrap";
import "./index.css";
import NavBar from "./Component/NavBar";
import Header from "./Component/Header";
import Category from "./Component/Category";
import ItemsList from "./Component/ItemsList";
import { items } from "./data";
import { useState } from "react";
function App() {
  const [itemsData, setitemsData] = useState(items);
  const allCategory = ['الكل',...new Set(items.map((i)=> i.Category))]

  const filterbyCategory = (cat) => {
    if (cat === "الكل") {
      setitemsData(items);
    } else {
      const newArr = items.filter((item) => item.Category === cat);
      setitemsData(newArr);
    }
  }
  const filterbySearch = (word) => {
    if (word !== "") {
      const newArr = items.filter((item) => item.title === word);
      setitemsData(newArr);
    }
  }
  return (
    <div className="color-body font">
      <NavBar filterbySearch={filterbySearch}/>
      <Container>
        <Header />
        <Category filterbyCategory={filterbyCategory} allCategory={allCategory} />
        <ItemsList itemsData={itemsData} />
      </Container>
    </div>
  );
}
export default App;
