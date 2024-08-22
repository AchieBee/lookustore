import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const shoes = [
    { name: 'Heels', img: 'https://images.pexels.com/photos/1801279/pexels-photo-1801279.jpeg?auto=compress&cs=tinysrgb&w=600', price: 2.50, availability: 'In Stock' },
    { name: 'Converse', img: 'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=600', price: 2.00, availability: 'Out of Stock' },
    { name: 'Sneekers', img: 'https://images.pexels.com/photos/1580267/pexels-photo-1580267.jpeg?auto=compress&cs=tinysrgb&w=600', price: 1.00, availability: 'In Stock' },
    { name: 'Sneekers', img: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=600', price: 2.50, availability: 'In Stock' },
    { name: 'Loafers', img: 'https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=600', price: 2.00, availability: 'Out of Stock' },
    { name: 'Vans', img: 'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=600', price: 1.00, availability: 'In Stock' },
    { name: 'Heels', img: 'https://images.pexels.com/photos/313707/pexels-photo-313707.jpeg?auto=compress&cs=tinysrgb&w=600', price: 2.00, availability: 'In Stock' },
    { name: 'Sneekers', img: 'https://images.pexels.com/photos/1503009/pexels-photo-1503009.jpeg?auto=compress&cs=tinysrgb&w=600', price: 2.50, availability: 'Out of Stock' },
    { name: 'Heels', img: 'https://images.pexels.com/photos/137603/pexels-photo-137603.jpeg?auto=compress&cs=tinysrgb&w=600', price: 1.00, availability: 'In Stock' },
    { name: 'Officials', img: 'https://images.pexels.com/photos/292998/pexels-photo-292998.jpeg?auto=compress&cs=tinysrgb&w=600', price: 2.50, availability: 'In Stock' },
];

function ShoeList({ onPurchaseClick }) {
    return (
        <div className="container mt-4">
            <div className="row">
                {shoes.map((shoe, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card">
                            <img src={shoe.img} className="card-img-top" alt={shoe.name} />
                            <div className="card-body">
                                <h5 className="card-title">{shoe.name}</h5>
                                <p className="card-text">Price: ${shoe.price.toFixed(2)}</p>
                                <p className="card-text">Availability: {shoe.availability}</p>
                                <button 
                                  className="btn btn-primary"
                                  onClick={() => onPurchaseClick(shoe)}
                                  disabled={shoe.availability === 'Out of Stock'}
                                >
                                  {shoe.availability === 'Out of Stock' ? 'Out of Stock' : 'Purchase'}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ShoeList;
