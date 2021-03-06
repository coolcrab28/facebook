import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";

import {signOut, useSession} from "next-auth/client"
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header() {
  const [session] = useSession();f
  return (
    <div className="flex sticky top-0 z-50 bg-white items-center p-2 lg:px-5 shadow-md">
      {/* left */}
      <div className="flex items-center">
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
        />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none placehoder-gray-500"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>
      {/* center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HomeIcon className="h-6 md:px-10 sm:h-5 md:hover:bg-gray-100 rounded-xl" />
          <FlagIcon className="h-6 md:px-10 sm:h-5 md:hover:bg-gray-100 rounded-xl" />
          <PlayIcon className="h-6 md:px-10 sm:h-5 md:hover:bg-gray-100 rounded-xl" />
          <UserGroupIcon className="h-6 md:px-10 sm:h-5 md:hover:bg-gray-100 rounded-xl" />
        </div>
      </div>
    {/* right */}
    <div className="flex items-center sm:space-x-2 justify-end">
      <Image
      onClick={signOut}
      />
      <p className="whitespace-nowrap font-semibold pr-3" >Lakshya Mahajan</p>
    </div>
    </div>
  );
}

export default Header;
