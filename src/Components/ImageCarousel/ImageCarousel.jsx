import React, {useState, useEffect} from "react";
import "./ImageCarousel.css";

const images = [
    {
        src: 'https://picsum.photos/id/600/600/400',
        alt: 'Forest'
    },
    {
        src: 'https://picsum.photos/id/100/600/400',
        alt: 'Beach'
    },
    {
        src: 'https://picsum.photos/id/200/600/400',
        alt: 'Yak'
    },
    {
        src: 'https://picsum.photos/id/300/600/400',
        alt: 'Hay'
    }, {
        src: 'https://picsum.photos/id/400/600/400',
        alt: 'Plants'
    }, {
        src: 'https://picsum.photos/id/500/600/400',
        alt: 'Building'
    }
];

const ImageCarousel = () => {

    const [current, setCurrent] = useState(0);
    useEffect(() => {
        setCurrent(0)
    }, [])

    const curImage = images[current];

    const changeImage = (type) => {

        if (type === "next") {
            setCurrent(images.length === (current + 1) ? 0 : current + 1);
        } else {
            setCurrent(0 === current ? images.length - 1 : current - 1);
        }

    }

    return (
        <div className="main-container">
             <button onClick={
                    () => changeImage("prev")
                } className="prev-button arrow-button">
                    {`<`}</button>
                    <button onClick={
                    () => changeImage("next")
                } className="next-button arrow-button">
                    {`>`} </button>
            <div className="image-container">
               

                <img src={
                        curImage.src
                    }
                    alt={
                        curImage.alt
                    }/>


               
            </div>
            <div className="circle-container">
                {
                images.map((im,i) => <button className={
                    `circle ${
                        im.src === curImage.src ? "circle-selected" : ""
                    }`
                } onClick={()=>setCurrent(i)}></button>)
            } </div>
        </div>
    );
}

export default ImageCarousel;

