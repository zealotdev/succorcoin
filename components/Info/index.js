import { useRef, useEffect } from 'react';
import gsap, { Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Info() {
  const infoRef = useRef();
  const mailRef = useRef();
  const faqRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: infoRef.current,
        start: 'top 90%',
        end: 'top 60%',
        markers: false,
        scrub: 1,
      },
    });
    tl.fromTo(
      infoRef.current,
      { opacity: 0.1, y: 100 },
      { opacity: 1, y: -20, duration: 1 }
    )
      .fromTo(
        mailRef.current,
        {
          x: -200,
        },
        {
          x: 0,
          ease: Power3.easeIn,
          duration: 1,
        }
      )
      .fromTo(
        faqRef.current,
        {
          x: 200,
        },
        {
          x: 0,
          ease: Power3.easeIn,
          duration: 1,
        }
      );
  }, []);

  return (
    <section
      className="flex flex-col items-center lg:px-24 xl:px-36"
      ref={infoRef}
    >
      <h2 className="text-sm text-purple-400 tracking-wider uppercase">
        Reach Us
      </h2>
      <p className="font-semibold text-2xl tracking-wide mt-4">
        Get in touch with us <span className="text-purple-400">NOW</span>
      </p>
      <span className="h-0.5 w-16 bg-purple-400 block rounded-lg mt-4"></span>
      <div className="flex justify-center w-8/12 mt-14 space-x-8">
        <div
          className="bg-gradient-to-br from-pink-400 to-purple-400 py-4 px-4 rounded text-white flex flex-col space-y-4"
          ref={mailRef}
        >
          <h3>Mail Support</h3>
          <ul>
            <li>
              {'>'} <a href="mailto:info@succorcoin.com">info@succorcoin.com</a>
            </li>
            <li>
              {'>'}{' '}
              <a href="mailto:support@succorcoin.com">support@succorcoin.com</a>{' '}
            </li>
            <li>
              {'>'} <a href="mailto:nft@succorcoin.com">nft@succorcoin.com</a>
            </li>
            <li>
              {'>'}{' '}
              <a href="mailto:games@succorcoin.com">games@succorcoin.com</a>{' '}
            </li>
            <li>
              {'>'} <a href="mailto:swap@succorcoin.com">swap@succorcoin.com</a>
            </li>
            <li>
              {'>'}{' '}
              <a href="mailto:charity@succorcoin.com">charity@succorcoin.com</a>
            </li>
          </ul>
        </div>
        <div ref={faqRef}>FAQ</div>
      </div>
    </section>
  );
}
