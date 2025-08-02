import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-accent">
      <div className="w-full sm:px-6 lg:px-8 py-12 px-[10rem]">
        <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-center md:justify-around gap-y-[3rem]">
          {/* Company Info */}
          <div className="w-full md:w-auto self-center place-items-center md:place-items-start space-y-[1rem]">
            <div className="flex items-center space-x-6 mb-6">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.1497 14.7262C13.7657 22.0669 7.59189 27.9146 0 28V0C7.59189 0.0854653 13.7657 5.9331 14.1497 13.2738C14.5287 6.02987 20.5459 0.239902 28 0.00640446V27.9937C20.5459 27.7602 14.5287 21.9702 14.1497 14.7262Z"
                  fill="#FF6428"
                />
              </svg>
              <span className="text-3xl text-gray-900">VibeStrings</span>
            </div>
            <div className="flex flex-row place-items-start space-x-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
                  stroke="#666666"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
                  stroke="#666666"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-base font-semibold text-[#666666]">
                Enquiry@VibeStrings.com
              </p>
            </div>

            <div className="flex flex-row place-items-start space-x-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.9999 13.4299C13.723 13.4299 15.1199 12.0331 15.1199 10.3099C15.1199 8.58681 13.723 7.18994 11.9999 7.18994C10.2768 7.18994 8.87988 8.58681 8.87988 10.3099C8.87988 12.0331 10.2768 13.4299 11.9999 13.4299Z"
                  stroke="#666666"
                  strokeWidth="1.5"
                />
                <path
                  d="M3.6202 8.49C5.5902 -0.169998 18.4202 -0.159997 20.3802 8.5C21.5302 13.58 18.3702 17.88 15.6002 20.54C13.5902 22.48 10.4102 22.48 8.3902 20.54C5.6302 17.88 2.4702 13.57 3.6202 8.49Z"
                  stroke="#666666"
                  strokeWidth="1.5"
                />
              </svg>

              <p className="text-base font-semibold text-[#666666]">
                San Francisco
              </p>
            </div>
          </div>

          <div className="w-full md:w-auto flex flex-row md:flex-row gap-x-[10rem] justify-center">
            {/* Pages */}
            <div>
              <h3 className="text-lg font-extrabold text-gray-900 uppercase mb-4">
                Pages
              </h3>
              <ul className="font-bold space-y-[1rem] text-[#666666]">
                <li>
                  <Link href="/store" className="hover:text-orange-500 text-sm">
                    Store
                  </Link>
                </li>
                <li>
                  <Link
                    href="/collections"
                    className="hover:text-orange-500 text-sm"
                  >
                    Collections
                  </Link>
                </li>
                <li>
                  <Link
                    href="/support"
                    className="hover:text-orange-500 text-sm"
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            {/* Product */}
            <div>
              <h3 className="text-lg font-extrabold text-gray-900 uppercase mb-4">
                Product
              </h3>
              <ul className="font-bold space-y-[1rem] text-[#666666]">
                <li>
                  <Link href="/terms" className="hover:text-orange-500 text-sm">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="hover:text-orange-500 text-sm"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/copyright"
                    className="hover:text-orange-500 text-sm"
                  >
                    Copyright
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Follow Us */}
          <div className="w-full md:w-auto place-items-center">
            <h3 className="text-md font-extrabold text-[#121212] uppercase mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-orange-500">
                <Image
                  src={'/facebook_logo.png'}
                  width={50}
                  height={50}
                  alt="facebook_icon"
                  className="w-[2rem] h-[2rem]"
                />
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-500">
                <Image
                  src={'/twitter_logo.png'}
                  width={50}
                  height={50}
                  alt="twitter_icon"
                  className="w-[2rem] h-[2rem]"
                />
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-500">
                <Image
                  src={'/instagram_logo.png'}
                  width={50}
                  height={50}
                  alt="instagram_icon"
                  className="w-[2rem] h-[2rem]"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-[#666666] text-sm font-semibold text-center">
            © 2022 Copyright.VibeStrings
          </p>
        </div>
      </div>
    </footer>
  );
}
