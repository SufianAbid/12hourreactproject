import React from 'react';
import { Link } from 'react-router-dom'; // Ensure Link is imported
import ProductCard from './ProductCard';

const Collection = () => {
  const products = [
    { id: 1, name: "Adidas Shoe 1", price: "$100", image: "https://assets.adidas.com/images/w_450,f_auto,q_auto/0469cdaab1c44caf892fd457cdf14ff0_9366/JI1983_00_plp_standard.jpg" },
    { id: 2, name: "Adidas Shoe 2", price: "$120", image: "https://assets.adidas.com/images/w_450,f_auto,q_auto/39b7f909f8fc41caa234d00645c61250_9366/IF9647_00_plp_standard.jpg" },
    { id: 3, name: "Adidas Shoe 3", price: "$100", image: "https://assets.adidas.com/images/w_450,f_auto,q_auto/9b983d5bc09a4d4aba39a8bf011869ba_9366/B75806_00_plp_standard.jpg" },
    { id: 4, name: "Adidas Shoe 4", price: "$120", image: "https://assets.adidas.com/images/w_450,f_auto,q_auto/5c837cfb3dea4284abbd061500a4f6b9_9366/IF4152_00_plp_standard.jpg" },
    { id: 5, name: "Adidas Shoe 5", price: "$100", image: "https://assets.adidas.com/images/w_450,f_auto,q_auto/8e955789890940399dc68783b0984293_9366/IF1729_00_plp_standard.jpg" },
    { id: 6, name: "Adidas Shoe 6", price: "$120", image: "https://assets.adidas.com/images/w_450,f_auto,q_auto/2345cc874f884fc0a6a8af50010537fb_9366/HQ8708_00_plp_standard.jpg" },
    { id: 7, name: "Adidas Shoe 7", price: "$100", image: "https://assets.adidas.com/images/w_450,f_auto,q_auto/f22674819ae94457b6a292649fdcd9ba_9366/JI1884_00_plp_standard.jpg" },
    { id: 8, name: "Adidas Shoe 8", price: "$120", image: "https://assets.adidas.com/images/w_450,f_auto,q_auto/9e99f8ca0ad74b82bacbaf8700918cae_9366/H03472_00_plp_standard.jpg" },
    { id: 9, name: "Adidas Shoe 9", price: "$120", image: "https://assets.adidas.com/images/w_450,f_auto,q_auto/f45b71a6b34a48aa98a6cddf01552142_9366/ID3709_00_plp_standard.jpg" },
    { id: 10, name: "Adidas Shoe 10", price: "$120", image: "https://assets.adidas.com/images/w_450,f_auto,q_auto/9e99f8ca0ad74b82bacbaf8700918cae_9366/H03472_00_plp_standard.jpg" },
    { id: 11, name: "Adidas Shoe 11", price: "$120", image: "https://assets.adidas.com/images/w_450,f_auto,q_auto/2ea4c9255c5d40f2ade30ef9361219f0_9366/IG4279_00_plp_standard.jpg" }
  ];

  return (
    <div className="container mt-5">
      <h2>Collection</h2>
      <div className="row">
        {products.map(product => (
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

export default Collection;
