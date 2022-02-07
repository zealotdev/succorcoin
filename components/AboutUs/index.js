import Image from 'next/image';
import { useRef, useEffect } from 'react';
import gsap, { Power4 } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  const aboutRef = useRef();
  const imageRef = useRef();
  const headRef = useRef();
  const textRef = useRef();
  const featureRef1 = useRef();
  const featureRef2 = useRef();
  const featureRef3 = useRef();

  useEffect(() => {
    const tl = gsap.timeline(
      {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 90%',
          end: 'top 60%',
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
      aboutRef.current,
      { opacity: 0.1, y: 100 },
      { opacity: 1, y: -20, duration: 1 }
    )
      .fromTo(
        imageRef.current,
        {
          x: 120,
        },
        {
          x: 0,
          duration: 2,
        },
        '-=1'
      )
      .fromTo(
        [featureRef1.current, featureRef2.current, featureRef3.current],
        {
          y: 100,
          opacity: 0.3,
        },
        {
          y: 0,
          opacity: 1,
          duration: 2,
          stagger: 0.4,
        },
        '-=2'
      )
      .fromTo(
        [headRef.current, textRef.current],
        {
          clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
          opacity: 0,
        },
        {
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
          opacity: 1,
          stagger: 0.4,
          duration: 2,
        },
        '-=2'
      );
  }, []);

  return (
    <section className="about-us-bg bg-no-repeat bg-left bg-contain">
      <div
        ref={aboutRef}
        className="hidden md:flex flex-col justify-center lg:px-24 xl:px-36"
      >
        <div className="flex justify-between">
          <div className="flex flex-col space-y-4 w-6/12">
            <h2 className="text-sm text-purple-400 tracking-wider uppercase">
              About Us
            </h2>
            <span
              className="font-semibold text-2xl tracking-wide text-gray-700"
              ref={headRef}
            >
              Revolutionary Token On{' '}
              <span className="text-purple-400">BSC Network</span>
            </span>
            <p
              className="text-gray-400 tracking-wider text-sm py-4"
              ref={textRef}
            >
              A renounced coin contract where the public have complete ownership
              and control of the contract, to assure longevity of the project
              through community ownership.
            </p>

            <div className="flex justify-between">
              <span
                className="rounded-full border-8 border-pink-400 flex flex-col justify-center items-center w-40 h-40 space-y-1"
                ref={featureRef1}
              >
                <span className="font-extrabold text-xl">75%</span>
                <p className="text-gray-500">BLOCKCHAIN</p>
              </span>
              <span
                className="rounded-full border-8 border-pink-400 flex flex-col justify-center items-center w-40 h-40 space-y-1"
                ref={featureRef2}
              >
                <span className="font-extrabold text-xl">80%</span>
                <p className="text-gray-500">COMMUNITY</p>
              </span>
              <span
                className="rounded-full border-8 border-pink-400 flex flex-col justify-center items-center w-40 h-40 space-y-1"
                ref={featureRef3}
              >
                <span className="font-extrabold text-xl">70%</span>
                <p className="text-gray-500">CHARITY</p>
              </span>
            </div>
          </div>
          <div ref={imageRef}>
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
