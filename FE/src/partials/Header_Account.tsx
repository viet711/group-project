import { Tooltip } from "antd"
import { Link } from "react-router-dom"
import Image from "../components/Image/Image"
import { BiLogOut } from "react-icons/bi"
import { RiAccountCircleLine } from "react-icons/ri"
import { useDispatch } from "react-redux"
import Message from "../components/Action/Message/Message"
import { logoutUser } from "../store/actions/actionUser"
const UserAccount = () => {
    const UserAccount = JSON.parse(localStorage.getItem("user") as string)
    const dispatch = useDispatch()
    const account = [
        { title: "Detail Account", icon: <RiAccountCircleLine />, path: "/account" },
        { title: "Logout", icon: <BiLogOut />, path: "/", logout: true }
    ]
    const handleLogout = async () => {
        try {
            await dispatch(logoutUser() as never)
            Message("success", "Logout success")
        } catch (err) {
            Message("error", "Logout failed")
        }

    }

    return (
        <>

            <div className=" flex items-center ">
                {UserAccount ? (
                    <div className="w-10 h-10 ">
                        <Tooltip trigger={"click"} color={"white"}
                            overlayInnerStyle={{ width: "200px" }}
                            placement="bottom"
                            arrow={false}
                            getTooltipContainer={() => document.querySelector('.account-user') as HTMLElement}
                            title={
                                <div className="flex items-center ">
                                    <ul className="p-1 w-full">
                                        {account.map((item, index) => (
                                            <Link key={index} to={item.path}>
                                                <li onClick={() => item.logout ? handleLogout() : null} className="hover:bg-gray-100 flex items-center gap-1  pl-1 pr-10 py-1 rounded-md">
                                                    <i className="text-xl text-teal-400">
                                                        {item.icon}
                                                    </i>
                                                    <span className="text-md text-black font-normal">{item.title}</span>
                                                </li>
                                            </Link>
                                        ))}


                                    </ul>
                                </div>
                            }

                        >
                            <Image className={"w-full h-full object-cover rounded-full cursor-pointer"} src={UserAccount.user.image_url} />
                        </Tooltip>

                    </div>
                ) : (
                    <div className="sigin_sigup">
                        <Link to={"/signup"}>    <button className="px-3 py-2 bg-teal-400 rounded-md text-white hover:bg-teal-500">Sign up now</button></Link>
                    </div>
                )

                }

            </div>

        </>
    )
}
export default UserAccount