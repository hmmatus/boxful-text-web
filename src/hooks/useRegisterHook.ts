import apiClient from "@/services/client";
import { RegisterI } from "@/types/user";
import { useMutation } from "@tanstack/react-query";

const mutationFn = async (data: RegisterI) => {
  return await apiClient.post("/users/register", data);
};

const useRegisterUserHook = () => {
  const mutation = useMutation({
    mutationFn: (data: RegisterI) => mutationFn(data),
  });
  return mutation;
};

export default useRegisterUserHook;
