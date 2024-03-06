import { EditOutlined } from "@ant-design/icons"
import { Pagination, Switch, Popconfirm, Button } from "antd"
import { BsFillTrash3Fill } from "react-icons/bs"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useEffect } from "react";
import { deleteProduct, getProducts } from "../../../store/actions/actionProduct";
import Loading from "../../Action/Loading/Loading";
import { ProductRow, ImagePriview } from "../..";
import { getCategorys } from "../../../store/actions/actionCategory";
import Message from "../../Action/Message/Message";
const ListProduct = () => {
  const dispatch = useDispatch();
  const dataProducts = useSelector((state: RootState) => state.products);
  const { products, isLoading, error } = dataProducts;
  useEffect(() => {
    dispatch(getProducts() as never);
    dispatch(getCategorys() as never);
  }, [dispatch])
  //delete
  const handleRemove = async (id: string) => {
    try {
      dispatch(deleteProduct(id) as never);
      Message("success", "Xóa sản phẩm thành công");
    } catch (error) {
      console.log(error);
      Message("error", "Xóa sản phẩm thất bại");
    }
  };
  return <>
    {
      isLoading ? <Loading /> : error ? "Error" : products && products.length > 0 ? (<div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2">
          <h2 className="font-bold text-xl mt-5">Products</h2>
          <div className="ml-auto mb-5">
            <input
              className="h-10 w-60 px-4 rounded-xl border-2 mx-2"
              id="search"
              type="search"
              placeholder="Search website..."
            />
            <Link to={'/admin/products/add'} className="my-2 border rounded p-2 bg-blue-500 hover:bg-red-700 font-bold py-2 px-4 text-white w-full lg:w-40 ">Add Product</Link>
          </div>
        </div>
        <div >
          <table className="min-w-full divide-y divide-gray-200 bg-white text-sm w-max ">
            <thead className="ltr:text-left rtl:text-right">
              <tr className="bg-gray-50">
                <th className="whitespace-nowrap py-4 font-medium text-gray-900 text-left px-5">
                  <div className="flex items-center">
                    <div className="mr-2">NAME</div>
                    <div className="inline-flex">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 320 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </th>
                <th className="whitespace-nowrap py-4 font-medium text-gray-900 text-left px-5">
                  <div className="flex items-center">
                    <div className="mr-2">CATEGORY</div>
                    <div className="inline-flex">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 320 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </th>
                <th className="whitespace-nowrap py-4 font-medium text-gray-900 text-left px-5">
                  <div className="flex items-center">
                    <div className="mr-2">QUANTITY</div>
                    <div className="inline-flex">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 320 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </th>
                <th className="whitespace-nowrap py-4 font-medium text-gray-900 text-left px-5">
                  <div className="flex items-center">
                    <div className="mr-2">FEATURED</div>
                    <div className="inline-flex">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 320 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </th>
                <th className="whitespace-nowrap py-4 font-medium text-gray-900 text-left px-5">
                  <div className="flex items-center">
                    <div className="mr-2">STATUS</div>
                    <div className="inline-flex">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 320 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </th>
                <th className="whitespace-nowrap py-4 font-medium text-gray-900 text-left px-5">
                  <div className="flex items-center">
                    <div className="mr-2">PRICE</div>
                    <div className="inline-flex">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 320 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </th>
                <th className="whitespace-nowrap py-4 px-2 font-medium text-gray-900 text-left">ACTION </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 ">
              {
                products.map((product, index) =>
                  <tr key={index} >
                    <td className="whitespace-nowrap font-medium text-gray-900 flex text-left my-5 mx-2 ">
                      <div className="flex items-center">
                        <ImagePriview width={12} listImage={product.image} />
                        <p className="text-xs lg:text-base md:text-xl mx-4">{product.name}</p>
                      </div>

                    </td>
                    <td className="whitespace-nowrap  text-gray-700 py-4 ">
                      <div className="items-center">
                        <p className="text-xs lg:text-base md:text-xl mx-10">
                          {product.categoryId.name}
                        </p>
                      </div>

                    </td>
                    <td className=" whitespace-nowrap  text-gray-700  text-xs lg:text-base md:text-xl py-4 px-10 ">{product.quantity}</td>
                    <td className=" whitespace-nowrap  text-gray-700  text-xs lg:text-base md:text-xl py-4 px-10 ">
                      <Switch defaultChecked />
                    </td>
                    <td className="whitespace-nowrap text-gray-700  text-xs lg:text-base  md:text-xl py-4 px-5  font-monoont-bold">
                      <ProductRow product={product} />
                    </td>
                    <td className="whitespace-nowrap text-gray-700  text-xs lg:text-base  md:text-xl py-4 px-5 ">
                      {product.price}
                    </td>
                    <td className="whitespace-nowrap ">
                      <div className="flex items-center">
                        <Link
                          to={`/admin/products/${product._id}`}
                          className="px-3  text-xl rounded-md border border-gray-300"
                        >
                          <EditOutlined className="flex items-center py-[5px]" />
                        </Link>
                        <div className="px-2 py-4 text-xl cursor-pointer">
                          <Popconfirm
                            placement="topRight"
                            title={`Delete the color "${product.name}"?`}
                            onConfirm={() => handleRemove(product._id as string)}
                            cancelText="No"
                            okButtonProps={{ style: { background: "red" } }}
                          >
                            <Button>
                              <BsFillTrash3Fill />
                            </Button>
                          </Popconfirm>
                        </div>
                      </div>
                    </td>
                  </tr>)
              }
            </tbody>
          </table>
          <div className="flex justify-center">
            <Pagination defaultCurrent={1} total={100} />
          </div>
        </div>
      </div>)
        : <div className="error min-h-[300px] h-1/2 w-screen flex items-center">
          <h1 className="text-xl font-medium italic text-center w-full">No products available.</h1>
        </div>}
  </>

}
export default ListProduct