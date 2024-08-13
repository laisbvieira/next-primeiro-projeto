import Link from '../src/components/Link';

export default function Home() {
  return (
  <>
    <div>
      <h1>Página Inicial</h1>
    </div>
    
    <div>
        <Link href='/faq'>
          Ir para a página do FAQ
        </Link>
    </div>
  </>
  );
}
