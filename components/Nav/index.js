import { MdMarkEmailUnread } from 'react-icons/md';
import { FaTelegram, FaReddit } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BiChevronDown } from 'react-icons/bi';

import Image from 'next/image';
import { useState } from 'react';

export default function Nav() {
  const [dropDownMenu, setDropDownMenu] = useState(false);
  const links = ['Home', 'About', 'Swap', 'Staking', 'Games'];

  return (
    <div>
      <div className="py-3 bg-gray-100">
        <div className="lg:px-24 xl:px-36 mx-auto text-gray-500 text-sm flex justify-between content-center">
          <span className="flex space-x-2 cursor-pointer text-gray-400 hover:text-pink-400">
            <MdMarkEmailUnread size={25} /> <span>jorgedoe@gmail.com</span>
          </span>
          <span className="flex space-x-2 text-gray-400">
            <FaTelegram
              size={25}
              className="cursor-pointer hover:text-pink-400"
            />
            <FaReddit
              size={25}
              className="cursor-pointer hover:text-pink-400"
            />
            <AiFillTwitterCircle
              size={28}
              className="cursor-pointer hover:text-pink-400"
            />
          </span>
        </div>
      </div>
      <nav className=" bg-white py-4 border-t-2 border-gray-100 drop-shadow">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <Image
            src="/logo-large.png"
            width={150}
            height={35}
            alt="succorcoin-site"
          />
          <div className="flex space-x-12">
            <ul className="flex space-x-10 text-gray-500 text-sm items-center">
              {links.map((link) => {
                return (
                  <li key={link} className="hover:text-pink-400 cursor-pointer">
                    {link}
                  </li>
                );
              })}
              <li
                className="flex space-x-1 items-center cursor-pointer hover:text-pink-400 relative"
                onClick={() => setDropDownMenu(!dropDownMenu)}
              >
                <span>NFT</span> <BiChevronDown />
                {dropDownMenu && (
                  <ul className="absolute top-8 right-0 border border-pink-400 p-4 rounded-md bg-slate-50 space-y-4 w-40 text-gray-400 hover:text-gray-400 duration-200">
                    <li className="hover:text-pink-400 hover:underline">
                      NFT Minting
                    </li>
                    <li className="hover:text-pink-400 hover:underline">
                      NFT Marketplace
                    </li>
                  </ul>
                )}
              </li>
            </ul>
            <button className="bg-pink-400 rounded-full text-white py-2 px-3 text-sm uppercase hover:bg-pink-500 hover:scale-105 duration-200 ">
              Join Airdrop
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
