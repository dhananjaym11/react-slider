import React, { useState, useEffect } from 'react';
import arrowLeft from '../images/arrow-left.svg';
import arrowRight from '../images/arrow-right.svg';

const ImageSlider = ({ images }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((index + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    });

    const slideRight = () => {
        setIndex((index + 1) % images.length);
    };

    const slideLeft = () => {
        const nextIndex = index - 1;
        if (nextIndex < 0) {
            setIndex(images.length - 1);
        } else {
            setIndex(nextIndex);
        }
    };

    return (
        images.length > 0 && (
            <div className="image-slider">
                <div className="slider-item" style={{ backgroundImage: `url('${images[index].image}')` }}>
                    <h3><span>{images[index].text}</span></h3>
                </div>
                <button className='slider-btn btn-pre' onClick={slideLeft}>
                    <img src={arrowLeft} alt='left' />
                </button>
                <button className='slider-btn btn-next' onClick={slideRight}>
                    <img src={arrowRight} alt='right' />
                </button>
                <ul className="slider-dots">
                    {images.map((_, i) => (
                        <li
                            key={i}
                            className={i === index ? 'active' : undefined}
                            onClick={() => setIndex(i)}
                        ></li>
                    ))}
                </ul>
            </div>
        )
    );
};

export default ImageSlider;