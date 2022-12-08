const isFullHeaderCng = "IS_FULL_HEADER_CHANGE";

export const isFullHeaderChange = () => ({
    type: isFullHeaderCng
});

const isFullHeaderReducer = (state = false, action) => {
    switch (action.type) {
        case isFullHeaderCng:
            if (!state) {
                return true;
            }
            break;
        default:
            return state;
    }
};

export default isFullHeaderReducer;
