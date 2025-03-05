import apiClient from "@/services/client";
import { OrderI } from "@/types/order.type";
import { useMutation } from "@tanstack/react-query";

const mutationFn = async (order: OrderI) => {
  return await apiClient.post("/orders", order);
};

const useCreateOrderHook = () => {
  const mutation = useMutation({
    mutationFn: (order: OrderI) => mutationFn(order),
  });
  return mutation;
};

export default useCreateOrderHook;
