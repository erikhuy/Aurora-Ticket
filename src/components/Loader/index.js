import React, {Component} from 'react';
import "./loader.css";

class Loader extends Component {
    render() {
        return (
            <div id="loading-page">
                <div id="loader"></div>
            </div>
        );
    }
}

export default Loader;