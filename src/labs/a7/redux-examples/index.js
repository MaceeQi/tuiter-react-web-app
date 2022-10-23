import React from "react";
import {Provider} from "react-redux";   // import Provider which will deliver the data
import {configureStore} from "@reduxjs/toolkit";      // import createStore to store data from reducers
import HelloReduxExampleComponent from "./hello-redux-example-component";   // import component that consumes the data
import Todos from "./todos-component";
import hello from "./reducers/hello";   // import reducer that calculates/generates the data
import todos from "./reducers/todos-reducer";
// import {createStore} from "redux";

// const store = createStore(hello);       // create data storage

const store = configureStore({
    reducer: {hello, todos}
});

const ReduxExamples = () => {
    return(
        <Provider store={store}>
            <div>
                <h2>Redux Examples</h2>
                <Todos/>
                <HelloReduxExampleComponent/>
            </div>
        </Provider>
    );
};
export default ReduxExamples;