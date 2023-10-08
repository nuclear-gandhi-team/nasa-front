import { useCallback, useRef, useState } from 'react';
import { Libraries, useJsApiLoader } from '@react-google-maps/api';
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';

import Button, { ButtonSize } from './common/Button';
import Card from './common/Card';
import Link from './common/Link';
import { Map } from './common/Map';
import { Autocomplete } from './feature/Autocomplete';
import EnrollModal from './feature/EnrollModal';
import Footer from './feature/Footer';
import MainPageStyles from './feature/MainPageStyles';
import Navbar from './feature/Navbar';
import { Coordinates } from './utils/mapTypes';
const API_KEY: string = process.env.REACT_APP_API_KEY || '';
const defaultCenter = {
  lat: 50.450001,
  lng: 30.523333,
};
const libraries: Libraries = ['places'];

export default function App() {
  const [open, setOpen] = useState(false);
  const parallax = useRef<IParallax>(null!);
  const [marker, setMarker] = useState<Coordinates[]>([
    { lat: 50.450001, lng: 30.523333 },
  ]);
  const [center, setCenter] = useState(defaultCenter);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script-1',
    googleMapsApiKey: API_KEY,
    libraries,
  });

  const onPlaceSelect = useCallback((coordinates: Coordinates) => {
    setCenter(coordinates);
  }, []);

  const onMarkerAdd = useCallback(
    (coordinates: Coordinates) => {
      setMarker([...marker, coordinates]);
    },
    [setMarker, marker],
  );
  return (
    <div>
      <Parallax ref={parallax} pages={4}>
        <MainPageStyles />
        {/*NavBar*/}
        <ParallaxLayer offset={0} sticky={{ start: 0, end: 0.3 }}>
          <Navbar>
            <div className="text-md">
              <Link onClick={() => parallax.current.scrollTo(1)}>
                Why this is important?
              </Link>
              <Link onClick={() => parallax.current.scrollTo(2)}>Map</Link>
              <Link
                href="https://education.nationalgeographic.org/resource/wildfires/"
                target="_blank"
              >
                Discover More
              </Link>
            </div>
            <div>
              <Button
                text="Get notified"
                size={ButtonSize.MEDIUM}
                onClick={() => setOpen(true)}
              />
            </div>
          </Navbar>
        </ParallaxLayer>
        {/*Title*/}
        <ParallaxLayer
          offset={0}
          speed={-0.1}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <h1 className="mb-4 text-3xl font-extrabold text-gray-200 md:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              FireSense
            </span>{' '}
            worldwide.
          </h1>
          <p className="w-1/2 text-gray-400">
            Our global forest fire tracking project is of paramount importance.
            With the rising frequency and severity of wildfires due to climate
            change and human activities, this initiative empowers individuals
            and communities worldwide. By offering real-time fire location
            updates and notifications, we help people make informed decisions,
            collaborate with authorities, and protect their environment. Since
            wildfires often cross borders, our global approach ensures efficient
            resource allocation and timely warnings for a safer, more resilient
            world. Join us in safeguarding our planet&apos;s forests, wildlife,
            and communities from this growing threat.
          </p>
        </ParallaxLayer>

        {/*Additional Information*/}
        <ParallaxLayer
          offset={1}
          speed={0.5}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Card title="Why this is important?">
            <p className="text-gray-400 text-sm p-3">
              Tracking fires is essential for early detection and timely
              evacuation. It allows authorities to alert people in the path of a
              fire, giving them crucial time to escape to safety. Monitoring
              fires also aids in deploying firefighting resources efficiently to
              contain the blaze. This proactive approach helps prevent loss of
              life and property by ensuring that individuals and communities can
              take necessary precautions in the face of a wildfire threat.
            </p>
          </Card>
          <Card title="What does the most damage?">
            <p className="text-gray-400 text-sm p-3">
              The most critical factors influencing forest fires are high
              temperatures, low humidity, and strong winds. These conditions
              create a dry environment conducive to rapid fire ignition and
              spread. Additionally, dry soil and low moisture levels in the
              vegetation make it more susceptible to ignition and contribute to
              the intensity of forest fires. Monitoring and understanding these
              variables are crucial for fire prevention and management.
            </p>
          </Card>
        </ParallaxLayer>

        {/*Map*/}
        <ParallaxLayer
          offset={2}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <Card isFullWidth>
            <div className="flex flex-col gap-3 p-5">
              <Autocomplete isLoaded={isLoaded} onSelect={onPlaceSelect} />
              {isLoaded ? (
                <Map
                  center={center}
                  marker={marker}
                  onMarkerAdd={onMarkerAdd}
                />
              ) : (
                <h2>Loading</h2>
              )}
            </div>
          </Card>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={1}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Card title="Your Location" isFullWidth>
            <span className="flex flex-col text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 p-3">
              <div>{marker[marker.length - 1].lat}</div>
              <div>{marker[marker.length - 1].lng}</div>
            </span>
          </Card>
        </ParallaxLayer>

        {/*Footer*/}
        <ParallaxLayer
          offset={3}
          speed={-0.2}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            flexDirection: 'column',
          }}
        >
          <Footer>
            <span className="text-sm text-gray-500 text-center">
              © 2023{' '}
              <a href="https://github.com/nuclear-gandhi-team">
                Nuclear Gandhi™
              </a>
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
              <li>
                <Link
                  className="mr-4 hover:underline"
                  onClick={() => parallax.current.scrollTo(0)}
                >
                  Back to top
                </Link>
              </li>
              <li>
                <Link
                  className="mr-4 hover:underline"
                  onClick={() => parallax.current.scrollTo(1)}
                >
                  Why this is important?
                </Link>
              </li>
              <li>
                <Link
                  href="https://education.nationalgeographic.org/resource/wildfires/"
                  className="mr-4 hover:underline"
                >
                  Discover More
                </Link>
              </li>
            </ul>
          </Footer>
        </ParallaxLayer>
      </Parallax>
      <EnrollModal openModal={open} setOpenModal={setOpen} marker={marker} />
    </div>
  );
}
