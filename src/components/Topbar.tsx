import { handleOpenSidePanel } from "../utils/actions";

const Topbar = () => {
  return (
    <div className="px-4 py-1 h-[4rem] border-b-[1px] border-[#AFAFAF] w-full flex items-center justify-between">
      <div className="flex items-center justify-center gap-4">
        <button onClick={handleOpenSidePanel}>
          <img
            src="/icons/Panel.svg"
            alt="Panel Icon"
            className="w-6 h-6 relative overflow-hidden"
          />
        </button>
        <p className="text-base font-medium leading-tight flex items-center justify-center gap-1">
          <span className="text-[#AFAFAF]">Workspace</span>
          <img
            className="w-3 2xl:w-4 h-3 2xl:h-4 "
            src="/icons/Chevron.svg"
            alt="Chevron Icon"
          />
          <span className="text-[#AFAFAF]">Folder 2</span>
          <img
            className="w-3 2xl:w-4 h-3 2xl:h-4 "
            src="/icons/Chevron.svg"
            alt="Chevron Icon"
          />
          <span className="text-Primary">Spreadsheet3</span>
          <img src="/icons/More.svg" alt="More Icon" className="ml-1" />
        </p>
      </div>
      <div className="flex items-center justify-center gap-3">
        <div className="flex items-center justify-center gap-2 border border-gray-300 rounded-md p-2 pr-0 bg-[#F6F6F6]">
          <img src="/icons/Search.svg" alt="Search Icon" className="w-4 h-4" />
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search within sheet"
            className="border-0 focus:border-0 focus:ring-0 focus:outline-none w-full text-xs content-center bg-transparent rounded-md p-1"
          />
        </div>
        <button type="button" className="relative">
          <div className="bg-[#4B6A4F] text-white w-4 h-4 rounded-full absolute -top-1.5 -right-[0.1rem] flex items-center justify-center">
            <p className="text-[12px] font-medium leading-none">2</p>
          </div>
          <img src="/icons/Alert.svg" alt="Alert Icon" className="w-7 h-7" />
        </button>
        <div className="pl-2 pr-3 py-1.5 flex justify-start items-center gap-2">
          <img src="/icons/Profile.svg" alt="Profile Icon" />
          <div>
            <p className="text-xs font-normal leading-none">John Doe</p>
            <p className="text-[10px] font-normal leading-3">john.doe...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
