import pricelist from "../app/data/pricelist";

const initialState = pricelist.map((item) => ({ ...item, isAdded: false }));

const isAddedCng = "ADD_SERVICE_TO_LIST";

export const isAddedChange = (id) => ({
    type: isAddedCng,
    id
});

const pricelistReducer = (state = initialState, action) => {
    switch (action.type) {
        case isAddedCng:
            return state.map((item) => {
                if (item._id === action.id) {
                    item.isAdded = !item.isAdded;
                }
                return item;
            });
        default:
            return state;
    }
};

export default pricelistReducer;
