import { CaretDownOutlined, CaretUpOutlined, EditOutlined,EyeOutlined  } from "@ant-design/icons"
import { Pagination } from "antd"
import { BsFillTrash3Fill } from "react-icons/bs"
import { Link } from "react-router-dom"
import { UpDow } from "../../../components/Icon/iconProject"
const ListOrder = () => {
  return <>
  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2">
    <h2 className="font-bold text-xl mt-5">Orders</h2>
    <div className="ml-auto mb-5">
      <input
        className="h-10 w-60 px-4 rounded-xl border-2 mx-2"
        id="search"
        type="search"
        placeholder="Search..."
      />
    </div>
  </div>
  <div className="overflow-x-auto">
    <table className="min-w-full divide-y divide-gray-200 bg-white text-sm w-max ">
      <thead className="ltr:text-left rtl:text-right">
        <tr className="bg-gray-50">
          <th className="whitespace-nowrap py-4 font-medium text-gray-900 text-left px-5">
            <div className="flex items-center pl-4">
              <div className="mr-2">ORDER</div>
              <div className="inline-flex">         
            <UpDow></UpDow>
            </div>
            </div>
          </th>
          <th className="whitespace-nowrap py-4 font-medium text-gray-900 text-left px-5">
            <div className="flex items-center pl-9">
              <div className="mr-2">DATE</div>
              <div className="inline-flex">
              <UpDow></UpDow>
            </div>
            </div>
          </th>
          <th className="whitespace-nowrap py-4 font-medium text-gray-900 text-left px-5">
            <div className="flex items-center">
              <div className="mr-2">CUSTOMER</div>
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
              <div className="mr-2">TOTAL</div>
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
            
              <p className="text-xs lg:text-base md:text-xl mx-4">Sản Phẩm 1</p>
            </div>
          </td>
          <td className="whitespace-nowrap  text-gray-700 py-4 ">
            <div className=" items-center ">
              <p className="text-xs lg:text-base md:text-xl mx-10">12/12/2005</p>
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
                <Link to={`/admin/products/1`} className="px-2 py-2 text-xl"> <EyeOutlined /></Link>
                <p className="px-2 py-4 text-xl"><BsFillTrash3Fill/></p>
              </div>
         
          </td>
        </tr>
        <tr className="">
          <td className="whitespace-nowrap font-medium text-gray-900 flex text-left my-5 mx-2 ">
            <div className="flex items-center">
             
              <p className="text-xs lg:text-base md:text-xl mx-4">Sản Phẩm 1</p>
            </div>
          </td>
          <td className="whitespace-nowrap  text-gray-700 py-4 ">
            <div className=" items-center float-left">
              <p className="text-xs lg:text-base md:text-xl mx-10 ">12/12/2005</p>
            </div>
          </td>
          <td className=" whitespace-nowrap  text-gray-700  text-xs lg:text-base md:text-xl py-4 px-10 ">40</td>
          <td className="whitespace-nowrap text-gray-700  text-xs lg:text-base  md:text-xl px-4 py-4 px-5 text-red-400 font-mono ... font-bold">
            Out Stock
          </td>
          <td className="whitespace-nowrap text-gray-700  text-xs lg:text-base  md:text-xl px-4 py-4 px-5 ">
          120.000
          </td>
          <td className="whitespace-nowrap ">
          <div className="flex ">
                <p className="px-2 py-2 text-xl"> <EyeOutlined /></p>
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

export default ListOrder