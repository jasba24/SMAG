const ChartComparison = () => (
  <div className="flex flex-1 flex-col gap-4 rounded-xl p-6 border border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark shadow-sm w-full">
    <p className="text-text-dark dark:text-white text-xl font-bold">
      Resultados Antes y Después
    </p>

    <div className="grid min-h-[220px] grid-flow-col gap-8 grid-rows-[1fr_auto] items-end justify-items-center px-4 pt-4">
      <div className="relative w-full h-full flex items-end">
        <div
          className="bg-gray-300 dark:bg-gray-600 w-full rounded-t-lg"
          style={{ height: "80%" }}
        ></div>
      </div>
      <div className="relative w-full h-full flex items-end">
        <div
          className="bg-accent-green w-full rounded-t-lg"
          style={{ height: "40%" }}
        ></div>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-8 text-center -mt-2">
      <p className="text-text-dark dark:text-white text-sm font-semibold tracking-[0.015em]">
        Antes
      </p>
      <p className="text-text-dark dark:text-white text-sm font-semibold tracking-[0.015em]">
        Después
      </p>
    </div>
  </div>
)

export default ChartComparison
