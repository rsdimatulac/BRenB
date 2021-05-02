import { useCallback, useRef } from "react";
import { useHistory } from "react-router-dom";
import { GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";
import CustomMarker from "../../images/marker.png";

const libraries = ["places"];
const mapContainerStyle = {
    height: "89.2vh"
};

const options = {
    disableDefaultUI: true,
    zoomControl: true,
    mapTypeControl: true,
    streetViewControl: true,
};

const center = { // Seattle
    lat: 47.625305,
    lng: -122.332182,
};

const GoogleMaps = ({ listings }) =>  {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_PLACES_API_KEY,
        libraries,
    });

    const history = useHistory()

    const handleClick = (id) => {
        history.push(`/listings/${id}`)
    };

    const mapRef = useRef();
    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    }, []);

    if (loadError) return "Error";
    if (!isLoaded) return "Loading...";

    return (
        <div>  
            <GoogleMap 
                id="map"
                mapContainerStyle={mapContainerStyle}
                zoom={12}
                center={center}
                options={options}
                onLoad={onMapLoad}
            >
            {listings.map(listing => (
                <Marker 
                    key={listing.id}
                    position={{ lat: listing.latitude, lng: listing.longitude}}
                    label={{color: 'white', fontWeight: '600', fontSize: '14px', text: `$${listing.price}` }}
                    icon={{
                        url: CustomMarker,
                        scaledSize: new window.google.maps.Size(42, 35),
                        labelOrigin: new window.google.maps.Point(21, 13),
                        anchor: new window.google.maps.Point(15, 15)
                    }}
                    animation={window.google.maps.Animation.DROP}
                    clickable={true}
                    text="test"
                    onClick={() => handleClick(listing.id)}
                />
            ))}
            </GoogleMap>
        </div>
    )
}

export default GoogleMaps;
