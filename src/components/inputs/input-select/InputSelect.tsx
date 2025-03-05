import { Select, SelectProps } from "antd";
import styles from "./InputSelect.module.scss";

const InputSelect: React.FC<SelectProps> = (props) => {
  return (
    <Select
      className={`${styles["input-select"]} ${props.className}`}
      {...props}
    />
  );
};

export default InputSelect;
