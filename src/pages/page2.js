import React from 'react';
import Navbar from '../components/navbar';
import DropDown from '../components/dropdown';
import FormSimple from '../components/forms';

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
                <div className="bg-gray-200 h-screen">
                    <p>This is a React/Tailwindcss dropdown box.</p>
                    <p>Uses @headlessui/react and @heroicons/react pkgs.</p>
                    <p>This is not from FlowBite tutorial.  From Tailwindcss </p>
                    <DropDown />
                    <p>This is a simple input form component.</p>
                    <FormSimple />
                </div>    
            </div>
        );
    }
}