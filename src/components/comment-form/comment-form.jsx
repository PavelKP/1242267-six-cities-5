import React from 'react';
import PropTypes from 'prop-types';

const CommentForm = ({onSubmit, state, onTextInputChange, onRatingChange}) => {

  const errorStyle = {
    color: `red`,
  };

  return (
    <form className="reviews__form form" method="post" onSubmit={onSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars"
          type="radio"
          checked={state.rating === `5`}
          onChange={onRatingChange}
          disabled={state.startDisabled}/>
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio"
          checked={state.rating === `4`}
          onChange={onRatingChange}
          disabled={state.startDisabled}/>
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio"
          checked={state.rating === `3`}
          onChange={onRatingChange}
          disabled={state.startDisabled}/>
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio"
          checked={state.rating === `2`}
          onChange={onRatingChange}
          disabled={state.startDisabled}/>
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio"
          checked={state.rating === `1`}
          onChange={onRatingChange}
          disabled={state.startDisabled}/>
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        disabled={state.textAreaDisabled}
        onChange={onTextInputChange}
        value={state.text}>
      </textarea>
      {state.error && <h3 style={errorStyle}>{state.errorText}</h3>}
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit"
          disabled={state.buttonDisabled}>Submit</button>
      </div>
    </form>
  );
};

CommentForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
  onTextInputChange: PropTypes.func.isRequired,
  onRatingChange: PropTypes.func.isRequired,
};

export default CommentForm;
