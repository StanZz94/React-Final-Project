import { useState } from "react";

export default function useForm(submitHandler, initialValues) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState([]);

  const onChange = (e) => {
    setValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    submitHandler(values, (error) => {
      if (!errors.includes(error.message)) {
        setErrors([...errors, error.message]);
      }
    });

    setValues(initialValues);
  };


  const onSubmitRegister = (e) => {
    e.preventDefault();
    submitHandler(values, (error) => {
      const { password, repeatPassword } = values;
    

      if (password !== repeatPassword) {

        setErrors([...errors, "Password and Repeat password does not match!"]);
      }

      if (!errors.includes(error.message)) {
        setErrors([...errors, error.message]);
      }
    });

    setValues(initialValues);
  };

  return {
    values,
    errors,
    onChange,
    onSubmit,
    onSubmitRegister,
  };
}
