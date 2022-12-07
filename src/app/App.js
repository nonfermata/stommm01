import Header from "./components/header";
import Main from "./components/main";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const App = () => {
    return (
        <>
            <Header />
            <Main />
            <ToastContainer />
        </>
    );
};

export default App;
