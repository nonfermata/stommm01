const setVisibleComp = "SET_VISIBLE_COMP";

export const setVisible = (comp) => ({
    type: setVisibleComp,
    comp
});

const visibleCompReducer = (state = "main", action) => {
    switch (action.type) {
        case setVisibleComp:
            return action.comp;
        default:
            return state;
    }
};

export default visibleCompReducer;
