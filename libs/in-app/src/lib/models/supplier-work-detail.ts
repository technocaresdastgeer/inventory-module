import { Image } from "./image";
import { Supplier } from "./supplier";
import { Make } from "./make";
import { Model } from "./model";
export class SupplierWorkDetail{
supplier: Supplier;
make: Array<Make>;
model: Array<Model>;
constructor(){
    this.supplier= new Supplier();
    this.make = new Array<Make>();
    this.model = new Array<Model>();
}

}