function CaseListItem() {
  return (
    <li className="grid bg-white border border-gray-100 w-160 p-2 pb-6 rounded-2">
      <a href={void 0} className="inline-block cursor-pointer">
        <figure className="w-full pt-[100%] bg-gray-50" />
        <p className="block text-center text-14 text-gray-700 font-medium mt-4">photo</p>
        <em className="block text-12 text-gray-400 text-center mt-2">2021-23-01</em>
      </a>
    </li>
  );
}

function CaseList() {
  const config = [1, 2, 3, 4];
  return (
    <ul className="flex flex-wrap gap-12">
      {config.map(item => {
        return <CaseListItem key={item} />;
      })}
    </ul>
  );
}

export default CaseList;
