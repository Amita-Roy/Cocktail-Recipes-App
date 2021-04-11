import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as Actions from '../../actions/cocktailsActions';

import './CocktailList.css';

class CocktailList extends PureComponent {
  componentDidMount() {
    const { loadCocktails } = this.props;
    loadCocktails();
  }

  handleClick = (cocktail) => {
    const { loadCocktail } = this.props;
    loadCocktail(cocktail);
  };

  cardStyle = ({ strDrinkThumb }) => ({
    backgroundImage: `url(${strDrinkThumb})`,
    backgroundRepeat: 'no-repeat',
  });

  render() {
    const { cocktails } = this.props;
    return (
      <div className="cocktailList">
        {cocktails
          && cocktails.map((cocktail) => (
            <Link
              to={`/cocktails/${cocktail.idDrink}`}
              key={cocktail.idDrink}
              className="cocktailList-item"
            >
              <img src={cocktail.strDrinkThumb} alt={cocktail.idDrink} />
              <div className="drinkName-wrapper">
                <div className="drinkName-wrapper2">
                  <h4 className="drinkName">{cocktail.strDrink}</h4>
                </div>
              </div>
            </Link>
          ))}
      </div>
    );
  }
}

CocktailList.propTypes = {
  loadCocktail: PropTypes.func.isRequired,
  loadCocktails: PropTypes.func.isRequired,
  cocktails: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number }))
    .isRequired,
};

const mapStateToProps = (state) => ({ cocktails: state.cocktails });

export default connect(mapStateToProps, Actions)(CocktailList);
