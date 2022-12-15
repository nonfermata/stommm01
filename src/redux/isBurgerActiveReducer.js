const isBurgerActiveCng = "IS_BURGER_ACTIVE_CHANGE";

export const isBurgerActiveChange = () => ({
    type: isBurgerActiveCng
});

const isBurgerActiveReducer = (state = false, action) => {
    switch (action.type) {
        case isBurgerActiveCng:
            return !state;
        default:
            return state;
    }
};

export default isBurgerActiveReducer;
