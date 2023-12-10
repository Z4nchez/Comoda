import React from "react";
import styles from "../Location/Location.module.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"
import L from 'leaflet';
import iconMarker from 'leaflet/dist/images/marker-icon.png'
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import { animated, useSpring, easings} from "@react-spring/web"
import { useInView } from "react-intersection-observer"

function Location() {

  delete L.Icon.Default.prototype._getIconUrl;

  L.Icon.Default.mergeOptions({
    iconRetinaUrl:iconRetina, 
    iconUrl: iconMarker, 
    shadowUrl: iconShadow 
  });

  const [ref, inView] = useInView({triggerOnce: false});
  const [ref2, inView2] = useInView({triggerOnce: false});

  const animaMap = useSpring({
    opacity: inView ? 1 : 0,
    marginTop: inView ? "0px" : "100px",
    config: {duration: 600, easing: easings.easeOutCirc}
  })
  const animaContact = useSpring({
    opacity: inView2 ? 1 : 0,
    marginTop: inView ? "0px" : "100px",
    config: {duration: 600, easing: easings.easeOutCirc}
  })

  return (
    <div className={styles.Location} id="idlocation">
      <div className={styles.tittleCont}>
        <h2>Ubicación</h2>
      </div>
      <animated.div className={styles.mapaCont} ref={ref} style={animaMap}>
        <MapContainer
          center={[-38.71580793818893, -62.26952709882651]}
          zoom={15}
          scrollWheelZoom={false}
          className={styles.MapContainer}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[-38.71580793818893, -62.26952709882651]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </animated.div>
      <animated.div className={styles.descCont} ref={ref2} style={animaContact}>
        <h3>Dirección: Estomba y Gorriti - Bahia Blanca</h3>
        <h3>Correo electrónico: comodabahia@gmail.com</h3>
        <h3>Teléfono: 2985 - 208471</h3>
        <h3>Horario de atención: Lunes a Sabado de 9hs a 21hs</h3>
      </animated.div>
    </div>
  );
}

export default Location;
