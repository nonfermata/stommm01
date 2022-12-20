import Header from "./components/header/header";
import Main from "./components/main";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { connect } from "react-redux";
import { isFullHeaderChange } from "../redux/isFullHeaderReducer";
import Analysis from "./components/pricelists/analysis";
import MyList from "./components/pricelists/myList";
import Stomatology from "./components/pricelists/stomatology";
import Cosmetology from "./components/pricelists/cosmetology";

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
            {visibleComp === "analysis" && <Analysis />}
            {visibleComp === "stomatology" && <Stomatology />}
            {visibleComp === "cosmetology" && <Cosmetology />}
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
