import ServicesHeader from "./services/ServicesHeader"
import ServiceCard from "./services/ServiceCard"
import ServicesActions from "./services/ServicesActions"

const services = [
  {
    icon: "chat",
    title: "Chatbots Conversacionales",
    description:
      "Ofrecemos autoservicio y atención ininterrumpida 24/7 para tus clientes.",
  },
  {
    icon: "hub",
    title: "RPA & Orquestación",
    description:
      "Automatización eficiente de procesos administrativos y tareas repetitivas.",
  },
  {
    icon: "insights",
    title: "IA para Ventas",
    description:
      "Calificación y priorización automática de leads para maximizar conversiones.",
  },
  {
    icon: "shield",
    title: "Servicios Gestionados",
    description:
      "Soporte experto, tuning de rendimiento y mejora continua de tus sistemas.",
  },
]

const Services = () => {
  return (
    <section
      id="servicios"
      className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark transition-colors duration-300"
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-10 md:py-20">
          <div className="layout-content-container flex flex-col max-w-6xl flex-1 gap-12">
            <ServicesHeader />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <ServicesActions />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
