import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import "./index.css"; // Importa gli stili globali (dove hai messo @tailwind)

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <div className="mx-auto py-6 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold">Contenuto della Pagina</h1>
          <p>Qui caricheremo i prodotti.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
