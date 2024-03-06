import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { useNavigate, useParams } from 'react-router-dom';
import { getOneSize, updateSize } from '../../../store/actions/actionSize';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Isize } from '../../../interface/size';
import Message from '../../Action/Message/Message';

const SizeEdit = () => {
  const dispatch = useDispatch();
  const dataSizes = useSelector((state: RootState) => state.sizes.size);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getOneSize(id!) as never);
  }, [dispatch, id]);

  const { handleSubmit, register, formState: { errors }, reset } = useForm<Isize>();
  useEffect(() => {
    if (dataSizes) {
      const { name } = dataSizes;
      reset({ name });
    }
  }, [dataSizes, reset]);
  const onSubmit: SubmitHandler<Isize> = async (inputEdit: Isize) => {
    try {
      await dispatch(updateSize(inputEdit, id!) as never);
      Message('success', 'Sửa size thành công');
      navigate('/admin/products/sizes');
    } catch (error) {
      Message('error', 'Sửa size thất bại, đã có size này rồi');
    }
  };
  return (
    <div className='m-5'>
      <span className='text-2xl mt-[-10px] font-bold'>Edit New Size</span>
      <div className='gap-6'>
        <form onSubmit={handleSubmit(onSubmit)}>

          <label className='block text-gray-700 text-sm font-bold my-2' htmlFor='username'>
            Name
          </label>
          <input
            {...register('name', { required: true })}
            className='shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='username'
            type='text'
            placeholder='Size name...'
          ></input>
          <p className='text-red-600 text-[20px]'>
            {errors.name?.type === 'required' && <small className='form-text text-muted'>Trường Name là bắt buộc</small>}
          </p>
          <button className='border rounded p-2 bg-red-500 hover:bg-red-700 font-bold py-2 px-4 text-white mt-2'>Edit</button>
        </form>
      </div>
    </div>
  )
}

export default SizeEdit