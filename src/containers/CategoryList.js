import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {fetchCategories} from '../actions/categories';
import Category from '../components/Category';
import { Row } from 'antd';
import loading from '../images/loader.gif';


const CategoryList = props =>{
  console.log(props);
    const {categories, fetchCategories, dishes} = props;
    useEffect(() => {
        fetchCategories();
      }, [fetchCategories, dishes]);

      return (
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                {categories.length === 0 ? (
          <div className="loading">
            <img src={loading} alt="loading" />
          </div>
        ) : (
          categories.map(cat => <Category key={cat.idCategory} cat={cat} />)
        )}
        </Row>
      );
}

CategoryList.defaultProps = {
  categories: [],
  dishes: [],
  fetchCategories: () => undefined,
};

CategoryList.propTypes = {
    categories: PropTypes.arrayOf(
        PropTypes.shape({
          strCategory: PropTypes.string,
        }),
      ),
    dishes: PropTypes.arrayOf(
        PropTypes.shape({
          strMeal: PropTypes.string,
        }),
      ),
      fetchCategories: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
    fetchCategories: () => {
        dispatch(fetchCategories());
      },
});

const mapStateToProps = state => ({
  categories: state.categories,
  dishes: state.dishes.dishes,
  ingredient: state.searched.ingredient,
  isSearching: state.dishes.isSearching,
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
