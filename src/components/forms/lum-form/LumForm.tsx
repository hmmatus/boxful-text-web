"use client";
import styles from "./LumForm.module.scss";
import WrappedInputText from "@/components/inputs/input-text/WrappedInputText";
import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import InputVolume from "@/components/inputs/input-volume/InputVolume";

const LumForm: React.FC = () => {
  return (
    <section id="lum-form">
      <label className="mb-20">Agrega tus bultos</label>
      <div className={styles["lum-form-container"]}>
        <div className={`flex flex-1 flex-row gap-2`}>
          <InputVolume
            value={{
              height: 0,
              length: 0,
              width: 0,
            }}
            onChangeValue={(key, value) => console.log(key, value)}
          />
          <WrappedInputText
            className="flex flex-1"
            label="Peso en libras"
            suffix={"lb"}
          />
          <div className="flex flex-3">
            <WrappedInputText
              containerClassName={styles["full-width"]}
              label="Contenido"
            />
          </div>
        </div>
        <div className={styles["add-button-container"]}>
          <Button
            className={styles["add-button"]}
            variant="solid"
            icon={<PlusOutlined className={styles["next-icon"]} />}
            iconPosition="end"
            onClick={() => console.log("test")}
          >
            Agregar
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LumForm;
