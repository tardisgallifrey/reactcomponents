import React from 'react';
import Navbar from '../components/navbar';
import PopUp from '../components/popup';

export default class Page4 extends React.Component{
    constructor(props){
        super(props);
        this.state={...props}
    }

    render(){
        return(
            <div>
                <div>
                    <Navbar />
                </div>
                <div>
                    <h2>This is page 4.</h2>
                    <p>This is a Modal Popup Component</p>
                    <PopUp />
                </div>    
            </div>   
        );
    }
}