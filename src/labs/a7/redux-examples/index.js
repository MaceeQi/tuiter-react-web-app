import React from "react";
import {Provider} from "react-redux";   // import Provider which will deliver the data
import HelloReduxExampleComponent from "./hello-redux-example-component";   // import component that consumes the data
import hello from "./reducers/hello";   // import reducer that calculates/generates the data
import {createStore} from "redux";      // import createStore to store data from reducers

const store = createStore(hello);       // create data storage

const ReduxExamples = () => {
    return(
        <Provider store={store}>
            <div>
                <h2>Redux Examples</h2>
                <HelloReduxExampleComponent/>
            </div>
        </Provider>
    );
};
export default ReduxExamples;