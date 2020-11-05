import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from "redux-thunk";
import App from './components/app/app';
import rootReducer from './store/reducers/root-reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createAPI} from './services/api';
import {ActionCreator} from '../src/store/action';
import {fetchOfferList} from '../src/store/api-actions';
import {AuthorizationStatus} from './const';

const api = createAPI(
    () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(fetchOfferList());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);

