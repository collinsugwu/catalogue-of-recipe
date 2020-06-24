import React from 'react';

const filter = prop =>
{
    return (
    <div className="searchForm">
        <form>
          <label htmlFor="search">
            <input
              id="search"
              type="text"
              placeholder="Search by ingredient"
              name="ingredientInput"
            //   onChange={e => setStateIngredient(e.target.value)}
            //   value={ingredient}
            />
            <button type="submit">Search</button>
          </label>
        </form>
    </div>
    );
}

export default filter;