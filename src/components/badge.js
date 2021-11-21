import classnames from 'classnames';

//This one is written in function form
//I will alternate between ES6 class and function
//on each component

//[`btn-${buttonType}`]: true

export default function Badge(props){

    return(
        <div className="flow-root">
            <img className={ classnames([`bg-${props.color}-100`],
                                    "float-left",
                                    "rounded-md",
                                    "mr-2" )}
                                     src="/myicons/badge.png" width="32" height="32" alt="" />
            <span className={ classnames([`bg-${props.color}-100`],
                                        [`text-${props.color}-800`],
                                        "text-xs",
                                        "font-medium",
                                        "rounded-md",
                                        "mr-2", 
                                        "px-2.5", 
                                        "py-0.5" )} > Badge text </span>
        </div>
    );
}