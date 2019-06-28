import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const HomePage = () => (
    <h1>Home Page</h1>
);

const MyHistory = () => (
    <h1>My History</h1>
);

const FormInput = () => (
    <h1>Form Inputs</h1>
);

export default class App extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Route path="/" exact component={HomePage} />
                <Route path="/form_inputs" component={FormInput} />
            </Router>
        )
    }

}