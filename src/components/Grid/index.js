import React from 'react';
import './styles.css';
import Image from '../Image'

function Grid({ images }) {
  return (
    <div className="flex_container">
      {images.map((imageProps, i) => <div key={i} className="flex_child"><Image {...imageProps}/></div>)}
    </div>
  );
};

Grid.defaultProps = {
  images: Array(9).fill(1)
}

export default Grid;