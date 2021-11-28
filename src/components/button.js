import React from 'react';
import classnames from 'classnames';

export default function Button(props){

    return(
        <button type="button" className={ classnames("rounded-lg",
                                                "border border-gray-200",
                                                "bg-white",
                                                "text-sm",
                                                "font-medium",
                                                "px-4",
                                                "py-2",
                                                "text-gray-900",
                                                "hover:bg-gray-500",
                                                "hover:text-blue-700",
                                                "focus:z-10",
                                                "focus:ring-2", 
                                                "focus:ring-blue-700", 
                                                "focus:text-blue-700", 
                                                "mr-3",
                                                "mb-3" ) }>Flowbite</button>
    );
}

export function ButtonGroup(props){

    return(
        
        <div className={ classnames("inline-flex",
                                "shadow-sm",
                                "rounded-md" ) } role="group">
            <button type="button" className={ classnames("rounded-l-lg",
                                                        "border border-gray-300",
                                                        "bg-white",
                                                        "text-sm",
                                                        "font-medium",
                                                        "px-4", 
                                                        "py-2",
                                                        "text-gray-900",
                                                        "hover:bg-gray-300",
                                                        "hover:text-blue-700", 
                                                        "focus:z-10",
                                                        "focus:ring-2",
                                                        "focus:ring-blue-700",
                                                        "focus:text-blue-700" ) }>
                Flowbite
            </button>
            <button type="button" className={ classnames("border-t", 
                                                        "border-b",
                                                        "border-gray-300", 
                                                        "bg-white", 
                                                        "text-sm",
                                                        "font-medium",
                                                        "px-4",
                                                        "py-2", 
                                                        "text-gray-900",
                                                        "hover:bg-gray-300", 
                                                        "hover:text-blue-700", 
                                                        "focus:z-10", 
                                                        "focus:ring-2", 
                                                        "focus:ring-blue-700",
                                                        "focus:text-blue-700" ) }>
                Tailwind
            </button>
            <button type="button" className={ classnames("rounded-r-md", 
                                            "border border-gray-300",
                                            "bg-white", 
                                            "text-sm",
                                            "font-medium",
                                            "px-4",
                                            "py-2",
                                            "text-gray-900", 
                                            "hover:bg-gray-300", 
                                            "hover:text-blue-700", 
                                            "focus:z-10", 
                                            "focus:ring-2", 
                                            "focus:ring-blue-700", 
                                            "focus:text-blue-700" ) }>
                The Practical Dev
            </button>
        </div>
    );
}