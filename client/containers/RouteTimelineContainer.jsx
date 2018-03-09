<<<<<<< HEAD
import React, { Component } from "react";
import RouteGraph from '../components/RouteGraph'

class RouteTimelineContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <RouteGraph currentRoute={this.props.currentRoute} />
      </div>
    )

  }
=======
import React, { Component } from 'react';
import RouteGraphContainer from './RouteGraphContainer.jsx';


class RouteTimelineContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>{this.props.currentRoute.startTime}</h1>
                <RouteGraphContainer currentRoute={this.props.currentRoute} />
            </div>
        )
    }
>>>>>>> ad1d82c82e81efe6575d17436ad345ebd3d85ad1
}

export default RouteTimelineContainer;
