import "./Detail_Products.css";
import { ImageList, ImageListItem, Rating } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { Carousel, IconButton } from "@material-tailwind/react";
import { TbTruckDelivery } from "react-icons/tb";
import { FcConferenceCall } from "react-icons/fc";
import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";
import Icon from "../../../components/Icon/icon";
import Comment from "../../../components/Comment/Comment";
import Rating_star from "../../../components/Rating/Rating_star";
import Image from "../../../components/Image/Image";
import { Image as AntdImage, Tooltip } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { getProduct } from "../../../store/actions/actionProduct";
import { useEffect, useState } from "react";
import { getCategorys } from "../../../store/actions/actionCategory";
import FormatterPrice from "../../../components/FormatterPrice/FormatterPrice";
import Loading from "../../../components/Action/Loading/Loading";
import { Iproduct } from "../../../interface/product";
import { addCart } from "../../../store/actions/actionCart";
import Message from "../../../components/Action/Message/Message";
import { Item } from "../../../components";


const Detail_Product = () => {
  const user = useSelector((state: RootState) => state.users.user.user);
  const dispatch = useDispatch();
  const dataProducts = useSelector((state: RootState) => state.products);
  const dataCategorys = useSelector((state: RootState) => state.categorys);
  const { id } = useParams()
  const { product, isLoading, error, products } = dataProducts;
  // Products cùng loại

  const productsSameCategory = products?.filter((item: Iproduct) => item.categoryId?._id === product?.categoryId)
  const productsSameCategoryID = productsSameCategory?.filter((item: Iproduct) => item._id !== product?._id)
  const { categorys } = dataCategorys
  useEffect(() => {
    dispatch(getCategorys() as never);
    dispatch(getProduct(id!) as never);
  }, [id, dispatch]);
  const [actionImage, setActionImage] = useState("")
  const [selectColor, setSelectColor] = useState("")
  const [selectSize, setSelectSize] = useState("")
  const [orderQuantity, setOrderQuantity] = useState(1)
  const handlQuantity = (name: string, maxQuantity?: number) => {

    if (name === "plus") {
      if (maxQuantity) {
        if (orderQuantity < maxQuantity) {
          setOrderQuantity(orderQuantity + 1)
        }
      }
    }
    else if (name === "minus" && orderQuantity > 1) {
      setOrderQuantity(orderQuantity - 1)
    }
  }
  const handleClickThumbnail = (image: string, color: string) => {
    setActionImage(image);
    setSelectColor(color)
  };
  const handleClickSize = (size: string, color: string) => {
    setSelectSize(size)
    setSelectColor(color)
    setOrderQuantity(1)
  }
  useEffect(() => {
    if (product && product.image.length > 0) {
      setActionImage(product.image[0]);
      setSelectColor(product.colorSizes[0]?.color || "");
      setSelectSize(product.colorSizes[0]?.sizes[0].size || "");
    }
  }, [product]);
  //addToCart
  const handleAddToCart = async (product: Iproduct) => {
    const data = {
      userId: user?._id,
      items: [
        {
          productId: product._id,
          color: [selectColor],
          size: [selectSize],
          quantity: orderQuantity,
          image: [actionImage]
        }
      ]
    }
    try {
      await dispatch(addCart(data) as never)
      Message("success", "Add to cart success")
    } catch (error) {
      console.log(error)
      Message("error", "Add to cart fail")
    }


  }
  return (
    <>
      {
        isLoading ? (
          <Loading />
        ) : error ? (
          <div className="error min-h-[300px] h-1/2 w-screen flex items-center">
            <h1 className="text-3xl font-medium italic text-center w-full">Something went wrong</h1>
          </div>
        ) :
          product ?
            (
              <div className="w-full min-h-[300px] mt-10">
                <div className="big-content w-full px-2 md:w-4/5  mx-auto">
                  {/* menu */}
                  <div className="breadcrumbs">
                    <ul className="flex items-center gap-2">
                      <Link to={"/"}>
                        <li className="underline underline-offset-4 hover:text-[#17c6aa] ">
                          Home
                        </li>
                      </Link>
                      <li>/</li>
                      <li className="underline underline-offset-4 hover:text-[#17c6aa] ">
                        {categorys.map((cate) =>
                          <Link to={"/list-productsAll"}> {cate._id === product?.categoryId ? cate.name : null}</Link>

                        )
                        }
                      </li>
                      <li>/</li>
                      <li>{product?.name}</li>
                    </ul>
                  </div>
                  {/* name và rating */}
                  <div className="name-rating mt-8 md:mt-10">
                    <div className="rating flex items-center">
                      <Rating
                        name="half-rating-read"
                        defaultValue={product?.rating}
                        precision={0.5}
                        readOnly

                      />
                      <span className="underline underline-offset-1">(17 reviews)</span>
                    </div>
                    <div className="name-product mt-3">
                      <h1 className="title-name uppercase font-medium text-[#282828] text-2xl">
                        {product?.name}
                      </h1>
                    </div>
                  </div>
                  {/* Slide và content */}


                  <div className="slider-text-content min-w-full  flex flex-col gap-5 mt-8 md:mt-10 md:flex-row justify-between  ">
                    {/* slider */}
                    <div className="slider w-full md:w-2/5 relative overflow-hidden ">
                      <Carousel
                        loop={true}
                        transition={{ duration: 1 }}
                        className="rounded-xl w-full"
                        prevArrow={({ handlePrev }) => (
                          <IconButton
                            variant="text"
                            color="blue"
                            size="lg"
                            onClick={() => {
                              handlePrev()
                              setActionImage("")
                            }}
                            className="!absolute top-2/4 -translate-y-2/4 left-4 -translate-x-[120%] icon-arrow-left"
                          >
                            <i className="text-3xl text-black icon-arrow-left">
                              <FiArrowLeftCircle />
                            </i>
                          </IconButton>
                        )}
                        nextArrow={({ handleNext }) => (
                          <IconButton
                            variant="text"
                            color="white"
                            size="lg"
                            onClick={() => {
                              handleNext()
                              setActionImage("")
                            }}
                            className="!absolute top-2/4 -translate-y-2/4 !right-4 translate-x-[120%] icon-arrow-right "
                          >
                            <i className="text-3xl text-black transform ">
                              <FiArrowRightCircle />
                            </i>
                          </IconButton>
                        )}
                      >

                        {product?.image.map((item, index) => (
                          <AntdImage
                            key={index}
                            preview={{ mask: false }}
                            src={actionImage || item}
                            style={{
                              width: "100%",
                              objectFit: "cover",
                            }}
                            className="cursor-pointer md:max-h-[670px] min-h-[500px] md:min-h-[670px]  w-full object-cover "

                          />
                        ))}
                      </Carousel>
                      {/* sale */}
                      <div className="prd-sale absolute top-2 left-1 min-w-[75px]">
                        {product?.hot_sale && product?.hot_sale > 0 ?
                          (
                            <div className=" py-[2px] bg-pink-600 my-1">
                              <span className=" m-2 block  rounded-full text-center text-sm font-medium text-white">
                                {product?.hot_sale}% SALE
                              </span>
                            </div>
                          ) : (
                            null
                          )
                        }
                        {product.featured ?
                          (
                            <div className="prd-sale py-[2px] bg-blue-300">
                              <span className=" m-2 block  rounded-full text-center text-sm font-medium text-white">
                                NEW
                              </span>
                            </div>) : (null)
                        }

                      </div>

                    </div>
                    {/* content */}
                    <div className="text-content flex-1">
                      <div className="info-price flex flex-col md:flex-row gap-5 items-center">


                        {product?.hot_sale && product?.hot_sale > 0 && product?.priceSale ? (
                          <>
                            <h1 className="text-3xl font-normal">{FormatterPrice(product.priceSale)}</h1>
                            <div className="price-old">
                              <h2 className="text-lg line-through">{FormatterPrice(product.price)}</h2>
                              <p className="text-sm font-medium text-[#fb317d]">
                                You Save: {FormatterPrice((product.price - product.priceSale))} ({product.hot_sale}%)
                              </p>
                            </div>
                          </>
                        ) : (
                          <h1 className="text-3xl font-normal">{FormatterPrice(product.price)}</h1>
                        )}

                      </div>
                      <div className="info-desc mt-5">
                        <h2 className="text-lg font-medium">Short description</h2>
                        <p className="break-words mt-3 text-sm text-[#282828]">
                          {product?.description_short}
                        </p>
                      </div>
                      <hr className="bg-gray-300 h-1 mx-auto mt-10" />
                      {/* Status */}
                      <div className="info-item-block-status mt-5">
                        <div className="box grid grid-cols-1 md:grid-cols-2 p-10 bg-[#f7f7f8]">
                          <div className="box1">
                            <p>
                              Availability: <span>{product?.inventoryStatus}</span>
                            </p>
                            <p>
                              Tax Info: <span>Tax included.</span>
                            </p>
                            <p>
                              Collection:<span> {categorys.map((cate) =>
                                cate._id === product?.categoryId ? cate.name : null
                              )
                              }</span>
                            </p>
                          </div>
                          <div className="box2">
                            <p>
                              Sectors: <span>{product.featured ? "New arrival | Limited stock" : "Limited stock"}</span>
                            </p>

                          </div>
                        </div>
                      </div>
                      {/* Options */}
                      <div className="options">
                        {/* color */}
                        <div className="color flex items-center gap-10">
                          <h2 className="text-lg font-medium">Color:</h2>
                          <ul className=" grid grid-cols-3 md:flex items-center gap-5">
                            {product?.image.slice(0, 3).map((item, index) => (
                              <li key={index} >
                                <Tooltip title={product?.colorSizes[index]?.color} color={product?.colorSizes[index]?.color} >
                                  <div className={` w-16 h-24 my-2 border cursor-pointer border-gray-400 ${actionImage === item ? 'outline outline-teal-400' : ''}  rounded-md overflow-hidden`}>
                                    <img
                                      src={item}
                                      alt={item}
                                      className={`w-full h-full object-contain `}

                                      onClick={() => handleClickThumbnail(item, product?.colorSizes[index]?.color)}
                                    />
                                  </div>
                                </Tooltip>

                              </li>

                            ))
                            }



                          </ul>
                        </div>
                        {/* size */}
                        <div className="size flex items-center gap-10 mt-5">
                          <h2 className="text-lg font-medium">Size:</h2>
                          <ul className="flex items-center gap-2">
                            {product?.colorSizes.map((colorSize, index) => {
                              if (colorSize.color === selectColor) {
                                return colorSize?.sizes?.map((size, idx) => (
                                  <li key={idx} onClick={() => handleClickSize(size.size, colorSize.color)} className={`rounded-md cursor-pointer  py-1 ${selectSize == size.size ? 'outline outline-teal-400' : ''}`}>
                                    <span className="active-bg-size hover:bg-black px-1 py-2 hover:text-white  rounded-md">
                                      Size {size.size}
                                    </span>
                                  </li>
                                ));
                              }
                              return null;
                            })}
                          </ul>
                        </div>
                        {/* quantity by size */}
                        <div className="size flex items-center gap-10 mt-5">

                          <ul className="flex items-center gap-2">
                            {product?.colorSizes.map((colorSize, index) =>
                            (
                              colorSize?.sizes?.map((sizeQuantity, idx) => {
                                if (sizeQuantity.size === selectSize && colorSize.color === selectColor) {
                                  return (
                                    <div key={index} className="quantity flex items-center gap-5">
                                      <h2 className="text-lg font-medium">Quantity:</h2>
                                      <div className="input-number flex items-center  border-2 ">
                                        <button onClick={() => handlQuantity("minus")} className="btn-minus flex w-full px-2">-</button>
                                        <input
                                          type="text"
                                          className="w-12 text-center border-x-2"
                                          value={orderQuantity}
                                          defaultValue={1}
                                          onChange={(e) => {
                                            if (parseInt(e.target.value) < 1) {
                                              setOrderQuantity(1)
                                            }
                                            else if (isNaN(parseInt(e.target.value))) {
                                              setOrderQuantity(1)
                                            }
                                            else if (parseInt(e.target.value) >= sizeQuantity.quantity) {
                                              setOrderQuantity(sizeQuantity.quantity)
                                            }
                                            else {
                                              setOrderQuantity(parseInt(e.target.value))
                                            }

                                          }}
                                        />
                                        <button onClick={() => handlQuantity("plus", sizeQuantity.quantity)} className="btn-plus px-2">+</button>
                                      </div>
                                      <span className="text-sm">{sizeQuantity.quantity} products are available </span>
                                    </div>
                                  )
                                }
                              })
                            )
                            )

                            }
                          </ul>
                        </div>
                        {/* action-button số lượng yêu thích */}
                        <div className="action-addtocart mt-5">
                          {/* số lượng */}
                          <div className="quantity flex items-center gap-5">
                            <h2 className="text-lg font-medium">Total Quantity:</h2>
                            <div className="input-number flex items-center gap-5">
                              <h1>{product.quantity}</h1>
                            </div>
                          </div>
                          {/* button */}
                          <div className="button flex items-center gap-4 mt-5">
                            <button onClick={() => handleAddToCart(product)} className="btn-addtocart flex-1 bg-[#17c6aa] text-white hover:bg-black py-4 rounded-md">
                              Add to cart
                            </button>
                            <button className="btn-wishlist">
                              <span>
                                <Icon name={"BsHeart"} className="text-2xl" />
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* mô tả và support */}
                  <div className="desc-support">
                    <div className="info-support flex flex-col gap-10 md:flex-row justify-between items-center bg-gray-100 py-2 px-1 mt-8 md:mt-20">
                      <div className="item flex items-center ">
                        <i className="text-4xl">
                          <FcConferenceCall />
                        </i>
                        <span>24/7 Support</span>
                      </div>
                      <div className="item">
                        <span>Use promocode FOXIC to get 15% discount!t</span>
                      </div>
                      <div className="item flex items-center">
                        <i className="text-4xl">
                          <TbTruckDelivery />
                        </i>
                        <span>Fast Shipping</span>
                      </div>
                    </div>
                    {/* Mô tả */}
                    <div className="info-desc mt-8 md:mt-20">
                      <h1 className="underline underline-offset-8 text-xl font-semibold my-10">
                        Description
                      </h1>
                      <div className="desc flex flex-col-reverse md:flex-row items-start gap-5">
                        <p className="mb-5 w-2/3 text-base leading-7 indent-8">
                          {product?.description}
                        </p>
                        <div className="list-images border-2 p-5 rounded-lg md:w-1/3 ">
                          <ImageList variant="masonry" cols={3} gap={8}>

                            {
                              product?.image && product?.image.length > 0 ? (
                                product?.image.slice(0, 6).map((item, index) => (
                                  <ImageListItem className="w-full" key={item}>
                                    <AntdImage key={index}
                                      src={`${item}`}
                                      className="w-full h-full object-cover"
                                      height={150}
                                      // srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                      loading="lazy">
                                    </AntdImage>

                                  </ImageListItem>
                                )

                                )) : ""}
                          </ImageList>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Đánh giá */}
                  <div className="rating-user">
                    <h1 className="my-5 text-xl font-medium">Đánh giá và Nhận xét {product?.name}</h1>
                    <div className="shadow-rating-user  min-h-[200px] w-full rounded-lg p-5 ">
                      <div className="content-rating min-h-[200px]  border-2 border-gray-300 rounded-2xl flex items-center">
                        <div className="rating-big border-r-2 p-2 text-center w-1/3 ">
                          <p>{product?.rating}/5</p>
                          <div className="rating-star">
                            <i>  <Rating
                              name="half-rating-read"
                              defaultValue={product?.rating}
                              precision={0.5}
                              readOnly
                            /></i>
                          </div>
                          <p>{product?.totalComments} đánh giá và nhận xét</p>
                        </div>
                        <div className="rating-big-item w-full">
                          <Rating_star value={3} />
                          <Rating_star value={4} />
                          <Rating_star value={3} />
                          <Rating_star value={0} />
                          <Rating_star value={1} />

                        </div>
                      </div>
                      {/* button đánh giá */}
                      <div className="button-rating-and-commnet mt-5 w-full mx-auto flex justify-center items-center ">
                        <button className="btn-rating-and-commnet text-base bg-[#17c6aa] text-white hover:bg-black py-2 px-20 rounded-xl">
                          Đánh giá ngay
                        </button>
                      </div>
                      {/* user-rating và đánh giá */}
                      <div className="user-rating-evaluate ">
                        <div className="user-rating-evaluate-item mt-5">
                          <div className="flex items-center gap-3">
                            <div className="user-rating-evaluate-item-img w-8 h-8">
                              <Image className={"w-full h-full rounded-full object-cover"} src={"https://pbs.twimg.com/media/E5XTyGpVkAAXNTp.jpg:large"} />

                            </div>
                            <span className="font-semibold text-base">Đỗ Thành Long</span>
                          </div>

                          <div className="user-rating-evaluate-item-content ml-10">

                            <div className="rating-star bg-blue-gray-50 p-2 rounded-lg">
                              <div className="flex items-center h-8 ">
                                <span className="font-semibold text-sm">Đánh giá: </span>
                                <i className="flex items-center ">  <Rating style={{ fontSize: "18px" }}
                                  name="half-rating-read"
                                  defaultValue={2.5}
                                  precision={0.5}
                                  readOnly
                                /></i>
                              </div>
                              <div className="flex items-center">
                                <span className=" font-semibold text-sm">Nhận xét: </span>
                                <p className="flex items-center text-xs">Sản phẩm rất là ok</p>
                              </div>
                            </div>

                          </div>


                        </div>
                      </div>


                      <div className="user-rating-evaluate ">
                        <div className="user-rating-evaluate-item mt-5">
                          <div className="flex items-center gap-3">
                            <div className="user-rating-evaluate-item-img w-8 h-8">
                              <Image className={"w-full h-full rounded-full object-cover"} src={"https://pbs.twimg.com/media/E5XTyGpVkAAXNTp.jpg:large"} />

                            </div>
                            <span className="font-semibold text-base">Đỗ Thành Long</span>
                          </div>

                          <div className="user-rating-evaluate-item-content ml-10">

                            <div className="rating-star bg-blue-gray-50 p-2 rounded-lg">
                              <div className="flex items-center h-8 ">
                                <span className="font-semibold text-sm">Đánh giá: </span>
                                <i className="flex items-center ">  <Rating style={{ fontSize: "18px" }}
                                  name="half-rating-read"
                                  defaultValue={2.5}
                                  precision={0.5}
                                  readOnly
                                /></i>
                              </div>
                              <div className="flex items-center">
                                <span className=" font-semibold text-sm">Nhận xét: </span>
                                <p className="flex items-center text-xs">Sản phẩm rất là ok</p>
                              </div>
                            </div>

                          </div>


                        </div>
                      </div>
                    </div>



                  </div>
                  {/* Coment user */}
                  <div className="comment">
                    <Comment />
                  </div>
                  {/* Sản phẩm cùng loại */}
                  <div className="prd-cate mt-8 md:mt-10">
                    <h1 className="text-center text-3xl font-medium my-5">
                      Similar products
                    </h1>

                    <div className="list-new-products hot-sale-scroll p-2 overflow-x-auto  ">
                      <div className="content-list-new-products w-max flex gap-2 ">
                        {productsSameCategoryID.length > 0
                          ? productsSameCategoryID.map((item, index) => {

                            return (
                              <div className=""> {/* Đặt kích thước cho nội dung bên trong */}
                                <Item product={item} key={index} />
                              </div>
                            );

                          })
                          : null}
                      </div>
                    </div>

                  </div>
                </div >
              </div >
            ) : null
      }
    </>
  );
};

export default Detail_Product;
