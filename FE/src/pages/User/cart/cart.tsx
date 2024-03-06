import React from 'react';
import { BsFillTrash3Fill } from "react-icons/bs";
import { InputNumber, Pagination } from "antd";
import { Heart } from '../../../components/Icon/iconProject';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { deleteCart, getOneCart, updateCart } from "../../../store/actions/actionCart";
import Loading from "../../../components/Action/Loading/Loading";
import FormatterPrice from "../../../components/FormatterPrice/FormatterPrice";
import Message from "../../../components/Action/Message/Message";
import { Link } from "react-router-dom";
const Cart = () => {
  const [isIconHovered, setIsIconHovered] = useState(false);
  const dispatch = useDispatch();
  const carts = useSelector((state: RootState) => state.carts);
  const { cart, isLoading } = carts;
  const user = useSelector((state: RootState) => state.users.user.user);
  useEffect(() => {
    dispatch(getOneCart(user._id) as never);
  }, [dispatch, user._id])
  const getMaxQuantityForSize = (size: string, color: string) => {
    if (!cart || !cart.items) return 0;
    const itemWithSizeAndColor = cart.items.find(
      (item) => item.size[0] === size && item.color[0] === color
    );
    if (itemWithSizeAndColor && itemWithSizeAndColor.productId) {
      const colorSize = itemWithSizeAndColor.productId.colorSizes.find(
        (cs: any) => cs.color === color
      );

      if (colorSize) {
        const sizeInfo = colorSize.sizes.find((s: any) => s.size === size);
        if (sizeInfo) {
          return sizeInfo.quantity;
        }
      }
    }

    return 0;
  };
  const handleQuantityChange = (newQuantity: number, item: any) => {
    const data = {
      "_id": item._id,
      "quantity": newQuantity
    }
    console.log(data);
    dispatch(updateCart(data, user._id) as never);
    Message("success", "Update cart successfully");
  };
  const handleRefresh = () => {
    dispatch(getOneCart(user._id) as never);
  }
  const handleDelete = (item: any) => {
    dispatch(deleteCart(user._id, item._id) as never);
    Message("success", "Delete item successfully");
  }
  return (
    <div>
      {isLoading ? <Loading /> :
        <div>
          <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row">
            <div className="w-full md:w-3/4 mb-4 md:mb-0 md:mr-4">
              <div className="bg-gray-100 rounded-lg shadow-md p-6">
                <div className="flex items-center mb-6">

                  <h5 className="text-lg font-semibold">Your Cart ({cart?.totalQuantity} items)</h5>
                  <a href="apps-ecommerce-products.html" className="ml-auto text-primary underline mr-10">Continue Shopping</a>
                  <button
                    className="w-48 h-12 inline-flex  items-center justify-center  px-6 py-2 space-x-2 text-sm font-medium text-white transition bg-blue-700 border border-blue-700 rounded appearance-none cursor-pointer select-none hover:border-blue-800 hover:bg-blue-800 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:pointer-events-none disabled:opacity-75">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 animate-spin" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd"
                        d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                      />
                    </svg>
                    <span onClick={handleRefresh} className="p-2 text-xs lg:text-xl md:text-xl">Refresh...</span>
                  </button>
                </div>
                <div className="cart mb-3 p-5 bg-white">
                  {cart && cart.items.map((item: any, index) =>
                    <div>
                      <div className="flex items-center mb-6">
                        <div className="w-32 h-32 bg-light rounded p-1 mr-4">
                          <img src={item.image} alt="" className="w-full h-full object-cover" />
                          {
                            item.productId.hot_sale && item.productId.hot_sale > 0 ? <span className="text-xs absolute top-0 right-0 bg-green-400 p-1 text-white rounded-full hidden sm:block">
                              {item.productId.hot_sale}% OFF
                            </span> : null
                          }
                        </div>
                        <div className="flex-1 mb-10">
                          <h5 className="text-sm font-semibold truncate mb-2">
                            <a href="ecommerce-product-detail.html" className="text-black">{item.productId.name}</a>
                          </h5>
                          <ul className="text-sm text-gray-500">
                            <li className="inline-block mr-4 mb-2">Color: <span className="font-medium">{item.color}</span></li>
                            <li className="inline-block">Size: <span className="font-medium">{item.size}</span></li>
                          </ul>
                          <div className="flex items-center">
                            <InputNumber min={1} max={getMaxQuantityForSize(item.size[0], item.color[0])} onChange={(newQuantity) => handleQuantityChange(newQuantity, item)} defaultValue={item.quantity} className="text-xs lg:text-xl w-10 lg:w-20" />
                            <div className="flex flex-col">
                            </div>
                          </div>
                        </div>
                        <div className="items-center text-lg-end pb-10">
                          <p className="text-sm text-gray-500">Item Price:</p>
                          <h5 className="text-sm text-right">
                            <span id="ticket_price" className="font-semibold">{FormatterPrice(item.price)}</span>
                          </h5>
                        </div>
                      </div>

                      <hr className='h-1 bg-blue-gray-100 mb-5' />
                      <div className="flex justify-between">
                        <div className="flex gap-5">
                          <button onClick={() => handleDelete(item)} className={`text-start mb-4 flex p-2 bg-blue-gray-50 hover:bg-blue-gray-100 rounded-lg "hover:text-red-500" : ""}`} >
                            <BsFillTrash3Fill /> <span className='font-semibold text-sm ml-2'>Remove</span>
                          </button>
                          <button className="text-start mb-4 flex p-2 bg-blue-gray-50 hover:bg-blue-gray-100 rounded-lg">
                            <Heart></Heart><span className='font-semibold text-sm ml-2'>Add Wishlist</span>
                          </button>
                        </div>

                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Side Content */}
            <div className="w-full md:w-1/4">
              <div className="sticky-side-div">
                <div className="card bg-white rounded-lg shadow-md px-5 py-5">
                  <div className="card-header border-bottom-dashed mb-3">
                    <h5 className="card-title mb-8 font-bold">Order Summary</h5>
                  </div>
                  <div className="card-header bg-light-subtle border-bottom-dashed">
                    <div className="text-center mb-4">
                      <h6 className="mb-2 font-bold text-sm text-[#495057]">Have a <span className="fw-semibold">promo</span> code ?</h6>
                    </div>
                    <div className="hstack gap-3  mx-n3 flex mb-5">
                      <input className="form-control me-auto p-1 border border-gray-400 pl-3 rounded-md font-bold text-sm" type="text" placeholder="Enter coupon code" aria-label="Add Promo Code here..." />
                      <button type="button" className="btn btn-success w-xs bg-[#13c56b] text-white py-2 px-5 rounded-md text-sm">Apply</button>
                    </div>
                  </div>
                  <div className=" pt-2 pr-4">
                    <div className=" ">
                      <div className="">
                        <div>

                          <div className="text-[#495057] font-bold text-sm flex mt-3 mb-3 bg-blue-gray-100 p-2">
                            <div className='pr-24'>Total(USD) :</div>
                            <div className="text-end">
                              <span className="fw-semibold pl-2" id="cart-total">{FormatterPrice(cart?.totalpriceSale || 0)}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* end table-responsive */}
                  </div>
                </div>
                <div className="alert border-dashed alert-danger" role="alert">
                  <div className="d-flex align-items-center">
                    {/* Content */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Pagination defaultCurrent={1} total={100} />
          </div>
        </div>
      }
    </div>
  )
}

export default Cart;