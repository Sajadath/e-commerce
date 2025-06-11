import Link from "next/link";

function CategoryItem() {
  return (
    <div className="w-[20%] shrink-0 transition-all duration-300 hover:w-[30%]">
      <Link className="w-full" href="/list?cat=test">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3CZ7vNjpzpeYouT1R1LEu5CQe5aBAH-_9zw&s"
          alt="Category Image"
          className="h-90 w-full rounded-xl object-cover transition-all duration-300"
        />
      </Link>
      <h2 className="text-center font-semibold">نام دسته بندی</h2>
    </div>
  );
}

export default CategoryItem;
