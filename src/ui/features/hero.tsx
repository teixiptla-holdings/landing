import Image from 'next/image';

import { Background } from '../layouts/background';

const Hero = () => (
  <Background color="bg-stone-200">
    <div className="flex flex-col items-center justify-center gap-4 h-screen">
      <Image
        className="absolute animate-spin-slow mb-5 hidden lg:block opacity-90"
        src="/assets/images/circle-pattern.png"
        alt="Aztec"
        height="700"
        width="700"
      />
      <Image
        className="rounded-md z-10"
        src="/assets/images/hero-logo.png"
        alt="Teixiptla Holdings Logo"
        height="300"
        width="300"
      />
      <h1 className="text-xl font-semibold z-10">Teixiptla Holdings LLC</h1>
    </div>

    <div className="absolute flex flex-col gap-2 bottom-2 text-center justify-center items-center text-xs w-full mx-auto">
      <span>
        120 Madeira Drive NE, STE 220
        <br /> Albuquerque, New Mexico 87108
      </span>
      <span>legal@teixiptla.holdings</span>
      <span>+1-737-279-4407</span>
    </div>
  </Background>
);

export { Hero };
