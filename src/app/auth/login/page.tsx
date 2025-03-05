"use client";
import WrappedInputText from "@/components/inputs/input-text/WrappedInputText";
import { useState } from "react";
import { Button } from "antd";
import { useRouter } from "next/navigation";
export default function LoginPage() {
  const router = useRouter();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const handleLogin = () => {
    console.log("test");
  };
  return (
    <div className="flex flex-1 flex-col gap-10">
      <h1>Login</h1>
      <WrappedInputText
        label="Email"
        type="email"
        value={loginData.email}
        onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
      />
      <WrappedInputText
        label="Contraseña"
        type="password"
        value={loginData.password}
        onChange={(e) =>
          setLoginData({ ...loginData, password: e.target.value })
        }
      />
      <div className="flex gap-2 justify-between">
        <Button
          color="default"
          variant="filled"
          className="flex flex-1 h-10"
          onClick={() => router.push("/auth/register")}
        >
          Register
        </Button>
        <Button
          color="primary"
          variant="solid"
          className="flex flex-1 h-10"
          onClick={handleLogin}
        >
          Login
        </Button>
      </div>
    </div>
  );
}
