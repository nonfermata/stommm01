import analysisPrices from "../app/data/analysisPrices";

const initialState = localStorage.getItem("mylist")
    ? JSON.parse(localStorage.getItem("mylist"))
    : analysisPrices;

const isAddedCng = "ADD_SERVICE_TO_LIST";
const isOpenCatCng = "OPEN_CATEGORY";

export const isAddedChange = (id) => ({
    type: isAddedCng,
    id
});

export const isOpenCatChange = (id) => ({
    type: isOpenCatCng,
    id
});

const analysisPricesReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case isAddedCng:
            newState = state.map((cat) => ({
                ...cat,
                value: cat.value.map((subcat) => ({
                    ...subcat,
                    value: subcat.value.map((item) => {
                        if (item._id === action.id) {
                            item.isAdded = !item.isAdded;
                        }
                        return item;
                    })
                }))
            }));
            localStorage.setItem("mylist", JSON.stringify(newState));
            return newState;
        case isOpenCatCng:
            newState = state.map((cat) => {
                if (cat._id === action.id) {
                    cat.isOpen = !cat.isOpen;
                }
                return cat;
            });
            localStorage.setItem("mylist", JSON.stringify(newState));
            return newState;
        default:
            return state;
    }
};

export default analysisPricesReducer;
