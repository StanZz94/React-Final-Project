import { useState } from "react";

export default function useForm(submitHandler, initialValues) {
    const [ values, setValues ] = useState(initialValues);
    const [ errors, setErrors ] = useState([]);

    const onChange = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    }

    const onSubmit = (e) => {
        e.preventDefault();

        submitHandler(values, (error) => {
            setErrors([...errors, error.message]);
        });

        setValues(initialValues);
    }

    return {
        values,
        errors,
        onChange,
        onSubmit
    };
}