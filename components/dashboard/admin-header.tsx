export default function AdminHeader() {
  return (
    <header className=" sticky top-0 z-50 bg-background border-b">
      <div className=" flex h-16 items-center justify-between px-4">
        <h1 className=" text-xl font-bold ">Admin Dashboard</h1>

        {/* User Navigation */}
        <div className=" w-8 h-8 rounded-full bg-green-400"></div>
      </div>
    </header>
  );
}
