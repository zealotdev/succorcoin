import { useLayoutEffect, useRef } from 'react';
import { gsap, Power3 } from 'gsap';

import Image from 'next/image';

export default function Hero() {
  const leftContent = useRef();
  const rightContent = useRef();

  useLayoutEffect(() => {
    gsap.fromTo(
      leftContent.current,
      { opacity: 0, x: -720 },
      { opacity: 1, x: 0, ease: Power3.easeIn, duration: 1 },
      []
    );

    gsap.fromTo(
      rightContent.current,
      { opacity: 0, x: 720 },
      { opacity: 1, x: 0, ease: Power3.easeIn, duration: 2 },
      []
    );
  });
  return (
    <div className="flex justify-between mt-4 items-center bg-hero__right bg-cover bg-no-repeat">
      <div ref={leftContent} className="relative w-5/12 space-y-8">
        <h1 className="h1 text-gray-500 text-4xl">
          Automatic Contribution, Burning & Buyback System.
        </h1>
        <p className="text-gray-400">
          Charity through blockchain, Helping & Supporting the ones in need.
        </p>
        <p className="text-gray-400">
          The first BEP-20 token in the Binance Smart Chain network with unique
          algorithm and technical functions such as{' '}
          <span className="text-pink-600">
            Automatic Rewards, Buyback, Contribution, Zero Fees & Burning
          </span>{' '}
          Coin at transaction.
        </p>
        <button className="border border-pink-400 text-pink-400 rounded-full hover:text-gray-50 text-sm px-4 py-2 hover:bg-pink-500 hover:scale-105 duration-200">
          Join Airdrop
        </button>
      </div>
      <div ref={rightContent}>
        <Image
          src="/images/hero-new-bg.svg"
          height="400"
          width={'650'}
          alt="boiler plate image"
        />
      </div>
    </div>
  );
}
