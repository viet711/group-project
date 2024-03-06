import React from "react";
import { APay, Drag, Dribbble, Fbook, GPay, GitHub, Igram, Twitter, Visa } from "../components/Icon/iconProject";
type Props = object;
const Footer = (props: Props) => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="text-teal-600">
              <img src="https://big-skins.com/frontend/foxic-html-demo/images/logo-footer.webp" alt="" />
            </div>

            <p className=" max-w-xs text-black text-sx mt-8">
              E-mail: Foxshop@gmail.com <br /><br />
              Hours: 10:00 - 18:00, Mon - Fri
            </p>

            <ul className="mt-8 flex gap-6">
              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Facebook</span>
                <Fbook></Fbook>
                </a>
              </li>

              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Instagram</span>
                  <Igram></Igram>
                </a>
              </li>

              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Twitter</span>
                 <Twitter></Twitter>
                </a>
              </li>

              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">GitHub</span>
                  <GitHub></GitHub>
                </a>
              </li>

              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Dribbble</span>
                   <Dribbble></Dribbble>
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
            <div>
              <p className="font-bold text-gray-900 ">Information</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    About Us
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Contact Us
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Terms & Conditions
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Returns & Exchanges
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Shipping & Delivery
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-bold text-gray-900">Account details</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    My Account
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    View Cart
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    My Wishlist
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Order Status
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Track My Order
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-bold text-gray-900 mb-3">Safe payments</p>
              <div className="flex items-center gap-6">
                <div>
                  <GPay></GPay>
                </div>
                <div>
                <Visa></Visa>
                </div>
                <div>
                  <APay></APay>
                </div>
              </div>
              <div className="relative">
                <div className="icon absolute top-[-30px] left-0 pb-10 ">
                 <Drag/>
                </div>
                <div className="border-2 border-black border-dashed pt-3 pb-3 w-64 flex items-center justify-center gap-2 mt-10 ">
                  <div className="w-1/2  top-0 right-0 h-full flex items-center justify-center">
                    <span className="text-[#17c6aa] text-xl font-extrabold">FOXIC</span>
                    <span className="text-xl font-extrabold">THEME</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
