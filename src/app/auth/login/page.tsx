"use client";
import WrappedInputText from "@/components/inputs/input-text/WrappedInputText";
import { useState } from "react";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import useLoginUserHook from "@/hooks/useLoginHook";
import { JWT_TOKEN_KEY } from "@/consts/jwt";
export default function LoginPage() {
  const router = useRouter();
  const { mutateAsync } = useLoginUserHook();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const handleLogin = async () => {
    try {
      const login = await mutateAsync(loginData);
      localStorage.setItem(JWT_TOKEN_KEY, login.jwt);
      router.push("/order/deliver-info");
    } catch (error) {
      alert(error);
    }
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
