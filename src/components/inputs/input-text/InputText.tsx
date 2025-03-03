import { Input, InputProps } from "antd";
import styles from "./InputText.module.scss";
const InputText: React.FC<InputProps> = (props) => {
  return (
    <Input
      className={`${props.className} ${styles["input-text"]}`}
      {...props}
    />
  );
};

export default InputText;
