import { AiFillStar } from "react-icons/ai"

type Props = {
    value: number
}
const Rating_star = ({ value }: Props) => {
    return (
        <>
            <div className="slect-rating flex items-center justify-center gap-1 w-full px-3 ">
                <div className="star flex items-center ">
                    <span>5</span>
                    <i className="text-[#f59e0b]"> <AiFillStar /></i>
                </div>
                <progress max="5" value={value} className="bg-[#17c6aa] rounded-sm h-2 w-10/12"></progress>
                <div className="evaluate flex items-center">
                    <span className="text-xs text-gray-500">3 đánh giá</span>

                </div>
            </div>
        </>
    )
}

export default Rating_star