function TopBanner() {
  return (
    <section className="from-lightred/30 to-lightred/70 relative h-30 w-[80%] overflow-hidden rounded-3xl bg-gradient-to-r sm:h-60">
      <div className="bg-lightred absolute top-[50%] left-0 h-[50vw] w-[50vw] -translate-x-1/2 rounded-full" />
      <div className="bg-lightred absolute right-0 bottom-[50%] h-[50vw] w-[50vw] translate-x-1/2 rounded-full" />
      <div>
        <h1 className="absolute top-1/2 left-1/2 z-10 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 text-center text-lg font-bold text-white sm:text-3xl">
          {"تجربه خرید "}
          <span className="text-lightred drop-shadow-[0_2px_6px]">
            {"متفاوت"}
          </span>
          {" با ما"}
        </h1>
      </div>
    </section>
  );
}

export default TopBanner;
