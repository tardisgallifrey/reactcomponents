import React from 'react';
//import classnames from 'classnames';

export default class FormSimple extends React.Component{
    constructor(props){
        super(props);
        this.state={...props} //should be same as Object.assign
    }

    render(){
        return(
            <form>
                <div className="mb-6">
                    <label for="email" class="text-sm font-medium text-gray-900 block mb-2">Your email</label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5" placeholder="name@flowbite.com" required="" />
                </div>
                <div className="mb-6">
                    <label for="password" className="text-sm font-medium text-gray-900 block mb-2">Your password</label>
                    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5" required="" />
                </div>
                <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                    <input id="remember" aria-describedby="remember" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" required="" />
                    </div>
                    <div className="text-sm ml-3">
                    <label for="remember" className="font-medium text-gray-900">Remember me</label>
                    </div>
                </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login</button>
            </form>
        );
    }

}