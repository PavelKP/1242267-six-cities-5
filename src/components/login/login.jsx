import React from 'react';
import Header from '../../components/header/header';
import withAuthorization from '../../hocs/with-authorization/with-authorization';
import PropTypes from 'prop-types';


const Login = ({onFormSubmit, formRef, isValid}) => {

  const errorStyle = {
    color: `red`,
  };

  return (
    <div className="page page--gray page--login">
      <Header />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post"
              onSubmit={onFormSubmit}
              ref={formRef}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" required="" defaultValue="" autoComplete="off" />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password" required="" defaultValue="" autoComplete="off"/>
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
              {!isValid && <h3 style={errorStyle}>Email is invalid</h3>}
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

Login.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  formRef: PropTypes.object.isRequired,
  isValid: PropTypes.bool.isRequired,
};

export {Login};
export default withAuthorization(Login);
