import { useRef, useEffect } from 'react';
import gsap, { Power4 } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function NFTMarketPlace() {
  const nftRef = useRef();
  const mintRef = useRef();
  const cardOneRef = useRef();
  const cardTwoRef = useRef();
  const cardThreeRef = useRef();
  const cardFourRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline(
      {
        scrollTrigger: {
          trigger: nftRef.current,
          start: 'top 90%',
          end: 'top 10%',
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
      nftRef.current,
      { opacity: 0.1, y: 100 },
      { opacity: 1, y: 0, duration: 2 }
    )
      .from(
        [
          cardOneRef.current,
          cardTwoRef.current,
          cardThreeRef.current,
          cardFourRef.current,
        ],
        { scaleY: 0, stagger: 0.3, duration: 2 },
        '-=1'
      )
      .fromTo(
        mintRef.current,
        {
          opacity: 0,
          scale: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 2,
        },
        '-=.5'
      );
  }, []);
  return (
    <section
      className="hft-bg bg-no-repeat bg-right bg-auto h-auto flex flex-col px-4 lg:px-24 xl:px-36 mb-16 md:mb-12"
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
          <div
            className="w-3/12 md:w-44 h-32 md:h-64 hover:shadow rounded border-b md:border-b-2 border-t md:border-t-2 border-pink-400 flex flex-col space-y-1 md:space-y-4 items-center justify-center py-8 px-1 md:px-2 text-center"
            ref={cardOneRef}
          >
            <div className="balls">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <p className="text-gray-500 text-xs md:text-sm">coming soon</p>
          </div>
          <div
            className="w-3/12 md:w-44 h-32 md:h-64 hover:shadow rounded border-b md:border-b-2 border-t md:border-t-2 border-pink-400 flex flex-col space-y-1 md:space-y-4 items-center justify-center py-8 px-1 md:px-2 text-center"
            ref={cardTwoRef}
          >
            <div className="balls">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <p className="text-gray-500 text-xs md:text-sm">coming soon</p>
          </div>
          <div
            className="w-3/12 md:w-44 h-32 md:h-64 hover:shadow rounded border-b md:border-b-2 border-t md:border-t-2 border-pink-400 flex flex-col space-y-1 md:space-y-4 items-center justify-center py-8 px-1 md:px-2 text-center"
            ref={cardThreeRef}
          >
            <div className="balls">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <p className="text-gray-500 text-xs md:text-sm">coming soon</p>
          </div>
          <div
            className="w-3/12 md:w-44 h-32 md:h-64 hover:shadow rounded border-b md:border-b-2 border-t md:border-t-2 border-pink-400 flex flex-col space-y-1 md:space-y-4 items-center justify-center py-8 px-1 md:px-2 text-center"
            ref={cardFourRef}
          >
            <div className="balls">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <p className="text-gray-500 text-xs md:text-sm">Coming soon</p>
          </div>
        </div>
        <div
          className="bg-gradient-to-br from-purple-400 to-pink-400 px-2 py-2 text-center md:py-6 md:px-0 flex flex-col items-center  w-11/12 h-36 md:h-72 rounded-lg justify-center"
          ref={mintRef}
        >
          <span className="text-white font-bold tracking-wider text-lg md:text-3xl cursor-pointer">
            Are you an artist? Mint your NFT NOW
          </span>
        </div>
      </div>
    </section>
  );
}
