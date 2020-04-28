import {User} from './User';
import {Company} from "./Company";

interface Mappable {
    location: {
        lat: number;
        lng: number
    };
}

export class CustomMap {
    private readonly googleMap: google.maps.Map;

    constructor(divElement: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divElement), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0,
            }
        });
    }

    public addMarker(entity: Mappable): void {

        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: entity.location.lat,
                lng: entity.location.lng,
            }
        })
    }
}