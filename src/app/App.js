import Header from "./components/header/header";
import Main from "./components/main";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { connect } from "react-redux";
import { isFullHeaderChange } from "../redux/isFullHeaderReducer";

const App = ({ isFullHeader, isFullHeaderChange }) => {
    const handleScroll = () => {
        if (!isFullHeader) {
            isFullHeaderChange();
        }
    };
    return (
        <div className="main" onWheel={handleScroll}>
            <Header isFullHeader={isFullHeader} />
            <Main />
            <ToastContainer />
        </div>
    );
};

const mapStateToProps = ({ isFullHeader }) => ({
    isFullHeader
});

const mapDispatchToProps = { isFullHeaderChange };

export default connect(mapStateToProps, mapDispatchToProps)(App);
