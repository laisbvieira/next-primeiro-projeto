// Importação do React e outros módulos
import Title from '../src/components/Title';
import Link from '../src/components/Link';
import Footer from '../src/components/patterns/Footer';


// Componente Home
export default function Home() {
  return (
    <div>
      <Title as="h1">Alura Cases</Title>
      <Link href="/faq">
        Ir para a página do FAQ
      </Link>
      <Footer />

    </div>
  );
}
