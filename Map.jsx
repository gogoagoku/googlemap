import { GoogleApiWrapper,GoogleMap } from "@googlemaps/react-wrapper";

const Map = (props) => {
  const { google } = props;
  return (
    <div style={{ width: "100%", height: "500px" }}>
      <GoogleMap
        google={google}
        zoom={15}
        center={{ lat: 40.712775, lng: -74.005973 }}
      />
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyBB9B-Rk8go54u0Ty2z-gNS28IhIQbG_lg",
})(Map);
