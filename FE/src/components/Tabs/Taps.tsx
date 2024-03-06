import { getCategorys, getOneCategory } from "../../store/actions/actionCategory";
import { useDispatch, useSelector } from 'react-redux';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { Item } from "..";
import { RootState } from "../../store/store";
import { useEffect } from "react";
import Loading from "../Action/Loading/Loading";

export default function CustomTabs() {
  const dispatch = useDispatch();
  const dataCategorys = useSelector((state: RootState) => state.categorys);
  const { categorys, isLoading, error, category } = dataCategorys;
  useEffect(() => {
    dispatch(getCategorys() as never);
  }, [dispatch]);
  useEffect(() => {

    if (categorys && categorys.length > 0) {
      const firstCategoryId = categorys[0]._id;
      dispatch(getOneCategory(firstCategoryId!) as never);
    }
  }, [categorys, dispatch]);
  const handleTabChange = (id: string) => {
    dispatch(getOneCategory(id) as never);
  };

  return (
    <Tabs value={"Women"}>
      <TabsHeader className="w-3/5 mx-auto">
        {isLoading ? (
          <Loading />
        ) : error ? (
          "Error"
        ) : categorys ? (
          categorys.map((cate) => (
            <Tab
              onClick={() => handleTabChange(cate._id || "")}
              key={cate._id}
              value={cate.name}
            >
              {cate.name}
            </Tab>
          ))
        ) : null}
      </TabsHeader>
      <TabsBody>
        {isLoading ? (
          <Loading />
        ) : error ? (
          "Error....."
        ) : category && category.products && category.products.length > 0 ? (

          <TabPanel
            key={category._id}
            value={category.name}
            className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-4 px-4 mt-5"
          >
            {category.products.map((product, index) => (
              <Item key={index} product={product} />
            ))}
          </TabPanel>

        ) : (
          "No products available."
        )}
      </TabsBody>

    </Tabs>
  )
}
