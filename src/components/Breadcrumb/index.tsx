"use client";
import breadcrumbStore from "@store/breadcrumbStore";
function Breadcrumb() {
  const breadcrumbList = breadcrumbStore(state => state.breadcrumbList);

  return (
    <nav>
      <ol className="flex items-center space-x-2 text-sm text-gray-500">
        {breadcrumbList.map(item => {
          return (
            <li>
              <span className=" text-gray-600">'홍길동'님의 Library</span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
