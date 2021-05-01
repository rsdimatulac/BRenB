import { useState, useCallback, useRef } from "react";
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";
// import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
// import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from "@reach/combobox";
import { formatRelative } from "date-fns";
// import "@reach/combobox/styles.css";
// import mapStyles from "./mapStyles";

const libraries = ["places"];
const mapContainerStyle = {
    height: "45.7vw",
};

const options = {
    disableDefaultUI: true,
    zoomControl: true,
};

const center = { // Seattle
    lat: 47.6062,
    lng: -122.332069,
};

const GoogleMaps = () =>  {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_PLACES_API_KEY,
        libraries,
    });

    const [markers, setMarkers] = useState([]);
    const [selected, setSelected] = useState(null);

    const onMapClick = useCallback((e) => {
        setMarkers((current) => [
            ...current,
            {
                lat: e.latLng.lat(),
                lng: e.latLng.lng(),
                time: new Date(),
            },
        ]);
    }, []);

    const mapRef = useRef();
    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    }, []);

    const panTo = useCallback(({ lat, lng }) => {
        mapRef.current.panTo({ lat, lng });
        mapRef.current.setZoom(14);
    }, []);

    if (loadError) return "Error";
    if (!isLoaded) return "Loading...";

    return (
        <div>  
            <GoogleMap 
                id="map"
                mapContainerStyle={mapContainerStyle}
                zoom={13}
                center={center}
                options={options}
                // onClick={onMapClick}
                onLoad={onMapLoad}
            >
            {/* {map here} */}
            <Marker 
                position={{ lat: 47.64339, lng: -122.32582 }}
                // icon={{}}
                animation="drop"
                clickable={true}
                text="test"
            />
            </GoogleMap>
        </div>
    )
}

export default GoogleMaps;
