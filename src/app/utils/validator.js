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
            case "isEmail":
                const emailRegExp = /^\S+@\S+\.\S+$/g;
                statusValidate = !emailRegExp.test(data);
                break;
            case "isPhone":
                const phoneRegExp = /^(8|\+7|7)?[\d]{10}$/g;
                statusValidate = !phoneRegExp.test(data);
                break;
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
