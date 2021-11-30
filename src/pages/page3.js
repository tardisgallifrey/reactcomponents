import Navbar from '../components/navbar';
import Upload from '../components/upload';
import Toggle from '../components/toggle';
import List from '../components/list';

export default function Page3(props){

    return(
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <h2>This is page 3.</h2>
                <p>This is an upload a file input component.</p>
                <Upload />
                <p>This is a toggle switch component.</p>
                <p>Underneath, it's just a check box.</p>
                <Toggle />
                <p>This is a List element component.</p>
                <List />
            </div>    
        </div>
    );
}