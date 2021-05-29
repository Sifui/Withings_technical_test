import React, { useState } from "react";
import "../../css/App.css";
import { AxiosRequest } from "../utils/Index";

function CatBreedList() {
  const [catBreed, setcatBreed] = useState(AxiosRequest.getCatBreed());
  for (let cat of catBreed) {
    console.log(cat);
  }
  return (
    <div id="CatBreedList" className="CatBreedList">
      truc
    </div>
  );
}
export default CatBreedList;
