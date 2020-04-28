import {User} from './User';
import {Company} from "./Company";

export interface Mappable {
    color: string;
    markerContent() : string;
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

    public addMarker(entity: Mappable, name?: string, description?: string): void {

        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: entity.location.lat,
                lng: entity.location.lng,
            },
        })
        // add a handler for the click
        marker.addListener("click", () => {
            // create the info window on click
            const infoWindow = new google.maps.InfoWindow({
                content: entity.markerContent()
            });
            // add the window there
            infoWindow.open(this.googleMap, marker);
        })
    }
}