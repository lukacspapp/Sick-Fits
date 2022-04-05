import { useState } from 'react';

export default function useForm(intitial = {}) {
  const [inputs, setInputs] = useState(intitial);

  function handleChange(e) {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  }

  // function setValue(key, value) {
  //   setValues({
  //     ...values,
  //     [key]: value,
  //   });
  // }

  // function handleChange(event) {
  //   setValue(event.target.getAttribute('name'), event.target.value);
  // }

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   console.log(values);
  // }

  // return {
  //   handleChange,
  //   handleSubmit,
  //   values,
  // };
}
