import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://www.amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_2x._CB432458382_.jpg"
        alt=""
      />
      <div className="home_row">
        <Product
          id="dfdf"
          title="oldman anf the sea"
          price={15}
          rating={3}
          image={"https://www.amazon.com/images/I/51BOP47JRoL._AC_SL520_.jpg"}
        />
      </div>
    </div>
  );
}

export default Home;
