import {render} from "react-dom";
import React from "react";
import App from "./Components/App";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import heroReducer from "./reducers/heroReducer";
import heroActions from "./actions/heroActions";

const store = createStore(
    heroReducer,
    applyMiddleware(thunk)
);

store.dispatch(heroActions.fetchHeroes());

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("app")
);