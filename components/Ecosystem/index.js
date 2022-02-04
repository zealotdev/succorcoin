import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Ecosystem() {
  const ecoRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ecoRef.current,
        start: 'top 80%',
        end: 'top 30%',
        markers: false,
        scrub: 1,
      },
    });

    tl.fromTo(
      ecoRef.current,
      { opacity: 0.1, y: 100 },
      { opacity: 1, y: 0, duration: 1 }
    );
  }, []);

  return (
    <section
      className="flex flex-col items-center lg:px-24 xl:px-36"
      ref={ecoRef}
    >
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-2xl text-purple-400 font-bold">Ecosystem</h1>
        <p className="text-lg text-gray-500 underline underline-offset-1">
          How our <i className="text-purple-400">community</i> is brought{' '}
          <i className="text-purple-400">together.</i>
        </p>
      </div>
      <div className="flex justify-between space-x-8">
        <div className="w-3/12 border border-pink-400 rounded flex flex-col space-y-4 items-center py-8 px-2 text-center">
          <span className="h-14 w-14 rounded-full bg-gradient-to-b from-pink-500 to-purple-500"></span>
          <span className="text-lg font-bold  text-purple-400">
            NFT MARKETPLACE
          </span>
          <p className="text-gray-500 text-sm">
            Buy and Sell digital assets from promising project real use Non
            Fungible Token.
          </p>
          <button className="border border-pink-400 text-pink-400 rounded-full hover:text-gray-50 text-sm px-4 py-2 hover:bg-pink-500 hover:scale-105 duration-200">
            Buy/Sell
          </button>
        </div>
        <div className="w-3/12 border border-pink-400 rounded flex flex-col space-y-4 items-center py-8 px-2 text-center">
          <span className="h-14 w-14 rounded-full bg-gradient-to-b from-pink-500 to-purple-500"></span>
          <span className="text-lg font-bold  text-purple-400">SWAP</span>
          <p className="text-gray-500 text-sm">
            Secure instant exchange paired by powerful coins on smartchain
            network from trusted projects.
          </p>
          <button className="border border-pink-400 text-pink-400 rounded-full hover:text-gray-50 text-sm px-4 py-2 hover:bg-pink-500 hover:scale-105 duration-200">
            Exchange
          </button>
        </div>
        <div className="w-3/12 border border-pink-400 rounded flex flex-col space-y-4 items-center py-8 px-2 text-center">
          <span className="h-14 w-14 rounded-full bg-gradient-to-b from-pink-500 to-purple-500"></span>
          <span className="text-lg font-bold  text-purple-400">GAMEFI</span>
          <p className="text-gray-500 text-sm">
            For gamers, to explore and discover blockchain integration gaming
            experience, while earning NFTs and coins.
          </p>
          <button className="border border-pink-400 text-pink-400 rounded-full hover:text-gray-50 text-sm px-4 py-2 hover:bg-pink-500 hover:scale-105 duration-200">
            Play
          </button>
        </div>
      </div>
    </section>
  );
}
