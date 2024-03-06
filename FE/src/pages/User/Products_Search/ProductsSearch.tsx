import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { RootState } from "../../../store/store"
import { getProducts, getProductsSearch } from "../../../store/actions/actionProduct"
import Loading from "../../../components/Action/Loading/Loading"
import { IoIosArrowDropdown } from "react-icons/io"
import { Tooltip } from "antd"
import { getCategorys } from "../../../store/actions/actionCategory"
import { getColors } from "../../../store/actions/actionColor"
import { useNavigate } from "react-router-dom"
import { Item } from "../../../components"

const ProductsSearch = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const searchs = new URLSearchParams(location.search)
    const keywords = searchs.get("search")
    const dataSearchResult = useSelector((state: RootState) => state.products)
    const dataCategorys = useSelector((state: RootState) => state.categorys)
    const dataSizes = useSelector((state: RootState) => state.sizes)
    const dataColors = useSelector((state: RootState) => state.colors)
    const { productSearch, isLoading, error } = dataSearchResult
    const { categorys } = dataCategorys
    const { colors } = dataColors
    const { sizes } = dataSizes
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");
    const [viewMore, setViewMore] = useState(8)
    useEffect(() => {
        if (keywords) {
            dispatch(getProductsSearch(keywords) as never)
        }
    }, [keywords, dispatch])
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
                    (<div className="pt-20"> <Loading /></div>) :
                    isLoading ? (
                        <div className="pt-20"> <Loading /></div>
                    ) : error ? (
                        <div className="error min-h-[300px] h-1/2 w-screen flex items-center ">
                            <h1 className="text-3xl font-medium italic text-center w-full">Something went wrong</h1>
                        </div>
                    ) : productSearch && productSearch.length > 0 ? (
                        <>
                            <div className="container-search">
                                <div className="content-box flex mt-10">
                                    <div className="box-left w-1/4 filter">
                                        <div className="box-filter hidden w-2/3 m-auto">
                                            <div className="list-sort flex  md:flex-col flex-row gap-2">
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
                                        </div>
                                    </div>
                                    <div className="box-right products w-3/4">
                                        {
                                            productSearch.length > 0 ? (
                                                <div className="content-list-new-products  grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-1">
                                                    {
                                                        (productSearch).slice(0, viewMore).map((item, index) => (
                                                            <Item key={index} product={item} />
                                                        ))
                                                    }
                                                </div>
                                            ) : (<div className="error min-h-[250px] h-1/2  flex items-center ">
                                                <h1 className="text-3xl font-medium italic text-center w-full">No products</h1>
                                            </div>
                                            )
                                        }
                                        {
                                            productSearch.length - viewMore > 0 ? <div className="text-viewMore w-full flex justify-center my-10">
                                                <button className="text-sm text-gray-700 py-2 px-20 rounded-xl view-more-shadow" onClick={hanldViewMore}>
                                                    View More {ProductsSearch.length - viewMore > 0 ? `${ProductsSearch.length - viewMore}` : null} Products
                                                </button>
                                            </div> : null
                                        }

                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (

                        <div className="error min-h-[300px] h-1/2 w-screen flex items-center">
                            <h1 className="text-2xl font-normal  text-center w-full">No products For:  <i>{keywords}</i></h1>
                        </div>
                    )

            }
        </>
    )
}

export default ProductsSearch