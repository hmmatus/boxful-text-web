import "react-phone-input-2/lib/style.css";
import PhoneInput, { PhoneInputProps } from "react-phone-input-2";
import styles from "./InputPhone.module.scss";

const InputPhone: React.FC<PhoneInputProps> = (props) => {
  return (
    <PhoneInput
      containerClass={`${styles["phone-input-container"]} ${props.containerClass}`}
      inputClass={`${props.inputClass} ${styles["phone-input"]}`}
      buttonClass={`${props.buttonClass} ${styles["phone-button"]}`}
      country="sv"
      {...props}
    />
  );
};

export default InputPhone;
