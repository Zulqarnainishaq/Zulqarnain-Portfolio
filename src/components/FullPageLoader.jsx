import React from 'react';
import { ClipLoader } from 'react-spinners';

const FullPageLoader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-200 z-50">
    <ClipLoader color="#000" size={60} />
  </div>
);

export default FullPageLoader;
