import styles from "./button.module.css";

const Button = ({ variant = "primary", size = "medium", fullWidth = true, children  }) => {
  return (
    <button
      data-fullwidth={fullWidth}
      data-size={size}
      data-variant={variant}
      className={styles.btn}
    >
      {children}
    </button>
  );
};

export default Button;
