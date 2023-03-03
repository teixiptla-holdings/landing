import Image from 'next/image';

import { Background } from '../layouts/background';

const Hero = () => (
  <Background color="bg-amber-100">
    <div className="flex flex-col items-center justify-center gap-4 h-screen">
      <Image
        className="absolute animate-spin-slow hidden lg:block mb-20"
        src="/assets/images/circle-pattern-red.png"
        alt="Aztec"
        height="700"
        width="700"
      />
      <Image
        className="rounded-md z-10 mb-20"
        src="/assets/images/hero-logo.png"
        alt="Teixiptla Holdings Logo"
        height="300"
        width="300"
      />
    </div>

    <div className="absolute flex flex-col gap-2 bottom-2 text-center justify-center items-center w-full mx-auto">
      <span className="font-semibold">Teixiptla Holdings LLC</span>
      <span className="text-xs">
        120 Madeira Drive NE, STE 220
        <br /> Albuquerque, New Mexico 87108
      </span>
      <span className="text-xs">legal@teixiptla.holdings</span>
      <span className="text-xs">+1-737-279-4407</span>
    </div>
  </Background>
);

export { Hero };
