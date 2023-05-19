import React, {useEffect, useState} from "react";
import {getLocations} from "../../api/openstreetmap";
import GoogleMapReact from 'google-map-react';
import "./style.css"

function MapView() {
    const [openStreetMapData, setOpenStreetMapData] = useState(null);

    useEffect(() => {
        getLocations().then(
            (data) => {
                setOpenStreetMapData(data);
            }
        );
    }, []);

    const approximate_center = (data) => {
        if (openStreetMapData) {
            let center = data.elements.reduce((accumulator, currentValue) => {
                accumulator.lat += currentValue.lat;
                accumulator.lng += currentValue.lon;
                return accumulator
            }, {lat: 0, lng: 0});
            center.lng /= openStreetMapData.elements.length;
            center.lat /= openStreetMapData.elements.length;
            return center;
        }
        return null;
    }

    return (
        <div>
            {/*{JSON.stringify(openStreetMapData)}*/}
            {openStreetMapData !== null ?
                <SimpleMap center={approximate_center(openStreetMapData)} markers={openStreetMapData.elements}/> :
                <div>loading</div>}

        </div>
    );
}

const Marker = ({data, is_active, onClick}) => {
    return (
        <div className={["pin2", is_active && "pin2-active"].join(" ")} onClick={(e) => {
            e.stopPropagation();
            onClick()
        }} style={{position: "relative"}}>
            {is_active && <table className="dropdown">
                {Object.entries(data).map(([key, value]) => {
                    return <tr>
                        <td>{key}</td>
                        <td>{value}</td>
                    </tr>
                })}
            </table>}
        </div>
    );
}

function SimpleMap(props) {
    const defaultProps = {
        center: props.center,
        zoom: 11
    };

    const [markersQuantity, setMarkersQuantity] = useState(30);
    const [activeMarker, setActiveMarker] = useState(null);

    return (
        // Important! Always set the container height explicitly
        <div style={{height: '100vh', width: '100%'}} onClick={() => setActiveMarker(null)}>
            <div style={{display: "grid", gridTemplateColumns: "max-content auto"}}>
                <p>Markers quantity:</p>
                <input type="range" min="0" max="100" value={markersQuantity}
                       onChange={(e) => setMarkersQuantity(e.target.value)}/>
            </div>
            <GoogleMapReact
                bootstrapURLKeys={{key: "AIzaSyB0kbGLhTHCqArmQNbBqwnS0i_5ngmAw9c"}}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                {
                    props.markers.slice(0, props.markers.length / 100 * markersQuantity).map((marker) => {
                        return <Marker
                            lat={marker.lat}
                            lng={marker.lon}
                            key={marker.id}
                            data={marker.tags}
                            is_active={activeMarker === marker.id}
                            onClick={() => setActiveMarker(marker.id)}
                            text="My Marker"
                        />
                    })
                }
            </GoogleMapReact>
        </div>
    );
}

export default MapView;
