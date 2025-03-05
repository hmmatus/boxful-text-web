import Image from "next/image";
import styles from "./styles.module.scss";
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="align-center justify-center">
      <section className={styles["login-container"]}>
        <div className="flex flex-1 items-center justify-center">
          <Image
            alt="logo"
            src={"/images/auth-logo.svg"}
            width={406}
            height={406}
          />
        </div>
        <div className="flex flex-1 flex-col">{children}</div>
      </section>
    </main>
  );
}
