import React, { Component } from 'react';

class RouteTitle extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
<<<<<<< HEAD
            <div>
                <span>{this.props.currentRoute.requestMethod}</span><span>{this.props.currentRoute.requestUrl}</span>
            </div>
=======
            <h1>{this.props.currentRoute.requestMethod + ' ' + this.props.currentRoute.requestUrl}</h1>
>>>>>>> ad1d82c82e81efe6575d17436ad345ebd3d85ad1
        )
    }
}

export default RouteTitle;