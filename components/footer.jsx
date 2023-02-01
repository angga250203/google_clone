import { GlobeIcon, LocationMarkerIcon } from "@heroicons/react/solid";
import { useState, useEffect } from "react";

export default function Footer({ className }) {
  const [currentCountry, setCurrentCountry] = useState(null);

  const url = `https://api.ipdata.co/?api-key=${process.env.NEXT_LOCATION}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCurrentCountry(data))
      .catch((err) => console.log(err));
  }, [url]);

  return (
    <footer
      className={`relative lg:sticky sm:mt-0 bottom-0 grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 dark:bg-secondary-dark text-sm ${className}`}
    >
      {currentCountry && (
        <div className="px-8 py-3 flex items">
          <a
            href="https://ipinfo.io/"
            target="_blank"
            rel="noreferrer noopener "
          >
            <LocationMarkerIcon className="h-5 text-gray-500 mr-2" />
          </a>
          <p className="capitalize">{`${currentCountry.region}, ${currentCountry.country_name}`}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-2 sm:gap-y-4 px-8 py-3 grid-flow-row-dense">
        <div className="flex justify-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2 ">
          <GlobeIcon className="h-5 mr-1 text-green-700" /> Carbon neutral since
          2007
        </div>

        <div className=" flex justify-center  space-x-8 whitespace-nowrap md:justify-start">
        <a href="https://about.google">
            <p className="link">About</p>
          </a>
          <a href="https://ads.google.com">
            <p className="link">Advertising</p>
          </a>
          <a href="https://www.google.com/intl/en_in/business/">
            <p className="link">Business</p>
          </a>
          <a href="https://www.google.com/search/howsearchworks/">
            <p className="link">How Search Works</p>
          </a>
        </div>

        <div className="flex justify-center space-x-8 md:ml-auto ">
        <a href="https://policies.google.com/privacy?hl=en-IN&fg=1">
            <p className="link">Privacy</p>
          </a>
          <a href="https://policies.google.com/terms?hl=en-IN&fg=1">
            <p className="link">Terms</p>
          </a>
          <a href="https://www.google.com/preferences?hl=en-IN&fg=1">
            <p className="link">Settings</p>
          </a>
        </div>
      </div>
    </footer>
  );
}