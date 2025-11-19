import ContactForm from "./contact/ContactForm"
import ContactInfo from "./contact/ContactInfo"
import ContactClients from "./contact/ContactClients"

const Contact = () => {
  return (
    <section id="contacto" className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark transition-colors duration-300 scroll-mt-40">
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center py-10 lg:py-20">
          <div className="layout-content-container w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              <ContactForm />
              <div className="flex flex-col justify-between gap-12 lg:pl-10">
                <ContactInfo />
                <ContactClients />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
