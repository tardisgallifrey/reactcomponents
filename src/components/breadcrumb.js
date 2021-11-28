import React from 'react';
import classnames from 'classnames';

//A BreadCrumb menu is one where you can click down the line
//and click back up the line

//This is in progress

export default class BreadCrumb extends React.Component{
    constructor(props){
        super(props);
        this.state=Object.assign({}, props);
    }

    render(){

        return(
            <nav className="flex" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    <li className="inline-flex items-center">
                        <div>
                        <img src="" alt="" />
                        <a href="https://tardisgallifrey.com" className={ classnames("text-gray-700",
                                                        "hover:text-gray-900",
                                                        "inline-flex",
                                                        "items-center" ) }>Home</a>
                        </div>
                    </li>

                    <li>
                        <div className="flex items-center">
                            <img src="" alt="" />
                            <a href="https://tardisgallifrey.com" className={ classnames( "text-gray-700",
                                                            "hover:text-gray-900",
                                                            "ml-1", 
                                                            "md:ml-2",
                                                            "text-sm",
                                                            "font-medium" ) }>Projects</a>
                        </div>
                    </li>

                    <li aria-current="page">
                        <div className="flex items-center">
                            <img src="/myicons/snowmagedon.jpg" height="100" width="100" alt="" />
                            <span className={ classnames("text-gray-400",
                                                        "ml-1",
                                                        "md:ml-2", 
                                                        "text-sm",
                                                        "font-medium" ) }>FlowBite</span>
                        </div>
                    </li>
                </ol>
            </nav>
        );

    }
}