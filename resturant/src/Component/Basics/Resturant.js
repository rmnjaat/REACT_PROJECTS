import React, { useState } from "react";
import "./Style.css";
import Navbar from './NAVBAR';
import Menu from "./menuApi";
import MenuCard from "./MenuCard";

//array unique   ... for ony cat not obj in array

/*eslint no-unused-expressions: ["error", { "allowTernary": true }]*/
const categoryList = Menu.map((curEle) => curEle.category);
const uniqueList = [...new Set(categoryList),"All",];

//filtring

const Resturant = (initialData) => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList,setMenuList]=useState(uniqueList);

  const filterItem=(category)=>{

    if(category==="All"){
      setMenuData(Menu);
      return
    }

    const updatedList = Menu.filter((curEle)=>{
        return curEle.category===category;
    });

    setMenuData(updatedList);
  };





  return (
    <div>
        <Navbar filterItem={filterItem} menuList={menuList} ></Navbar>

      <MenuCard menudata={menuData}></MenuCard>
    </div>
  );
};

export default Resturant;
