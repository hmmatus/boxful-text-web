import { DeliveryI } from "@/types/delivery.type";
import { create } from "zustand";

interface DeliveryState {
  delivery: DeliveryI;
  updateDelivery: (newDelivery: DeliveryI) => void;
  deleteDelivery: () => void;
}
const initialState: DeliveryI = {
  recolectionAddress: "",
  scheduledDate: "",
  names: "",
  lastNames: "",
  email: "",
  phone: "",
  destinyAddress: "",
  department: "",
  municipality: "",
  reference: "",
  notes: "",
};
export const useDeliveryStore = create<DeliveryState>((set) => ({
  delivery: initialState,
  updateDelivery: (newDelivery) => set({ delivery: newDelivery }),
  deleteDelivery: () => set({ delivery: initialState }),
}));
