function HeroDescription() {
  return (
    <div className="flex flex-col gap-6 @[864px]:w-1/2">
      <div className="flex flex-col gap-4 text-left">
        <h1 className="text-[#0d151b] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
          Automatiza tus servicios con IA reduce costos y mejora la
          experiencia del cliente.
        </h1>
        <h2 className="text-[#0d151b] dark:text-accent-gray text-base font-normal leading-normal @[480px]:text-lg @[480px]:font-normal @[480px]:leading-normal">
          Implementaciones omnicanal en semanas. Integración con Salesforce,
          Zendesk y más.
        </h2>
      </div>
      <div className="flex flex-wrap gap-4">
        <button className="flex min-w-[84px] max-w-[480px] items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary dark:bg-slate-900 text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-slate-800 transition-colors">
          <span className="truncate">Solicitar demo</span>
        </button>
        <button className="flex min-w-[84px] max-w-[480px] items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-slate-200 dark:bg-slate-800 text-[#0d151b] dark:text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors">
          <span className="truncate">Calcular ROI</span>
        </button>
      </div>
    </div>
  )
}

export default HeroDescription
