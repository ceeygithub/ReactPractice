import styles from "./formComponent.module.css";
import clsx from "clsx";
import TextField from "../../Inputs/TextField";
import Button from "../../Button";
import { useState } from "react";
import TextArea from "../../Inputs/TextArea";
const FormComponent = ({ fatimah }) => {
  return (
    <div className={clsx(styles.wrapper, fatimah)}>
      <div>
        <h3 className={styles.heading}>
          An easy way to send requests to all suppliers
        </h3>
        <p className={styles.lead}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </div>

      <div className={styles.formWrapper}>
        <Form />
      </div>
    </div>
  );
};

export const Form = () => {
  const [formState, setFormState] = useState({});

  const onChangeHandler = (e) => {
    const { value, name } = e?.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form className={styles.form}>
      <TextField
        value={formState.item}
        name="item"
        onChangeHandler={onChangeHandler}
        id="item"
        placeholder="what item you need?"
      />
      <TextArea onChangeHandler={onChangeHandler} name="description" value={formState.description} />
      <div className={styles.btnWrapper}>
        <Button>Send Inquiry</Button>
      </div>
    </form>
  );
};

export default FormComponent;
