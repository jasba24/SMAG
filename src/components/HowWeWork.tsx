import StepCard from "./howWeWork/StepCard"
import StepsConnector from "./howWeWork/StepsConnector"

const steps = [
  {
    id: "01",
    icon: "search",
    title: "Diagnóstico",
    description:
      "Análisis de procesos actuales, identificación de oportunidades de automatización y definición de KPIs.",
  },
  {
    id: "02",
    icon: "rocket_launch",
    title: "Piloto con datos reales",
    description:
      "Prueba controlada, uso de datos reales del cliente y validación de la solución a pequeña escala.",
  },
  {
    id: "03",
    icon: "settings_suggest",
    title: "Implementación",
    description:
      "Despliegue completo de la solución, integración con sistemas existentes y capacitación de equipos.",
  },
  {
    id: "04",
    icon: "trending_up",
    title: "Operación y Mejora",
    description:
      "Monitoreo del rendimiento, optimización basada en IA y soporte continuo para maximizar el ROI.",
  },
]

const HowWeWork = () => {
  return (
    <section id="como-trabajamos" className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark transition-colors duration-300 scroll-mt-40">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-6 lg:px-8 flex flex-1 justify-center py-12 md:py-20">
          <div className="layout-content-container flex flex-col max-w-6xl flex-1">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight text-text-dark dark:text-white">
                Cómo Transformamos tu Operación con IA
              </h2>
              <p className="mt-4 text-lg text-[#4c779a] dark:text-slate-400">
                Nuestro proceso probado en 4 pasos para garantizar el éxito.
              </p>
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <StepsConnector />
              {steps.map((step) => (
                <StepCard key={step.id} {...step} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowWeWork
