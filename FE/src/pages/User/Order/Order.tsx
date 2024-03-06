import { Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { useEffect } from 'react';
import { getOneCart } from '../../../store/actions/actionCart';
import FormatterPrice from '../../../components/FormatterPrice/FormatterPrice';
import { Address as IAddress } from "../../../interface/user/user";
const Order = () => {
    const dispatch = useDispatch();
    const carts = useSelector((state: RootState) => state.carts);
    const user = useSelector((state: RootState) => state.users.user.user);
    const { cart, isLoading } = carts;
    useEffect(() => {
        dispatch(getOneCart(user._id) as never);
    }, [dispatch, user._id])
    return (
        <div className='mx-5'>
            <h3 className="text-center font-sans font-bold text-3xl mb-10">Checkout page</h3>
            <div className='sm:flex sm:flex-row'>
                <div className='border sm:w-6/12 p-10 mr-5 w-full mb-5'>
                    <h4 className="text-xl text-[#222]  font-bold tracking-wider my-2">Shipping Address</h4>
                    <p>Login or Register for faster payment.</p>
                    <div className='flex'>
                        <div className="mt-2 mr-3 w-2/4">
                            <label className='mb-3' htmlFor="">First Name:</label>
                            <Input placeholder="First Name" className='p-3' />
                        </div>
                        <div className="mt-2 w-2/4">
                            <label className='mb-3' htmlFor="">Last Name:</label>
                            <Input placeholder="Last Name" className=' p-3' />
                        </div>
                    </div>
                    <div className="mt-2 ">
                        <label className='mb-3' htmlFor="">Phone:</label>
                        <Input placeholder="Phone" className=' p-3 w-full' />
                    </div>
                    <div className='my-3'>
                        <label htmlFor="">Address:</label>
                        <fieldset className="grid grid-cols-2 gap-4">
                            <legend className="sr-only">Delivery</legend>
                            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> */}
                            {
                                isLoading ? null :
                                    user && user.addressUser &&
                                        user.addressUser.length > 0 ?
                                        user.addressUser.map((address: IAddress, index: number) =>
                                            <div key={index}>
                                                <input
                                                    type="radio"
                                                    name="AddressOption"
                                                    value={`address${index + 1}`}
                                                    id={`address${index + 1}`}
                                                    className="peer hidden"
                                                    defaultChecked={index === 0 ? true : false}
                                                />

                                                <label
                                                    htmlFor={`address${index + 1}`}
                                                    className="block cursor-pointer rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
                                                >
                                                    <p className="text-gray-700 text-base border-b">Address {index + 1}</p>
                                                    <div>
                                                        <p className='mt-1 text-gray-900'>{address.name}</p>
                                                        <p className='mt-1 text-gray-900'>{address.communeAddress}</p>
                                                        <p className='mt-1 text-gray-900'>{address.districtLeech}</p>
                                                        <p className='mt-1 text-gray-900'>{address.cityLeeched}</p>
                                                    </div>
                                                </label>
                                            </div>)
                                        : <div>
                                            <p className="text-xl font-bold mb-3">You have no addresses saved.</p>
                                        </div>
                            }
                            {/* </div> */}
                        </fieldset>
                    </div>
                </div>
                <div className='border sm:w-6/12 p-10 w-full'>
                    <h3 className="text-xl text-[#222] font-bold tracking-wider my-2">Devivery Methods
                    </h3>
                    <fieldset className="space-y-4">
                        <legend className="sr-only">Delivery</legend>
                        <div>
                            <input
                                type="radio"
                                name="DeliveryOption"
                                value="DeliveryStandard"
                                id="DeliveryStandard"
                                className="peer hidden [&:checked_+_label_svg]:block"
                                defaultChecked
                            />

                            <label
                                htmlFor="DeliveryStandard"
                                className="flex cursor-pointer items-center justify-between rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
                            >
                                <div className="flex items-center gap-2">
                                    <svg
                                        className="hidden h-5 w-5 text-blue-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>

                                    <p className="text-gray-700">Standard Delivery $2.99 (3-5 days)</p>
                                </div>
                            </label>
                        </div>

                        <div>
                            <input
                                type="radio"
                                name="DeliveryOption"
                                value="DeliveryPriority"
                                id="DeliveryPriority"
                                className="peer hidden [&:checked_+_label_svg]:block"
                            />

                            <label
                                htmlFor="DeliveryPriority"
                                className="flex cursor-pointer items-center justify-between rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
                            >
                                <div className="flex items-center gap-2">
                                    <svg
                                        className="hidden h-5 w-5 text-blue-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>

                                    <p className="text-gray-700">Express Delivery $10.99 (1-2 days)</p>
                                </div>
                            </label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                name="DeliveryOption"
                                value="DeliverySameDay"
                                id="DeliverySameDay"
                                className="peer hidden [&:checked_+_label_svg]:block"
                            />

                            <label
                                htmlFor="DeliverySameDay"
                                className="flex cursor-pointer items-center justify-between rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
                            >
                                <div className="flex items-center gap-2">
                                    <svg
                                        className="hidden h-5 w-5 text-blue-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <p className="text-gray-700">Same-Day $20.00 (Evening Delivery)</p>
                                </div>
                            </label>
                        </div>
                    </fieldset>
                    <h3 className="text-xl text-[#222] font-bold tracking-wider my-5">Payment Methods</h3>
                    <div>
                        <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700 mb-4">
                            <input disabled id="bordered-radio-1" type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="bordered-radio-1" className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">VnPay</label>
                        </div>
                        <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                            <input checked id="bordered-radio-2" type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="bordered-radio-2" className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Paypal</label>
                        </div>
                    </div>

                </div>

            </div>
            <h3 className="text-3xl text-[#17c6aa] font-bold tracking-wider my-5 mx-10">Order Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 ">
                <div className="md:col-span-2 ">
                    <div className="overflow-x-auto mx-10">
                        <table className=" table min-w-full divide-y-2 divide-gray-200 bg-white text-sm ">
                            <thead className="ltr:text-left rtl:text-right ">
                                <tr>
                                    <th className="whitespace-nowrap py-4 font-medium text-gray-900 text-left">
                                        Image
                                    </th>
                                    <th className="whitespace-nowrap py-4   font-medium text-gray-900 text-left">
                                        Name
                                    </th>
                                    <th className="whitespace-nowrap py-4 font-medium text-gray-900 text-left">
                                        Qty
                                    </th>
                                    <th className="whitespace-nowrap py-4 font-medium text-gray-900 text-left">
                                        Price
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-200 ">
                                {cart && cart.items.map((item: any, index) =>
                                    <tr key={index}>
                                        <td className="whitespace-nowrap font-medium text-gray-900 flex text-left py-4">
                                            <div className="relative">
                                                <img className="w-full h-auto lg:w-40 object-cover md:w-40" src={item.image} alt="" />
                                                {
                                                    item.productId.hot_sale && item.productId.hot_sale > 0 ? <span className="text-xs absolute top-0 right-0 bg-green-400 p-1 text-white rounded-full hidden sm:block">
                                                        {item.productId.hot_sale}% OFF
                                                    </span> : null
                                                }
                                            </div>
                                        </td>
                                        <td className="whitespace-nowrap  text-gray-700 py-4 ">
                                            <div className=" items-center ">
                                                <p className="text-xs lg:text-xl md:text-xl">{item.productId.name}</p>
                                                <div className="flex items-center gap-1">
                                                    <span className="text-xs lg:text-base md:text-xl ">Color: </span>
                                                    <span style={{ backgroundColor: item.color }} className="flex gap-3 rounded-full w-4 h-4 opacity-70"></span></div>
                                            </div>
                                            <span className="  gap-3 text-xs lg:text-base md:text-xl">Size: {item.size}</span>
                                        </td>
                                        <td className="whitespace-nowrap text-gray-700 py-4">
                                            <div className="flex items-center text-xs lg:text-xl">
                                                <span>{item.quantity}</span>
                                            </div>
                                        </td>
                                        <td className=" whitespace-nowrap  text-gray-700  text-xs lg:text-xl md:text-xl py-4 ">{FormatterPrice(item.price)}</td>
                                    </tr>)}

                            </tbody>
                        </table>
                    </div>
                </div >
                <div className="col-span-1 mx-10 ">
                    <div className="col-span-1 mt-10 ">
                        <div className="">
                            <div className='border-2 p-2'>
                                <h3 className='font-bold px-3'>Apply Promocode</h3>
                                <div className='m-5 flex-col'>Got a promo code? Then you're a few randomly combined numbers & letters away from fab savings!</div>
                            </div>
                            <div className="mb-4 mt-20 flex justify-between ">
                                <span className="font-bold text-2xl">Total</span>
                                <span className="text-2xl ml-auto">$120.00</span>
                            </div>
                            <button className="text-xl mb-2 bg-[#17c6aa] text-white h-[60px] w-full flex items-center justify-center font-sans hover:bg-black hover:text-white">
                                PLACE ORDER
                            </button>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default Order