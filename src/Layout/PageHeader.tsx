import { Link } from "react-router";
import logo from "../assets/youtube.png";
import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from "lucide-react";
import Button from "../components/Button";
import { useState } from "react";
const Pageheader = () => {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);
  return (
    <>
      <div className="flex gap-10 lg:gap-20 justify-between items-center pt-2 mb-6 mx-4">
        <div
          className={` gap-4 items-center flex-shrink-0 ${
            showFullWidthSearch ? "hidden" : "flex"
          }`}
        >
          <Button variant="ghost" size="icon">
            <Menu />
          </Button>
          <Link to="/">
            <span className="flex font-semibold items-center ">
              <img src={logo} className="h-8" />
              YouTube
            </span>
          </Link>
        </div>

        <form
          className={` flex-grow  gap-4 justify-center ${
            showFullWidthSearch ? "flex" : "hidden md:flex"
          }`}
        >
          {showFullWidthSearch && (
            <Button
              onClick={() => setShowFullWidthSearch(false)}
              type="button"
              size="icon"
              variant="ghost"
              className="flex-shrink-0"
            >
              <ArrowLeft />
            </Button>
          )}
          <div className="flex flex-grow max-w-[600px]">
            <input
              className="rounded-l-full w-full px-3 py-1 text-lg  border-neutral-500 shadow-inner shadow-neutral-200  bg-neutral-200 outline-none focus:border-blue-500"
              type="search"
              placeholder="Search"
            />
            <button
              type="button"
              className="py-2 px-4 bg-neutral-200 rounded-r-full border-l-0"
            >
              <Search />
            </button>
          </div>
          <Button type="button" size="icon" className="flex-shrink-0">
            <Mic />
          </Button>
        </form>

        <div
          className={`flex-shrink-0 md:gap-2 ${
            showFullWidthSearch ? "hidden" : "flex"
          }`}
        >
          <Button
            onClick={() => setShowFullWidthSearch(true)}
            variant="ghost"
            size="icon"
            className="md:hidden"
          >
            <Search />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Mic />
          </Button>
          <Button variant="ghost" size="icon">
            <Upload />
          </Button>
          <Button variant="ghost" size="icon">
            <Bell />
          </Button>
          <Button variant="ghost" size="icon">
            <User />
          </Button>
        </div>
      </div>
    </>
  );
};
export default Pageheader;
