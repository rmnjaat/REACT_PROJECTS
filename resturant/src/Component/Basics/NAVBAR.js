import React from "react";

import Menu from "./menuApi"

const navbar = (props) => {

  return (





    <div>
      <nav className="navbar">
        <div className="btn-group">
          {
            props.menuList.map((curEle) => {   
              return (
                
                  <button className="btn-group__item" onClick={() => props.filterItem(curEle)}> {curEle} </button>
                
              )
            }


          )
          }
        </div>
      </nav >
    </div >

  )
}

export default navbar;