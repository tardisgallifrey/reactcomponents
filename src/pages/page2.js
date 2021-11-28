import React from 'react';
import Navbar from '../components/navbar';

export default class Page2 extends React.Component{
    constructor(props){
        super(props);
        this.state=Object.assign({}, props);
    }

    render(){
        return(
            <div>
                <div>
                    <Navbar />
                </div>
                <div>
                    <h2>This is page 2.</h2>
                </div>    
            </div>
        );
    }
}