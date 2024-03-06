import { Iproduct } from '../../interface/product';
type Props = {
    product: Iproduct;
}
const ProductRow = ({ product }: Props) => {
    let color = "";

    switch (product.inventoryStatus) {
        case "INSTOCK":
            color = "#22C55E"; // Xanh lá cây
            break;
        case "LOWSTOCK":
            color = "#F59E0B"; // Vàng
            break;
        default:
            color = "#EF4444"; // Đỏ
            break;
    }
    return (
        <div style={{ background: color }} className={`whitespace-nowrap text-white text-xs lg:text-base md:text-xl font-mono p-1 font-bold rounded-md`}>
            {product.inventoryStatus}
        </div>
    );
};

export default ProductRow;
