import { PhoneInputProps } from "react-phone-input-2";
import InputWrapper from "../input-wrapper/InputWrapper";
import InputPhone from "./InputPhone";

export interface WrappedInputPhoneProps extends PhoneInputProps {
  label: string;
  containerClassName?: string;
}

const WrappedInputPhone = ({
  label,
  containerClassName,
  ...rest
}: WrappedInputPhoneProps) => {
  return (
    <InputWrapper className={containerClassName} label={label}>
      <InputPhone {...rest} />
    </InputWrapper>
  );
};

export default WrappedInputPhone;
