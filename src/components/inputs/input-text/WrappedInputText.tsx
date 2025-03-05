import { InputProps } from "antd";
import InputWrapper from "../input-wrapper/InputWrapper";
import InputText from "./InputText";
export interface WrappedInputTextProps extends InputProps {
  label: string;
  containerClassName?: string;
}
const WrappedInputText = ({
  label,
  containerClassName,
  ...rest
}: WrappedInputTextProps) => {
  return (
    <InputWrapper className={containerClassName} label={label}>
      <InputText {...rest} />
    </InputWrapper>
  );
};

export default WrappedInputText;
