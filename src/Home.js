import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="Home">
      <img
        className="Home-bannerImage"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
        alt="Amazon Prime Banner"
      />

      <div className="Home-row">
        <Product
          id={1}
          title={"Something"}
          price={20.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
        />

        <Product
          id={2}
          title={"Something"}
          price={20.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
        />
      </div>
      <div className="Home-row">
        <Product
          id={3}
          title={"Something"}
          price={20.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
        />
        <Product
          id={4}
          title={"Something"}
          price={20.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
        />
        <Product
          id={5}
          title={"Something"}
          price={20.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
