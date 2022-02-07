import { useRef, useEffect } from 'react';
import gsap, { Power4 } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

import { AiOutlineFilePdf } from 'react-icons/ai';

export default function Charity() {
  const titleRef = useRef();
  const firstInputRef = useRef();
  const secondInputRef = useRef();
  const btnRef = useRef();
  const addressRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline(
      {
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 90%',
          end: 'top 20%',
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
      titleRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 2 }
    )
      .fromTo(
        firstInputRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 2 }
      )
      .fromTo(
        secondInputRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 2 },
        '-=1'
      )
      .fromTo(
        btnRef.current,
        {
          opacity: 0,
        },
        { opacity: 1, duration: 2 },
        '-=2'
      )
      .fromTo(
        addressRef.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 2 },
        '-=2'
      );
  }, []);
  const address = '0x5ebf759767827ba3a1763f8ed7fa61ed9abf27b7';
  return (
    <section className="bg-gradient-to-br from-purple-400 to-pink-400 flex justify-center py-14 mb-16 md:mb-12">
      <div className="flex flex-col items-center text-center space-y-8">
        <div className="flex flex-col items-center space-y-2" ref={titleRef}>
          <h2 className="text-sm text-white tracking-wider uppercase">
            Charity
          </h2>
          <p className="font-semibold text-2xl tracking-wide text-white">
            Helping the community through Blockchain
          </p>
          <span className="w-16 h-0.5 bg-white block rounded-lg"></span>
        </div>
        <div>
          <form className="flex flex-col space-y-4 items-start">
            <div className="flex flex-col items-start" ref={firstInputRef}>
              <label htmlFor="uname" className="text-sm text-white mb-2">
                Telegram username
              </label>
              <input
                type="text"
                id="uname"
                className="rounded-lg py-3 px-6 text-gray-50 w-80 bg-transparent border border-white"
              />
            </div>
            <div className="flex flex-col items-start" ref={secondInputRef}>
              <label
                htmlFor="file"
                className="rounded-lg py-3 px-6 text-white w-80 bg-transparent cursor-pointer border border-white flex justify-center space-x-4 items-center"
              >
                <AiOutlineFilePdf size={20} />{' '}
                <span>Upload a valid case pdf file</span>
              </label>
              <input type="file" name="file" id="file" hidden />
            </div>
            <button
              className="w-full border border-gray-50 py-3 px-6 rounded-lg text-purple-400 tracking-wider font-semibold uppercase bg-white  hover:bg-gray-50 duration-200"
              ref={btnRef}
            >
              Submit
            </button>
          </form>
        </div>
        <div className="flex flex-col" ref={addressRef}>
          <span className="text-white mb-2">
            Donation? Charity Address (<i>click to copy</i>)
          </span>
          <span
            className="px-1 py-3 md:px-6 text-sm md:text-md bg-transparent border border-white rounded text-md text-gray-100 overflow-x-auto w-80"
            onClick={() => navigator.clipboard.writeText(address)}
          >
            {address}
          </span>
        </div>
      </div>
    </section>
  );
}
