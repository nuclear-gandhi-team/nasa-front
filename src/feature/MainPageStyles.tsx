import { ParallaxLayer } from '@react-spring/parallax';

import { url } from '../utils/getUrl';

const MainPageStyles = () => (
  <>
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
        background: 'linear-gradient(180.2deg, #171717 -6.9%, #87BCDE 96.7%)',
      }}
    />
    <ParallaxLayer
      offset={2}
      speed={0.1}
      style={{ backgroundColor: '#334155' }}
    />
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
    <ParallaxLayer
      offset={0}
      speed={0.2}
      factor={4}
      style={{
        backgroundImage: url('stars', true),
        backgroundSize: 'cover',
      }}
    />
  </>
);

export default MainPageStyles;
