const validator = (data, config) => {
    const errors = {};
    const validate = (validateMethod, data, config) => {
        let statusValidate;
        switch (validateMethod) {
            case "isRequired":
                if (typeof data === "boolean") {
                    statusValidate = !data;
                } else {
                    statusValidate = data.trim() === "";
                }
                break;
            case "isEmail": {
                const emailRegExp = /^\S+@\S+\.\S+$/g;
                statusValidate = !emailRegExp.test(data);
                break;
            }
            case "isCapitalSymbol": {
                const capitalRegExp = /[A-Z]+/g;
                statusValidate = !capitalRegExp.test(data);
                break;
            }
            case "isDigit": {
                const digitRegExp = /\d+/g;
                statusValidate = !digitRegExp.test(data);
                break;
            }
            case "min": {
                statusValidate = data.length < config.value;
                break;
            }
            case "hasDate": {
                statusValidate = !data.day || !data.month || !data.year;
                break;
            }
            case "isAdult": {
                const date = new Date();
                const day = date.getDate();
                const month = date.getMonth() + 1;
                const year = date.getFullYear();
                statusValidate =
                    year - Number(data.year) < 18 ||
                    (year - Number(data.year) === 18 &&
                        month < Number(data.month)) ||
                    (year - Number(data.year) === 18 &&
                        month === Number(data.month) &&
                        day < Number(data.day));
                break;
            }
            default:
                break;
        }
        if (statusValidate) return config.message;
    };
    for (const fieldName in data) {
        for (const validateMethod in config[fieldName]) {
            const error = validate(
                validateMethod,
                data[fieldName],
                config[fieldName][validateMethod]
            );
            if (error && !errors[fieldName]) {
                errors[fieldName] = error;
            }
        }
    }
    return errors;
};

export default validator;
