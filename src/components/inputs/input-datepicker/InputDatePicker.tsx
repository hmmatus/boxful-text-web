import { DatePicker, DatePickerProps } from "antd";
import styles from "./InputDatePicker.module.scss";
import React from "react";
import Image from "next/image";
const dateFormat = "DD / MM / YYYY";
const InputDatePicker: React.FC<DatePickerProps> = (props) => {
  return (
    <span className={styles["input-datepicker-container"]}>
      <Image
        width={24}
        height={27}
        alt="calendar"
        src={"/icons/calendar.svg"}
        className={styles["calendar-icon"]}
      />
      <DatePicker
        format={props.format ?? dateFormat}
        className={`${styles["input-datepicker"]} ${props.className}`}
        suffixIcon={null}
        placeholder={props.placeholder ?? ""}
        {...props}
      />
    </span>
  );
};

export default InputDatePicker;
