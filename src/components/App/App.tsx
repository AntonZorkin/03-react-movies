import SearchBar from "../SearchBar/SearchBar";
import css from "./App.module.css";

// import { useState } from "react";




const App = () => {
  const handleSubmit = (query: string) => {
    console.log(query);
    
  }
  return (
    <div className={css.app}>
      <SearchBar onSubmit={handleSubmit}/>
      
    </div>
  );
};
export default App;
