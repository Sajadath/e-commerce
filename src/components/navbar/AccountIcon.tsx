"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

function AccountIcon() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const router = useRouter();

  const isLoggedIn = false;

  function handleProfile() {
    if (!isLoggedIn) {
      router.push("/login");
    } else {
      setIsProfileOpen((prev) => !prev);
    }
  }

  return (
    <>
      <div>
        <Image
          src="/profile.png"
          alt="Profile Icon"
          width={22}
          height={22}
          className="cursor-pointer"
          onClick={handleProfile}
        />
      </div>
      {isProfileOpen && (
        <div className="shadow-card absolute top-12 left-0 z-20 flex flex-col items-start gap-2 rounded-md bg-white p-4 text-center text-sm text-nowrap backdrop-blur-sm">
          <Link href="/">حساب کاربری</Link>
          <button className="mt-2 w-full cursor-pointer">خروج</button>
        </div>
      )}
    </>
  );
}

export default AccountIcon;
