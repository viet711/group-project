import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCart, getCarts } from '../../../store/actions/actionCart';
import { RootState } from '../../../store/store';
import { BsFillTrash3Fill } from 'react-icons/bs';
import FormatterPrice from '../../FormatterPrice/FormatterPrice';
import Loading from '../../Action/Loading/Loading';
import { Icart } from '../../../interface/cart';
import Message from '../../Action/Message/Message';
import { User } from '../../../interface/user/user';
const CartAdmin = () => {
    const dispatch = useDispatch();
    const dataCarts = useSelector((state: RootState) => state.carts);
    const user = useSelector((state: RootState) => state.users.user.user);
    const { carts, isLoading, error } = dataCarts;
    useEffect(() => {
        dispatch(getCarts() as never)
    }, [dispatch])
    const onChange = (key: string | string[]) => {
        console.log(key);
    };
    const handleDelete = async (userId: User, item: any) => {
        try {
            await dispatch(deleteCart(userId._id, item._id) as never);
            Message("success", "Delete item successfully");
        } catch (error: any) {
            console.log(error.message);
        }
    }
    const handleRefresh = () => {
        dispatch(getCarts() as never);
    }
    const items: CollapseProps['items'] = carts.map((cart: Icart) => ({
        key: cart._id,
        label: cart.userId.name,
        children: (
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2">
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
                                        <th className="whitespace-nowrap py-4 font-medium text-gray-900 text-left">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 ">
                                    {cart && cart.items.map((item: any, index) =>
                                        <tr key={index}>
                                            <td className="whitespace-nowrap font-medium text-gray-900 flex text-left py-4">
                                                <div className="relative">
                                                    <img className="w-full h-auto  object-cover md:w-24" src={item.image} alt="" />
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
                                            <td onClick={() => handleDelete(cart.userId, item)} className={`whitespace-nowrap cursor-pointer text-gray-700  text-xs lg:text-xl  md:text-xl px-4 py-4 }`}>
                                                <BsFillTrash3Fill />
                                            </td>
                                        </tr>)}

                                </tbody>
                            </table>
                            <div className='border-t'>
                                <h1 className='text-2xl'>Result: </h1>
                                <p className="font-semibold text-xl mt-2" > TotalQuantity: {cart?.totalQuantity}</p>
                                <p className="font-semibold text-xl mt-2">TotalpriceSale: {FormatterPrice(cart?.totalpriceSale || 0)}</p>
                            </div>
                        </div>
                    </div >
                </div >
            </div>
        )
    }));
    return (
        <div>
            <h2 className="font-bold text-xl my-5">Carts</h2>
            <div className='flex flex-col'>
                <button
                    onClick={handleRefresh}
                    className="flex  items-center justify-center w-1/4 
                     px-6 py-2 space-x-2 mb-2  text-sm font-medium text-white transition bg-blue-700 border border-blue-700 rounded appearance-none cursor-pointer select-none hover:border-blue-800 hover:bg-blue-800 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:pointer-events-none disabled:opacity-75">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 animate-spin" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd"
                            d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                        />
                    </svg>
                    <span className="p-2 text-xs lg:text-xl md:text-xl">Refresh...</span>
                </button>
                <div>
                    {isLoading ? <Loading /> : error ? <h1>{error}</h1> : carts && carts.length > 0 ? <Collapse items={items} onChange={onChange} accordion /> : <h1>Không có sản phẩm nào</h1>}
                </div>
            </div>
        </div>
    )
};

export default CartAdmin;