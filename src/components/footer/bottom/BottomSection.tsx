function BottomSection() {
  return (
    <>
      <div className="mt-16 flex flex-col items-center justify-between gap-8 text-left md:flex-row">
        <div className="">© 2025 Shopper</div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div>
            <span className="mr-4 text-gray-500">Language </span>
            <span>Iran | Persian</span>
          </div>
          <div>
            <span className="mr-4 text-gray-500">Currency </span>
            <span>IRR</span>
          </div>
        </div>
      </div>
      <div dir="ltr" className="grid w-full grid-cols-[1fr_auto_1fr] pt-2">
        <div className="my-auto h-[2px] w-full content-center bg-gradient-to-l from-gray-300 via-transparent to-transparent"></div>
        <div className="text-center text-xs text-gray-600">
          All Rights Are Reserved <br /> © 2025 Shopper By SajadAth
        </div>
        <div className="my-auto h-[2px] w-full content-center bg-gradient-to-r from-gray-300 via-transparent to-transparent"></div>
      </div>
    </>
  );
}

export default BottomSection;
