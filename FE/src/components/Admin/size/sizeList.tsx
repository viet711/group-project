import { Link } from "react-router-dom"
import { EditOutlined } from "@ant-design/icons"
import { BsFillTrash3Fill } from "react-icons/bs"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../store/store"
import { useEffect } from "react";
import Loading from "../../Action/Loading/Loading";
import { getSizes, deleteSize } from "../../../store/actions/actionSize"
import { Button, Popconfirm } from "antd";
import Message from "../../Action/Message/Message"

const SizeList = () => {
  const dispatch = useDispatch();
  const dataSizes = useSelector((state: RootState) => state.sizes);
  const { sizes, isLoading, error } = dataSizes;
  useEffect(() => {
    dispatch(getSizes() as never);
  }, [dispatch])
console.log(sizes)
  const handleRemove = async (id: string) => {
    try {
      dispatch(deleteSize(id) as never);
      Message("success", "Xóa size thành công");
    } catch (error) {
      console.log(error);
      Message("error", "Xóa size thất bại");
    }
  };

  return (<>
    {isLoading ? (
        <Loading />
      ) : error ? (
        "Error"
      ) : (
        <div className="grid grid-cols-1 ">
          <div className="flex">
            <h2 className="font-bold text-xl mt-5">Sizes</h2>
            <div className="ml-auto mb-5 mt-5">
              <Link
                to={"/admin/products/sizes/add"}
                className="my-2 border rounded p-2 bg-blue-500 hover:bg-red-700 font-bold py-2 px-4 text-white w-full lg:w-40"
              >
                Add Size
              </Link>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 bg-white text-sm w-max">
              <thead className="ltr:text-left rtl:text-right">
                <tr className="bg-gray-50">
                  <th className="whitespace-nowrap py-4 font-medium text-gray-900 text-left px-5">
                    <div className="flex items-center">
                      <div className="mr-2">NAME</div>
                    </div>
                  </th>
                  <th className="whitespace-nowrap py-4 px-2 font-medium text-gray-900 text-left">
                    ACTION
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {sizes?.length ? (
                  sizes.map((size, index) => (
                    <tr key={index} className="">
                      <td className="whitespace-nowrap font-medium text-gray-900 flex text-left my-5 mx-2">
                        <div className="flex items-center">
                          <p className="text-xs lg:text-base md:text-xl mx-4">
                            {size.name}
                          </p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap">
                        <div className="flex items-center">
                          <Link
                            to={`/admin/products/sizes/${size._id}`}
                            className="px-3  text-xl rounded-md border border-gray-300"
                          >
                            <EditOutlined className="flex items-center py-[5px]" />
                          </Link>
                          <div className="px-2 py-4 text-xl cursor-pointer">
                            <Popconfirm
                              placement="topRight"
                              title={`Delete the size "${size.name}"?`}
                              onConfirm={() => handleRemove(size._id!)}
                              okText="Yes"
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
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={2}>No sizes found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
  </>
  );
}
export default SizeList