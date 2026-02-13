import Title from "./components/Title";
import {
  CustomInstance,
  FirstRequest,
  GlobalInstance,
  Headers,
  PostRequest,
} from "./examples";
import "./axios/global";
const App = () => {
  return (
    <div>
      <Title />
      <CustomInstance />
    </div>
  );
};

export default App;
