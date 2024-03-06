import { CaretDownOutlined, CaretUpOutlined, EditOutlined } from "@ant-design/icons"
import { Pagination } from "antd"
import { BsFillTrash3Fill } from "react-icons/bs"
import { Link } from "react-router-dom"
import { UpDow } from "../../../components/Icon/iconProject"

const ListProduct = () => {
  return <>
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
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 bg-white text-sm w-max ">
        <thead className="ltr:text-left rtl:text-right">
          <tr className="bg-gray-50">
            <th className="whitespace-nowrap py-4 font-medium text-gray-900 text-left px-5">
              <div className="flex items-center">
                <div className="mr-2">NAME</div>
                <div className="inline-flex">
              <UpDow></UpDow>
              </div>
              </div>
            </th>
            <th className="whitespace-nowrap py-4 font-medium text-gray-900 text-left px-5">
              <div className="flex items-center">
                <div className="mr-2">CATEGORY</div>
                <div className="inline-flex">
                <UpDow></UpDow>
              </div>
              </div>
            </th>
            <th className="whitespace-nowrap py-4 font-medium text-gray-900 text-left px-5">
              <div className="flex items-center">
                <div className="mr-2">QUANTITY</div>
                <div className="inline-flex">
                <UpDow></UpDow>
              </div>
              </div>
            </th>
            <th className="whitespace-nowrap py-4 font-medium text-gray-900 text-left px-5">
              <div className="flex items-center">
                <div className="mr-2">STATUS</div>
                <div className="inline-flex">
                <UpDow></UpDow>
              </div>
              </div>
            </th>
            <th className="whitespace-nowrap py-4 font-medium text-gray-900 text-left px-5">
              <div className="flex items-center">
                <div className="mr-2">PRICE</div>
                <div className="inline-flex">
                <UpDow></UpDow>
              </div>
              </div>
            </th>
            <th className="whitespace-nowrap py-4 px-2 font-medium text-gray-900 text-left">ACTION </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200 ">
          <tr className="">
            <td className="whitespace-nowrap font-medium text-gray-900 flex text-left my-5 mx-2 ">
              <div className="flex items-center">
                <img className="w-10 rounded-xl	" src="https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-01-1.webp" alt="" />
                <p className="text-xs lg:text-base md:text-xl mx-4">Sản Phẩm 1</p>
              </div>

            </td>
            <td className="whitespace-nowrap  text-gray-700 py-4 ">
              <div className=" items-center ">
                <p className="text-xs lg:text-base md:text-xl mx-10">Loại 1</p>
              </div>
            </td>
            <td className=" whitespace-nowrap  text-gray-700  text-xs lg:text-base md:text-xl py-4 px-10 ">40</td>
            <td className="whitespace-nowrap text-gray-700  text-xs lg:text-base  md:text-xl px-4 py-4 px-5 text-green-400 font-mono ... font-bold">
              In Stock
            </td>
            <td className="whitespace-nowrap text-gray-700  text-xs lg:text-base  md:text-xl px-4 py-4 px-5 ">
            120.000
            </td>
            <td className="whitespace-nowrap ">
            <div className="flex ">
                  <Link to={`/admin/products/1`} className="px-2 py-2 text-xl"> <EditOutlined /></Link>
                  <p className="px-2 py-4 text-xl"><BsFillTrash3Fill/></p>
                </div>
           
            </td>
          </tr>
          <tr className="">
            <td className="whitespace-nowrap font-medium text-gray-900 flex text-left my-5 mx-2 ">
              <div className="flex items-center">
                <img className="w-10 rounded-xl	" src="https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-01-1.webp" alt="" />
                <p className="text-xs lg:text-base md:text-xl mx-4">Sản Phẩm 1</p>
              </div>

            </td>
            <td className="whitespace-nowrap  text-gray-700 py-4 ">
              <div className=" items-center ">
                <p className="text-xs lg:text-base md:text-xl mx-10">Loại 1</p>
              </div>
            </td>
            <td className=" whitespace-nowrap  text-gray-700  text-xs lg:text-base md:text-xl py-4 px-10 ">40</td>
            <td className="whitespace-nowrap text-gray-700  text-xs lg:text-base  md:text-xl px-4 py-4 px-5 text-green-400 font-mono ... font-bold">
              In Stock
            </td>
            <td className="whitespace-nowrap text-gray-700  text-xs lg:text-base  md:text-xl px-4 py-4 px-5 ">
            120.000
            </td>
            <td className="whitespace-nowrap ">
            <div className="flex ">
                  <p className="px-2 py-2 text-xl"> <EditOutlined /></p>
                  <p className="px-2 py-4 text-xl"><BsFillTrash3Fill/></p>
                </div>
           
            </td>
          </tr>
          <tr className="">
            <td className="whitespace-nowrap font-medium text-gray-900 flex text-left my-5 mx-2 ">
              <div className="flex items-center">
                <img className="w-10 rounded-xl	" src="https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-01-1.webp" alt="" />
                <p className="text-xs lg:text-base md:text-xl mx-4">Sản Phẩm 1</p>
              </div>

            </td>
            <td className="whitespace-nowrap  text-gray-700 py-4 ">
              <div className=" items-center ">
                <p className="text-xs lg:text-base md:text-xl mx-10">Loại 1</p>
              </div>
            </td>
            <td className=" whitespace-nowrap  text-gray-700  text-xs lg:text-base md:text-xl py-4 px-10 ">40</td>
            <td className="whitespace-nowrap text-gray-700  text-xs lg:text-base  md:text-xl px-4 py-4 px-5 text-green-400 font-mono ... font-bold">
              In Stock
            </td>
            <td className="whitespace-nowrap text-gray-700  text-xs lg:text-base  md:text-xl px-4 py-4 px-5 ">
            120.000
            </td>
            <td className="whitespace-nowrap ">
            <div className="flex ">
                  <p className="px-2 py-2 text-xl"> <EditOutlined /></p>
                  <p className="px-2 py-4 text-xl"><BsFillTrash3Fill/></p>
                </div>
           
            </td>
          </tr>
          <tr className="">
            <td className="whitespace-nowrap font-medium text-gray-900 flex text-left my-5 mx-2 ">
              <div className="flex items-center">
                <img className="w-10 rounded-xl	" src="https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-01-1.webp" alt="" />
                <p className="text-xs lg:text-base md:text-xl mx-4">Sản Phẩm 1</p>
              </div>

            </td>
            <td className="whitespace-nowrap  text-gray-700 py-4 ">
              <div className=" items-center ">
                <p className="text-xs lg:text-base md:text-xl mx-10">Loại 1</p>
              </div>
            </td>
            <td className=" whitespace-nowrap  text-gray-700  text-xs lg:text-base md:text-xl py-4 px-10 ">40</td>
            <td className="whitespace-nowrap text-gray-700  text-xs lg:text-base  md:text-xl px-4 py-4 px-5 text-green-400 font-mono ... font-bold">
              In Stock
            </td>
            <td className="whitespace-nowrap text-gray-700  text-xs lg:text-base  md:text-xl px-4 py-4 px-5 ">
            120.000
            </td>
            <td className="whitespace-nowrap ">
            <div className="flex ">
                  <p className="px-2 py-2 text-xl"> <EditOutlined /></p>
                  <p className="px-2 py-4 text-xl"><BsFillTrash3Fill/></p>
                </div>
           
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-center">
              <Pagination defaultCurrent={1} total={100} />

      </div>
    </div>
  </>

}
export default ListProduct