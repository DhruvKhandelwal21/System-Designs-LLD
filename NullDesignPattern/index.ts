import { Vehicle } from "./Vehicle/Vehicle"
import { VehicleFactory } from "./Vehicle/VehicleFactory"


const Main = ()=>{
    const vehicle:Vehicle = VehicleFactory.getVehicleObject("temp");
    vehicle.getCapacity();
    vehicle.getFuelCapacity();
}

Main();