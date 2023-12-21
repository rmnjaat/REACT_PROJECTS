import React from "react";

const MenuCard = (props) => {
  return (
    <div>
      <section className="main-card--cointainer">
        {props.menudata.map((curElem) => {
          return (
            <div>
              <div className="card-container " key={curElem.id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{curElem.id}</span>
                    {/* <span className="card-author subtile" style={{color:"red"}}> Brackfast </span> */}
                    <span className="card-author subtle"> {curElem.name} </span>

                    <h2 className="card-title"> {curElem.name} </h2>

                    <span className="card-description Subtle">
                    {curElem.description}
                    </span>
                    

                    <div className="card-read">Read</div>
                  </div>
                  <img src={curElem.image} alt="images" className="card-media" />
                  <span className="card-tag subtle">Order Now</span>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default MenuCard;
