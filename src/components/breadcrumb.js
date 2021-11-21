import React from 'react';
import classnames from 'classnames';

//A BreadCrumb menu is one where you can click down the line
//and click back up the line

//This is in progress

export default class BreadCrumb extends React.Component{

    render(){

        return(
            <nav class="flex" aria-label="Breadcrumb">
                <ol class="inline-flex items-center space-x-1 md:space-x-3">
                    <li class="inline-flex items-center">
                        <div>
                        <img src="" alt="" />
                        <a href="#" class="text-gray-700 hover:text-gray-900 inline-flex items-center">Home</a>
                        </div>
                    </li>

                    <li>
                        <div class="flex items-center">
                            <img src="" alt="" />
                            <a href="#" class="text-gray-700 hover:text-gray-900 ml-1 md:ml-2 text-sm font-medium">Projects</a>
                        </div>
                    </li>

                    <li aria-current="page">
                        <div class="flex items-center">
                            <img src=" " alt="" />
                            <span class="text-gray-400 ml-1 md:ml-2 text-sm font-medium">FlowBite</span>
                        </div>
                    </li>
                </ol>
            </nav>
        );

    }
}