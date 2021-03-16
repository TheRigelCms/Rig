import { useState, useEffect } from "react";
import Link from "next/link";

export const Post = ({ status, article }) => {
  const [statusClass, setStatusClass] = useState("");

  useEffect(() => {
    if (status === "Draft") {
      setStatusClass("bg-blue-100 text-blue-800");
    } else if (status === "Published") {
      setStatusClass("bg-green-100 text-green-800");
    } else {
      setStatusClass("bg-gray-100 text-gray-800");
    }
  }, [status]);

  return (
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      <article className="overflow-hidden rounded shadow-lg">
        <Link
          href={`/panel/posts/${article.id}`}
          as={`/panel/posts/${article.id}`}
        >
          <a>
            <img
              alt="Placeholder"
              className="object-cover h-48  w-full"
              src="https://picsum.photos/600/400/?random"
            />
          </a>
        </Link>

        <header className="flex items-center justify-between leading-tight px-2 md:px-4 pt-5 md:pt-5">
          <a className="text-lg font-semibold text-black" href="#">
            {article.name}
          </a>
          <p
            className={`inline-block relative px-2 text-sm font-semibold ${statusClass} rounded`}
          >
            {status}
          </p>
        </header>
        <main className="p-2 md:p-4">
          <div className="text-gray-600 text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
            nulla atque nihil cupiditate.
          </div>
        </main>
        <footer className="flex items-center justify-between p-2 md:p-4">
          <div></div>
          <Link
            href={`/panel/posts/${article.id}`}
            as={`/panel/posts/${article.id}`}
          >
            <a className="font-semibold text-sm text-blue-600 hover:text-blue-800">
              Edit
            </a>
          </Link>
        </footer>
      </article>
    </div>
  );
};
