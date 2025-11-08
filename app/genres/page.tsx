// By default RSC
export default function GenresPage() {
  console.log("Server Component Here!!");
  // Example 04
  return (
    <div className="flex flex-col min-h-screen justify-center items-center p-6 gap-6">
      <h1 className="text-primary font-bold text-3xl capitalize">
        This is my first heading as h1
      </h1>

      <div className="flex gap-4 text-xs text-center">
        <div className="w-40 h-40 p-4 bg-primary">Background Primary</div>

        <div className="w-40 h-40 p-4 border-primary border">
          Border Primary
        </div>

        <div className="w-40 h-40 outline-4 outline-primary">
          Outline Primary
        </div>

        <div className="w-40 h-40 relative border border-primary">
          <h1 className="text-primary font-bold text-lg">RGBA</h1>
          <div className="w-20 h-20 bg-secondary absolute top-2 right-3"></div>
        </div>

        <div className="w-40 h-40 relative bg-accent">Named Colors</div>
      </div>
    </div>
  );

  // Example 03 (Grid)
  return (
    <div className="flex min-h-screen justify-center items-center bg-amber-200 p-6">
      {/* Cards Container */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="w-full h-40 bg-red-200">Div 01</div>
        <div className="w-full h-40 bg-green-200">Div 02</div>
        <div className="w-full h-40 bg-purple-200">Div 03</div>
        <div className="w-full h-40 bg-orange-200">Div 04</div>
        <div className="w-full h-40 bg-pink-200">Div 05</div>
        <div className="w-full h-40 bg-cyan-200">Div 06</div>
        <div className="w-full h-40 bg-blue-200">Div 07</div>
        <div className="w-full h-40 bg-sky-200">Div 08</div>
      </div>
    </div>
  );
  // Example 02 (Flex 1)
  return (
    <div className="flex flex-col md:flex-row bg-purple-300 min-h-screen">
      <div className="flex-1 p-6 bg-green-200 text-center">Div 01</div>
      <div className="flex-3 p-6 bg-red-200 text-center">Div 02</div>
      <div className="flex-1 p-6 bg-blue-200 text-center">Div 03</div>
      <div className="flex-4 p-6 bg-orange-200 text-center">Div 04</div>
    </div>
  );

  // Example 01 (Flex Box)
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-purple-300 min-h-screen p-6 gap-6">
      <div className="h-20 w-30 p-6 bg-green-200 rounded text-center">
        Div 01
      </div>
      <div className="h-20 w-30 p-6 bg-red-200 rounded text-center">Div 02</div>
      <div className="h-20 w-30 p-6 bg-orange-200 rounded text-center">
        Div 03
      </div>
      <div className="h-20 w-30 p-6 bg-yellow-200 rounded text-center">
        Div 04
      </div>
    </div>
  );
}
