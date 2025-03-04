"use client";
import Image from "next/image";
import styles from "./LumForm.module.scss";
import WrappedInputText from "@/components/inputs/input-text/WrappedInputText";
import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";

const LumForm: React.FC = () => {
  return (
    <section id="lum-form">
      <label className="mb-20">Agrega tus bultos</label>
      <div className={styles["lum-form-container"]}>
        <div className={`flex flex-1 flex-row gap-2`}>
          <div className="flex flex-3 flex-row justify-center">
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
            />
            <WrappedInputText
              className={styles["dimensions-input"]}
              style={{ borderRadius: 0, borderLeft: 0, borderRight: 0 }}
              label="Alto"
              suffix={<span className={styles["dimensions-suffix"]}>cm</span>}
              maxLength={3}
            />
            <WrappedInputText
              className={styles["dimensions-input"]}
              style={{ borderRadius: "0 10px 10px 0" }}
              label="Ancho"
              suffix={<span className={styles["dimensions-suffix"]}>cm</span>}
              maxLength={3}
            />
          </div>
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
