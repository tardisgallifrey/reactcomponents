import React from 'react';
//import classnames from 'classnames';


export default class CardNoImage extends React.Component{
    constructor(props){
        super(props);

        this.state=Object.assign({}, props);
    }

    render(){

        return(
            <a href="https://tardisgallifrey.com" className="block p-6 bg-white hover:bg-gray-100 shadow-md border border-gray-200 rounded-lg max-w-sm">
                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">Noteworthy technology acquisitions 2021</h5>
                <p className="font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </a>

        );
    }
}

export class CardWithImage extends React.Component{
    constructor(props){
        super(props);

        this.state=Object.assign({},props);
    }

    render(){
        return(
            <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm">
                <a href="https://tardisgallifrey.com">
                    <img className="rounded-t-lg max-h-sm" src="/myicons/snowmagedon.jpg" alt="" />
                </a>
                <div className="p-5">
                    <a href="https://tardisgallifrey.com">
                        <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">Noteworthy technology acquisitions 2021</h5>
                    </a>
                    <p className="font-normal text-gray-700 mb-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="https://tardisgallifrey.com">
                        Read more
                    </a>
                </div>
            </div>
        );
    }


}