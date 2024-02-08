import styles from "./input.module.css";

const TextArea = ({
    value,
    onChangeHandler,
    name,
}) => {
    return <textarea name={name} onChange={onChangeHandler} value={value} className={styles.input} />
}

export default TextArea;
