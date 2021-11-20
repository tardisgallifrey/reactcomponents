import React from 'react';
import classnames from 'classnames';

//Using Jed Watson's classnames npm package to conditionally render tailwindcss
//utilities
//
//Under Dynamic Class Names with ES2015
//I found this example that worked
//classNames({ [`btn-${buttonType}`]: true });

//also, calls to classnames requires a list of arguments


export default class Alert extends React.Component {
    constructor(props){
        super(props);
        this.state = props;
    }

    render(){
        return(
            <div className={ classnames("flex-auto",
                                    "max-w-sm",
                                    [`bg-${this.state.color}-100`],
                                    "rounded-lg",
                                    "p-4",
                                    "mb-4",
                                    "flow-root") }>
                <img src="/icons/dialog-warning.png" alt="" className="float-left" />                        
                <p className={ classnames("ml-3",
                                    "text-sm",
                                    [`text-${this.state.color}-700`] ) }>
                    <span className="font-medium">{this.state.title}</span>
                    {this.state.message}
                </p>
            </div>
        );
    }
}