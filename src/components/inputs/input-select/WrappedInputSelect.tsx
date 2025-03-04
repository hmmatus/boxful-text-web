import { SelectProps } from "antd";
import InputWrapper from "../input-wrapper/InputWrapper";
import InputSelect from "./InputSelect";

export interface WrappedInputSelectProps extends SelectProps {
  label: string;
  containerClassName?: string;
}
const WrappedInputSelect = ({
  label,
  containerClassName,
  ...rest
}: WrappedInputSelectProps) => {
  return (
    <InputWrapper label={label} className={containerClassName}>
      <InputSelect {...rest} />
    </InputWrapper>
  );
};

export default WrappedInputSelect;
