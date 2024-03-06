import React from 'react'
import { Input  } from 'antd'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Isize } from '../../../interface/size';
import { addSize } from '../../../store/actions/actionSize';
import Message from '../../Action/Message/Message';
const SizeAdd = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const {handleSubmit,register,formState:{errors},watch}=useForm<Isize>()
  const onSubmit: SubmitHandler<Isize> = async (inputAdd: Isize) => {
    try {
      console.log(inputAdd);
      await dispatch(addSize(inputAdd) as never)
      Message("success", "Thêm size thành công")
      navigate('/admin/products/sizes')
    } catch (error) {
      Message("error", "Thêm size thất bại, đã có size này rồi")
    }

  }
  return (
    <div className='m-5'>
      <span className="text-2xl mt-[-10px] font-bold">Add New Size</span>
      <div className=" gap-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="block text-gray-700 text-sm font-bold my-2" htmlFor="username">
            Name
          </label>
          <input  {...register('name', { required: true })} className="shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Size name..."></input>
          <p className='text-red-600 text-[20px]'>
            {errors.name?.type === 'required' && <small className="form-text text-muted">Trường Name là bắt buộc</small>}
          </p>
          <button className=" border rounded p-2 bg-red-500 hover:bg-red-700 font-bold py-2 px-4 text-white mt-2 ">ADD</button>
        </form>
      </div>
    </div>
  )
}

export default SizeAdd