"use client";
import WrappedInputText from "@/components/inputs/input-text/WrappedInputText";
import styles from "./styles.module.scss";
import { useState } from "react";
import Image from "next/image";
export default function DeliverInfoPage() {
  const [value, setValue] = useState("");
  return (
    <main className={styles["delivery-info-page-container"]}>
      <div className={styles["row-content"]}>
        <WrappedInputText
          containerClassName={"flex-2"}
          label="📍 Dirección de recolección"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <WrappedInputText
          containerClassName={"flex-1"}
          label="📅 Fecha programada"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className={styles["row-content"]}>
        <WrappedInputText
          containerClassName={"flex-1"}
          label="Nombres"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <WrappedInputText
          containerClassName="flex-1"
          label="Apellidos"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <WrappedInputText
          containerClassName="flex-1"
          label="Correo electrónico"
          type="email"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className={styles["row-content"]}>
        <WrappedInputText
          containerClassName={"flex-1"}
          label="Telefono"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Image
          width={20}
          height={25}
          alt="location"
          src={"/icons/location.svg"}
          className={styles["location-icon"]}
        />
        <WrappedInputText
          containerClassName="flex-2"
          label="Dirección del destinatario"
          type="email"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className={styles["row-content"]}>
        <WrappedInputText
          containerClassName={"flex-1"}
          label="Departamento"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <WrappedInputText
          containerClassName="flex-1"
          label="Municipio"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <WrappedInputText
          containerClassName="flex-1"
          label="Punto de referencia"
          type="email"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className={styles["row-content"]}>
        <WrappedInputText
          containerClassName={"flex-1"}
          label="Punto de referencia"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </main>
  );
}
