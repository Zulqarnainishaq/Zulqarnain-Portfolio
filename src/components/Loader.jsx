import React from 'react';
import { BounceLoader } from 'react-spinners';

const Loader = () => (
  <div className="flex items-center justify-center w-full h-full">
    <BounceLoader color="#000" size={60} />
  </div>
);

export default Loader;
