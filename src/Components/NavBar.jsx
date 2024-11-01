import React, { useEffect, useRef, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import image from "../../public/logo.ico";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pathname, setPathname] = useState("");
  const navRef = useRef();
  const navigation = [
    { name: "A Ordem", href: "/AOrdem" },
    { name: "Actividades", href: "#" },
    { name: "Orgãos", href: "#" },
    { name: "Biblioteca", href: "/Biblioteca" },
    { name: "Regulamentos", href: "/Regulamentos" },
    { name: "Advogados", href: "#" },
  ];

  useEffect(() => {
    setPathname(location.pathname);
    navRef.current?.scrollIntoView({ behavior: "smooth" });
    //paths.map((value, index) => value === pathname  ? document.title = `${titleText[index]} | Lucas Energy` : false)
  }, [navRef]);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
       ref={navRef}
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1 justify-start">
          <Link to="/" className="-ml-12 lg:-m-1.5 p-1.5">
            <span className="sr-only">Ordem dos Advogados de Angola</span>
            <img
              alt="Ordem dos Advogados de Angola"
              src={image}
              className="h-20 lg:h-20 lg:m-5 m-12  w-auto"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 pr-5 text-gray-700"
          >
            <span className="sr-only">menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 ml-20 py-4 border-b px-2 border-solid border-gray-300/70">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-md raleway-bold font-bold leading-6 text-gray-900"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-center ml-36">
          <Link
            to="/Sessao"
            className="text-sm font-semibold leading-6 text-primary raleway-bold px-4 py-2 border-[1.8px] border-solid border-primary rounded-full hover:bg-primary hover:text-gray-50 duration-200"
          >
            Area do Advogado <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed bg-[#eee8e3] inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-ml-12 lg:-m-1.5 p-1.5">
              <span className="sr-only">Ordem dos Advogados de Angola</span>
              <img alt="" src={image}
              className="h-20 lg:h-20 lg:m-5 m-12  w-auto" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">fechar</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  to="/Sessao"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Area do Advogado
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
