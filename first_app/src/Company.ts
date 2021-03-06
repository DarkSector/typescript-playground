import * as faker from 'faker';
import {Mappable} from "./CustomMap";
import Map = google.maps.Map;

export class Company implements Mappable {
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    }
    color = "red";

    markerContent() : string {
        return `
            <div>
                <h1>company name: ${this.companyName}</h1>
                <h3>catch phrase: ${this.catchPhrase}</h3>
            </div>
        `;
    }

    constructor() {
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude()),
        }

    }

}