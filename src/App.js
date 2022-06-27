import "./App.css";
import SimpleLineChart from "./components/SimpleLineChart";
import Button from '@mui/material/Button';
import SignIn from "./components/SignIn";

function App() {
  return (
    <div className="App">
      {/* <Button variant="contained">Hello World</Button>
      <SimpleLineChart /> */}
      <SignIn />
    </div>
  );
}

export default App;