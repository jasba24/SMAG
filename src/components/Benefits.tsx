import BenefitCard from "./benefits/BenefitCard"
import ChartComparison from "./benefits/ChartComparison"
import ButtonPrimary from "./benefits/ButtonPrimary"
import "../styles/benefits.css"

const Benefits = () => {
  const beneficios = [
    {
      icon: "savings",
      title: "Ahorro en costes operativos",
      value: "Hasta 40%",
    },
    {
      icon: "timer",
      title: "Reducción del Tiempo de Respuesta",
      value: "-50%",
    },
    { icon: "support_agent", title: "Aumento del Autoservicio", value: "+70%" },
    { icon: "groups", title: "Eficiencia del Equipo", value: "x3" },
  ]

  return (
    <div className="benefits-theme px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-10 md:py-20">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1 gap-8">
        <div className="text-center">
          <h2 className="text-primary dark:text-white text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em]">
            Impacto Medible en tu Negocio
          </h2>
        </div>

        {/* Beneficios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {beneficios.map((b) => (
            <BenefitCard key={b.title} {...b} />
          ))}
        </div>

        {/* Comparación */}
        <div className="flex flex-col lg:flex-row gap-8 items-center pt-10">
          <ChartComparison />
          <div className="flex flex-1 flex-col gap-6 items-center lg:items-start text-center lg:text-left">
            <h3 className="text-primary dark:text-white text-2xl md:text-3xl font-bold">
              Visualiza el Cambio
            </h3>
            <p className="text-text-dark dark:text-gray-300 max-w-md">
              Nuestros dashboards te permiten monitorear el rendimiento en
              tiempo real y ver el impacto directo de la automatización en tus
              métricas clave.
            </p>
            <ButtonPrimary text="Descubre cómo lo logramos" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Benefits
