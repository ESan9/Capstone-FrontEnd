export default function Footer() {
  return (
    <footer className="border-gray-200">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <a
            href="#"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap hover:underline">
              Segnali
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                La nostra storia
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Contatti
              </a>
            </li>

            <li>
              <a href="#" className="hover:underline">
                Torna in alto
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 sm:mx-auto lg:my-8 border-gray-200" />
        <span className="block text-sm text-center">
          © {new Date().getFullYear()}{" "}
          <a href="#" className="hover:underline">
            Segnali
          </a>
          . Tutti i diritti riservati.
        </span>
      </div>
    </footer>
  );
}
