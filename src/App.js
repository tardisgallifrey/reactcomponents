import Alert from "./components/alert";
import Badge from "./components/badge";
import BreadCrumb from "./components/breadcrumb";

const color="green";

function App() {
  return (
    <div>
      <Alert title="Fire Sale!" message="  I have no idea" color={color} />
      <Badge title="Your Badge" color={color} />
      <BreadCrumb />
    </div>
  );
}

export default App;
