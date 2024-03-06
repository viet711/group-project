import Icon from "../../../components/Icon/icon";
import { RootState } from "../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { Button, Popconfirm, Skeleton } from "antd";
import { Link } from "react-router-dom";
import { Address as IAddress } from "../../../interface/user/user";
import Message from "../../../components/Action/Message/Message";
import { deleteAddress } from "../../../store/actions/actionAddress";
const Address = () => {
  const dispatch = useDispatch();
  const userInfor = useSelector((state: RootState) => state.users);
  const { isLoading, user } = userInfor
  const handleRemove = async (id: string) => {
    try {
      await dispatch(deleteAddress(id, user.user._id) as never);
      Message('success', 'Delete address information successfully');
      document.location.href = "/account/address"
    } catch (error) {
      Message('error', 'Address information correction failed');
      console.log(error);
    }
  }
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-3/4">
        <h1 className="text-3xl normal-case font-semibold mb-5 mt-5 md:mt-0">My Addresses</h1>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {
              isLoading ? <Skeleton /> :
                user && user.user.addressUser &&
                  user.user.addressUser.length > 0 ?
                  user.user.addressUser.map((address: IAddress, index: number) =>
                    <div key={index} >
                      <div className="bg-white border-2 shadow-md p-3 max-w-2xl overflow-hidden rounded-lg">
                        <h3 className="text-xl font-bold mb-3">Address {index + 1} (Default)</h3>
                        <div className="flex gap-3">
                          <p className="text-base mb-1 border-r-2 pr-3 border-slate-800">{address.name}</p>
                          <p className="text-base mb-1">{address.phone}</p>
                        </div>
                        <p>{address.apartmentNumber}</p>
                        <div className="flex gap-1 flex-wrap">
                          <p className="text-base ">{address.communeAddress},</p>
                          <p className="text-base ">{address.districtLeech},</p>
                          <p className="text-base ">{address.cityLeeched}</p>
                        </div>

                        <div className="flex justify-between items-end">
                          <Link to={`/account/edit/${address._id}`}>
                            <button className="mt-5 flex gap-1 cursor-pointer">
                              <Icon name={'AiFillEdit'} className={"text-2xl"} />
                              <span>Edit</span>
                            </button>
                          </Link>
                          <Popconfirm
                            placement="topRight"
                            title={`Delete the address "${address.name}"?`}
                            onConfirm={() => handleRemove(address._id as string)}
                            cancelText="No"
                            okButtonProps={{ style: { background: "red" } }}
                          >
                            <Button>
                              Delete
                            </Button>
                          </Popconfirm>
                          {/* <button onClick={() => handleRemove(address._id)} className="hover:text-red-300">Delete</button> */}
                        </div>
                      </div>
                    </div>)
                  : <div>
                    <p className="text-xl font-bold mb-3">You have no addresses saved.</p>
                  </div>
            }
          </div>

          <Link to={'/account/add'}>
            <div className="flex gap-1 h-10 ml-10 mt-6 md:mt-0 bg-teal-400 px-3 py-2 text-white">

              <Icon
                name={"AiOutlinePlus"}
                className={"text-2xl cursor-pointer"}
              />

              <span
                className="cursor-pointer"
              >
                New
              </span>

            </div>
          </Link>
        </div>


      </div>
    </div>
  );
};

export default Address;
