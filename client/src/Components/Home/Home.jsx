import { Component } from 'react';
import { ProductsList, Filters } from '../../Components';

export default class Home extends Component {
  render() {
    const {
      categories,
      showAndCloseModal,
      isLoggedIn,
      handleChange,
      categorySelected,
      sort,
      searchWords,
      products,
      handleState,
      addToCart,
    } = this.props;
    return (
      <div>
        <Filters
          categories={categories}
          showAndCloseModal={showAndCloseModal}
          isLoggedIn={isLoggedIn}
          handleChange={handleChange}
          categorySelected={categorySelected}
          sort={sort}
        />
        <ProductsList
          addToCart={addToCart}
          handleState={handleState}
          searchWords={searchWords}
          categorySelected={categorySelected}
          sort={sort}
          products={products}
          isLoggedIn={isLoggedIn}
          showAndCloseModal={showAndCloseModal}
        />
      </div>
    );
  }
}
