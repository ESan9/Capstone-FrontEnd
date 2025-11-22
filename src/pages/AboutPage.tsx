export default function AboutPage() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <p className="text-base font-semibold leading-7 text-gray-600">
            La nostra missione
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Artigianato, Passione e Design.
          </h1>
          <div className="mt-10 grid max-w-xl grid-cols-1 text-base leading-7 text-gray-700 lg:max-w-none">
            <div>
              <p>
                Segnali nasce dall'idea di unire la tradizione artigianale
                italiana con un design moderno e funzionale. Ogni prodotto che
                trovi nel nostro catalogo è stato creato con la massima cura per
                i dettagli.
              </p>
              <p className="mt-8">
                Non siamo solo un negozio, ma un punto di incontro per chi cerca
                qualità e unicità.
              </p>
            </div>
            <div>
              <p className="mt-8 font-semibold text-gray-900">
                Grazie per aver scelto Segnali.
              </p>
              <p className="mt-8 font-semibold text-gray-900">
                Gian Mario Sanna.
              </p>
            </div>
          </div>

          {/* Immagine Decorativa */}
          <div className="mt-16 aspect-[16/9] w-full overflow-hidden rounded-xl bg-gray-100 shadow-lg">
            <img
              src="src\assets\1000007128.jpg"
              alt="Il nostro laboratorio"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
