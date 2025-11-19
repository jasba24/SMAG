import { useEffect, useState } from "react"
import CaseSlide from "./successCases/CaseSlide"

type CarouselElement = HTMLDivElement

const SuccessCases = () => {
  const [carousel, setCarousel] = useState<CarouselElement | null>(null)

  useEffect(() => {
    const carouselEl = document.querySelector("#carousel") as CarouselElement
    setCarousel(carouselEl)
  }, [])

  const scroll = (dir: "prev" | "next") => {
    if (!carousel) return
    carousel.scrollBy({
      left: dir === "next" ? carousel.offsetWidth : -carousel.offsetWidth,
      behavior: "smooth",
    })
  }

  const cases = [
    {
      logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBTDMc2bJAeMspA7k73huz2HB3bg2KhxBlX5JrQQZU9Ngvcil9zv4ZiMja8JhY2yb-_C7j6gAT0_LsHt_3rdtL2ycu6iUK-mhkAcNMX3b8QYW9GoBX-1sXIKpUefK0a6wN38gzRIVqj-2yigmCAobqJeyHGsysYK9vwUrnWx1VVrwSSmSZwErGTxdZM6-qq3mttx8ZXL3NDXT6oRg2aZ2a5-Yi6Ed1kbaY80QhxxCoFYGO0BAdqvUqO-SyYGu9Vj9gUK8OX8juBI4MM",
      quote:
        "La automatización de IA ha revolucionado nuestro soporte. Es el socio que no sabíamos que necesitábamos.",
      author: "Elena Rodríguez, COO, Innovatec Solutions",
      stats: [
        {
          icon: "schedule",
          label: "Reducción de Tiempo de Respuesta",
          value: "24 horas → 5 minutos",
        },
        {
          icon: "trending_up",
          label: "Aumento de Eficiencia Operativa",
          value: "+40%",
          highlight: true,
        },
        {
          icon: "savings",
          label: "Reducción de Costos",
          value: "$50,000/mes → $20,000/mes",
        },
      ],
    },
    {
      logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeyQryBvVrtHTy3J4GLrrYx2u8N2VNTk6TAvEQM0-FlUU8QIU4qishL81q9fVv-FIsLdFpJ8pH6poYo27xr0ClynKzHDg6V6_EZsYQwmx2HkjHopXx09VLwJ22wkFW_vWFKkGGGPP_YAK7wYWOJ7NGbpFppSFcB5zJJDuSSEj1c8jsv66Qtr9_IBnwa-lTezrix385ARREJbiqqhjxRIe-au2pNXvtWEva_pkluY09NGqzVCUDdBl1FwH20Q65NTcm-c5jHgku-5fE",
      quote:
        "Un cambio de juego para nuestra logística. Los resultados hablan por sí mismos.",
      author: "David Chen, Director de Operaciones, QuantumLeap",
      stats: [
        {
          icon: "inventory_2",
          label: "Optimización de Inventario",
          value: "95% de precisión",
        },
        {
          icon: "local_shipping",
          label: "Velocidad de Entrega",
          value: "-30% en tiempos",
          highlight: true,
        },
        { icon: "task_alt", label: "Reducción de Errores", value: "5% → 0.5%" },
      ],
    },
  ]

  return (
    <section
      id="casos-exito"
      className="relative flex min-h-screen w-full flex-col items-center justify-center bg-background-dark py-12 md:py-24 px-4 scroll-mt-40"
    >
      <div className="max-w-6xl w-full flex flex-col gap-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
            Transformando Industrias con IA: Nuestros Casos de Éxito
          </h2>
        </div>

        <div className="relative w-full">
          <div
            id="carousel"
            className="flex overflow-x-auto snap-x snap-mandatory [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {cases.map((item, i) => (
              <CaseSlide key={i} data={item} />
            ))}
          </div>

          <button
            onClick={() => scroll("prev")}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-slate-700/50 hover:bg-slate-600 transition-colors text-white p-2 rounded-full hidden md:block"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button
            onClick={() => scroll("next")}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-slate-700/50 hover:bg-slate-600 transition-colors text-white p-2 rounded-full hidden md:block"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>

        <div className="flex justify-center py-6">
          <button className="rounded-full h-14 px-8 bg-primary dark:bg-slate-900 text-white font-bold text-lg hover:bg-accent/90 transition-colors shadow-lg shadow-primary/30">
            Agenda tu Demo Personalizada
          </button>
        </div>
      </div>
    </section>
  )
}

export default SuccessCases
