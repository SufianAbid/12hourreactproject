import React from 'react';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom'; // Ensure Link is imported

const ClothingCollection = () => {
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

  return (
    <div className="container mt-5">
      <h2>Clothing Collection</h2>
      <div className="row">
        {clothingProducts.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <Link to={`/product/${product.id}`}> {/* Ensure correct routing to product page */}
              <ProductCard product={product} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClothingCollection;


