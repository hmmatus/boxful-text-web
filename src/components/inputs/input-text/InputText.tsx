import { Input, InputProps } from "antd";
import styles from "./InputText.module.scss";
interface InputTextProps extends InputProps {
  suffixText?: string;
}
const InputText: React.FC<InputTextProps> = (props) => {
  return (
    <Input
      className={`${props.className} ${styles["input-text"]}`}
      {...props}
    />
  );
};

export default InputText;
