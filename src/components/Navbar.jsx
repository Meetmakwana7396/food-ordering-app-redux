import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { totalitems } = useSelector((state) => state.cart);

  return (
    <>
      <header class="text-gray-600 body-font ">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            to="/"
          >
            <img
              src="https://img.freepik.com/premium-vector/food-corner-logo-design_79169-4.jpg"
              alt=""
              srcset=""
              height="74px"
              width="74px"
            />
            <span class="ml-3 text-xl">Food Corner</span>
          </Link>
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a class="mr-5 hover:text-gray-900">First Link</a>
            <a class="mr-5 hover:text-gray-900">Second Link</a>
            <a class="mr-5 hover:text-gray-900">Third Link</a>
            <a class="mr-5 hover:text-gray-900">Fourth Link</a>
          </nav>
          <button
            onClick={() => navigate("/cart")}
            class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          >
            Cart
            <span className="text-red-700 mx-2">
              {totalitems !== NaN ? totalitems : 0}
            </span>
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
