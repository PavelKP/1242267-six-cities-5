import React from 'react';
import {Link} from 'react-router-dom';
import OfferList from '../offer-list/offer-list';
import Header from '../header/header';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import {offersPropTypes} from '../../prop-types/prop-types';
import {CardType} from '../../const';


const Favorites = (props) => {
  const locations = new Set();
  const bookmarked = props.offers.filter((offer) => {
    if (offer.isBookmarked) {
      locations.add(offer.city.name);
    }
    return offer.isBookmarked;
  });

  const isEmpty = bookmarked.length === 0;

  return (
    <div className="page">
      <Header>
        <Link to={`/`} className="header__logo-link" href="main.html">
          <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
        </Link>
      </Header>

      {isEmpty
        ? <FavoritesEmpty />
        : <React.Fragment>
          <main className="page__main page__main--favorites">
            <div className="page__favorites-container container">
              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                <ul className="favorites__list">
                  {[...locations].map((city, i) => (
                    <li className="favorites__locations-items" key={`favorites-location-${i}`}>
                      <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                          <a className="locations__item-link" href="#">
                            <span>{city}</span>
                          </a>
                        </div>
                      </div>
                      <div className="favorites__places">
                        <OfferList type={CardType.FAVORITES} offers={bookmarked.filter((offer) => offer.city.name === city)} />
                      </div>
                    </li>
                  ))}

                </ul>
              </section>
            </div>
          </main>
        </React.Fragment>
      }

      <footer className="footer container">
        <Link to="/" className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
};

Favorites.propTypes = offersPropTypes;

export default Favorites;
