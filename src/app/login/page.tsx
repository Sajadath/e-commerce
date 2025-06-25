"use client";
import React from "react";

const dlLinks = [
  "https://dl1.deserver.top/m3/archive.serie/Link.Click/s03/Link.Click.S03E01.1080p.10bit.WEB-DL.x265.SoftSub.DigiMoviez.mkv?md5=BNM_DdF57pY9xx4k3-Zhmg&expires=1750857350",
  "https://dl1.deserver.top/m3/archive.serie/Link.Click/s03/Link.Click.S03E02.1080p.10bit.WEB-DL.x265.SoftSub.DigiMoviez.mkv?md5=faHjwZa7RcEmWQKB6Iq9Hg&expires=1750857350",
  "https://dl1.deserver.top/m3/archive.serie/Link.Click/s03/Link.Click.S03E03.1080p.10bit.WEB-DL.x265.SoftSub.DigiMoviez.mkv?md5=VN1WNTv_DbKnr7YNbUKpIA&expires=1750857350",
  "https://dl1.deserver.top/m3/archive.serie/Link.Click/s03/Link.Click.S03E04.1080p.10bit.WEB-DL.x265.SoftSub.DigiMoviez.mkv?md5=64CZiK88EXYg8B8Y6vb5Lg&expires=1750857350",
  "https://dl1.deserver.top/m3/archive.serie/Link.Click/s03/Link.Click.S03E05.1080p.10bit.WEB-DL.x265.SoftSub.DigiMoviez.mkv?md5=BGEvc4N1wavIObZEQwWbfg&expires=1750857350",
  "https://dl1.deserver.top/m3/archive.serie/Link.Click/s03/Link.Click.S03E06.1080p.10bit.WEB-DL.x265.SoftSub.DigiMoviez.mkv?md5=6ylsgRIBYmkH-KRJsmKYfQ&expires=1750857350",
];

export default function Page() {
  return (
    <div dir="ltr" className="flex flex-col items-center justify-center">
      {dlLinks.map((link, index) => (
        <div key={index} className="my-2 flex items-center space-x-2">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Download Episode {index + 1}
          </a>
          <button
            onClick={() => {
              navigator.clipboard.writeText(link);
            }}
            className="rounded bg-gray-200 px-2 py-1 hover:bg-gray-300"
          >
            Copy Link
          </button>
        </div>
      ))}
    </div>
  );
}
