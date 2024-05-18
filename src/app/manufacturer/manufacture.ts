export interface Manufacturer {
manufacturerId: number;
manufacturerName: string;
manufacturerCountry: string;

}
export interface Car {
    carid: number;
    carname: string;
    cardrivetrain: string;
    caryear:number;
    manufacturer: string;
}