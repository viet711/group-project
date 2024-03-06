import { FaRegPaperPlane } from "react-icons/fa"


const Comment_Rely = () => {
    return (
        <>
            <div className="inp-comments ml-2 md:ml-10 mt-3 flex  ">
                <textarea className="inp-comment w-full text-sm rounded-lg min-h-[120px] max-h-72 px-2 pt-2 outline-none" name="" id="" placeholder="Xin mời để lại câu hỏi, CellphoneS sẽ trả lời lại trong 1h, các câu hỏi sau 22h - 8h sẽ được trả lời vào sáng hôm sau"></textarea>
                <button className="flex items-center gap-1 ml-2 px-3 bg-red-700 text-white font-medium max-h-10 min-h-0 rounded-lg">
                    <i className="text-lg"><FaRegPaperPlane /></i>
                    Gửi
                </button>
            </div>
        </>
    )
}

export default Comment_Rely