import Menu from "@components/Menu";
import Search from "@components/Search";
import PatientList from "@components/PatientList";
export default function PatientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-[300px_1fr] bg-gray-100 min-h-[100vh] h-full p-20 gap-40 box-border">
      <nav className=" bg-white rounded-4 overflow-hidden shadow-sm">
        <Menu />
        <Search />
        <PatientList />
      </nav>
      <article className="grid bg-white border-1 border-gray-100 rounded-4 overflow-hidden shadow-sm">{children}</article>
    </div>
  );
}
