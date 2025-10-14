import StatCard from "./StatCard"

interface CaseSlideProps {
  data: {
    logo: string
    quote: string
    author: string
    stats: { icon: string; label: string; value: string; highlight?: boolean }[]
  }
}

const CaseSlide = ({ data }: CaseSlideProps) => {
  return (
    <div className="flex-shrink-0 w-full snap-center p-2">
      <div className="flex flex-col md:flex-row gap-8 rounded-xl bg-slate-900/50 p-6 md:p-8 border border-slate-800">
        <div className="flex flex-col flex-1 justify-between gap-6">
          <div>
            <img alt="Company Logo" className="h-10 mb-6" src={data.logo} />
            <blockquote className="text-xl italic font-medium text-slate-300">
              “{data.quote}”
            </blockquote>
            <p className="text-slate-400 mt-4">- {data.author}</p>
          </div>
          <div className="flex justify-center md:justify-start">
            <button className="rounded-lg h-12 px-5 bg-primary text-slate-50 font-bold hover:bg-primary/90 transition-colors">
              Descubre la Historia Completa
            </button>
          </div>
        </div>

        <div className="flex-1 space-y-4">
          {data.stats.map((stat, i) => (
            <StatCard key={i} {...stat} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CaseSlide
