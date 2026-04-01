import { useState, useEffect } from "react";
import lemaLogo from "@/assets/lema-logo.png";

const getUrlWithParams = (baseUrl: string) => {
  const currentParams = window.location.search;
  if (!currentParams) return baseUrl;
  const separator = baseUrl.includes('?') ? '&' : '?';
  return baseUrl + separator + currentParams.slice(1);
};

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background shadow-md translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-4 md:px-8">
        <a href="#">
          <img src={lemaLogo} alt="Lema Agência Digital" className="h-10 md:h-12" />
        </a>
        <a
          href={getUrlWithParams("https://form.respondi.app/5196P56V")}
          className="hidden sm:inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-secondary transition-colors"
        >
          Quero Meu Diagnóstico Gratuito
        </a>
      </div>
    </header>
  );
};

export default Header;
