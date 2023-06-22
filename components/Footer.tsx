import Image from "next/image";
import { footerLinks } from "@/constants";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Any cars"
              width={118}
              height={118}
              className="object-contain"
            />
          </Link>
          <p>
            Any Cars 2023 <br />
            All rights reserved &copy;
          </p>
        </div>
        <div className="footer__links">
          {footerLinks.map((footerLinkItem) => (
            <div key={footerLinkItem.title} className="footer__link">
              <h3 className="font-bold">{footerLinkItem.title}</h3>
              {footerLinkItem.links.map((linkItem) => (
                <Link
                  key={linkItem.title}
                  href={linkItem.url}
                  className="text-gray-500 hover:underline hover:text-blue-600"
                >
                  {linkItem.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 py-10">
        <p>@2023 AnyCars. All Rights Reserved.</p>
        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500 hover:underline hover:text-blue-600">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-500 hover:underline hover:text-blue-600">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
