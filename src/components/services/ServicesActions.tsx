const ServicesActions = () => {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-4 px-4 py-3 max-w-lg justify-center w-full">
      <button className="flex min-w-[120px] max-w-md cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-lg font-bold leading-normal tracking-[0.015em] grow">
        <span className="truncate">Solicitar Demo</span>
      </button>
      <button className="flex min-w-[120px] max-w-md cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-lg font-bold leading-normal tracking-[0.015em] grow">
        <span className="truncate">Contactar</span>
      </button>
    </div>
  )
}

export default ServicesActions
