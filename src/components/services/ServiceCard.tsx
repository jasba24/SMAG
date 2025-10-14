interface ServiceCardProps {
  icon: string
  title: string
  description: string
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="flex flex-1 flex-col gap-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 text-center items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="text-primary p-3 bg-primary/10 rounded-full">
        <span className="material-symbols-outlined text-4xl">{icon}</span>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight">
          {title}
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-normal">
          {description}
        </p>
      </div>

      <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-5 bg-accent-green text-white text-base font-bold leading-normal tracking-[0.015em] mt-auto">
        <span className="truncate">Ver más</span>
      </button>
    </div>
  )
}

export default ServiceCard
