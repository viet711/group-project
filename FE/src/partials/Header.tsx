import "./Header.css"
import { BsFillBagCheckFill, BsHeart } from "react-icons/bs";
import { RiAccountCircleLine } from "react-icons/ri";
import { TiDelete } from "react-icons/ti";
import { BiLogOut, BiMenu } from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom';
import { Search } from '../components/Icon/iconProject';
import Image from "../components/Image/Image";
import { useEffect, useRef, useState } from "react";
import { Tooltip } from "antd";
import { AiOutlineClose, AiOutlineLoading3Quarters } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { getProductsSearch, setLoading } from "../store/actions/actionProduct";
import UserAccount from "./Header_Account";
import useDebounced from "../components/Hook/Hook";


const Header = () => {

    const listMenu = [
        { name: "Home", path: "/" },
        { name: "Shop", path: "/list-productsAll" },
        { name: "Blog", path: "/blog" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },

    ]
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const dataProducts = useSelector((state: RootState) => state.products)
    const { productSearch, loadingHeader } = dataProducts
    const [activeLink, setActiveLink] = useState('');
    const [valueSearch, setValueSearch] = useState('');
    const [open, setOpen] = useState(true);
    const [openMenu, setOpenMenu] = useState(false);
    const inputRef = useRef(null as any);
    const debounced = useDebounced(valueSearch, 500)

    const hanldClear = () => {
        setValueSearch("")
        inputRef.current.focus();
    }
    const fetchProducts = () => {

        try {
            dispatch(setLoading(true) as any);
            dispatch(getProductsSearch(debounced) as any);
            setTimeout(() => {
                dispatch(setLoading(false) as any);
            }, 300)

        } catch (error) {
            dispatch(setLoading(false) as any);
        }
    };

    useEffect(() => {

        if (!debounced.trim()) {
            return;
        }

        fetchProducts()
        const handleClickOutside = (event: any) => {
            if (!event.target.closest('.navbar-menu-header-mobile')) {
                setOpenMenu(false);
            }
            if (!event.target.closest('.box-search-header-result')) {
                setOpen(false)
            }
        };
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };


    }, [debounced, dispatch])


    const onClickOutside = () => {
        if (valueSearch.length > 0 && productSearch.length > 0) {
            setOpen(false)
        }

    }
    const onSubmitSearch = (e: any) => {
        e.preventDefault()
        if (valueSearch.length > 0) {

            navigate(`/result?search=${valueSearch}`)
            // history.replaceState(null, '', `/result?search=${valueSearch}`)
            // loại cỏ focus
            inputRef.current.blur();
            setOpen(false)
        }


    }


    return (
        <>

            <div className="Header fixed z-50 shadow-2xl">
                <header className="min-h-[84px] bg-gray-100 w-screen">
                    <div className="content-header min-h-[84px] py-2 flex flex-col md:flex-row items-center justify-evenly">

                        <div className="logo-header flex items-center justify-between px-6 w-full md:w-auto">
                            <Link to={"/"}>
                                <img src="./logo.webp" alt="" />
                            </Link>
                            <div className="action-cart-heart flex items-center gap-10 md:hidden ">
                                <div className="heart-header">
                                    <Link className="" to={"/account/wishlist"}>
                                        <i className="relative">
                                            <BsHeart className="heart-icon text-teal-400 text-2xl " />
                                            <div className="quatity-producst  -top-2 ml-4 absolute">
                                                <span className="bg-red-500 text-white rounded-full text-xs px-1 py-[2px]">99+</span>
                                            </div>
                                        </i>
                                    </Link>
                                </div>
                                <div className="heart-header">
                                    <Link title="Cart" className="" to={"/cart"}>
                                        <i className="relative">
                                            <BsFillBagCheckFill className="heart-icon text-teal-400 text-2xl" />
                                            <div className="quatity-producst  -top-2 ml-4 absolute">
                                                <span className="bg-red-500 text-white rounded-full text-xs px-1 py-[2px]">99+</span>
                                            </div>
                                        </i>
                                    </Link>
                                </div>
                                {/* user=true */}
                                <div className="">
                                    <Link to={"/account/wishlist"}>   <UserAccount /></Link>
                                </div>

                            </div>

                        </div>


                        <div className="navbar-menu-header hidden md:block">
                            <ul className="flex items-center justify-center">
                                {listMenu.map((item, index) => (
                                    <li className="mx-2" key={index}>
                                        <Link className={`px-3 py-1 text-lg  font-medium hover:text-teal-500 ${activeLink === item.path ? 'text-teal-500 transition-opacity' : ''}`} to={item.path} onClick={() => setActiveLink(item.path)}>{item.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>


                        <div className="box-search-header-result flex items-center gap-5">
                            <Tooltip
                                className="custom-tooltip relative"
                                trigger={"focus"}// Thêm lớp tùy chỉnh ở đây
                                open={valueSearch.length > 0 && productSearch.length > 0 && open}
                                arrow={false}
                                align={{ offset: [0, 0] }}
                                placement="bottom"
                                color={"white"}
                                overlayInnerStyle={{ width: "288px", marginLeft: "-20px", }}
                                getTooltipContainer={() => document.querySelector('.search-header') as HTMLElement}
                                title={

                                    < div className="SearchResult  bg-white  max-h-52 md:max-h-96 overflow-y-auto overflow-x-hidden">
                                        <ul className="p-1  ">
                                            {productSearch.map((item, index) => (
                                                <Link onClick={onClickOutside} key={index} to={`/products/${item._id}`}>
                                                    <li className="hover:bg-gray-100 flex items-center gap-1   py-2 rounded-md">

                                                        <Image className={"w-12 h-12 object-contain"} src={item.image[0]} />


                                                        <span className="text-xs  text-black font-normal ">{item.name}</span>
                                                    </li>
                                                </Link>
                                            ))}


                                        </ul>

                                    </div>
                                }

                            >

                                <div className="w-full md:w-80">
                                    <form onSubmit={onSubmitSearch} className={`search-header relative ml-auto  w-60 focus-within:w-80  h-10 border border-teal-700 bg-gray-300 group  flex items-center justify-around pl-2 rounded-3xl ${valueSearch.length > 0 ? "w-80" : ""}`}>

                                        <input className="inp-search w-5/6 text-sm  caret-teal-400  h-6 outline-none bg-gray-300   pl-2 pr-7" type="text" name="" id="" placeholder="Search..." ref={inputRef} value={valueSearch}
                                            onChange={(e) => setValueSearch(e.target.value)}
                                            onFocus={() => setOpen(true)}


                                        />


                                        {
                                            !!valueSearch && !loadingHeader && (
                                                <span onClick={hanldClear} className="absolute clears cursor-pointer  right-[50px] top-1/2 translate-y-[-50%]" >
                                                    {/* clear */}
                                                    <TiDelete className="text-xl text-teal-400" />
                                                </span>
                                            )
                                        }

                                        {loadingHeader && (
                                            <button className="absolute loading-search-header   right-[52px] top-1/3 translate-y-[-50%] " >

                                                <AiOutlineLoading3Quarters className="text-sm text-teal-400" />
                                            </button>
                                        )}

                                        <button className="w-12 rounded-r-3xl group-hover:bg-gray-400 h-full border-l border-gray-500 flex items-center">
                                            <Search className={"w-5 text-gray-500 ml-3"} />
                                        </button>

                                    </form>
                                </div>

                            </Tooltip>
                            <div className="icon-toggle-button md:hidden">
                                {!openMenu ? (<i onClick={() => { setOpenMenu(true) }}>
                                    <BiMenu className="text-4xl text-teal-400 border  rounded-md border-teal-400" />
                                </i>) : (
                                    <i onClick={() => { setOpenMenu(false) }}>
                                        <AiOutlineClose className="text-4xl text-teal-400 border  rounded-md border-teal-400" />

                                    </i>
                                )
                                }


                            </div>
                        </div>


                        <div className="action-cart-heart md:flex items-center gap-10 hidden ">
                            <div className="heart-header">
                                <Link className="" to={"/account/wishlist"}>
                                    <i className="relative">
                                        <BsHeart className="heart-icon text-teal-400 text-3xl " />
                                        <div className="quatity-producst  -top-2 ml-6 absolute">
                                            <span className="bg-red-500 text-white rounded-full text-xs px-1 py-[2px]">99+</span>
                                        </div>
                                    </i>
                                </Link>
                            </div>
                            <div className="heart-header">
                                <Link title="Cart" className="" to={"/cart"}>
                                    <i className="relative">
                                        <BsFillBagCheckFill className="heart-icon text-teal-400 text-3xl" />
                                        <div className="quatity-producst  -top-2 ml-6 absolute">
                                            <span className="bg-red-500 text-white rounded-full text-xs px-1 py-[2px]">99+</span>
                                        </div>
                                    </i>
                                </Link>
                            </div>
                            {/* user=true */}
                            <div className="account-user"><UserAccount /></div>

                        </div>

                    </div >
                </header >
                <div className={`navbar-menu-header-mobile absolute -z-50 -mt-1 left-0 w-full shadow-2xl bg-gray-200  ${openMenu ? ' slide-in' : ' slide-out'}`}>
                    <div className="flex items-start  px-5 py-3">
                        <ul className="w-full ">
                            {listMenu.map((item, index) => (
                                <li onClick={() => {
                                    setOpenMenu(false)
                                    window.scrollTo(0, 0)
                                }} className="mx-2  hover:bg-gray-300 rounded-md" key={index}>
                                    <Link className={`px-3 py-1 text-lg  font-medium hover:text-teal-500 ${activeLink === item.path ? 'text-teal-500 transition-opacity' : ''}`} to={item.path} onClick={() => setActiveLink(item.path)}>{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                        <ul className="w-full">
                            <li onClick={() => {
                                setOpenMenu(false)
                                window.scrollTo(0, 0)
                            }} className="mx-2  hover:bg-gray-300 rounded-md">
                                <Link className={`px-3 py-1 text-lg  font-medium hover:text-teal-500`} to={"/cart"}>Cart</Link>
                            </li>
                            <li onClick={() => {
                                setOpenMenu(false)
                                window.scrollTo(0, 0)
                            }} className="mx-2  hover:bg-gray-300 rounded-md">
                                <Link className={`px-3 py-1 text-lg  font-medium hover:text-teal-500`} to={"/account"}>Account</Link>
                            </li>


                        </ul>

                    </div>
                </div>
            </div >

        </>

    )
}
export default Header
