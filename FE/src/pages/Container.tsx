import { BannerHome, BannerCaption, BannerCategory, HeaderHomeInfo } from "../components";
import { ListProducts } from '../components'
type Props = object

const Container = (props: Props) => {
    return (
        <div>
            <BannerHome />
            <BannerCategory />
            <ListProducts />
            <BannerCaption />
            <HeaderHomeInfo />
        </div>
    )
}

export default Container