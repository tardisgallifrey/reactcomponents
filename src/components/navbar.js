import { Link } from 'react-router-dom';
//import classnames from 'classnames';


export default function NavBar(props){

    return(
            <nav className="bg-gray-300 border-gray-200 px-2">
            <div className="container mx-auto flex flex-wrap items-center justify-between">
                <Link to="/">
                    <span>Component Examples Library</span>
                </Link>
                <div className="hidden md:block w-full md:w-auto" id="mobile-menu">
                <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
                    <li>
                    <Link to="/page1" className="bg-blue-700 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-blue-700 md:p-0 rounded" aria-current="page">Page 1</Link>
                    </li>
                    <li>
                    <Link to="/page2" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Page 2</Link>
                    </li>
                    <li>
                    <Link to="/page3" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Page 3</Link>
                    </li>
                    <li>
                    <Link to="/page4" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Page 4</Link>
                    </li>
                    <li>
                    <Link to="/page5" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Page 5</Link>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
    );
}