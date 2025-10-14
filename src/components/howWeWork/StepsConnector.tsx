const StepsConnector = () => {
  return (
    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0 -translate-y-12">
      <svg
        className="text-slate-300 dark:text-slate-700"
        height="2"
        width="100%"
      >
        <line
          stroke="currentColor"
          strokeDasharray="8 8"
          strokeWidth="2"
          x1="0"
          x2="100%"
          y1="1"
          y2="1"
        />
      </svg>
    </div>
  )
}

export default StepsConnector
