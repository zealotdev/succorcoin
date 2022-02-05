import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function NFTMarketPlace() {
  const nftRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: nftRef.current,
        start: 'top 90%',
        end: 'top 20%',
        markers: false,
        scrub: 1,
      },
    });

    tl.fromTo(
      nftRef.current,
      { opacity: 0.1, y: 100 },
      { opacity: 1, y: 0, duration: 1 }
    );
  }, []);
  return (
    <section
      className="hft-bg bg-no-repeat bg-right bg-auto h-auto flex flex-col lg:px-24 xl:px-36 pt-20"
      ref={nftRef}
    >
      <div className="flex flex-col items-center align-middle space-y-10">
        <div className="flex flex-col items-center">
          <h2 className="text-sm text-purple-400 tracking-wider uppercase">
            NFT MARKETPLACE
          </h2>
          <p className="font-semibold text-2xl tracking-wide text-gray-700">
            Artists brought together
          </p>
        </div>

        <div className="flex justify-between space-x-8 mt-8">
          <div className="w-44 h-64 shadow rounded flex flex-col space-y-4 items-center justify-center py-8 px-2 text-center">
            <div className="balls">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <p className="text-gray-500 text-sm">coming soon</p>
          </div>
          <div className="w-44 h-64 shadow rounded flex flex-col space-y-4 items-center justify-center py-8 px-2 text-center">
            <div className="balls">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <p className="text-gray-500 text-sm">coming soon</p>
          </div>
          <div className="w-44 h-64 shadow rounded flex flex-col space-y-4 items-center justify-center py-8 px-2 text-center">
            <div className="balls">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <p className="text-gray-500 text-sm">coming soon</p>
          </div>
          <div className="w-44 h-64 shadow rounded flex flex-col space-y-4 items-center justify-center py-8 px-2 text-center">
            <div className="balls">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <p className="text-gray-500 text-sm">Coming soon</p>
          </div>
        </div>
        <div className="bg-gradient-to-br from-purple-400 to-pink-400 py-6 flex flex-col items-center w-10/12 h-72 rounded-lg justify-center">
          <span className="text-white font-bold tracking-wider text-3xl cursor-pointer">
            Are you an artist? Mint your NFT NOW
          </span>
        </div>
      </div>
    </section>
  );
}
