import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const url = (name: string, wrap = false) =>
  `${
    wrap ? 'url(' : ''
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ')' : ''
  }`;

export default function App() {
  return (
    <div>
      <Parallax pages={2}>
        <ParallaxLayer
          offset={0}
          speed={0.2}
          factor={2}
          style={{ backgroundColor: '#171717' }}
        />
        <ParallaxLayer
          offset={1}
          speed={1}
          style={{ backgroundColor: '#87BCDE' }}
        />
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={2}
          style={{
            backgroundImage: url('stars', true),
            backgroundSize: 'cover',
          }}
        />
        <ParallaxLayer
          offset={0}
          speed={-0.2}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        ></ParallaxLayer>
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
    </div>
  );
}
