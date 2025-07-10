import createDOMPurify from "dompurify";
import { JSDOM } from "jsdom";

function sanitizeHtml(dirty: string): string {
  const window = new JSDOM("").window;
  const DOMPurify = createDOMPurify(window);
  return DOMPurify.sanitize(dirty);
}

function ProductDescription({ htmlString }: { htmlString: string }) {
  const cleanHtml = sanitizeHtml(htmlString);
  return (
    <div
      dangerouslySetInnerHTML={{ __html: cleanHtml }}
      className="text-sm leading-6"
    ></div>
  );
}

export default ProductDescription;
