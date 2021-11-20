import Alert from "./components/alert";

const color="green";

function App() {
  return (
    <div>
      <Alert title="Fire Sale!" message="  I have no idea" color={color} />
    </div>
  );
}

export default App;
