import { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Usa tu propio token de Mapbox aquí (puedes crear uno gratis en https://account.mapbox.com/)
mapboxgl.accessToken = 'TU_MAPBOX_ACCESS_TOKEN';

const students = [
  {
    name: "Anna Petrova",
    university: "Universidad Estatal de Moscú",
    major: "Física",
    coords: [37.5301, 55.7033],
  },
  {
    name: "Ivan Smirnov",
    university: "Universidad ITMO de San Petersburgo",
    major: "Ciencias de la Computación",
    coords: [30.3351, 59.9343],
  },
  {
    name: "Elena Kuznetsova",
    university: "Universidad Estatal de Novosibirsk",
    major: "Matemáticas",
    coords: [82.9204, 55.0302],
  },
  {
    name: "Dmitry Ivanov",
    university: "Universidad Politécnica de Tomsk",
    major: "Ingeniería Electrónica",
    coords: [84.9925, 56.501],
  },
  {
    name: "Sofia Morozova",
    university: "Universidad Federal de los Urales",
    major: "Arquitectura",
    coords: [60.6057, 56.8389],
  }
];

export default function StudentMap() {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return; // Evita reinicializar
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [40, 58],
      zoom: 3.5,
    });

    students.forEach((student) => {
      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
        <strong>${student.name}</strong><br />
        ${student.university}<br />
        Carrera: ${student.major}
      `);

      new mapboxgl.Marker()
        .setLngLat(student.coords)
        .setPopup(popup)
        .addTo(map.current);
    });
  }, []);

  return (
    <div>
      <h2>Estudiantes en universidades de Rusia</h2>
      <div
        ref={mapContainer}
        style={{ width: '100%', height: '500px', borderRadius: '10px', overflow: 'hidden' }}
      />
    </div>
  );
}
