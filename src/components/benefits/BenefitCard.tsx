type BenefitCardProps = {
  icon: string
  title: string
  value: string | number
}

const BenefitCard = ({ icon, title, value }: BenefitCardProps) => (
  <div className="flex flex-col gap-4 rounded-xl p-6 border border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark shadow-sm hover:shadow-lg transition-shadow duration-300">
    <div className="flex items-center gap-4">
      <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full">
        <span className="material-symbols-outlined text-primary dark:text-accent-green text-3xl">
          {icon}
        </span>
      </div>
    </div>
    <p className="text-text-dark dark:text-gray-300 text-lg font-semibold leading-normal">
      {title}
    </p>
    <p className="text-accent-green text-4xl font-bold leading-tight">
      {value}
    </p>
  </div>
)

export default BenefitCard
