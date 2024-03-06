import { useState } from "react";
import Image from "../Image/Image"
import { LiaCommentsSolid } from 'react-icons/lia'
import { BsClock } from 'react-icons/bs'
import "./Comment.css"

import Comment_Rely from "./Comment_Rely";
const Comment = () => {
    const [comment, setComment] = useState(false);
    const handlRely = () => {
        setComment(!comment)
    }
    return (
        <>

            <h1 className="my-5 text-xl font-medium">Hỏi và Đáp</h1>
            <div className=" shadow-content-comment content min-h-[200px] w-full rounded-lg p-5">

                <div className="comment-user">
                    <div className="inp-question-user">
                        <Comment_Rely />
                    </div>
                    {/* user comemt 1 */}
                    <div className="user-image mt-5">
                        <div className="flex items-center gap-3 relative">
                            <div className="w-8 h-8 ">
                                <Image className={"w-full h-full rounded-full object-cover"} src={"https://pbs.twimg.com/media/E5XTyGpVkAAXNTp.jpg:large"} />
                            </div>
                            <span className="font-semibold text-base">Đỗ Thành Long</span>
                            <i className="data-time absolute right-2 text-xs text-gray-800 font-semibold flex items-center gap-1"><BsClock /> 12/2020</i>
                        </div>
                        <div className="comment-text-user relative p-3  rounded-lg min-h-[70px] mt-2 ml-8">
                            <p className="text-sm text-gray-800">Sản phẩm tốt, giá cả hợp lý</p>
                            <div className="button-reply absolute right-5 bottom-5">
                                <button onClick={handlRely} className="flex items-center gap-1 text-red-500">
                                    <i className="text-red-500 text-lg"><LiaCommentsSolid /></i>
                                    <span className="text-sm font-semibold">Trả Lời</span>
                                </button>


                            </div>
                        </div>
                    </div>
                    {/* admin-commet */}
                    <div className="Admin-image mt-5 ml-10">
                        <div className="flex items-center gap-3 relative">
                            <div className="w-8 h-8 ">
                                <Image className={"w-full h-full rounded-full object-cover"} src={"https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/logo.webp"} />
                            </div>
                            <span className="font-semibold text-base">Quản Trị Viên</span>
                            <i className="data-time absolute right-2 text-xs text-gray-800 font-semibold flex items-center gap-1 "><BsClock />12/2020</i>
                        </div>
                        <div className="comment-text-user relative p-3 rounded-lg min-h-[150px] mt-2 ml-8">
                            <p className="text-sm text-gray-800 mb-10   ">Dạ Cellphones xin chào anh Thành
                                Xiaomi Redmi Note 12 Pro 5G giá hiện tại 8.790.000 ( HN )
                                khuyến mãi Nhận khuyến mại giảm giá hoặc Sim 4G Mobifone MAX90 6GB/ngày , trừ quà tặng còn 8.290.000 ạ
                                Mình ở khu vực tỉnh thành nào , em kiểm tra và hỗ trợ mình đặt hàng ạ
                                Thân mến </p>
                            <div className="button-reply absolute right-5 bottom-5">
                                <button onClick={handlRely} className="flex items-center gap-1 text-red-500">
                                    <i className="text-red-500 text-lg"><LiaCommentsSolid /></i>
                                    <span className="text-sm font-semibold">Trả Lời</span>
                                </button>


                            </div>
                        </div>

                    </div>
                    {comment &&
                        <Comment_Rely />
                    }
                    {/* user comemt 2 */}
                    {/* <div className="user-image mt-5">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 ">
                                <Image className={"w-full h-full rounded-full object-cover"} src={"https://pbs.twimg.com/media/E5XTyGpVkAAXNTp.jpg:large"} />
                            </div>
                            <span className="font-semibold text-base">Đỗ Thành Long</span>
                        </div>
                        <div className="comment-text-user p-3 rounded-lg min-h-[70px] mt-5 ml-8">
                            <p className="text-sm text-gray-800">Sản phẩm tốt, giá cả hợp lý</p>
                        </div>
                    </div> */}
                </div>
            </div>


        </>
    )
}

export default Comment