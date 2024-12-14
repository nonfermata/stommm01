import React, {useEffect, useState} from "react";
import InputField from "./inputField";
import validator from "../../utils/validator";
import SubmitButton from "../common/submitButton";
import EmptyBlock from "../../utils/emptyBlock";
import Textarea from "./textarea";
import close from "../common/svg/close";
import classes from "./consultForm.module.css";
import CheckBoxField from "./checkBoxField";
import policy from "../../assets/pdf/policy.pdf";

const ConsultForm = ({onClose}) => {
    const [windowClass, setWindowClass] = useState("transparent");
    const [formClass, setFormClass] = useState("");
    useEffect(() => {
        setWindowClass("");
        setFormClass(classes.formNormal);
    }, []);
    const initialState = {
        name: "",
        phone: "",
        email: "",
        message: "",
        agreement: false
    };
    const [data, setData] = useState(initialState);
    const [errors, setErrors] = useState({});

    const formatPhone = (value) => {
        let newValue =
            value.length < 3 && value.length > 1
                ? ""
                : value.replace("+7 ", "");
        newValue = newValue.trim();
        if (isNaN(newValue)) {
            const arr = [];
            for (const i of newValue) {
                if (i !== " " && !isNaN(i)) {
                    arr.push(i);
                }
            }
            newValue = arr.join("");
        }
        return newValue;
    };

    const handleChangeData = (name, value) => {
        if (name === "phone") {
            setData((prevState) => ({
                ...prevState,
                phone: "+7 " + formatPhone(value)
            }));
        } else {
            setData((prevState) => ({
                ...prevState,
                [name]: value
            }));
        }
    };
    const validatorConfig = {
        name: {
            isRequired: {
                message: "Имя обязательно для заполнения"
            }
        },
        email: {
            isRequired: {
                message: "E-mail обязателен для заполнения"
            },
            isEmail: {
                message: "Некорректный e-mail"
            }
        },
        agreement: {
            isRequired: {
                message: " "
            }
        }
    };

    useEffect(() => {
        validate();
    }, [data]);

    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const isValid = Object.keys(errors).length === 0;

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     if (!validate()) return;
    //     onClose(event);
    // };

    return (
        <>
            <div className={"darkTotalWindow " + windowClass}></div>
            <div
                className="transparentTotalWindow"
                onClick={onClose}
                style={{top: window.scrollY, left: "0"}}
            >
                <form
                    className={classes.form + " " + formClass}
                    action="https://meddenta-klin.ru/send.php"
                    method="POST"
                    // onSubmit={handleSubmit}
                >
                    <div className={classes.closeForm}>{close}</div>
                    <InputField
                        name="name"
                        value={data.name}
                        onChange={handleChangeData}
                        placeholder="Ваше имя"
                        error={errors.name}
                    />
                    <InputField
                        name="phone"
                        value={data.phone}
                        onChange={handleChangeData}
                        placeholder="Ваш телефон"
                    />
                    <InputField
                        name="email"
                        value={data.email}
                        onChange={handleChangeData}
                        placeholder="Ваш e-mail"
                        error={errors.email}
                    />
                    <Textarea
                        name="message"
                        value={data.message}
                        onChange={handleChangeData}
                        placeholder="Предпочтительная дата и время визита, другие вопросы или пожелания"
                        rows="4"
                    />
                    <CheckBoxField
                        name="agreement"
                        value={data.agreement}
                        onChange={handleChangeData}
                        error={errors.agreement}
                    >
                        Я ознакомился(-лась) с условиями{" "}
                        <a href={policy} target="_blank" rel="noreferrer">
                            <span className={classes.form__policy}>
                                Политики конфиденциальности
                            </span>
                        </a>{" "}
                        и принимаю их
                    </CheckBoxField>
                    <EmptyBlock height="20"/>
                    <SubmitButton
                        disabled={!isValid || data.phone.length !== 13}
                    />
                </form>
            </div>
        </>
    );
};

export default ConsultForm;
