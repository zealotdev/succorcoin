import { AiOutlineFilePdf } from 'react-icons/ai';

export default function Charity() {
  const address = '0x5ebf759767827ba3a1763f8ed7fa61ed9abf27b7';
  return (
    <div className="bg-gradient-to-br from-purple-400 to-pink-400 py-10 flex justify-center">
      <div className="flex flex-col items-center text-center space-y-8">
        <div className="flex flex-col items-center space-y-2">
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
            <div className="flex flex-col items-start">
              <label htmlFor="uname" className="text-sm text-white mb-2">
                Telegram username
              </label>
              <input
                type="text"
                id="uname"
                className="rounded-lg py-3 px-6 text-gray-50 w-80 bg-transparent border border-white"
              />
            </div>
            <div className="flex flex-col items-start">
              <label
                htmlFor="file"
                className="rounded-lg py-3 px-6 text-white w-80 bg-transparent cursor-pointer border border-white flex justify-center space-x-4 items-center"
              >
                <AiOutlineFilePdf size={20} />{' '}
                <span>Upload a valid case pdf file</span>
              </label>
              <input type="file" name="file" id="file" hidden />
            </div>
            <button className="flex-none max-w-fit border border-white text-white rounded-full hover:text-gray-50 text-sm px-4 py-2 hover:bg-pink-500 hover:scale-105 duration-200">
              Submit
            </button>
          </form>
        </div>
        <div className="flex flex-col">
          <span className="text-white">
            Charity Address (<i>click to copy</i>)
          </span>
          <span
            className="py-3 px-6 bg-transparent border border-white rounded text-md text-gray-600"
            onClick={() => navigator.clipboard.writeText(address)}
          >
            {address}
          </span>
        </div>
      </div>
    </div>
  );
}
