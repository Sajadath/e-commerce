"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useRef, useState } from "react";

function SearchBar() {
  const [inputFocused, setInputFocused] = useState(false);

  const router = useRouter();

  const formRef = useRef<HTMLFormElement | null>(null);

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const searchTerm = formData.get("searchBar") as string;
    if (searchTerm.trim()) {
      router.push(`/list?name=${searchTerm}`);
    }
  }

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setInputFocused(false);
      }
    }
    function handleClickOutSide(event: MouseEvent) {
      if (
        formRef.current &&
        event.target &&
        !formRef.current.contains(event.target as Node)
      ) {
        setInputFocused(false);
      }
    }
    if (inputFocused) {
      document.addEventListener("click", handleClickOutSide);
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.removeEventListener("click", handleClickOutSide);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [inputFocused]);

  return (
    <form
      ref={formRef}
      onSubmit={handleSearch}
      className={`relative flex w-60 justify-between gap-4 rounded-md bg-gray-100 p-2 transition-all duration-500 ${inputFocused ? "w-80 border border-black/20" : "border-none"}`}
    >
      <input
        onFocus={() => setInputFocused(true)}
        type="text"
        name="searchBar"
        className="grow outline-none"
        id="searchBar"
        placeholder="جستجو..."
      />
      <button className="absolute top-1/2 left-3 -translate-y-1/2 cursor-pointer">
        <Image src="/search.png" alt="Search Button" width={16} height={16} />
      </button>
    </form>
  );
}

export default SearchBar;
