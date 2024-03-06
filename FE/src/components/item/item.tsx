import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import Image from "../Image/Image";
import Icon from "../Icon/icon";
import { Tooltip, message } from "antd";
import { Iproduct } from "../../interface/product";
import FormatterPrice from "../FormatterPrice/FormatterPrice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { addWishlist } from "../../store/actions/actionUser";
import Message from "../Action/Message/Message";
import ImageClother from "../Image/ImageClother";
// type Props = ReactNode;
type Props = {
    buttonAdd?: string;
    product?: Iproduct
    icon?: string;
    infoProduct?: boolean
}

const Item = ({ buttonAdd, product, icon, infoProduct = true }: Props) => {

    const dispatch = useDispatch()
    const [imageHover, setImage] = useState("");
    // const [wishlist, setWishlist] = useState<Iproduct[]>([]);

    const { user } = useSelector((state: RootState) => state.users.user);
    console.log(user);



    const handleClickThumbnail = (image: string) => {
        setImage(image);
    };

    if (!product) {
        return null;
    }

    const handleAddToWishlist = async (productTym: any) => {
        if (product) {
            // const updatedWishlist = [...wishlist];
            productTym = {
                customerId: user._id,
                productId: product._id
            }
            console.log(productTym.customerId);
            Message("success", "add to wishlist ");


            await dispatch((addWishlist(productTym) as never))
        }
    };

    return (
        <div className="w-full md:w-auto m-auto content shadow-2xl rounded-lg overflow-hidden">
            <div className="w-full">
                <div className="w-full relative overflow-hidden ">
                    <Link to={`/products/${product._id}`} className="image-big ">
                        <ImageClother
                            src={imageHover || product.image[0]}
                            alt="Leather Pegged Pants"
                            className="w-full transition duration-700 ease-in-out object-cover  max-h-[200px]   md:max-h-[250px] min-h-[320px]  md:min-h-[280px] "
                        />
                    </Link>
                    <div className="prd-sale absolute top-2 left-1 min-w-[60px]">

                        {
                            product.hot_sale && product.hot_sale > 0 ?
                                <div className="py-[2px] mb-1 bg-pink-600">
                                    <span className=" m-1 block  rounded-full text-center text-sm font-medium text-white">
                                        {product.hot_sale}% SALE
                                    </span>   </div> : null
                        }



                        {
                            product.featured ?
                                <div className="py-[2px] bg-[#33c7fd]">
                                    <span className=" m-1 block  rounded-full text-center text-sm font-medium text-white">
                                        New
                                    </span>     </div> : null
                        }

                    </div>
                    <div className="prd-circle-labels absolute flex flex-col top-1 right-1 ">
                        <span className="eye bg-white flex justify-center items-center rounded-full shadow-md mt-2  cursor-pointer">
                            <i className="icon-eye text-2xl p-1 ">
                                <Tooltip title={"ADD TO WISHLIST"} placement="left">
                                    <span onClick={handleAddToWishlist}>
                                        <Icon name={icon ? icon : "BsHeart"} />
                                    </span>
                                </Tooltip>
                            </i>
                        </span>
                        <span className="eye bg-white flex justify-center items-center rounded-full shadow-md mt-2  cursor-pointer">
                            <i className="icon-eye text-2xl p-1   ">
                                <Tooltip title={"QUICK VIEW"} placement="left">
                                    <span>
                                        <Icon name={"FaRegEye"} />
                                    </span>
                                </Tooltip>
                            </i>
                        </span>
                        <div className="color-palette bg-white flex flex-col justify-center items-center w-8 rounded-full shadow-md mt-2 cursor-pointer">
                            <i className="icon-palette  ">
                                <img
                                    src={`${"colorfiter.webp" || "https://play-lh.googleusercontent.com/fn03mcSzK10OdPq_eio_Buh7BXiN8TNOGZPHHCnjtPyynK9kJhkdlbqDd0o_vZrIIw=w240-h480-rw"}`}
                                    className="w-full rounded-full"
                                    alt=""
                                />
                            </i>
                            <div className="list-color">
                                <ul className="flex flex-col gap-3">
                                    {product.colorSizes.slice(0, 4).map(({ color }, index) => (
                                        <li key={index}>
                                            <Tooltip title={color} placement="left">
                                                <div className={`bg-${color}-500 p-3 rounded-full`}></div>
                                            </Tooltip>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <ul className="list-options color-swatch absolute bottom-1 left-1 ">
                        {
                            product.image.slice(0, 3).map((image, index) =>
                                <li key={index} className={` w-10 h-10 mt-1 rounded-full hover:outline-2 hover:outline-teal-400 outline outline-1 cursor-pointer overflow-hidden  ${image === imageHover ? 'outline-2 outline-teal-400' : ""}`}>
                                    <img
                                        src={image}
                                        className={`w-full h-full object-contain p-1`}
                                        alt="Color Name"
                                        onMouseEnter={() => handleClickThumbnail(image)}

                                    />
                                </li>)
                        }
                    </ul>
                </div>
                {infoProduct ? <div className="prd-tag ">
                    <div className="prd-info">
                        <div className="prd-info-wrap bg-white">
                            <div className="prd-rating text-center pt-5 cursor-pointer">
                                <Rating
                                    name="half-rating-read"
                                    defaultValue={product.rating}
                                    precision={0.5}
                                    readOnly
                                />
                            </div>
                            <div className="text-center mt-1 cursor-pointer">
                                <span className="text-[#9e9e9e] font-normal text-sm">
                                    FOXic
                                </span>
                            </div>
                            <h2 className="prd-title text-center mt-1 cursor-pointer min-h-[80px] flex items-center justify-center">
                                <span className="text-[#282828] font-medium text-base hover:text-[#17c6aa] ">
                                    {product.name}
                                </span>
                            </h2>
                            <div className="prd-description hidden">
                                Quisque volutpat condimentum velit. Class aptent taciti
                                sociosqu ad litora torquent per conubia nostra, per inceptos
                                himenaeos. Nam nec ante sed lacinia.
                            </div>
                            <h2 className=" price  flex justify-center gap-5 text-center mt-1 cursor-pointer">

                                {product.hot_sale && product.hot_sale > 0 ? (
                                    <div className="flex gap-2">
                                        <span className="text-[#666565]  text-base line-through  ">
                                            {FormatterPrice(product.price)}
                                        </span>
                                        <span className="text-[#282828] font-medium text-base">
                                            {FormatterPrice(product.priceSale || 0)}
                                        </span>
                                    </div>

                                ) : <span className="text-[#282828] font-medium text-base">
                                    {FormatterPrice(product.priceSale!)}
                                </span>}
                            </h2>
                            <div className="mt-1 prd-action text-center btn-add  ">
                                <form action="#">
                                    <button className="btn js-prd-addtocart text-white bg-[#17c6aa] hover:bg-[#1b1a1a] rounded-sm px-4 py-2 font-semibold ">
                                        {buttonAdd ? buttonAdd : "ADD TO CART"}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div> : null}

            </div>
        </div>
    )
}
export default Item;