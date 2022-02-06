import { useRef, useEffect } from 'react';
import gsap, { Power4 } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

export default function Footer() {
  const footerContentRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline(
      {
        scrollTrigger: {
          trigger: footerContentRef.current,
          start: 'bottom 100%',
          end: 'bottom 100%',
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

    tl.from(footerContentRef.current, { scale: 0, duration: 2 });
  }, []);
  const date = new Date();
  return (
    <footer className="gb-no-repeat bg-cover h-48 flex flex-col items-center justify-end lg:px-24 xl:px-36 pb-8 text-white text-sm mt-12">
      <div ref={footerContentRef} className="flex flex-col items-center">
        <span>
          Copyright©{date.getFullYear()} Succorcoin, All rights reserved.
        </span>
        <span className="text-gray-600">Succorcoin V.2</span>
      </div>
    </footer>
  );
}
