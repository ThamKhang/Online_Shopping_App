import React, { useEffect } from "react";
import { ProductCard } from "../components/ProductCard";
import { onGetProducts } from "../store/actions";
import { useAppDispatch, useAppSelector } from "../store/hooks";

const Home = () => {
  const { categories, products } = useAppSelector(
    (state) => state.shoppingReducer
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(onGetProducts());
  }, []);

  const listOfcategories = () => {
    return (
      <div className="row" aria-label="Basic example">
        {categories.map((item, idx) => {
          return (
            <button
              key={idx}
              type="button"
              onClick={() => {}}
              className="btn btn-lg m-2"
              style={{
                backgroundColor: "#4E8A37",
                borderRadius: 30,
                color: "#FFF",
              }}
            >
              {item.toUpperCase()}
            </button>
          );
        })}
      </div>
    );
  };

  const listOfProducts = () => {
    return products.map((item, index) => {
      return <ProductCard key={index} item={item} />;
    });
  };

  return (
    <div className="container-fluid p-0">
      <img src="bg.jpg" className="card-img" alt="..."></img>
      <div
        className="container-flud mb-4"
        style={{
          height: 80,
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#61AB4F",
        }}
      >
        <div className="row justify-content-center">
          {categories && listOfcategories()}
        </div>
      </div>

      <div className="d-flex flex-row flex-nowrap overflow-auto">
        {products && listOfProducts()}
      </div>
    </div>
  );
};

export { Home };
