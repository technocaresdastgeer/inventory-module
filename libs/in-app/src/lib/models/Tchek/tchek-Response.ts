import { AIInspectionRequest } from "../AIInspectionRequest";
import { DamagePoint } from "../damage-point";
import { TchekDamage } from "./tchek-damage";
import { TchekDamageImageList } from "./tchek-damage-image-list";
import { TchekDevice } from "./tchek-device";
import { TchekImages } from "./tchek-images";
import { TchekInspection } from "./tchek-inspection";
import { TchekVehicle } from "./tchek-vehicle";

export class TchekResponse{
  images: Array<TchekImages>;
  damages: Array<TchekDamage>;
  damageImageList: Array<TchekDamageImageList>;
  markers: Array<TchekDamageImageList>;
  damagePoint: Array<DamagePoint>;
  tchek: TchekInspection;
  customerData: AIInspectionRequest
  vehicle: TchekVehicle;
  device: TchekDevice;
}
