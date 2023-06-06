// import { useEffect, useState } from 'react';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import blue from '../../assets/img/marker-icon-2x-blue.png'
import L from 'leaflet';

import './index.scss';

// Fix for Leaflet's default marker icon missing issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: blue,
  iconUrl: require('leaflet/dist/images/marker-icon.png').default,
  shadowUrl: require('leaflet/dist/images/marker-shadow.png').default,
});

const Contact = () => {
  // const [letterClass, setLetterClass] = useState('text-animate');
  const form = useRef();

  // useEffect(() => {
  //   return setTimeout(() => {
  //     setLetterClass('text-animate-hover');
  //   }, 3000);
  // }, []);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm('service_vtuw6sx', 'template_elxyzqa', e.target, 'dPb07l2df0HNDj-SH')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>Contact Me</h1>
          <p>
            "I am open to exploring various employment opportunities that align with my skills and interests. Please
            feel free to contact me using the form below if you have any further questions or opportunities to discuss."
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input placeholder="Email" type="email" name="email" required />
                </li>
                <li>
                  <input placeholder="Subject" type="text" name="subject" required />
                </li>
                <li>
                  <textarea placeholder="Message" name="message" required></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Sandeep v
          <br />
          India,
          <br />
          Erragadda, 500018
          <br />
          Hyderabad.
          <br />
          <br />
          <span>sandeepvemula408@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer
            center={[17.4532, 78.43413]}
            zoom={10}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="Map data © OpenStreetMap contributors"
            />
            <Marker position={[17.4532, 78.43413]} />
          </MapContainer>
        </div>
      </div>
    </>
  );
};

export default Contact;
