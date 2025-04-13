// import "./App.css";
// import { Navigate, Route, Routes } from "react-router";
// import NewNote from "./components/NewNote";

import { useState } from "react";
import CategoryPills from "./components/CategoryPills";
import { categories } from "./data/home";
import Pageheader from "./Layout/PageHeader";
function App() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  return (
    <>
      <div className="max-h-screen flex flex-col ">
        <Pageheader />
        <div className="flex flex-grow overflow-auto">
          <div>sidebar</div>
          <div className="overflow-x-hidden px-8 pb-4">
            <div className="sticky top-0 bg-white z-10 pb-4">
              <CategoryPills
                categories={categories}
                selectedCategory={selectedCategory}
                onSelect={setSelectedCategory}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
