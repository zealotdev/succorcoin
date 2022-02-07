import { useRef, useEffect } from 'react';
import gsap, { Power4 } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import { FaChartLine, FaGamepad } from 'react-icons/fa';
import { IoMdSwap } from 'react-icons/io';

gsap.registerPlugin(ScrollTrigger);

export default function Ecosystem() {
  const ecoRef = useRef();
  const cardRef1 = useRef();
  const cardRef2 = useRef();
  const cardRef3 = useRef();

  useEffect(() => {
    const tl = gsap.timeline(
      {
        scrollTrigger: {
          trigger: ecoRef.current,
          start: 'top 90%',
          end: 'top 30%',
          markers: false,
          scrub: 1,
        },
      },
      {
        default: {
          ease: Power4.easeInOut,
          duration: 2,
        },
      }
    );

    tl.fromTo(
      ecoRef.current,
      { opacity: 0.1, y: 100 },
      { opacity: 1, y: 0, duration: 1 }
    ).fromTo(
      [cardRef1.current, cardRef2.current, cardRef3.current],
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 2, stagger: 0.4 },
      '-=1'
    );
  }, []);

  return (
    <section className="lg:px-24 xl:px-36 ecosystem" ref={ecoRef}>
      <div className="hidden md:flex flex-col ">
        <div className="flex flex-col mb-8">
          <h2 className="text-sm text-purple-400 tracking-wider uppercase">
            Ecosystem
          </h2>
          <p className="font-semibold text-2xl tracking-wide text-gray-700">
            How our community is{' '}
            <span className="text-purple-400">brought together.</span>
          </p>
        </div>
        <div className="flex justify-between space-x-8 mt-8">
          <div
            className="w-3/12 rounded flex flex-col space-y-4 items-center py-8 px-2 text-center hover:shadow cursor-pointer hover:rounded-lg"
            ref={cardRef1}
          >
            <span className="text-white p-4 rounded-full bg-gradient-to-b from-pink-500 to-purple-500 flex items-center justify-center">
              <FaChartLine size={24} />
            </span>
            <span className="text-lg font-semibold tracking-wider  text-purple-400">
              NFT MARKETPLACE
            </span>
            <p className="text-gray-400 tracking-wider text-sm">
              Buy and Sell digital assets from promising project real use Non
              Fungible Token.
            </p>
            <button className="border border-pink-400 text-pink-400 uppercase rounded-full hover:text-gray-50 text-sm px-4 py-2 hover:bg-pink-500 hover:scale-105 duration-200">
              Buy/Sell
            </button>
          </div>
          <div
            className="w-3/12 rounded flex flex-col space-y-4 items-center py-8 px-2 text-center hover:shadow cursor-pointer hover:rounded-lg"
            ref={cardRef2}
          >
            <span className="text-white p-4 rounded-full bg-gradient-to-b from-pink-500 to-purple-500 flex items-center justify-center">
              <IoMdSwap size={24} />
            </span>
            <span className="text-lg font-semibold tracking-wider  text-purple-400">
              SWAP
            </span>
            <p className="text-gray-400 tracking-wider text-sm">
              Secure instant exchange paired by powerful coins on smartchain
              network from trusted projects.
            </p>
            <button className="border border-pink-400 text-pink-400 uppercase rounded-full hover:text-gray-50 text-sm px-4 py-2 hover:bg-pink-500 hover:scale-105 duration-200">
              Exchange
            </button>
          </div>
          <div
            className="w-3/12 rounded flex flex-col space-y-4 items-center py-8 px-2 text-center hover:shadow cursor-pointer hover:rounded-lg"
            ref={cardRef3}
          >
            <span className="text-white p-4 rounded-full bg-gradient-to-b from-pink-500 to-purple-500 flex items-center justify-center">
              <FaGamepad size={24} />
            </span>
            <span className="text-lg font-semibold tracking-wider  text-purple-400">
              GAMEFI
            </span>
            <p className="text-gray-400 tracking-wider text-sm">
              For gamers, to explore and discover blockchain integration gaming
              experience, while earning NFTs and coins.
            </p>
            <button className="border border-pink-400 text-pink-400 uppercase rounded-full hover:text-gray-50 text-sm px-4 py-2 hover:bg-pink-500 hover:scale-105 duration-200">
              Play
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
