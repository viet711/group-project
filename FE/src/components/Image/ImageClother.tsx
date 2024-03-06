import { useState } from "react";
import DefaultImage from '/ClotherErorr.png';
const ImageClother = ({ src, alt, failImage = DefaultImage, className, ...pros }: any) => {
    const [imageDefault, setimageDefault] = useState("")
    const handlDefaultImage = () => {

        setimageDefault(failImage)


    }
    return <img className={className} src={imageDefault || src} {...pros} alt={alt} onError={handlDefaultImage} />;
}

export default ImageClother 