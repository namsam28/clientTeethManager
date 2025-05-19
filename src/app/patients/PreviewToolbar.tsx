import caseStore from "@store/caseStore";
import Link from "next/link";
import Image from "next/image";
function PreviewToolbar() {
  const selectedCase = caseStore(state => state.selectedCase);
  return (
    <div className="flex justify-between">
      <figure className="flex gap-10 items-center">
        <div className="grid items-center justify-center w-36 h-36 border-1 border-gray-100 rounded-2 box-border">{selectedCase && <Image src={selectedCase.previewImg} alt="" width={24} height={24} />}</div>
        <figcaption className="text-20 leading-32">{selectedCase?.title}</figcaption>
      </figure>

      <Link href="/scanView" className="inline-block w-100 h-32 border-1 border-gray-100 text-center leading-30 box-border rounded-2">
        Open
      </Link>
    </div>
  );
}

export default PreviewToolbar;
