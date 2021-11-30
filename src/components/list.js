import React from 'react';

//Adding hover and color classes to this would be useful
//To turn the list into links, put a link around the 
//List text

export default class List extends React.Component{
    constructor(props){
        super(props);
        this.state={...props}
    }

    render(){
        return(
            <div>
            <ul className="bg-white rounded-lg border border-gray-400 w-48 text-gray-900 text-sm font-medium">
                <li className="px-4 py-2 border-b border-gray-400 w-full rounded-t-lg">Profile</li>
                <li className="px-4 py-2 border-b border-gray-400 w-full">Settings</li>
                <li className="px-4 py-2 border-b border-gray-400 w-full">Messages</li>
                <li className="px-4 py-2 w-full rounded-b-lg">Download</li>
            </ul>
            </div>
        );
    }
}