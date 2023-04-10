import React from "react";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../store/slices/ItemSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const { items, total } = useSelector((state) => state.cart);
  return (
    <div>
      <Navbar />
      <div className="d-"></div>
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="-my-8 divide-y-2 divide-gray-100">
            {/* Item Block start*/}
            {items.map((item) => (
              <div class="p-2 mb-4 flex flex-wrap md:flex-nowrap border-4 rounded-md">
                <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col ">
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                    src={item.img}
                  />
                </div>
                <div class="md:flex-grow">
                  <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                    {item.name} <span>{item.price}</span>
                  </h2>
                  <p class="leading-relaxed">{item.description}</p>
                  <p class="leading-relaxed">{item.qunatity}</p>

                  <a
                    class="text-indigo-500 inline-flex items-center mt-4"
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    Delete
                  </a>
                </div>
              </div>
            ))}

            {/* Item Block End*/}
            <a href="">{total}</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
