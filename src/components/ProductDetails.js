import React from 'react';

const ItemListContainer = ({ greeting }) => {
  const musicProducts = [
    {
      id: 1,
      title: "Abbey Road",
      artist: "The Beatles",
      price: 19.99,
      image: "https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg",
      description: "The Beatles' final studio album, released in 1969.",
    },
    {
      id: 2,
      title: "Thriller",
      artist: "Michael Jackson",
      price: 24.99,
      image: "https://upload.wikimedia.org/wikipedia/en/5/51/Michael_Jackson_Thriller.png",
      description: "The best-selling album of all time, released in 1982.",
    },
    {
      id: 3,
      title: "Back in Black",
      artist: "AC/DC",
      price: 21.99,
      image: "https://upload.wikimedia.org/wikipedia/en/4/45/ACDC_Back_in_Black.jpg",
      description: "The seventh studio album by Australian rock band AC/DC, released in 1980.",
    },
  ];

  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
      <div className="row">
        {musicProducts.map(item => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={item.image} className="card-img-top" alt={item.title} />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.artist}</p>
                <p className="card-text">${item.price}</p>
                <a href={`/productos/${item.id}`} className="btn btn-primary">Ver Detalles</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
