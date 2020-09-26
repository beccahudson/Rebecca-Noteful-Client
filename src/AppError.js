import React, {Component} from 'react';

class AppError extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theError: false 
        };
    }

    static getStateFromError(error) { 
        return {theError: true};
    }

    render() {
        if (this.state.theError){
            return (
                <h2 className='AppError'>
                    Well, that's embarrasing...looks like something went wrong. Try refreshing the page or comeback later.
                </h2>
            );
        }
        return this.props.children;
    }
}

export default AppError;

