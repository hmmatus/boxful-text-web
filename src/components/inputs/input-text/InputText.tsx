import { Input, InputProps } from "antd";
import styles from "./InputText.module.scss";
const InputText = (props: InputProps) => {
  return <Input className={`${props.className} ${styles.input}`} {...props} />;
};

export default InputText;
