"use client";
import breadcrumbStore from "@store/breadcrumbStore";
function Breadcrumb() {
  const breadcrumbList = breadcrumbStore(state => state.breadcrumbList);

  return (
    <nav>
      <ol className="flex items-center space-x-2 text-sm text-gray-500">
        {breadcrumbList.map((item, index) => {
          if (index === 0) {
            return (
              <li key={`${index}-${item.label}`}>
                <span className=" text-gray-600 font-weight">'${item.label}'님의 Library</span>
              </li>
            );
          }

          return (
            <li key={`${index}-${item.label}`}>
              <span className=" text-gray-600 font-weight">{item.label}</span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
