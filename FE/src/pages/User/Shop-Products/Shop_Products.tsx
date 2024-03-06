import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./Shop_Products_ListAll.css"
import { Item } from "../../../components"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../store/store"
import { getProducts } from "../../../store/actions/actionProduct"
import { IoIosArrowDropdown } from "react-icons/io"
import { Tooltip } from "antd"
import { BsSortDown, BsSortDownAlt } from "react-icons/bs"
import { MdOutlineDiscount } from "react-icons/md"
import { RiTShirtLine } from "react-icons/ri"
import { PiStarThin } from "react-icons/pi"
import { AiOutlineEye } from "react-icons/ai"
import Loading from "../../../components/Action/Loading/Loading"
import { getCategorys } from "../../../store/actions/actionCategory"
import { getColors } from "../../../store/actions/actionColor"
import Comment from "../../../components/Comment/Comment"
import { getSizes } from "../../../store/actions/actionSize"
const Shop_Products = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const dataProducts = useSelector((state: RootState) => state.products)
    const dataCategorys = useSelector((state: RootState) => state.categorys)
    const dataSizes = useSelector((state: RootState) => state.sizes)
    const dataColors = useSelector((state: RootState) => state.colors)
    const { categorys } = dataCategorys
    const { products, error, isLoading } = dataProducts
    const { colors } = dataColors
    const { sizes } = dataSizes
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [viewMore, setViewMore] = useState(8)
    const [selectedOption, setSelectedOption] = useState("");
    useEffect(() => {
        dispatch(getProducts() as never)
        dispatch(getCategorys() as never)
        dispatch(getColors() as never)
        dispatch(getSizes() as never)
    }, [dispatch])
    const hanldViewMore = () => {
        setIsLoadingMore(true);
        setTimeout(() => {
            setViewMore(viewMore + 8)
            setIsLoadingMore(false);
        }, 1000)
    }
    const hanldByCategory = (category?: string, option?: string) => {
        dispatch(getProducts(undefined, undefined, undefined, undefined, category) as never);
        const nameCate = categorys.filter(item => item._id === category)
        navigate(`?${new URLSearchParams({ category: nameCate[0].name })}`);
        setSelectedOption(option!);

    }
    const hanldBySize = (size: string, option?: string) => {
        dispatch(getProducts(undefined, undefined, size) as never);
        navigate(`?${new URLSearchParams({ size })}`);
        setSelectedOption(option!);
    }
    const hanldByColor = (color: string, option?: string) => {
        dispatch(getProducts(undefined, undefined, undefined, color) as never)
        navigate(`?${new URLSearchParams({ color })}`);
        setSelectedOption(option!);
    }
    const hanldOderby = (order: string, keyword: string, option?: string) => {
        dispatch(getProducts(order, keyword) as never)
        navigate(`?${new URLSearchParams({ order, keyword })}`)
        setSelectedOption(option!);
    }



    return (
        <>
            {
                isLoadingMore ?
                    (<Loading />) :
                    isLoading ? (
                        <div className="pt-20"> <Loading /></div>
                    ) : error ? (
                        <div className="error min-h-[300px] h-1/2 w-screen flex items-center ">
                            <h1 className="text-3xl font-medium italic text-center w-full">Something went wrong</h1>
                        </div>
                    ) :
                        products ?
                            (
                                <div className="box-container">
                                    <div className="box-content mt-10">
                                        <div className="big-content w-full px-2 md:w-11/12  mx-auto">
                                            {/* menu */}
                                            <div className="breadcrumbs">
                                                <ul className="flex items-center gap-2">
                                                    <Link to={"/"}>
                                                        <li className="underline underline-offset-4 hover:text-[#17c6aa] ">
                                                            Home
                                                        </li>
                                                    </Link>
                                                    <li>/</li>
                                                    <li className=" hover:text-[#17c6aa] ">
                                                        List Products All
                                                    </li>


                                                </ul>
                                            </div>
                                            {/* products-sale*/}
                                            <div className="banner-products-new">
                                                <div className="content-banner bg-gradient-to-t from-white to-teal-500 p-3 rounded-lg my-10 ">
                                                    <h1 className="text-new-products uppercase text-4xl font-black text-white">Hot Sale</h1>
                                                    <div className="list-new-products hot-sale-scroll p-2 overflow-x-auto  ">
                                                        <div className="content-list-new-products w-max flex gap-2 ">
                                                            {products.length > 0
                                                                ? products.slice(0, 6).map((item, index) => {
                                                                    if (item.hot_sale) {
                                                                        return (
                                                                            <div className=""> {/* Đặt kích thước cho nội dung bên trong */}
                                                                                <Item product={item} key={index} infoProduct={false} />
                                                                            </div>
                                                                        );
                                                                    }
                                                                })
                                                                : null}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* list */}
                                            <div className="list_AllProducts ">
                                                {/* sort */}
                                                <div className="content-list-sort">
                                                    <div className="sort-products-list">
                                                        <h1 className="font-semibold text-lg text-[#4a4a4a]  my-3">Select by criteria</h1>
                                                        <div className="list-sort flex flex-col md:flex-row gap-2">
                                                            <Tooltip placement="bottom" trigger={"click"} color="white"
                                                                title={
                                                                    <div className="list-size-option">
                                                                        <ul className="grid grid-cols-3  p-1">
                                                                            {categorys.length > 0 ? categorys.map((item, index) => (
                                                                                <li onClick={() => hanldByCategory(item._id, "Category")} key={index} className="cursor-pointer flex items-center justify-center gap-1 bg-blue-gray-50  m-[1px] px-2  py-1 rounded-lg border-gray-300 border text-black">{item.name}</li>
                                                                            )) : null
                                                                            }


                                                                        </ul>
                                                                    </div>
                                                                }
                                                            >
                                                                <div className={`btn-sort-option cursor-pointer flex items-center gap-1  px-3 py-2 rounded-lg  border ${selectedOption === "Category" ? "bg-teal-50 border-teal-400 text-teal-600" : "bg-blue-gray-50"}`}>
                                                                    <button className="font-light text-sm">Categorys</button>
                                                                    <i><IoIosArrowDropdown /></i>
                                                                </div>
                                                            </Tooltip>
                                                            <Tooltip placement="bottomRight" trigger={"click"} color="white"
                                                                title={
                                                                    <div className="list-size-option">

                                                                        {
                                                                            sizes && sizes.length > 0 ?
                                                                                (
                                                                                    <ul className="grid grid-cols-3 p-1">
                                                                                        {
                                                                                            sizes.map((item, index) => (
                                                                                                <li onClick={() => hanldBySize(item.name, "Size")} key={index} className="bg-teal-500 m-1 cursor-pointer flex  items-center justify-center text-white text-center w-8 h-8 rounded-full">{item.name}</li>
                                                                                            ))
                                                                                        }
                                                                                    </ul>
                                                                                )

                                                                                : (

                                                                                    <h1 className="text-black text-center px-5 py-3">No size</h1>

                                                                                )
                                                                        }



                                                                    </div>
                                                                }
                                                            >
                                                                <div className={`btn-sort-option border cursor-pointer flex items-center gap-1 px-3 py-2 rounded-lg ${selectedOption === "Size" ? "bg-teal-50 border-teal-400 text-teal-600" : "bg-blue-gray-50"}`}>
                                                                    <button className={`   font-light text-sm `}>Size</button>
                                                                    <i><IoIosArrowDropdown /></i>
                                                                </div>
                                                            </Tooltip>

                                                            <Tooltip placement="bottomRight" trigger={"click"} color="white"
                                                                title={
                                                                    <div className="list-size-option">
                                                                        <ul className="grid grid-cols-10 p-2">
                                                                            {colors && colors.length > 0 ? colors?.map((item, index) => (

                                                                                <button onClick={() => hanldByColor(item.name, "Color")} key={index} style={{ backgroundColor: item.name }} className={`rounded-sm border-2 border-gray-400 m-1 p-2`}></button>
                                                                            )) : null}


                                                                        </ul>
                                                                    </div>
                                                                }
                                                            >
                                                                <div className={`btn-sort-option cursor-pointer flex items-center gap-1  px-3 py-2 rounded-lg border ${selectedOption === "Color" ? "bg-teal-50 border-teal-400 text-teal-600" : "bg-blue-gray-50"}`}>
                                                                    <button className="font-light text-sm">Color</button>
                                                                    <i><IoIosArrowDropdown /></i>
                                                                </div>
                                                            </Tooltip>


                                                        </div>

                                                        <h1 className="font-semibold text-lg text-[#4a4a4a] my-3">Sorted by</h1>
                                                        <div className="sorted-by flex flex-wrap gap-3 cursor-pointer overflow-x-auto">
                                                            {/* price */}
                                                            <div onClick={() => hanldOderby("price", "desc", "High-Low price")} className={`list-sorted-by flex  md:flex-row gap-2   md:px-3 md:py-2 rounded-lg  border 
                                                            ${selectedOption === "High-Low price" ? "bg-teal-50 border-teal-400 text-teal-600" : "bg-blue-gray-50"}  `}>

                                                                <div className="btn-option High-Low price flex items-center gap-1">
                                                                    <i className="text-lg"><BsSortDown /></i>
                                                                    <button className="text-xs">High-Low price</button>
                                                                </div>

                                                            </div>
                                                            {/* price */}
                                                            <div onClick={() => hanldOderby("price", "asc", "Low-High Price")} className={`list-sorted-by flex flex-col md:flex-row gap-2   px-3 py-2 rounded-lg border 
                                                            ${selectedOption === "Low-High Price" ? "bg-teal-50 border-teal-400 text-teal-600" : "bg-blue-gray-50 border-gray-300 "}  `}>
                                                                <div className="btn-option High-Low price flex items-center gap-1">
                                                                    <i className="text-lg"><BsSortDownAlt /></i>
                                                                    <button className="text-xs">Low-High Price</button>
                                                                </div>
                                                            </div>
                                                            {/* Hot  */}
                                                            <div onClick={() => hanldOderby("hot_sale", "desc", "Hot promotion")} className={`list-sorted-by flex flex-col md:flex-row gap-2   px-3 py-2 rounded-lg border 
                                                            ${selectedOption === "Hot promotion" ? "bg-teal-50 border-teal-400 text-teal-600" : "bg-blue-gray-50 border-gray-300 "}  `}>
                                                                <div className="btn-option High-Low price flex items-center gap-1">
                                                                    <i className="text-lg"><MdOutlineDiscount /></i>
                                                                    <button className="text-xs">Hot promotion</button>
                                                                </div>
                                                            </div>
                                                            {/* New */}
                                                            <div onClick={() => hanldOderby("featured", "desc", "New Products")} className={`list-sorted-by flex flex-col md:flex-row gap-2   px-3 py-2 rounded-lg border 
                                                            ${selectedOption === "New Products" ? "bg-teal-50 border-teal-400 text-teal-600" : "bg-blue-gray-50 border-gray-300 "}  `}>
                                                                <div className="btn-option High-Low price flex items-center gap-1">
                                                                    <i className="text-lg"><RiTShirtLine /></i>
                                                                    <button className="text-xs">New Products</button>
                                                                </div>
                                                            </div>
                                                            {/* Rating */}
                                                            <div onClick={() => hanldOderby("rating", "desc", "Rating")} className={`list-sorted-by flex flex-col md:flex-row gap-2   px-3 py-2 rounded-lg border 
                                                            ${selectedOption === "Rating" ? "bg-teal-50 border-teal-400 text-teal-600" : "bg-blue-gray-50 border-gray-300 "}  `}>
                                                                <div className="btn-option High-Low price flex items-center gap-1">
                                                                    <i className="text-lg"><PiStarThin /></i>
                                                                    <button className="text-xs">Rating</button>
                                                                </div>
                                                            </div>
                                                            {/* eye */}
                                                            <div onClick={() => hanldOderby("totalComments", "desc", "Most view")} className={`list-sorted-by flex flex-col md:flex-row gap-2   px-3 py-2 rounded-lg border 
                                                            ${selectedOption === "Most view" ? "bg-teal-50 border-teal-400 text-teal-600" : "bg-blue-gray-50 border-gray-300 "}  `}>
                                                                <div className="btn-option High-Low price flex items-center gap-1">
                                                                    <i className="text-lg"><AiOutlineEye /></i>
                                                                    <button className="text-xs">Most view</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="list-products-item mt-10">
                                                    {
                                                        products && products.length > 0 ?
                                                            (
                                                                <div className="content-list-new-products   grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                                                                    {
                                                                        products.slice(0, viewMore).map((item, index) => {
                                                                            return (
                                                                                <div className="w-full">  <Item product={item} key={index} /></div>
                                                                            )
                                                                        }
                                                                        )}
                                                                </div>
                                                            )
                                                            : <div className="error min-h-[300px] h-1/2  flex items-center justify-center">
                                                                <h1 className="text-3xl font-medium italic text-center w-full">No products</h1>
                                                            </div>

                                                    }


                                                </div>
                                                {
                                                    products.length - viewMore > 0 ? <div className="text-viewMore w-full flex justify-center my-10">
                                                        <button className="text-sm text-gray-700 py-2 px-20 rounded-xl view-more-shadow" onClick={hanldViewMore}>
                                                            View More {products.length - viewMore > 0 ? `${products.length - viewMore}` : null} Products
                                                        </button>
                                                    </div> : null
                                                }

                                                <div className="comment-list-products my-10">
                                                    <Comment />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div >
                            ) : <div className="error min-h-[300px] h-1/2 w-screen flex items-center">
                                <h1 className="text-3xl font-medium italic text-center w-full">No products</h1>
                            </div>
            }
        </>
    )
}

export default Shop_Products