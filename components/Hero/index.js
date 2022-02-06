import { useEffect, useRef } from 'react';
import { gsap, Power4 } from 'gsap';

import Image from 'next/image';

export default function Hero() {
  const leftContent = useRef();
  const rightContent = useRef();
  const headLineRef = useRef();
  const paraRef = useRef();
  const btnRef = useRef();
  const subHeadRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      default: { ease: Power4.easeInOut, duration: 2 },
    });

    tl.fromTo(
      [headLineRef.current, paraRef.current, rightContent.current],
      {
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
        opacity: 0,
        y: 100,
      },
      {
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
        opacity: 1,
        y: 0,
        duration: 2,
      }
    )
      .fromTo(
        btnRef.current,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
        },
        '-=1'
      )
      .fromTo(
        subHeadRef.current,
        {
          opacity: 0,
          clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
        },
        {
          opacity: 1,
          clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
          duration: 2,
        },
        '-=1'
      );
  }, []);
  return (
    <div className="flex justify-between mt-4 items-center hero-bg lg:px-24 xl:px-36">
      <div ref={leftContent} className="relative w-6/12 space-y-6">
        <span
          className="text-purple-400 uppercase text-sm tracking-wider font-semibold"
          ref={subHeadRef}
        >
          Charity on Blockchain
        </span>
        <h1 className="text-gray-500 text-4xl tracking-wide" ref={headLineRef}>
          Automatic Contribution, Burning & Buyback System.
        </h1>
        <p className="text-gray-400 tracking-wider text-sm py-4" ref={paraRef}>
          The first BEP-20 token in the Binance Smart Chain network with unique
          algorithm and technical functions such as{' '}
          <span className="text-pink-600">
            Automatic Rewards, Buyback, Contribution, Zero Fees & Burning
          </span>{' '}
          Coin at transaction.
        </p>
        <div className="flex space-x-4" ref={btnRef}>
          <button className="border border-pink-400 text-pink-400 rounded-full hover:text-gray-50 text-sm px-4 py-2 hover:bg-pink-500 hover:scale-105 duration-200 uppercase">
            Join Airdrop
          </button>
          <button className="border border-pink-400 text-pink-400 rounded-full hover:text-gray-50 text-sm px-4 py-2 hover:bg-pink-500 hover:scale-105 duration-200 uppercase">
            Whitepaper
          </button>
        </div>
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
