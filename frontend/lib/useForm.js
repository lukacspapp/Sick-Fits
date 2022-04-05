import { useState } from 'react';

export default function useForm(intitial = {}) {
  const [inputs, setInputs] = useState(intitial);

  function handleChange(e) {
    let { value, name, type } = e.target;
    if (type === 'number') {
      value = parseInt(value); // when we update the price in the form it will save it as a string so we need to convert it back to number because the backend expects a number
    }
    if (type === 'file') {
      value[0] = e.target.files;
    }
    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  function resetForm() {
    setInputs(intitial);
  }

  function clearForm() {
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, ''])
    );
    setInputs(blankState);
  }

  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
  };

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
