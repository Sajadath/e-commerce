export function convertToPersianNumber(num: string | number): string {
  if (typeof num === "number") {
    num = num.toString();
  }

  const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return num
    .toString()
    .split("")
    .map((char) => (/\d/.test(char) ? persianNumbers[parseInt(char)] : char))
    .join("");
}
