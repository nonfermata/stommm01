import { ToastContainer } from "react-toastify";
import { Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Header from "./components/header/header";
import Main from "./components/main";
import Stomatology from "./components/pricelists/stomatology";
import Cosmetology from "./components/pricelists/cosmetology";
import Docs from "./components/docs/docs";
import Analysis from "./components/pricelists/analysis";
import Selected from "./components/pricelists/selected";
import { getHeaderOpacity, setHeaderOpaque } from "../redux/headerReducer";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
    const dispatch = useDispatch();
    const isHeaderTransparent = useSelector(getHeaderOpacity());
    const handleScroll = () => {
        if (!isHeaderTransparent) {
            dispatch(setHeaderOpaque());
        }
    };
    return (
        <div className="main" onWheel={handleScroll} onTouchMove={handleScroll}>
            <Header isHeaderTransparent={isHeaderTransparent} />
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/stomatology" component={Stomatology} />
                <Route path="/analysis" component={Analysis} />
                <Route path="/cosmetology" component={Cosmetology} />
                {/*<Route path="/cosmetology-ann" component={CosmetologyAnn} />*/}
                {/*<Route path="/cosmetology-ang" component={CosmetologyAng} />*/}
                <Route path="/selected" component={Selected} />
                <Route path="/docs" component={Docs} />
            </Switch>
            <ToastContainer />
        </div>
    );
};

export default App;
