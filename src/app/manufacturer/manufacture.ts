export interface Manufacturer {
manufacturer_id: number;
manufacturer_name: string;
manufacturer_country: string;

}
export interface Car {
    car_id: number;
    car_name: string;
    car_drivetrain: string;
    car_year:number;
    manufacturer: string;
}