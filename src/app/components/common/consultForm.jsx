import React, { useEffect, useState } from "react";
import InputField from "./form/inputField";
import validator from "../../utils/validator";
import SubmitButton from "./submitButton";
import EmptyBlock from "../../utils/emptyBlock";
import Textarea from "./form/textarea";
import close from "../svg/close";

const ConsultForm = ({ onClose }) => {
    const [windowClass, setWindowClass] = useState("hidden");
    useEffect(() => {
        setWindowClass("");
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

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!validate()) return;
        console.log(data);
        onClose(event);
    };

    return (
        <>
            <div className={"totalWindow " + windowClass}></div>
            <div className="frm__wrap" onClick={onClose}>
                <form className="form" onSubmit={handleSubmit}>
                    {close}
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
                        placeholder="Телефон для связи"
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
                        placeholder="Предпочтительная дата и время визита"
                        rows="3"
                    />
                    <EmptyBlock height="20" />
                    <SubmitButton disabled={!isValid}>
                        Отправить заявку
                    </SubmitButton>
                </form>
            </div>
        </>
    );
};

export default ConsultForm;
