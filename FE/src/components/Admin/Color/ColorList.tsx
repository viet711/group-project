import { EditOutlined } from "@ant-design/icons";
import { BsFillTrash3Fill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useEffect } from "react";
import Loading from "../../Action/Loading/Loading";
import { getColors, deleteColor } from "../../../store/actions/actionColor";
import { Button, Popconfirm } from "antd";
import Message from "../../Action/Message/Message";

const ColorList = () => {
  const dispatch = useDispatch();
  const dataColors = useSelector((state: RootState) => state.colors);
  const { colors, isLoading, error } = dataColors;

  useEffect(() => {
    dispatch(getColors() as never);
  }, [dispatch]);

  const handleRemove = async (id: string) => {
    try {
      dispatch(deleteColor(id) as never);
      Message("success", "Xóa màu thành công");
    } catch (error) {
      console.log(error);
      Message("error", "Xóa màu thất bại");
    }
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : error ? (
        "Error"
      ) : (
        <div className="grid grid-cols-1 ">
          <div className="flex">
            <h2 className="font-bold text-xl mt-5">Colors</h2>
            <div className="ml-auto mb-5 mt-5">
              <Link
                to={"/admin/products/colors/add"}
                className="my-2 border rounded p-2 bg-blue-500 hover:bg-red-700 font-bold py-2 px-4 text-white w-full lg:w-40"
              >
                Add Color
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
                {colors?.length ? (
                  colors.map((color, index) => (
                    <tr key={index} className="">
                      <td className="whitespace-nowrap font-medium text-gray-900 flex text-left my-5 mx-2">
                        <div className="flex items-center">
                          <p className="text-xs lg:text-base md:text-xl mx-4">
                            {color.name}
                          </p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap">
                        <div className="flex items-center">
                          <Link
                            to={`/admin/products/colors/${color._id}`}
                            className="px-3  text-xl rounded-md border border-gray-300"
                          >
                            <EditOutlined className="flex items-center py-[5px]" />
                          </Link>
                          <div className="px-2 py-4 text-xl cursor-pointer">
                            <Popconfirm
                              placement="topRight"
                              title={`Delete the color "${color.name}"?`}
                              onConfirm={() => handleRemove(color._id as string)}
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
                    <td colSpan={2}>No colors found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default ColorList;
