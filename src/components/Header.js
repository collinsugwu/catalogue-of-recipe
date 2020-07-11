import React from 'react' ;
import { Link } from 'react-router-dom' ;
import '../styles/header.scss' ;
import IngredientSearch from '../containers/IngredientSearch' ;

const Header = () => (
  <header>
    <Link to='/' >
      <h1>HomeMade</h1>
    </Link>
    <IngredientSearch />
    <div>
      <span>Home made dishes.</span>
    </div>
  </header>
);

export default Header;
