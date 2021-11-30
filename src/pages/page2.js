import React from 'react';
import Navbar from '../components/navbar';
import DropDown from '../components/dropdown';
import FormSimple from '../components/forms';
import CheckBoxField from '../components/radiocheck';
import { RadioField, CheckBox, RadioButton } from '../components/radiocheck';

export default class Page2 extends React.Component{
    constructor(props){
        super(props);
        this.state=Object.assign({}, props);
    }

    render(){
        const div_tag="m-2";

        return(
            <div>
                <div>
                    <Navbar />
                </div>

                <div className="grid grid-cols-2 bg-gray-400 h-screen">
                    <div className={div_tag}>
                    <p>This is a React/Tailwindcss dropdown box.</p>
                    <p>Uses @headlessui/react and @heroicons/react pkgs.</p>
                    <p>This is not from FlowBite tutorial.  From Tailwindcss </p>
                    <DropDown />
                    <p>This is a simple input form component.</p>
                    <FormSimple />
                </div>

                <div className={div_tag}>
                    <p>This is a field of checkboxes component.</p>
                    <CheckBoxField /><br/>
                    <p>This is a CheckBox component.</p>
                    <CheckBox /><br/>
                    <p>This is a Radio Button component</p>
                    <RadioButton /><br/>
                    <p>This is a field of Radio Buttons component</p>
                    <RadioField />
                    </div>
                </div>    
            </div>
        );
    }
}