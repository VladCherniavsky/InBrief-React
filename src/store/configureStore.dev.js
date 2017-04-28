import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

const store = '';

export default function configureStore(initialState) {
    return store
        ? store
        : createStore(
            rootReducer,
            initialState,
            compose(
                applyMiddleware(thunk, reduxImmutableStateInvariant()),
                window.devToolsExtension
                    ? window.devToolsExtension()
                    : (f) => f
            )
    );
}
