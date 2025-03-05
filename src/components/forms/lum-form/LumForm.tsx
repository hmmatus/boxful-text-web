"use client";
import { useState } from "react";
import styles from "./LumForm.module.scss";
import WrappedInputText from "@/components/inputs/input-text/WrappedInputText";
import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import InputVolume from "@/components/inputs/input-volume/InputVolume";
import { LumpI } from "@/types/lum.type";
import { VolumeI } from "@/types/volume.type";

interface LumFormProps {
  onSend: (data: LumpI) => void;
}
const defaultValues: LumpI = {
  length: 0,
  width: 0,
  height: 0,
  weight: 0,
  content: "",
};
const LumForm: React.FC<LumFormProps> = ({ onSend }) => {
  const [lumData, setLumData] = useState<LumpI>(defaultValues);
  const handleChangeInputVolume = (key: keyof VolumeI, value: VolumeI) => {
    const newValue = value[key];
    setLumData({ ...lumData, [key]: newValue });
  };

  const handleOnAdd = () => {
    onSend(lumData);
    setLumData(defaultValues);
  };
  return (
    <section id="lum-form">
      <label className="mb-20">Agrega tus bultos</label>
      <div className={styles["lum-form-container"]}>
        <div className={`flex flex-1 flex-row gap-2`}>
          <InputVolume
            value={{
              height: lumData.height,
              length: lumData.length,
              width: lumData.width,
            }}
            onChangeValue={(key, value) => handleChangeInputVolume(key, value)}
          />
          <WrappedInputText
            className="flex flex-1"
            label="Peso en libras"
            suffix={"lb"}
            type="number"
            value={lumData.weight}
            onChange={(e) =>
              setLumData({ ...lumData, weight: parseInt(e.target.value) })
            }
          />
          <div className="flex flex-3">
            <WrappedInputText
              containerClassName={styles["full-width"]}
              label="Contenido"
              value={lumData.content}
              onChange={(e) =>
                setLumData({ ...lumData, content: e.target.value })
              }
            />
          </div>
        </div>
        <div className={styles["add-button-container"]}>
          <Button
            className={styles["add-button"]}
            variant="solid"
            icon={<PlusOutlined className={styles["next-icon"]} />}
            iconPosition="end"
            onClick={handleOnAdd}
          >
            Agregar
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LumForm;
