"use client";
import "@ant-design/v5-patch-for-react-19";
import LumForm from "@/components/forms/lum-form/LumForm";
import styles from "./styles.module.scss";
import LumList from "@/components/sections/lum-list/LumList";
import { LumI } from "@/types/lum.type";
import { useState } from "react";
import { Button } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
export default function PackageListPage() {
  const [lums, setLums] = useState<LumI[]>([
    {
      length: 0,
      width: 0,
      height: 0,
      weight: 0,
      content: "Text",
    },
    {
      length: 0,
      width: 0,
      height: 0,
      weight: 0,
      content: "Text 2",
    },
  ]);
  return (
    <main className={styles["packages-list-container"]}>
      <LumForm />
      <div style={{ margin: "15px 0" }} />
      <LumList lums={lums} />
      <div style={{ margin: "15px 0" }} />
      <div className="flex flex-1 flex-row justify-between">
        <Button
          className={styles["back-button"]}
          color="default"
          variant="filled"
          icon={<ArrowLeftOutlined className={styles["back-icon"]} />}
          onClick={() => console.log("test")}
        >
          Siguiente
        </Button>
        <Button
          className={styles["next-button"]}
          color="primary"
          variant="solid"
          icon={<ArrowRightOutlined className={styles["next-icon"]} />}
          iconPosition="end"
          onClick={() => console.log("test")}
        >
          Enviar
        </Button>
      </div>
    </main>
  );
}
