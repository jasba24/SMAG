interface StepCardProps {
  id: string
  icon: string
  title: string
  description: string
}

const StepCard = ({ id, icon, title, description }: StepCardProps) => {
  return (
    <div className="relative flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800/50 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 z-10">
      <div className="absolute -top-6 flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white font-bold text-xl ring-8 ring-background-light dark:ring-background-dark">
        {id}
      </div>

      <span className="material-symbols-outlined text-5xl text-primary mt-10 mb-4">
        {icon}
      </span>

      <h3 className="text-lg font-bold text-text-dark dark:text-white">
        {title}
      </h3>

      <p className="mt-2 text-sm text-[#4c779a] dark:text-slate-400">
        {description}
      </p>
    </div>
  )
}

export default StepCard
