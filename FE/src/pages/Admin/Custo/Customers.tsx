import { Modal, Pagination } from "antd";
import { useEffect, useState } from "react";
import { Delete, Search, UpDow } from "../../../components/Icon/iconProject";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { deleteUser, getUser } from "../../../store/actions/actionUser";
import Image from "../../../components/Image/Image";
import Message from "../../../components/Action/Message/Message";


const Customers = () => {
  const dispatch = useDispatch();
  const dataUser = useSelector((state: RootState) => state.users);
  const [modal2Open, setModal2Open] = useState(false);
  const [id, setId] = useState("");
  const { users } = dataUser;
  console.log(users);

  useEffect(() => {
    dispatch(getUser() as never)
  }, [dispatch])

  const onSubmitModal = async () => {
    try {
      if (id !== "") {
        await dispatch(deleteUser(id) as never);
      }
      setModal2Open(false);
      Message('success', 'Delete User information successfully');

    } catch (error) {
      Message('error', 'User information correction failed');
    }

  }
  return (
    <div className="md:w-full">
      <Modal
        title="Confirm your Address"
        centered
        open={modal2Open}
        onOk={onSubmitModal}
        onCancel={() => setModal2Open(false)}
        okButtonProps={{
          style: {
            backgroundColor: "#23c0a4",
          },

        }}
        cancelButtonProps={{
          style: {
            border: "1px solid #23c0a4",
            color: "#23c0a4",
          }
        }}

      >
        <div className="w-full">
          <span className="">Are you sure you want to delete? <br />
          </span>
        </div>
      </Modal>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <h1 className="text-2xl font-bold">USER</h1>
        <div className="flex text-center bg-gray-100 p-4 space-x-4 rounded-lg">
          <Search></Search>
          <input
            className="bg-gray-100 outline-none"
            type="text"
            placeholder=" keyword..."
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 w-max mt-3">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
                <div className="inline-flex">
                  <UpDow></UpDow>
                </div>
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Address
                <div className="inline-flex">
                  <UpDow></UpDow>
                </div>
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Role
                <div className="inline-flex">
                  <UpDow></UpDow>
                </div>
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Email
                <div className="inline-flex">
                  <UpDow></UpDow>
                </div>
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users && users.map((user: any, index: number) => {
              if (user.role !== "admin") {
                return (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <Image src={user.image_url
                          } />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {user.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">Hà Nội</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {user.role}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {user.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                      <div className="flex text-lg">

                        <span onClick={() => {
                          setModal2Open(true)
                          setId(user._id)
                        }} className="cursor-pointer p-2 hover:text-red-500">
                          <Delete ></Delete>
                        </span>
                      </div>
                    </td>
                  </tr>
                )
              }
            }

            )

            }

          </tbody>
        </table>
      </div>
      <div className="flex justify-center">
        <Pagination defaultCurrent={1} total={100} />

      </div>
    </div>
  );
};

export default Customers;
