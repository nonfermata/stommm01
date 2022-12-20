import Header from "./components/header/header";
import Main from "./components/main";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { connect } from "react-redux";
import { isFullHeaderChange } from "../redux/isFullHeaderReducer";
import Analysis from "./components/pricelists/analysis";
import Selected from "./components/pricelists/selected";
import Stomatology from "./components/pricelists/stomatology";
import Cosmetology from "./components/pricelists/cosmetology";
import { Route, Switch } from "react-router-dom";

const App = ({ isFullHeader, isFullHeaderChange, visibleComp }) => {
    const handleScroll = () => {
        if (!isFullHeader) {
            isFullHeaderChange();
        }
    };
    return (
        <div className="main" onWheel={handleScroll} onTouchMove={handleScroll}>
            <Header isFullHeader={isFullHeader} />
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/stomatology" component={Stomatology} />
                <Route path="/analysis" component={Analysis} />
                <Route path="/cosmetology" component={Cosmetology} />
                <Route path="/selected" component={Selected} />
            </Switch>
            <ToastContainer />
        </div>
    );
};

const mapStateToProps = ({ isFullHeader }) => ({
    isFullHeader
});

const mapDispatchToProps = { isFullHeaderChange };

export default connect(mapStateToProps, mapDispatchToProps)(App);
