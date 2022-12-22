import React, { useEffect, useState } from "react";
import InputField from "./inputField";
import validator from "../../utils/validator";
import SubmitButton from "../common/submitButton";
import EmptyBlock from "../../utils/emptyBlock";
import Textarea from "./textarea";
import close from "../common/svg/close";
import classes from "./consultForm.module.css";

const ConsultForm = ({ onClose }) => {
    const [windowClass, setWindowClass] = useState("transparent");
    const [formClass, setFormClass] = useState("")
    useEffect(() => {
        setWindowClass("");
        setFormClass(classes.formNormal);
    }, []);
    const initialState = {
        name: "",
        phone: "",
        email: "",
        message: ""
    };
    const [data, setData] = useState(initialState);
    const [errors, setErrors] = useState({});

    const handleChangeData = (name, value) => {
        setData((prevState) => ({
            ...prevState,
            [name]: value
        }));
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
        phone: {
            isRequired: {
                message: "Телефон обязателен для заполнения"
            },
            isPhone: {
                message: "Некорректный номер телефона"
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
                style={{ top: window.scrollY, left: "0" }}
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
                        placeholder="Телефон (цифры без пробелов)"
                        error={errors.phone}
                    />
                    <InputField
                        name="email"
                        value={data.email}
                        onChange={handleChangeData}
                        placeholder="E-mail"
                        error={errors.email}
                    />
                    <Textarea
                        name="message"
                        value={data.message}
                        onChange={handleChangeData}
                        placeholder="Предпочтительная дата и время визита, другие вопросы или пожелания"
                        rows="4"
                    />
                    <EmptyBlock height="20" />
                    <SubmitButton disabled={!isValid} />
                </form>
            </div>
        </>
    );
};

export default ConsultForm;
