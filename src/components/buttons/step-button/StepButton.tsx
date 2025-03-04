import { Button, ButtonProps } from "antd";
import styles from "./StepButton.module.scss";
const StepButton: React.FC<ButtonProps> = (props) => {
  const clasName = `${props.className} ${styles["main-button"] || ""}`;
  console.log(clasName);
  return (
    <Button
      className={`${props.className} ${styles["main-button"]}`}
      {...props}
    />
  );
};

export default StepButton;
