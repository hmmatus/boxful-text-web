import { LumI } from "@/types/lum.type";
import styles from "./LumItem.module.scss";
import Image from "next/image";
import WrappedInputText from "@/components/inputs/input-text/WrappedInputText";
export interface LumItemProps {
  lum: LumI;
  onRemove: (lum: LumI) => void;
}
const LumItem: React.FC<LumItemProps> = ({ lum, onRemove }) => {
  const {} = lum;
  return (
    <div className={styles["lum-item-container"]}>
      <div className={styles["form-container"]}>
        <div className={`flex flex-1 flex-row gap-2`}>
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
        </div>
      </div>
      <div
        className="flex flex-1 flex-row justify-end"
        style={{ marginTop: "10px" }}
      >
        <Image
          className={styles["delete-icon"]}
          src="/icons/trash-can.svg"
          alt="trash"
          width={30}
          height={30}
          onClick={() => onRemove(lum)}
        />
      </div>
    </div>
  );
};

export default LumItem;
