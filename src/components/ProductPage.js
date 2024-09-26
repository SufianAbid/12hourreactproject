import React from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
import Paymenticons from './Paymenticons';

// Dummy product data for shoes
const shoes = [
  { id: 1, name: "Adidas Shoe 1", price: "$100", image: "https://assets.adidas.com/images/w_450,f_auto,q_auto/0469cdaab1c44caf892fd457cdf14ff0_9366/JI1983_00_plp_standard.jpg" },
  { id: 2, name: "Adidas Shoe 2", price: "$120", image: "https://assets.adidas.com/images/w_450,f_auto,q_auto/39b7f909f8fc41caa234d00645c61250_9366/IF9647_00_plp_standard.jpg" },
  { id: 3, name: "Adidas Shoe 3", price: "$130", image: "https://assets.adidas.com/images/w_450,f_auto,q_auto/9b983d5bc09a4d4aba39a8bf011869ba_9366/B75806_00_plp_standard.jpg" },
  { id: 4, name: "Adidas Shoe 4", price: "$120", image: "https://assets.adidas.com/images/w_450,f_auto,q_auto/5c837cfb3dea4284abbd061500a4f6b9_9366/IF4152_00_plp_standard.jpg" },
  { id: 5, name: "Adidas Shoe 5", price: "$100", image: "https://assets.adidas.com/images/w_450,f_auto,q_auto/8e955789890940399dc68783b0984293_9366/IF1729_00_plp_standard.jpg" },
  { id: 6, name: "Adidas Shoe 6", price: "$120", image: "https://assets.adidas.com/images/w_450,f_auto,q_auto/2345cc874f884fc0a6a8af50010537fb_9366/HQ8708_00_plp_standard.jpg" },
  { id: 7, name: "Adidas Shoe 7", price: "$100", image: "https://assets.adidas.com/images/w_450,f_auto,q_auto/f22674819ae94457b6a292649fdcd9ba_9366/JI1884_00_plp_standard.jpg" },
  { id: 8, name: "Adidas Shoe 8", price: "$120", image: "https://assets.adidas.com/images/w_450,f_auto,q_auto/9e99f8ca0ad74b82bacbaf8700918cae_9366/H03472_00_plp_standard.jpg" },
  { id: 9, name: "Adidas Shoe 9", price: "$120", image: "https://assets.adidas.com/images/w_450,f_auto,q_auto/f45b71a6b34a48aa98a6cddf01552142_9366/ID3709_00_plp_standard.jpg" },
  { id: 10, name: "Adidas Shoe 10", price: "$120", image: "https://assets.adidas.com/images/w_450,f_auto,q_auto/9e99f8ca0ad74b82bacbaf8700918cae_9366/H03472_00_plp_standard.jpg" },
  { id: 11, name: "Adidas Shoe 11", price: "$120", image: "https://assets.adidas.com/images/w_450,f_auto,q_auto/2ea4c9255c5d40f2ade30ef9361219f0_9366/IG4279_00_plp_standard.jpg" }
];

// Dummy product data for clothing
const clothingProducts = [
  { id: 12, name: "Adidas Jacket 1", price: "$90", image: "https://assets.adidas.com/images/w_450,f_auto,q_auto/028e0be607d1493cbd6b3910954e84ff_9366/IM7467_HM1.jpg" },
  { id: 13, name: "Adidas Hoodie 1", price: "$80", image: "https://assets.adidas.com/images/w_450,f_auto,q_auto/26362da5fcd84ed392c10fa070d14f77_9366/JI9479_000_plp_model.jpg" },
  { id: 14, name: "Adidas Pants 1", price: "$70", image: "https://assets.adidas.com/images/w_450,f_auto,q_auto/038692973e594495a5966d3ba81af3b7_9366/JK2250_21_model.jpg" },
  { id: 15, name: "Adidas Jacket 2", price: "$90", image: "https://assets.adidas.com/images/w_275,f_auto,q_auto/ff1f4de460874887a0bdf83fd7044f2c_9366/IY1120_21_model.jpg" },
  { id: 16, name: "Adidas Hoodie 2", price: "$80", image: "https://assets.adidas.com/images/w_450,f_auto,q_auto/5a6cca612d9e4dc1b5e4eba3cb3f68ac_9366/IY1122_000_plp_model.jpg" },
  { id: 17, name: "Adidas Pants 2", price: "$70", image: "https://assets.adidas.com/images/w_275,f_auto,q_auto/c4674d790ba747a0b6d8403d23401e5d_9366/IY4161_21_model.jpg" },
  { id: 18, name: "Adidas Jacket 3", price: "$90", image: "https://assets.adidas.com/images/w_275,f_auto,q_auto/7b933041163540c4802a35d7e2bd474e_9366/IX1249_21_model.jpg" },
  { id: 19, name: "Adidas Hoodie 3", price: "$80", image: "https://assets.adidas.com/images/w_450,f_auto,q_auto/65a318692f2442d7838a0816edf3b6b6_9366/IY4887_21_model.jpg" },
  { id: 20, name: "Adidas Pants 3", price: "$70", image: "https://assets.adidas.com/images/w_450,f_auto,q_auto/e97c8465369443cdaf4478e88af51720_9366/IT2758_000_plp_model.jpg" },
];

// Combine both products into a single array
const allProducts = [...shoes, ...clothingProducts];

const ProductPage = () => {
  const { productId } = useParams(); // Get the productId from the URL
  const product = allProducts.find(p => p.id === parseInt(productId)); // Find the product by ID

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
    <div className="product-page">
    <div className='product-page-image'>
      <img src={product.image} alt={product.name} />
      </div>
      <div className='product-page-info'>
      <p className='cust-p'>ADDIDAS</p>
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <p>In stock ready to ship</p>
      <div className='cust-payment-icon'>
        <Paymenticons />
      </div>
      <button className='product-page-atc'>Add to Cart</button>
      
      </div>
      
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
            </div>
          </div>
        </div>
      </div>

</>

  );
};

export default ProductPage;
