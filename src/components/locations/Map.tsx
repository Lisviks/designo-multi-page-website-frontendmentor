import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import styles from '@/styles/locations/map.module.scss';

interface Props {
  address: { title: string; line1: string; line2: string };
  coords: { lat: number; long: number };
}

export default function Map(props: Props) {
  return (
    <MapContainer
      center={[props.coords.lat, props.coords.long]}
      zoom={14}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%' }}
      dragging={false}
      zoomControl={false}
    >
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[props.coords.lat, props.coords.long]} draggable={false}>
        <Popup>
          <p className={styles.address}>{props.address.title}</p>
          <p className={styles.address}>{props.address.line1}</p>
          <p className={styles.address}>{props.address.line2}</p>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
