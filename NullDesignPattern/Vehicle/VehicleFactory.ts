import { Car } from "./Car";
import { NullObj } from "./NullObj";

export class VehicleFactory {
    static getVehicleObject(typeOfObject: string){
        if(typeOfObject==="Car"){
            return new Car();
        }
        return new NullObj();
    }
}
