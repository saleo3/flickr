import React from 'react';
import './styles.css';

const Grid = ({ images }) => {
  return (
    <div className="flex_container">
      {images.map((image, i) => <div key={i} className="flex_child">{i}</div>)}
    </div>
  );
};

Grid.defaultProps = {
  images: Array(9).fill(1)
}

export default Grid;