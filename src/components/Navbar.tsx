import logo from "../assets/logo.jpg";

const Navbar = () => {
  return (
    <header className="shadow-md sticky top-0 z-50 bg-primary">
      <nav className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-4 py-2">
        <div className="flex items-center gap-2">
          <a href="/">
            <img src={logo} alt="SMAG Logo" className="h-24 my-2" />
          </a>
        </div>

        <div className="flex flex-wrap gap-2 md:gap-4">
          {[
            { href: "#beneficios", icon: "savings", label: "Beneficios" },
            { href: "#casos-exito", icon: "star", label: "Casos de Éxito" },
            { href: "#como-trabajamos", icon: "rocket_launch", label: "Cómo Trabajamos" },
            { href: "#servicios", icon: "insights", label: "Servicios" },
            { href: "#contacto", icon: "mail", label: "Contacto" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-1 px-3 py-2 rounded-lg text-white font-semibold hover:bg-primary/80 transition"
            >
              <span className="material-symbols-outlined text-lg">{item.icon}</span>
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
