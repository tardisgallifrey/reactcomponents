//import classnames from 'classnames';


export default function CheckBoxField(props){

    return(
        <div>
        <fieldset>
            <legend classNameName="sr-only">Checkbox variants</legend>

            <div classNameName="flex items-center items-start mb-4">
                <input id="checkbox-1" aria-describedby="checkbox-1" type="checkbox" classNameName="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" checked="" />
                <label for="checkbox-1" classNameName="text-sm ml-3 font-medium text-gray-900">I agree to the <a href="tardisgallifrey.com" classNameName="text-blue-600 hover:underline">terms and conditions</a></label>
            </div>

            <div classNameName="flex items-start items-center mb-4">
                <input id="checkbox-2" aria-describedby="checkbox-2" type="checkbox" classNameName="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" />
                <label for="checkbox-2" classNameName="text-sm ml-3 font-medium text-gray-900">I want to get promotional offers</label>
            </div>

            <div classNameName="flex items-start items-center mb-4">
                <input id="checkbox-3" aria-describedby="checkbox-3" type="checkbox" classNameName="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" />
                <label for="checkbox-3" classNameName="text-sm ml-3 font-medium text-gray-900">I am 18 years or older</label>
            </div>

            <div classNameName="flex items-start mb-4">
                <div classNameName="flex items-center h-5">
                <input id="shipping-2" aria-describedby="shipping-2" type="checkbox" classNameName="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" />
                </div>
                <div classNameName="text-sm ml-3">
                <label for="shipping-2" classNameName="font-medium text-gray-900">Free shipping via Flowbite</label>
                <div classNameName="text-gray-500"><span classNameName="font-normal text-xs">For orders shipped from Flowbite from <span classNameName="font-medium">€ 25</span> in books or <span>€ 29</span> on other categories</span></div>
                </div>
            </div>

            <div classNameName="flex items-start items-center">
                <input id="international-shipping-disabled" aria-describedby="international-shipping-disabled" type="checkbox" classNameName="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" disabled="" />
                <label for="international-shipping-disabled" classNameName="text-sm ml-3 font-medium text-gray-400">Eligible for international shipping (disabled)</label>
            </div>
        </fieldset>
        </div>
    );
}


export function CheckBox(props){

    return(
        <div className="flex items-start items-center">
            <input classNameName="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" id="flowbite" aria-describedby="flowbite" type="checkbox" />
            <label classNameName="text-sm ml-3 font-medium text-gray-900" for="flowbite">I love how Flowbite works</label>
        </div>

    );
}

export function RadioButton(props){

    return(
        <div className="flex items-center mb-4">
            <input id="country-option-1" type="radio" name="countries" value="USA" className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-1" aria-describedby="country-option-1" checked />
            <label for="country-option-1" className="text-sm font-medium text-gray-900 ml-2 block">
            United States
            </label>
        </div>
    );
}

export function RadioField(props){

    return(
        <div>  
        <fieldset>
            <legend className="sr-only">
                Countries
            </legend>

            <div className="flex items-center mb-4">
                <input id="country-option-1" type="radio" name="countries" value="USA" className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-1" aria-describedby="country-option-1" checked />
                <label for="country-option-1" className="text-sm font-medium text-gray-900 ml-2 block">
                United States
                </label>
            </div>

            <div className="flex items-center mb-4">
                <input id="country-option-2" type="radio" name="countries" value="Germany" className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-2" aria-describedby="country-option-2" />
                <label for="country-option-2" className="text-sm font-medium text-gray-900 ml-2 block">
                Germany
                </label>
            </div>

            <div className="flex items-center mb-4">
                <input id="country-option-3" type="radio" name="countries" value="Spain" className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-3" aria-describedby="country-option-3" />
                <label for="country-option-3" className="text-sm font-medium text-gray-900 ml-2 block">
                Spain
                </label>
            </div>

            <div className="flex items-center mb-4">
                <input id="country-option-4" type="radio" name="countries" value="United Kingdom" className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-4" aria-describedby="country-option-4" />
                <label for="country-option-4" className="text-sm font-medium text-gray-900 ml-2 block">
                United Kingdom
                </label>
            </div>

            <div className="flex items-center">
                <input id="option-disabled" type="radio" name="countries" value="China" className="h-4 w-4 border-gray-200 focus:ring-2 focus:ring-blue-300" aria-labelledby="option-disabled" aria-describedby="option-disabled" disabled />
                <label for="option-disabled" className="text-sm font-medium text-gray-400 ml-2 block">
                China (disabled)
                </label>
            </div>
            </fieldset>
            </div>
    );
}