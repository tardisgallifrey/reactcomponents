import React from 'react';

export default class Alert extends React.Component {
    constructor(props){
        super(props);
        this.state = props;
    }

    render(){
        return(
            <div className="flex-auto max-w-sm bg-blue-100 rounded-lg p-4 mb-4">
                <p className="ml-3 text-sm text-blue-700">
                    <span className="font-medium">Important Note!</span>
                    Change a few things.
                </p>
            </div>
        );
    }
}