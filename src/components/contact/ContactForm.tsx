import { useState } from "react"

const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const proyecto = {
      name,
      email,
      company,
      message
    }
    localStorage.setItem(company, JSON.stringify(proyecto))
    setName('')
    setEmail('')
    setCompany('')
    setMessage('')
    alert('Consulta enviada. Nos pondremos en contacto contigo pronto.')
  }
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] text-text-dark dark:text-white">
          Hablemos de tu proyecto
        </h1>
        <p className="text-base leading-normal text-[#4c779a] dark:text-slate-400">
          Descubre cómo nuestra IA puede automatizar y optimizar tus servicios.
          Completa el formulario y te contactaremos a la brevedad.
        </p>
      </div>

      <form className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="flex flex-col flex-1">
            <label
              htmlFor="nombre"
              className="pb-2 text-base font-medium text-text-dark dark:text-white"
            >
              Nombre
            </label>
            <input
              id="nombre"
              type="text"
              placeholder="Nombre completo"
              required
              className="h-12 rounded-lg border border-[#cfdde7] dark:border-slate-700 bg-background-light dark:bg-background-dark p-3 text-base text-text-dark dark:text-white placeholder:text-[#4c779a] dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="flex flex-col flex-1">
            <label
              htmlFor="email"
              className="pb-2 text-base font-medium text-text-dark dark:text-white"
            >
              Correo electrónico
            </label>
            <input
              id="email"
              type="email"
              placeholder="nombre@ejemplo.com"
              required
              className="h-12 rounded-lg border border-[#cfdde7] dark:border-slate-700 bg-background-light dark:bg-background-dark p-3 text-base text-text-dark dark:text-white placeholder:text-[#4c779a] dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="flex flex-col flex-1">
            <label
              htmlFor="empresa"
              className="pb-2 text-base font-medium text-text-dark dark:text-white"
            >
              Empresa
            </label>
            <input
              id="empresa"
              type="text"
              placeholder="Nombre de la empresa"
              required
              className="h-12 rounded-lg border border-[#cfdde7] dark:border-slate-700 bg-background-light dark:bg-background-dark p-3 text-base text-text-dark dark:text-white placeholder:text-[#4c779a] dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
              onChange={(e) => setCompany(e.target.value)}
              value={company}
            />
          </div>
        </div>

        <div className="flex sm:flex-col">
          <label
            htmlFor="mensaje"
            className="pb-2 text-base font-medium text-text-dark dark:text-white"
          >
            Mensaje (opcional)
          </label>
          <textarea
            id="mensaje"
            placeholder="Escribe tu mensaje aquí..."
            className="min-h-36 rounded-lg border border-[#cfdde7] dark:border-slate-700 bg-background-light dark:bg-background-dark p-3 text-base text-text-dark dark:text-white placeholder:text-[#4c779a] dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
        </div>

        <button
          type="submit"
          className="flex items-center justify-center rounded-lg bg-slate-900 px-6 py-3 text-base font-bold text-white shadow-sm hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background-dark cursor-pointer"
          onClick={handleSubmit}
        >
          Enviar consulta
        </button>
      </form>
    </div>
  )
}

export default ContactForm
