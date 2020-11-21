import React from 'react';

function Image({ id, secret }) {
  return <div style={{backgroundImage: `url(https://live.staticflickr.com/65535/${id}_${secret}.jpg)`}}></div>
};

export default Image;