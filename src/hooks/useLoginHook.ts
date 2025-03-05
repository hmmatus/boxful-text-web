import apiClient from "@/services/client";
import { LoginI } from "@/types/user";
import { useMutation } from "@tanstack/react-query";

type ResponseI = {
  jwt: string;
};
const mutationFn = async (data: LoginI): Promise<ResponseI> => {
  return (await apiClient.post("/users/login", data)).data as ResponseI;
};

const useLoginUserHook = () => {
  const mutation = useMutation({
    mutationFn: (data: LoginI) => mutationFn(data),
  });
  return mutation;
};

export default useLoginUserHook;
