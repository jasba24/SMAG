interface StatCardProps {
  icon: string
  label: string
  value: string
  highlight?: boolean
}

const StatCard = ({ icon, label, value, highlight }: StatCardProps) => {
  return (
    <div className="flex flex-col gap-2 rounded-lg p-4 border border-slate-800 bg-slate-900">
      <p className="text-slate-400 text-sm font-medium flex items-center gap-2">
        <span className="material-symbols-outlined text-primary">{icon}</span>
        {label}
      </p>
      <p
        className={`text-2xl font-bold leading-tight ${
          highlight ? "text-primary" : "text-slate-50"
        }`}
      >
        {value}
      </p>
    </div>
  )
}

export default StatCard
