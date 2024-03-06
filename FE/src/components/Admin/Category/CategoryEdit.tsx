import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { Icategory } from '../../../interface/category';
import { getOneCategory, updateCategory } from '../../../store/actions/actionCategory';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import Message from '../../Action/Message/Message';
import { useEffect } from 'react';
const CategoryEdit = () => {
  const dispatch = useDispatch();
  const dataCategorys = useSelector((state: RootState) => state.categorys.category);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getOneCategory(id!) as never);
  }, [dispatch, id]);

  const { handleSubmit, register, formState: { errors }, reset } = useForm<Icategory>();
  useEffect(() => {
    if (dataCategorys) {
      const { name } = dataCategorys;
      reset({ name });
    }
  }, [dataCategorys, reset]);
  const onSubmit: SubmitHandler<Icategory> = async (inputEdit: Icategory) => {
    try {
      await dispatch(updateCategory(inputEdit, id!) as never);
      Message('success', 'Sửa danh mục thành công');
      navigate('/admin/categorys');
    } catch (error) {
      Message('error', 'Sửa danh mục thất bại, đã có danh mục này rồi');
    }
  };
  return (
    <div className='m-5'>
      <span className='text-2xl mt-[-10px] font-bold'>Edit New Category</span>
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
            placeholder='Color name...'
          ></input>
          <p className='text-red-600 text-[20px]'>
            {errors.name?.type === 'required' && <small className='form-text text-muted'>Trường Name là bắt buộc</small>}
          </p>
          <button className='border rounded p-2 bg-red-500 hover:bg-red-700 font-bold py-2 px-4 text-white mt-2'>Edit</button>
        </form>
      </div>
    </div>
  );
};
export default CategoryEdit