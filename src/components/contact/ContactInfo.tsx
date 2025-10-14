const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-8 rounded-xl bg-white dark:bg-slate-900/50 p-8 shadow-sm border border-slate-200 dark:border-slate-800">
      <h3 className="text-2xl font-bold text-center text-text-dark dark:text-white">
        ¿Prefieres hablar directamente?
      </h3>
      <a
        href="#"
        className="w-full flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-xl font-bold text-white shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary/50"
      >
        Habla con un especialista
      </a>
      <div className="flex flex-col gap-4 text-center">
        <div className="flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-primary">email</span>
          <a
            href="mailto:ventas@ia-automation.com"
            className="text-[#4c779a] dark:text-slate-400 hover:text-primary dark:hover:text-primary"
          >
            consultingsmag@gmail.com
          </a>
        </div>
        <div className="flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-primary">phone</span>
          <a
            href="tel:+1234567890"
            className="text-[#4c779a] dark:text-slate-400 hover:text-primary dark:hover:text-primary"
          >
            +57 321 7986938
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
