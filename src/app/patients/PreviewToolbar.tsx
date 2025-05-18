import Link from "next/link";
function PreviewToolbar() {
  return (
    <div className="flex justify-between">
      <figure className="flex gap-10 items-center">
        <div className="inline-block w-32 h-32 border-1 border-gray-100 rounded-2 box-border">{/* <img src="" alt="" /> */}</div>
        <figcaption className="text-20 leading-32">Status Scan</figcaption>
      </figure>

      <Link href="/" className="inline-block w-100 h-32 border-1 border-gray-100 text-center leading-30 box-border rounded-2">
        Open
      </Link>
    </div>
  );
}

export default PreviewToolbar;
