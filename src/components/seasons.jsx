import React, { Component } from 'react';
import Spinner from './spinner'
import Season from './season'

class Seasons extends Component{
    state = { latitude: null, errorMessage: '' }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ latitude: position.coords.latitude }),
            (err) => this.setState({ errorMessage: err.message })
        );
    }

    renderContent() {
        if(this.state.errorMessage && !this.state.latitude){
            return <div>Error: {this.state.errorMessage}</div>
        }

        if(!this.state.errorMessage && this.state.latitude){
            return <div><Season latitude={this.state.latitude}/></div>
        }

        return <Spinner message="Please accept location request"/>
    }

    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    }
}

export default Seasons;
