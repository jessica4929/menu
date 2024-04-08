import Title from "./Title";
import data from "./data.js";
import Menu from "./Menu.jsx";
import { useState } from "react";
import Categories from "./Categories.jsx";

// const tempCategories = data.map((item) => item.category);
// const tempSet = new Set(tempCategories);
// const tempItems = ["all", ...tempSet];
// console.log(tempItems);

const allCategories = ["all", ...new Set(data.map((item) => item.category))];

const App = () => {
  const [menu, setMenu] = useState(data);
  const [categories, setCategories] = useState(allCategories);
  const filterItems = (category) => {
    if (category === "all") {
      setMenu(data);
      return;
    }
    const newItems = data.filter((item) => item.category === category);
    setMenu(newItems);
  };
  return (
    <main>
      <section className="menu">
        <Title text="Menu" />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu menu={menu} />
      </section>
    </main>
  );
};
export default App;
