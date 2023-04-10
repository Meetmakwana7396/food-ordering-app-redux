import React, { useState } from "react";
import Modal from "./Modal";
import { addToCart } from "../store/slices/ItemSlice";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";

const Items = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const foodItems = [
    {
      id: 1,
      name: "Starter Salad",
      type: "Pure Veg",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXr9zPdKfY9MlfpYFgj1Rz92T7MJe1rkchxA&usqp=CAU",
      price: 50,
      description:
        "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      qunatity: 1,
    },
    {
      id: 2,
      name: "Dosa",
      type: "Pure Veg",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJRwV2b2oLXbWmDhzkD1C4FuXlbSurYIqzcQ&usqp=CAU",
      price: 70,
      description:
        "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      qunatity: 1,
    },
    {
      id: 3,
      name: "Gujarati Thali",
      type: "Pure Veg",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUeB259OHTfcEwTBxK86aD5lUQ731WdHTOIA&usqp=CAU",
      price: 60,
      description:
        "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      qunatity: 1,
    },
    {
      id: 4,
      name: "Milkshake",
      type: "Pure Veg",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN602Cpo-TLPnYv79H3CIjObWlRmoATioSjQ&usqp=CAU",
      price: 100,
      description:
        "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      qunatity: 1,
    },
  ];

  const handleCart = (payload) => {
    dispatch(addToCart(payload));
  };

  const { items, totalitems } = useSelector((state) => state.cart);
  console.log(items, totalitems);
  return (
    <>
      <Navbar />
      <Modal show={show} onClose={() => setShow(false)} />
      <section className="text-gray-600 body-font bg-orange-200 rounded-lg">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-col text-center w-full">
            <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">
              Menu
            </h1>
          </div>
          <div className="flex flex-wrap m-4">
            {foodItems.map((item) => (
              <div className="p-4 lg:w-1/2" key={item.id}>
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                    src={item.img}
                  />
                  <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-medium text-lg text-gray-900">
                      {item.name}{" "}
                      <span className="price-txt">{item.price} Rs.</span>
                    </h2>
                    <h3 className="text-gray-500 mb-3">Pure Veg</h3>
                    <p className="mb-4">{item.description}</p>
                    <button
                      className="rounded-full bg-red-500 text-white px-4 py-2"
                      onClick={() => handleCart(item)}
                    >
                      Add to Cart
                    </button>{" "}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Items;
