import { AiOutlineFilePdf } from 'react-icons/ai';

export default function Charity() {
  const address = '0x5ebf759767827ba3a1763f8ed7fa61ed9abf27b7';
  return (
    <div className="bg-gradient-to-br from-purple-400 to-pink-400 py-10">
      <div className="flex flex-col items-center text-center space-y-8 max-w-6xl">
        <div className="flex flex-col items-center space-y-2">
          <h2 className="text-2xl font-bold text-white">Charity</h2>
          <p className="text-lg text-gray-100">
            Helping the community through Blockchain
          </p>
          <span className="h-1 w-16 bg-white block rounded-lg"></span>
        </div>
        <div>
          <form className="flex flex-col space-y-4 items-start">
            <div className="flex flex-col items-start">
              <label htmlFor="uname" className="text-md text-white">
                Telegram username
              </label>
              <input
                type="text"
                id="uname"
                className="rounded-lg py-2 px-3 text-gray-50 w-80 bg-purple-300"
              />
            </div>
            <div className="flex flex-col items-start">
              <label
                htmlFor="file"
                className="rounded-lg py-2 px-3 text-white w-80 bg-purple-300 cursor-pointer flex justify-center space-x-4 items-center"
              >
                <AiOutlineFilePdf size={20} />{' '}
                <span>Upload a valid case pdf file</span>
              </label>
              <input
                type="file"
                name="file"
                id="file"
                hidden
                className="rounded-lg py-2 px-3 text-gray-50 w-80 bg-purple-300"
              />
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
            className="py-2 px-4 bg-purple-300 rounded text-md text-gray-600"
            onClick={() => navigator.clipboard.writeText(address)}
          >
            {address}
          </span>
        </div>
      </div>
    </div>
  );
}
