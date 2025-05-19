"use client";
import breadcrumbStore from "@store/breadcrumbStore";
import caseStore from "@store/caseStore";
function Breadcrumb() {
  const breadcrumb = breadcrumbStore(state => state.breadcrumb);
  const setBreadcrumb = breadcrumbStore(state => state.setBreadcrumb);
  const handleClick = () => {
    setBreadcrumb([breadcrumb[0]]);
    caseStore.getState().clearSelectedCase();
  };

  return (
    <nav>
      <ol className="flex items-center space-x-2 text-sm text-gray-500 gap-24">
        {breadcrumb.map((item, index) => {
          if (index === 0) {
            return (
              <li key={`${index}-${item.label}`}>
                <a
                  href={void 0}
                  onClick={handleClick}
                  className="relative font-weight cursor-pointer 
                 before:absolute before:left-0 before:right-0 before:bottom-0 before:border-b before:border-gray-700 before:opacity-0
                 hover:before:opacity-100">
                  '{item.label}'님의 Library
                </a>
              </li>
            );
          }

          return (
            <li
              key={`${index}-${item.label}`}
              className="relative block 
                before:absolute before:inline-block before:w-6 before:h-6
                before:top-[50%] before:-left-14 before:translate-x-[-50%] before:translate-y-[-50%] before:-rotate-45 before:border-r-2 before:border-b-2 before:border-gray-300">
              <span className=" text-gray-600 font-weight">{item.label}</span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
