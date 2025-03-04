"use client";
import LumForm from "@/components/forms/lum-form/LumForm";
import styles from "./styles.module.scss";
import LumList from "@/components/sections/lum-list/LumList";
import { LumI } from "@/types/lum.type";
import { useState } from "react";
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
    </main>
  );
}
