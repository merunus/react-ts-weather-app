import { ListIcon, Navbar } from "../components";
import "../scss/app.scss";
import AppRoutes from "./AppRoutes";

const App = () => {
  return (
    <div className={"main"}>
      <Navbar />
      <AppRoutes />
      <ListIcon />
    </div>
  );
};

export default App;
