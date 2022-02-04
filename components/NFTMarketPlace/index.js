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
    <section className="flex flex-col lg:px-24 xl:px-36 pt-20" ref={nftRef}>
      <div className="flex flex-col items-center align-middle space-y-10">
        <h2 className="text-2xl text-purple-400 font-bold">NFT MARKETPLACE</h2>
        <p className="text-lg text-gray-500 underline underline-offset-1">
          <i>Artists</i> brought together
        </p>

        <div className="flex justify-between space-x-8 mt-8">
          <div className="w-44 h-64 border border-pink-400 rounded flex flex-col space-y-4 items-center justify-center py-8 px-2 text-center">
            <div className="balls">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <p className="text-gray-500 text-sm">coming soon</p>
          </div>
          <div className="w-44 h-64 border border-pink-400 rounded flex flex-col space-y-4 items-center justify-center py-8 px-2 text-center">
            <div className="balls">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <p className="text-gray-500 text-sm">coming soon</p>
          </div>
          <div className="w-44 h-64 border border-pink-400 rounded flex flex-col space-y-4 items-center justify-center py-8 px-2 text-center">
            <div className="balls">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <p className="text-gray-500 text-sm">coming soon</p>
          </div>
          <div className="w-44 h-64 border border-pink-400 rounded flex flex-col space-y-4 items-center justify-center py-8 px-2 text-center">
            <div className="balls">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <p className="text-gray-500 text-sm">Coming soon</p>
          </div>
        </div>
        <div className="bg-gradient-to-br from-purple-400 to-pink-400 py-6 rounded w-10/12 flex flex-col items-center">
          <span className="text-white font-bold">
            Are you an artist?{' '}
            <i className="text-purple-200 underline cursor-pointer hover:text-white">
              Mint your NFT now
            </i>
          </span>
        </div>
      </div>
    </section>
  );
}
