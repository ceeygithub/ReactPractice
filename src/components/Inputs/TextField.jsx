import styles from "./input.module.css";

const TextField = ({
    id,
    label,
    placeholder,
    onChangeHandler,
    name,
    value,
}) => {
    return <div class={styles.inputWrapper}>
        <label htmlFor={id}>{label}</label>
        <input value={value} name={name} onChange={onChangeHandler} placeholder={placeholder} id={id} className={styles.input} />
    </div>
}

export default TextField;
