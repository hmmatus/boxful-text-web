import styles from "./InputWrapper.module.scss";
export interface InputWrapperProps {
  label: string;
  className?: string;
  children: React.ReactNode;
}
const InputWrapper: React.FC<InputWrapperProps> = ({
  className,
  label,
  children,
}) => {
  return (
    <div className={`${className} ${styles["input-wrapper-container"]}`}>
      <label>{label}</label>
      {children}
    </div>
  );
};

export default InputWrapper;
