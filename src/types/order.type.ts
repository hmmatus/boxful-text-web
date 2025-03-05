import { DeliveryI } from "./delivery.type";
import { LumpI } from "./lum.type";

export interface OrderI extends DeliveryI {
  lumps: LumpI[];
}
