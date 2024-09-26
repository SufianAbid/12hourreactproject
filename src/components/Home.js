import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import './Home.css';
import videoFile from '../assets/cust-video.mp4';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  const products = [
    { id: 1, name: "Adidas Shoe 1", price: "$100", image: "https://assets.adidas.com/images/w_450,f_auto,q_auto/0469cdaab1c44caf892fd457cdf14ff0_9366/JI1983_00_plp_standard.jpg" },
    { id: 2, name: "Adidas Shoe 2", price: "$120", image: "https://assets.adidas.com/images/w_450,f_auto,q_auto/39b7f909f8fc41caa234d00645c61250_9366/IF9647_00_plp_standard.jpg" },
    { id: 3, name: "Adidas Shoe 3", price: "$130", image: "https://assets.adidas.com/images/w_450,f_auto,q_auto/9b983d5bc09a4d4aba39a8bf011869ba_9366/B75806_00_plp_standard.jpg" }
  ];

  const clothingProducts = [
    { id: 12, name: "Adidas Jacket 1", price: "$90", image: "https://assets.adidas.com/images/w_450,f_auto,q_auto/028e0be607d1493cbd6b3910954e84ff_9366/IM7467_HM1.jpg" },
    { id: 13, name: "Adidas Hoodie 1", price: "$80", image: "https://assets.adidas.com/images/w_450,f_auto,q_auto/26362da5fcd84ed392c10fa070d14f77_9366/JI9479_000_plp_model.jpg" },
    { id: 14, name: "Adidas Pants 1", price: "$70", image: "https://assets.adidas.com/images/w_450,f_auto,q_auto/038692973e594495a5966d3ba81af3b7_9366/JK2250_21_model.jpg" }
  ];

  const clothingProductCard = (product) => (
    <div key={product.id}>
      <ProductCard product={product} />
    </div>
  );

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="container">
      <div className="banner">
        <img src="https://www.adidas.ae/dw/image/v2/BFNL_PRD/on/demandware.static/-/Library-Sites-AdidasSharedLibrary/default/dw00e92850/MENA_Local_Activations/em-emc-zne-hp-mh-d-w.jpg" alt="Banner" className="img-fluid" />
      </div>

      <h2 className="mt-4">Featured Collection</h2>

      <div className="d-md-none">
        <Slider {...sliderSettings}>
          {products.map(product => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </Slider>
      </div>

      <div className="row d-none d-md-flex">
        {products.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <Link to="/collection" className="btn view-all-button">View All</Link>
      </div>

      <div className="image-text-section mt-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src="https://www.adidas.ae/dw/image/v2/BFNL_PRD/on/demandware.static/-/Library-Sites-AdidasSharedLibrary/en_AE/dw4ba356a7/em-za-categorytiles-hp-men-promoblock.jpg" alt="Stylish Adidas" className="img-fluid custom-image" />
          </div>
          <div className="col-md-6">
            <h3>Elevate Your Style with Our Exclusive Collection</h3>
            <p className="detailed-description">
              Discover the latest trends in fashion with our exclusive collection designed to elevate your style. Each piece is carefully crafted using high-quality materials, ensuring comfort and durability. From chic hoodies to stylish sweatpants, our range is perfect for both casual outings and relaxed weekends. Embrace vibrant colors and unique designs that express your individuality.
            </p>
            <p>Shop now to find the perfect pair for any occasion, from casual outings to intense workouts.</p>
            <div className="text-center mt-4">
              <Link to="/collection" className="btn view-all-button">Shop Now</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="image-text-section mt-5">
        <div className="row align-items-center">
          <div className="col-md-6 order-md-2">
            <img src="https://www.adidas.ae/dw/image/v2/BFNL_PRD/on/demandware.static/-/Library-Sites-AdidasSharedLibrary/en_AE/dwf680b9a5/em-za-categorytiles-hp-kids-promoblock.jpg" alt="New Arrivals" className="img-fluid custom-image" />
          </div>
          <div className="col-md-6 order-md-1">
            <h3>Unleash Your Fashion Potential with Our New Arrivals</h3>
            <p className="detailed-description">
              Step into the spotlight with our new arrivals that redefine contemporary fashion. Our collection features versatile pieces that seamlessly transition from day to night, providing you with endless styling possibilities. With a focus on sustainability, we prioritize eco-friendly materials and ethical production practices. Each item showcases innovative designs, making you stand out in any crowd. Explore our selection of must-have accessories to complement your look.
            </p>
            <div className="text-center mt-4">
              <Link to="/collection" className="btn view-all-button">Shop Now</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="video-banner mt-5">
        <video autoPlay loop muted className="w-100">
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="clothing-collection mt-5">
        <h2>Clothing Collection</h2>

        <div className="d-md-none">
          <Slider {...sliderSettings}>
            {clothingProducts.map(product => clothingProductCard(product))}
          </Slider>
        </div>

        <div className="row d-none d-md-flex">
          {clothingProducts.map(product => (
            <div key={product.id} className="col-md-4 mb-4">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      <div className="bloom-sportswear-section">
        <div className="bloom-sportswear-content">
          <h3>Adidas Bloom Sky Sportswear</h3>
          <p>Where every bloom is a verse, and every star a story. Your time to bloom.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
