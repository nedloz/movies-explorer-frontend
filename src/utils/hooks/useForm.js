import { useState } from 'react';

function useForm(inputValues) {
  const [values, setValues] = useState(inputValues);
  const handleChange = (event, isCheckBox = false) => {
    if (isCheckBox) {
      const { checked, name } = event.target;
      setValues({ ...values, [name]: checked });
    }
    else {
      const { value, name } = event.target;
      setValues({ ...values, [name]: value });
    }
  };
  return { values, handleChange, setValues };
}

export default useForm;
