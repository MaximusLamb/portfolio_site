import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return ( 
    <div>
    <Link to="/Dropzone">
      <button>Dropzone</button>
    </Link>
    <Link to="/Affirm">
      <button>Affirm.e</button>
    </Link>
    <Link to="/JhemmFighters">
      <button>JhemmFighters</button>
    </Link>
  </div>
  );
};

export default Header;