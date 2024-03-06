import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import Message from '../../Action/Message/Message';
import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { getColors } from '../../../store/actions/actionColor';
import { getCategorys } from '../../../store/actions/actionCategory';
import { getSizes } from '../../../store/actions/actionSize';
import { Isize } from '../../../interface/size';
import { Icolor } from '../../../interface/color';
import { Icategory } from '../../../interface/category';
import UpLoand from '../../Image/UpLoadImage';
import { getProduct, updateProduct } from '../../../store/actions/actionProduct';

const ProductEdit = () => {
  const { id } = useParams();
  const { handleSubmit, register, formState: { errors }, reset } = useForm<any>();
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const dataProduct = useSelector((state: RootState) => state.products.product);
  const dataColors = useSelector((state: RootState) => state.colors.colors);
  const dataCategorys = useSelector((state: RootState) => state.categorys.categorys);
  const dataSizes = useSelector((state: RootState) => state.sizes.sizes);
  console.log(dataProduct);
  const [currentProductId, setCurrentProductId] = useState<string | null>(null)
  const [editedImg, setEditedImg] = useState<any>([]);
  const [img, setImg] = useState<any>([]);
  const resetEditedImg = () => {
    setEditedImg([]);
  };
  const handleImage = (url: string) => {
    setImg([...img, url]);
  };
  useEffect(() => {
    if (dataProduct) {
      const { name, price, hot_sale, description, categoryId, image } = dataProduct;
      reset({ name, price, hot_sale, description, categoryId });

      // Check if the dataProduct has a valid 'image' property before setting the image state
      if (image) {
        setEditedImg(image);
      }
    }
  }, [dataProduct, reset]);
  useEffect(() => {
    // Update the currentProductId when a new product is selected
    setCurrentProductId(id!);
    dispatch(getProduct(id!) as never);

    // Reset the editedImg state when the component unmounts or when a new product is selected
    return () => {
      resetEditedImg();
    };
  }, [dispatch, id]);
  const handleImageRemove = (url: string) => {
    setImg((prevImg: any) => prevImg.filter((imageUrl: string) => imageUrl !== url));
  };
  useEffect(() => {
    dispatch(getColors() as never)
    dispatch(getCategorys() as never)
    dispatch(getSizes() as never)
  }, [dispatch])
  const [additionalDivs, setAdditionalDivs] = useState<{
    id: number;
    color: string;
    size: string;
    content: { id: number; size: string }[];
  }[]>([]);

  const handleAddButtonClickSize = (divId: number, color: string) => {
    const newDivIdSize = Date.now();
    const newDivSize = { id: newDivIdSize, size: "defaultSize" };

    setAdditionalDivs((prevDivs) => {
      const updatedDivs = prevDivs.map((div) => {
        if (div.id === divId) {
          return {
            ...div,
            content: [...div.content, newDivSize], // Append the new size to the content array
            color: color, // Ensure the color is also updated
          };
        }
        return div;
      });
      return updatedDivs;
    });
  };

  const handleAddButtonClick = () => {
    const newDivId = Date.now();
    const newDiv = { id: newDivId, color: "defaultColor", size: "defaultSize", content: [] };
    setAdditionalDivs((prevDivs) => [...prevDivs, newDiv]);
  };

  const handleRemoveDivButtonClick = (id: number) => {
    setAdditionalDivs((prevDivs) => {
      const updatedDivs = prevDivs.filter((div) => div.id !== id);
      return updatedDivs;
    });
  };

  const handleRemoveDivButtonClickSize = (divId: number, sizeId: number) => {
    setAdditionalDivs((prevDivs) => {
      const updatedDivs = prevDivs.map((div) => {
        if (div.id === divId) {
          const updatedContent = div.content.filter((size) => size.id !== sizeId);
          return { ...div, content: updatedContent };
        }
        return div;
      });
      return updatedDivs;
    });
  };

  const renderAdditionalDivsSize = (divId: number) => {
    const div = additionalDivs.find((div) => div.id === divId);
    if (div) {
      return div.content.map((size) => (
        <div key={size.id}>
          <select
            {...register(`size_${divId}_${size.id}`, { required: true })}
            name={`size_${divId}_${size.id}`}
            className='items-center space-x-4 rounded p-2 border-2 border-gray-500 mr-2'
          >
            <option value="">Select a size</option>
            {
              dataSizes && dataSizes.length > 0 ? dataSizes.map((size: Isize, index) =>
                <option key={index} value={size.name}>{size.name}</option>
              ) : ""
            }
          </select>
          <input
            type="text"
            {...register(`quantity_${divId}_${size.id}`, { required: true })}
            name={`quantity_${divId}_${size.id}`}
            className="border-gray-500 border-2 rounded p-2 w-20 mt-2 mb-2"
            placeholder="Quantity"
          />
          <p onClick={() => handleRemoveDivButtonClickSize(divId, size.id)} className="cursor-pointer w-20 middle none center mr-4 rounded-lg bg-red-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            data-ripple-light="true">- Size</p>
        </div>
      ));
    }
    return null;
  };

  const renderAdditionalDivs = () => {
    return additionalDivs.map((div) => (
      <div key={div.id} className="flex items-center space-x-4 mt-5">
        <select
          {...register(`color_${div.id}`, { required: true })}
          name={`color_${div.id}`} // Thêm name cho select color
          className="rounded p-2 border-2 border-gray-500"
        >
          <option value="">Select a color</option>
          {
            dataColors && dataColors.length > 0 ? dataColors.map((color: Icolor, index) =>
              <option key={index} value={color.name}>{color.name}</option>
            ) : ""
          }
        </select>
        <span onClick={() => handleAddButtonClickSize(div.id, div.color)} className="middle none center mr-4 rounded-lg bg-green-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer"
          data-ripple-light="true">+ Size</span>
        {renderAdditionalDivsSize(div.id)}
        <span onClick={() => handleRemoveDivButtonClick(div.id)} className="border rounded p-2 bg-red-400 hover:bg-red-500 font-bold py-2 px-4 text-white cursor-pointer">Remove</span>
      </div>
    ));
  };
  const onSubmit: SubmitHandler<any> = async ({ description, name, price, hot_sale, categoryId, description_short, ...formData }: any) => {
    const colorsAndSizes = additionalDivs.map((div) => ({
      color: formData[`color_${div.id}`],
      sizes: div.content.map((size) => ({
        size: formData[`size_${div.id}_${size.id}`],
        quantity: formData[`quantity_${div.id}_${size.id}`],
      })),
    }));
    const data = {
      name: name,
      price: price,
      hot_sale: hot_sale,
      description_short: description_short,
      image: img,
      description: description,
      categoryId: categoryId,
      colorSizes: colorsAndSizes,
    }
    try {
      await dispatch(updateProduct(data, id!) as never)
      Message("success", "Sửa sản phẩm thành công")
      navigate('/admin/products')
    } catch (error) {
      Message("error", "Sửa sản phẩm thất bại")
    }

  };
  return (
    <div>
      <span className="text-2xl mb-6">Edit Product</span>
      <form onSubmit={handleSubmit(onSubmit)} className='mt-5' >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-5">
          <div>
            <div className='mb-2'>
              <label className=" mb-2" htmlFor="name">
                Name
              </label>
              <input  {...register('name', { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name..."></input>
              <p className='text-red-600 text-[20px]'>
                {errors.name?.type === 'required' && <small className="form-text text-muted">Name field is required</small>}
              </p>
            </div>
            <div className='mb-2'>
              <label className=" my-2" htmlFor="price">
                Price
              </label>
              <input  {...register('price', { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="price" type="text" placeholder="Price..."></input>
              <p className='text-red-600 text-[20px]'>
                {errors.price?.type === 'required' && <small className="form-text text-muted">Price field is required</small>}
              </p>
            </div>
            <div className='mb-2' >
              <label className=" my-2" htmlFor="hot_sale">
                Hot Sale
              </label>
              <input defaultValue={0} {...register('hot_sale', { required: true })} type="number" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="hot_sale" placeholder="Hotsale name..."></input>
            </div>
          </div>
          <div >
            <div className='mb-2'>
              <label htmlFor="">Description:</label>
              <textarea {...register('description', { required: true })} id="message" className=" h-40 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description.."></textarea>
              <p className='text-red-600 text-[20px]'>
                {errors.description?.type === 'required' && <small className="form-text text-muted">Description field is required</small>}
              </p>
            </div>
            <div className='mb-2'>
              <label htmlFor="">Description Short:</label>
              <textarea {...register('description_short', { required: true })} id="message" className=" h-40 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description.."></textarea>
              <p className='text-red-600 text-[20px]'>
                {errors.description_short?.type === 'required' && <small className="form-text text-muted">Description Short field is required</small>}
              </p>
            </div>
            <div>
              <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">CATEGORY</label>
              <select {...register("categoryId", { required: true })} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option >Choose a category</option>
                {
                  dataCategorys && dataCategorys.length > 0 ? dataCategorys.map((category: Icategory, index) =>
                    <option key={index} value={category._id}>{category.name}</option>
                  ) : ""
                }
              </select>
              <p className='text-red-600 text-[20px]'>
                {errors.categoryId?.type === 'required' && <small className="form-text text-muted">Trường Category là bắt buộc</small>}
              </p>
            </div>
          </div>
          <div>
            <label htmlFor="">Image</label>
            {editedImg && editedImg.length > 0 && (
              <UpLoand onImageUpLoad={handleImage} onImageRemove={handleImageRemove} img={editedImg} />
            )}
          </div>
        </div>
        <div>
          <span className="mr-3">Size & Color & Quantity : </span>
          <span onClick={handleAddButtonClick} className='middle none center mr-4 rounded-lg bg-green-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    data-ripple-light="true cursor-pointer'> +</span>
          {renderAdditionalDivs()}
          <br />
          <button className="middle none center mr-4 rounded-lg bg-red-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            data-ripple-light="true">Edit Product</button>
        </div>
      </form>
    </div>
  );
};

export default ProductEdit;