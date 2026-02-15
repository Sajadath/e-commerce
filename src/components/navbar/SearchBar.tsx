"use client";

import useGlobalUiStore from "@/stores/globalUiStore";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useRef, useState } from "react";
const NavBarFocusedEffect = dynamic(() => import("./NavBarFocusedEffect"), {
  ssr: false,
});

function SearchBar() {
  const [inputFocused, setInputFocused] = useState(false);
  const router = useRouter();

  const [productNameSearch, setProductNameSearch] = useState("");
  const setSearchBarFocused = useGlobalUiStore(
    (state) => state.setSearchBarFocused,
  );

  const formRef = useRef<HTMLFormElement | null>(null);

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const searchTerm = formData.get("searchBar") as string;
    setInputFocused(false);
    if (searchTerm.trim()) {
      router.push(`/search?productName=${searchTerm}`);
    }
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const productName = urlParams.get("productName");
    if (productName) {
      setProductNameSearch(productName);
    }
  }, []);

  useEffect(() => {
    function handleFocusOut(event: KeyboardEvent) {
      if (
        event.key === "Escape" ||
        event.key === "Esc" ||
        event.key === "Enter"
      ) {
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
      document.addEventListener("keydown", handleFocusOut);
    }
    return () => {
      document.removeEventListener("click", handleClickOutSide);
      document.removeEventListener("keydown", handleFocusOut);
    };
  }, [inputFocused]);

  useEffect(() => {
    setSearchBarFocused(inputFocused);
  }, [inputFocused, setSearchBarFocused]);

  return (
    <div className="grow px-4 text-xs md:px-9 md:text-sm">
      <form
        ref={formRef}
        onSubmit={handleSearch}
        className={`relative rounded-md bg-gray-100 p-2 transition-all duration-500 ${inputFocused ? "w-full border border-black/20" : "w-[80%] border-none"}`}
      >
        <input
          onClick={() => setInputFocused(true)}
          type="text"
          name="searchBar"
          defaultValue={productNameSearch}
          className="w-full outline-none"
          id="searchBar"
          placeholder="جستجو..."
        />
        <button className="absolute top-1/2 left-3 -translate-y-1/2 cursor-pointer">
          <Image src="/search.png" alt="Search Button" width={16} height={16} />
        </button>
      </form>
      <NavBarFocusedEffect />
    </div>
  );
}

export default SearchBar;
