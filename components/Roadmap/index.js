import Image from 'next/image';

export default function Roadmap() {
  return (
    <section className="flex flex-col lg:px-24 xl:px-36 pt-20 items-center">
      <div className="flex flex-col items-center space-y-3">
        <h2 className="text-sm text-purple-400 tracking-wider uppercase">
          Roadmap
        </h2>
        <p className="font-semibold text-2xl tracking-wide text-gray-700">
          Pathway towards <span className="text-purple-400">the future</span>
        </p>
        <span className="mt-14">
          <Image
            src="/images/roadmap.svg"
            height={400}
            width={800}
            alt="succorcoin-roadmap"
          />
        </span>
      </div>
    </section>
  );
}
