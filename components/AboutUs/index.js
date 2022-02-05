import Image from 'next/image';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  const aboutRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutRef.current,
        start: 'top 90%',
        end: 'top 20%',
        markers: false,
        scrub: 1,
      },
    });
    tl.fromTo(
      aboutRef.current,
      { opacity: 0.1, y: 100 },
      { opacity: 1, y: -20, duration: 1 }
    );
  }, []);

  return (
    <section
      ref={aboutRef}
      className="about-us-bg bg-no-repeat bg-left bg-contain flex flex-col justify-center lg:px-24 xl:px-36"
    >
      <div>
        <div className="flex justify-evenly">
          <div className="flex flex-col space-y-4 w-6/12">
            <h2 className="text-sm text-purple-400 tracking-wider uppercase">
              About Us
            </h2>
            <span className="font-semibold text-2xl tracking-wide text-gray-700">
              Revolutionary Token On{' '}
              <span className="text-purple-400">BSC Network</span>
            </span>
            <p className="text-gray-400 tracking-wider text-sm py-4">
              A renounced coin contract where the public have complete ownership
              and control of the contract, to assure longevity of the project
              through community ownership.
            </p>

            <div className="flex justify-between">
              <span className="rounded-full border-8 border-pink-400 flex flex-col justify-center items-center w-40 h-40 space-y-1">
                <span className="font-extrabold text-xl">75%</span>
                <p className="text-gray-500">BLOCKCHAIN</p>
              </span>
              <span className="rounded-full border-8 border-pink-400 flex flex-col justify-center items-center w-40 h-40 space-y-1">
                <span className="font-extrabold text-xl">80%</span>
                <p className="text-gray-500">COMMUNITY</p>
              </span>
              <span className="rounded-full border-8 border-pink-400 flex flex-col justify-center items-center w-40 h-40 space-y-1">
                <span className="font-extrabold text-xl">70%</span>
                <p className="text-gray-500">CHARITY</p>
              </span>
            </div>
          </div>
          <div>
            <Image
              src="/logo.png"
              height={400}
              width={400}
              alt="succorcoin-shield"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
