import { RiArchiveLine } from "react-icons/ri";
import { VscSaveAs } from "react-icons/vsc";

const Details = ({ childrenA, childrenB, title, subtitle }) => {
  return (
    <div className="content">
      <div className="flex justify-between items-center mb-7 w-full ">
        <div>
          <h2 className="text-xl font-semibold">{title}</h2>
          <small className="text-gray-500">{subtitle}</small>
        </div>

        <div className="flex items-end sm:items-center flex-col sm:flex-row">
          <div className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in sm:mr-2">
            <input
              type="checkbox"
              name="toggle"
              id="toggle"
              className="toggle-checkbox outline-none absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
            />
            <label
              htmlFor="toggle"
              className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
            />
          </div>
          <p className="sm:mr-5 text-gray-600">Publish</p>
          <button
            type="submit"
            className="block btn bg-blue-600 w-32 text-white sm:mr-4 flex items-center justify-center"
          >
            <VscSaveAs size={20} className="mr-2" /> Save
          </button>
          <button
            type="submit"
            className="block btn bg-gray-300 w-32 text-white flex items-center justify-center"
          >
            <RiArchiveLine size={20} className="mr-2" /> Archive
          </button>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row">
        <div className="xl:w-9/12 w-full">
          <div className="xl:mr-5 mb-5 xl:mb-0 rounded bg-white">
            {childrenA}
          </div>
        </div>
        <div className="xl:w-3/12 w-flex-col">
          <div className="rounded bg-white">{childrenB}</div>
        </div>
      </div>
    </div>
  );
};

export default Details;
