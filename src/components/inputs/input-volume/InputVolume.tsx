import React, { useState } from "react";
import Image from "next/image";
import WrappedInputText from "../input-text/WrappedInputText";
import styles from "./InputVolume.module.scss";
import { VolumeI } from "@/types/volume.type";

export interface InputVolumeProps {
  value: VolumeI;
  onChangeValue: (key: keyof VolumeI, value: VolumeI) => void;
  containerStyle?: React.CSSProperties;
}
const InputVolume: React.FC<InputVolumeProps> = ({
  value,
  onChangeValue,
  containerStyle,
}) => {
  const [volume, setVolume] = useState<VolumeI>(value);
  const handleInput = (
    key: keyof VolumeI,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = { ...volume, [key]: parseInt(e.target.value) };
    setVolume(newValue);
    onChangeValue(key, newValue);
  };
  return (
    <div
      style={{ ...containerStyle }}
      className="flex flex-3 flex-row justify-center"
    >
      <Image
        src="/icons/box.svg"
        alt="box"
        width={30}
        height={30}
        className={styles["box-icon"]}
      />
      <WrappedInputText
        className={styles["dimensions-input"]}
        style={{ borderRadius: "10px 0 0 10px" }}
        label="Largo"
        suffix={<span className={styles["dimensions-suffix"]}>cm</span>}
        maxLength={3}
        type="number"
        value={value.length}
        onChange={(e) => handleInput("length", e)}
      />
      <WrappedInputText
        className={styles["dimensions-input"]}
        style={{ borderRadius: 0, borderLeft: 0, borderRight: 0 }}
        label="Alto"
        suffix={<span className={styles["dimensions-suffix"]}>cm</span>}
        maxLength={3}
        type="number"
        value={value.height}
        onChange={(e) => handleInput("height", e)}
      />
      <WrappedInputText
        className={styles["dimensions-input"]}
        style={{ borderRadius: "0 10px 10px 0" }}
        label="Ancho"
        suffix={<span className={styles["dimensions-suffix"]}>cm</span>}
        maxLength={3}
        type="number"
        value={value.width}
        onChange={(e) => handleInput("width", e)}
      />
    </div>
  );
};

export default InputVolume;
