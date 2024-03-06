import { CustomTabs, ListProductNew } from "../..";
import "./List.css"
const ListProducts = () => {
  return (

    <>
      <h1 className="text-5xl text-[#222] text-center font-bold tracking-wider my-5">Collections</h1>
      <CustomTabs />
      <h1 className="text-5xl text-[#222] text-center font-bold tracking-wider my-5">New arrival</h1>
      <p className="text-base text-[#222] text-center font-medium tracking-wider mb-5">Hurry up! Limited
      </p>
      <ListProductNew />
    </>
  );
};

export default ListProducts;
