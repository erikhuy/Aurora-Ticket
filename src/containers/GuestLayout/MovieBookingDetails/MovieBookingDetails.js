//route: /movie/id

import React, {Component} from 'react';

class MovieBookingDetails extends Component {

    componentDidMount() {
        console.log("I am DidMount in Movie Booking Page")
    }

    render() {
        console.log("I am in render function of Movie Booking Page")
        return (
            <div>
               Movie Booking Page
            </div>
        );
    }
}

export default MovieBookingDetails;