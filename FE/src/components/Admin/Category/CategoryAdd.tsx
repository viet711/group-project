import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Icategory } from '../../../interface/category'
import { addCategory } from '../../../store/actions/actionCategory'
import { useDispatch } from 'react-redux'
import Message from '../../Action/Message/Message'
const CategoryAdd = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { handleSubmit, register, formState: { errors }, watch } = useForm<Icategory>()
  const onSubmit: SubmitHandler<Icategory> = async (inputAdd: Icategory) => {
    try {
      console.log(inputAdd);
      await dispatch(addCategory(inputAdd) as never)
      Message("success", "Thêm danh mục thành công")
      navigate('/admin/categorys')
    } catch (error) {
      Message("error", "Thêm danh mục thất bại, đã có danh mục này rồi")
    }

  }
  return (
    <div className='m-5'>
      <span className="text-2xl mt-[-10px] font-bold">Add New Category</span>
      <div className=" gap-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="block text-gray-700 text-sm font-bold my-2" htmlFor="username">
            Name
          </label>
          <input  {...register('name', { required: true })} className="shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Category name..."></input>
          <p className='text-red-600 text-[20px]'>
            {errors.name?.type === 'required' && <small className="form-text text-muted">Trường Name là bắt buộc</small>}
          </p>
          <button className=" border rounded p-2 bg-red-500 hover:bg-red-700 font-bold py-2 px-4 text-white mt-2 ">ADD</button>
        </form>
      </div>
    </div>
  )
}


export default CategoryAdd