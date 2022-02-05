export default function Footer() {
  const date = new Date();
  return (
    <footer className="gb-no-repeat bg-cover h-48 flex flex-col items-center justify-end lg:px-24 xl:px-36 pb-8 text-white text-sm mt-12">
      <span>
        Copyright©{date.getFullYear()} Succorcoin, All rights reserved.
      </span>
      <span>Succorcoin V2</span>
    </footer>
  );
}
