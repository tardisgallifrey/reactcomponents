import React from 'react';

export default class Upload extends React.Component{
    constructor(props){
        super(props);
        this.state={...props}
    }

    render(){

        return(
            <div className="w-1/4">
                <label className="text-sm 
                                font-medium
                                text-gray-900
                                block mb-2" for="user_avatar">Upload file</label>
                <input className="block w-full
                                cursor-pointer
                                bg-gray-50
                                border border-gray-300
                                text-gray-900
                                focus:outline-none
                                focus:border-transparent
                                text-sm rounded-lg w-full" 
                                aria-describedby="user_avatar_help"
                                id="user_avatar" 
                                type="file"/>
                <div className="mt-1 text-sm text-gray-500" id="user_avatar_help">
                    A profile picture is useful to confirm your are logged into your account
                </div>
            </div>
        );
    }
}