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
    if(e.target.name && e.target.email){
    e.target.name.value = "";
    e.target.lastName.value = "";
    e.target.email.value = "";
    e.target.password.value = "";
    e.target.repeatPassword.value = "";
    }

    
    if(e.target.comment) {
      e.target.comment.value = "";
      console.log(e.target.comment.value);
      
    }

    setErrors([]);

    submitHandler(values, (error) => {
      if (!errors.includes(error.message)) {
        setErrors([...errors, error.message]);
      }
    });

  };


  return {
    values,
    errors,
    onChange,
    onSubmit,
  };
}
