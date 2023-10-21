"use client";

import Link from "next/link";
import Banner from "./components/Banner";

const NotFoundPage = () => {
  return (
    <>
      <Banner>Page not found</Banner>

      <div className="grid gap-4 p-4 text-myBlue text-center">
        <p className="text-lg">We are sorry, but we could not find this page. <Link
          className="uppercase font-extrabold tracking-wider underline"
          href="/"
        >
          Go back home
        </Link></p>
        
      </div>
    </>
  );
};
export default NotFoundPage;
