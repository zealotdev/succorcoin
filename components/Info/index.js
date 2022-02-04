export default function Info() {
  return (
    <section className="flex flex-col items-center lg:px-24 xl:px-36">
      <h2 className="text-2xl text-purple-400 font-bold">Contacts & FAQ</h2>
      <span className="h-1 w-16 bg-purple-400 block rounded-lg"></span>
      <div className="flex justify-between w-8/12 mt-14">
        <div className="bg-gradient-to-br from-pink-400 to-purple-400 py-4 px-4 rounded text-white flex flex-col space-y-4">
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
        <div>FAQ</div>
      </div>
    </section>
  );
}
