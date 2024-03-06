import { CaretDownOutlined, CaretUpOutlined, EditOutlined } from "@ant-design/icons"
import { Pagination } from "antd"
import { BsFillTrash3Fill } from "react-icons/bs"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Loading from "../../Action/Loading/Loading";
import { Button, Popconfirm } from "antd";
import Message from "../../Action/Message/Message";
import { RootState } from "../../../store/store";
import { getCategorys, deleteCategory } from "../../../store/actions/actionCategory";

const CategoryList = () => {
  const dispatch = useDispatch();
  const dataCategorys = useSelector((state: RootState) => state.categorys);
  const { categorys, isLoading, error } = dataCategorys;

  useEffect(() => {
    dispatch(getCategorys() as never);
  }, [dispatch]);

  const handleRemove = async (id: string) => {
    try {
      dispatch(deleteCategory(id) as never);
      Message("success", "Xóa danh mục thành công");
    } catch (error) {
      console.log(error);
      Message("error", "Xóa danh mục thất bại");
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
            <h2 className="font-bold text-xl mt-5">Categorys</h2>
            <div className="ml-auto mb-5 mt-5">
              <Link
                to={"/admin/categorys/add"}
                className="my-2 border rounded p-2 bg-blue-500 hover:bg-red-700 font-bold py-2 px-4 text-white w-full lg:w-40"
              >
                Add Category
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
                {categorys?.length ? (
                  categorys.map((category, index) => (
                    <tr key={index} className="">
                      <td className="whitespace-nowrap font-medium text-gray-900 flex text-left my-5 mx-2">
                        <div className="flex items-center">
                          <p className="text-xs lg:text-base md:text-xl mx-4">
                            {category.name}
                          </p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap">
                        <div className="flex items-center">
                          <Link
                            to={`/admin/categorys/${category._id}`}
                            className="px-3  text-xl rounded-md border border-gray-300"
                          >
                            <EditOutlined className="flex items-center py-[5px]" />
                          </Link>
                          <div className="px-2 py-4 text-xl cursor-pointer">
                            <Popconfirm
                              placement="topRight"
                              title={`Delete the color "${category.name}"?`}
                              onConfirm={() => handleRemove(category._id!)}
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


export default CategoryList