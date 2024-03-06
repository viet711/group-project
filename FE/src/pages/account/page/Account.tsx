import { useEffect, useState } from "react";
import Account_Edit from "./From/Account_Edit";
import Icon from "../../../components/Icon/icon";
import { RootState } from "../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { Skeleton } from "antd";
import moment from "moment";
import Image from "../../../components/Image/Image";
import { getOneUser } from "../../../store/actions/actionUser";
import { useForm } from "react-hook-form";
import { User } from "../../../interface/user/user";

const Account = () => {
  const dispatch = useDispatch()
  const userInfor = useSelector((state: RootState) => state.users);
  const { isLoading, user, error } = userInfor
  // const [image_url, setimage_url] = useState('' as any)


  const [displayText, setDisplayText] = useState(false);
  useEffect(() => {
    dispatch(getOneUser(user?.user._id) as never)
  }, [dispatch, user?.user._id])
  const handleClick = () => {
    setDisplayText(!displayText);
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<User>();
  const onSubmitImage = (data: User) => {
    // setimage_url(data)
  }
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-full lg:w-3/4">
        <h1 className="text-3xl normal-case font-semibold mb-5 mt-5 md:mt-0">Account Details</h1>
        {
          isLoading ? <Skeleton /> : error ? "Error" : user ?
            (
              <div className="flex border justify-between flex-row-reverse">
                <div className="bg-white  p-3 rounded-lg w-4/5 ml-3">
                  <h3 className="text-xl font-medium mb-3">Personal Info</h3>
                  <div>
                    <span className="font-medium text-lg">First Name:</span>
                    <span className="text-base"> {user.user.name}</span>
                  </div>

                  <div>
                    <span className="font-medium text-lg">E-mail:</span>{" "}
                    <span className="text-base"> {user.user.email}</span>
                  </div>
                  <button
                    onClick={handleClick}
                    className="mt-5 flex gap-1 cursor-pointer"
                  >
                    <Icon name={"AiFillEdit"} className={"text-2xl"} />
                    <span>Edit</span>
                  </button>
                </div>
                <div className=" p-2">
                  {/* <UpLoand  >
                    <Image src={[user.user.image_url]} />
                  </UpLoand> */}
                  <div className="w-40 relative cursor-pointer">
                    <Image className={`w-full ${displayText ? " opacity-70" : ""}`} src={user.user.image_url} />
                    {displayText && <div className="absolute top-0 w-full h-full  ">
                      <form className="w-full h-full" action="" onSubmit={handleSubmit(onSubmitImage)}>
                        <input {...register("image_url")} className="w-full h-full opacity-0 cursor-pointer" type="file" name="" id="" />
                      </form>

                      <p className="absolute top-16 left-6 w-full text-base  font-medium">Choose a photo</p>
                    </div>}

                  </div>
                  <p className="text-center mt-3">{moment(user.user.createdAt).format('LL')}</p>
                </div>
              </div>
            ) : "error"
        }

        {displayText && <Account_Edit handleCancel={handleClick} />}
      </div>
    </div>
  );
};

export default Account;

