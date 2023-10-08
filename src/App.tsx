import { useRef, useState } from 'react';
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';

import Button, { ButtonSize } from './common/Button';
import Card from './common/Card';
import Link from './common/Link';
import EnrollModal from './feature/EnrollModal';
import Navbar from './feature/Navbar';
import { url } from './utils/getUrl';

export default function App() {
  const [open, setOpen] = useState(false);
  const parallax = useRef<IParallax>(null!);
  const marker = 'test_marker';
  return (
    <div>
      <Parallax ref={parallax} pages={3}>
        <ParallaxLayer
          offset={0}
          speed={0.3}
          factor={2}
          style={{ backgroundColor: '#171717' }}
        />
        <ParallaxLayer
          offset={1}
          speed={0.1}
          factor={2}
          style={{
            background:
              'linear-gradient(180.2deg, #171717 -6.9%, #87BCDE 96.7%)',
          }}
        />
        <ParallaxLayer
          offset={1}
          speed={0.5}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Card title="Why this is important?"></Card>
          <Card title="What does the most damage?"></Card>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={0.1}
          style={{ backgroundColor: '#334155' }}
        />
        <ParallaxLayer offset={0} sticky={{ start: 0, end: 0.3 }}>
          <Navbar>
            <div className="text-md">
              <Link onClick={() => parallax.current.scrollTo(1)}>
                Why this is important?
              </Link>
              <Link onClick={() => parallax.current.scrollTo(2)}>Map</Link>
              <Link>Discover More</Link>
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
        <ParallaxLayer
          offset={0}
          speed={0.2}
          factor={4}
          style={{
            backgroundImage: url('stars', true),
            backgroundSize: 'cover',
          }}
        />
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
          {' '}
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
        <ParallaxLayer
          offset={0.5}
          speed={-0.5}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}
        >
          <img src={url('earth')} style={{ width: '35%' }} alt="earth_planet" />
        </ParallaxLayer>
      </Parallax>
      <EnrollModal openModal={open} setOpenModal={setOpen} marker={marker} />
    </div>
  );
}
