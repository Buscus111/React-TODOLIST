import React from "react";
import { Ring } from "react-awesome-spinners";
import { useSelector } from 'react-redux'

const Loader = () => {
  const loading = useSelector(state => state.loader);
  return (
      loading && <Ring />
  );
}

export default Loader;
