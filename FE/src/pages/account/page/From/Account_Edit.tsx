import { useForm, Controller } from "react-hook-form";
import { User } from "../../../../interface/user/user";
import { RootState } from "../../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react"
import { Modal } from "antd";
import { getOneUser, updateUser } from "../../../../store/actions/actionUser";
import Message from "../../../../components/Action/Message/Message";
interface Props {
  handleCancel: () => void
}
const Account_Edit = ({ handleCancel }: Props) => {
  const dispatch = useDispatch()
  const [modal2Open, setModal2Open] = useState(false);
  const [userData, setuserData] = useState<User>({} as User);
  const userInfor = useSelector((state: RootState) => state.users);
  const { user } = userInfor

  useEffect(() => {
    dispatch(getOneUser(user?.user._id) as never)
  }, [dispatch, user?.user._id])
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm<User>({
    defaultValues: {
      name: user.user.name,
      email: user.user.email,
    }
  });

  const onSubmit = async (data: User) => {
    setModal2Open(true);

    setuserData(data)
  };


  const onSubmitModal = async (data: User) => {
    const userData2 = ({ ...userData, ...data })
    try {
      await dispatch(updateUser(userData2, user.user._id) as never);
      setModal2Open(false);
      Message('success', 'Edit user information successfully');
      document.location.href = "/account"
    } catch (error) {
      Message('error', 'User information correction failed');
    }

  }

  const handleCancels = () => {
    handleCancel()
  }

  return (
    <div className="border mt-6 p-3 rounded-lg">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 className="text-xl font-medium mb-3">Update Account Details</h3>
        <div className="flex flex-col md:flex-row mb-6">
          <div className="w-full md:w-2/4 md:mr-4">
            <label className="text-xl" htmlFor="">Name:</label>
            <Controller
              name="name"
              control={control}
              rules={{ required: "Name is required" }}
              render={({ field }) => (
                <>
                  <input
                    {...field}
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? "border-red-500" : ""
                      }`}
                    type="text"
                    placeholder="Name..."
                  />
                  {errors.name && (
                    <p className="text-red-500 mt-1">{errors.name.message}</p>
                  )}
                </>
              )}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row mb-6">
          <div className="w-full md:w-2/4 md:mr-4">
            <label className="text-xl" htmlFor="">Email:</label>
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              }}
              render={({ field }) => (
                <>
                  <input
                    {...field}
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? "border-red-500" : ""
                      }`}
                    type="email"
                    placeholder="Email..."
                  />
                  {errors.email && (
                    <p className="text-red-500 mt-1">{errors.email.message}</p>
                  )}
                </>
              )}
            />
          </div>
        </div>
        {/* <div className="flex flex-col md:flex-row mb-6">
          <div className="w-full md:w-2/4 md:mr-4">
            <label className="text-xl" htmlFor="">:</label>
            <Controller
              name="password"
              control={control}
              rules={{ required: "Password is required" }}
              render={({ field }) => (
                <>
                  <input
                    {...field}
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? "border-red-500" : ""
                      }`}
                    type="password"
                    placeholder="Password..."
                  />
                  {errors.password && (
                    <p className="text-red-500 mt-1">{errors.password.message}</p>
                  )}
                </>
              )}
            />
          </div>
        </div> */}
        <Modal
          title="Confirm your password"
          centered
          open={modal2Open}
          onOk={handleSubmit(onSubmitModal)}
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
            <span className="">Are you sure you want to change? <br />
              The new name is: <strong> {`"${userData.name}"`}</strong> <br />
              The new email is: <strong>{`"${userData.email}"`}</strong></span>
            <input

              {...register("confirmPassword", {
                // required: "Password is required",
              })
              }

              className={`border-2  border-teal-500 w-full h-10 rounded-lg outline-none pl-2  ${errors.password ? "border-red-500" : ""
                }`}
              type="password"
              placeholder="Password..."
            />
            {errors.confirmPassword && (
              <p className="text-red-500 mt-1">{errors.confirmPassword.message}</p>
            )}

          </div>
        </Modal>
        <div className="flex flex-col-reverse md:flex-row md:justify-end mt-5 gap-3">
          <button
            type="button"
            onClick={handleCancels}
            className="btn js-prd-autocrat text-white bg-[#17c6aa] hover:bg-[#1b1a1a] rounded-md font-medium px-8 py-2 md:mt-0 md:mr-5"
          >
            CANCEL
          </button>
          <button
            type="submit"
            className="btn js-prd-autocrat text-white bg-[#17c6aa] hover:bg-[#1b1a1a] rounded-md font-medium px-8 py-2"
          >
            UPDATE
          </button>
        </div>
      </form>
    </div >
  );
};

export default Account_Edit;
