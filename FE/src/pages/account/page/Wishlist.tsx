import React from 'react';
import ListGroup from '../ListMenuAccount';
import { Item } from '../../../components';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
// import { deleteWhislts } from '../../../store/actions/actionUser';
// import Message from '../../../components/Action/Message/Message';

const Wishlist = () => {
  const userInfor = useSelector((state: RootState) => state.users);
  const { isLoading, user, error } = userInfor
  // const handleDelete = (productTym : any) => {
  //   dispatch(deleteWhislts() as never);
  //   Message("success", "Delete item successfully");
  // }
  return (
    <div className="flex">
      <div className="w-full ">
        <h1 className="text-3xl normal-case font-semibold mb-5 mt-5 md:mt-0">My Wishlist</h1>
        <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ">
          {
            isLoading ? "Loading" : error ? "Error" : user && user.favoriteProduct && user.favoriteProduct.length > 0 ?
              user.favoriteProduct.map((item: any, index: number) => <Item key={index} product={item} icon="RiDeleteBin6Line" />) : "error"
          }
          <Item buttonAdd={"VIEW FULL INFO"} />
        </main>
      </div>
    </div>
  );
};

export default Wishlist;
function dispatch(arg0: never) {
  throw new Error('Function not implemented.');
}

