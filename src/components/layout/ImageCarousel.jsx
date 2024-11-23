import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../assets/img/caro.jpg'; 
import img2 from '../../assets/img/caro1.jpeg'; 
import img3 from '../../assets/img/caro2.jpg'; 
import img4 from '../../assets/img/caro3.jpg'; 
import img5 from '../../assets/img/caro4.jpg'; 
import img6 from '../../assets/img/caro5.jpg'; 
import img7 from '../../assets/img/caro6.jpg'; 

const images = [img2, img3, img4,img5,img6,img7,img1];
const ImageCarousel = () => {
    const settings = {
        dots: true,  
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,  
        autoplaySpeed: 3000, 
        pauseOnHover: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="w-full max-w-[850px] mx-auto mt-4 mb-2 overflow-hidden px-4 sm:px-6"> {/* Added px-4 for horizontal padding */}
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="w-full">
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="h-[350px] md:h-[350px] object-cover rounded-lg w-full" // Ensure the image is responsive
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageCarousel;