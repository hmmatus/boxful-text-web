import { DatePickerProps } from "antd";
import InputWrapper from "../input-wrapper/InputWrapper";
import InputDatePicker from "./InputDatePicker";

export interface WrappedInputDatePickerProps extends DatePickerProps {
  label: string;
  containerClassName?: string;
}
const WrappedInputDatePicker: React.FC<WrappedInputDatePickerProps> = ({
  label,
  containerClassName,
  ...rest
}) => {
  return (
    <InputWrapper className={containerClassName} label={label}>
      <InputDatePicker {...rest} />
    </InputWrapper>
  );
};

export default WrappedInputDatePicker;
