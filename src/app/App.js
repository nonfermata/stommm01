import Header from "./components/header/header";
import Main from "./components/main";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { connect } from "react-redux";
import { isFullHeaderChange } from "../redux/isFullHeaderReducer";
import Calculator from "./components/calculator/calculator";
import MyList from "./components/calculator/myList";

const App = ({ isFullHeader, isFullHeaderChange, visibleComp }) => {
    const handleScroll = () => {
        if (!isFullHeader) {
            isFullHeaderChange();
        }
    };
    return (
        <div className="main" onWheel={handleScroll} onTouchMove={handleScroll}>
            <Header isFullHeader={isFullHeader} />
            {visibleComp === "main" && <Main />}
            {visibleComp === "calculator" && <Calculator />}
            {visibleComp === "mylist" && <MyList />}
            <ToastContainer />
        </div>
    );
};

const mapStateToProps = ({ isFullHeader, visibleComp }) => ({
    isFullHeader,
    visibleComp
});

const mapDispatchToProps = { isFullHeaderChange };

export default connect(mapStateToProps, mapDispatchToProps)(App);
