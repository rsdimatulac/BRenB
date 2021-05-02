import { useState } from "react";
import { MdKeyboardArrowLeft as LeftArrow, MdKeyboardArrowRight as RightArrow } from "react-icons/md";
import "./ImageSlider.css";

const ImageSlider = ({ imagesArray }) => {

    const [currentImg, setCurrentImg] = useState(0);
    const length = imagesArray?.length;
    const nextSlide = () => {
        setCurrentImg(currentImg === length - 1 ? 0 : currentImg + 1);
    };

    const prevSlide = () => {
        setCurrentImg(currentImg === 0 ? length - 1 : currentImg - 1);
    };

    if (!Array.isArray(imagesArray) || imagesArray.length <= 0) {
        return null;
    }

    return (
        <section className="slider">
            <LeftArrow className="left__arrow" onClick={prevSlide} />
            <RightArrow className="right__arrow" onClick={nextSlide} />
            {imagesArray?.map((image, index) => {
                return (
                    <div
                        className={index === currentImg ? 'slide active' : 'slide'}
                        key={index}
                    >
                        {index === currentImg && (
                            <img src={image.url} alt="" className="image" />
                        )}
                    </div>
                )
            })}
        </section>
    )
}

export default ImageSlider;
