import { Footer } from "../components/footer";
import { Header } from "../components/header";

export function About() {
  return (
    <div className="flex items-center flex-col w-full">
      <Header />
      <section className="flex flex-col items-center justify-center p-10 bg-zinc-300 mt-24 w-[80%] rounded-lg gap-4">
        <h1 className="font-bold text-xl">Sobre Nós</h1>
        <span>
          Na LocalNews, acreditamos que as notícias mais importantes são aquelas
          que fazem diferença na sua vida cotidiana. Por isso, criamos uma
          plataforma que traz as últimas notícias de acordo com a sua
          localização, mantendo você informado sobre tudo o que acontece ao seu
          redor, desde eventos locais até atualizações importantes de segurança
          e mudanças na sua comunidade.
        </span>
        <span>
          Fundada com o objetivo de aproximar as pessoas das informações que
          realmente importam, nossa missão é conectar você com o que está
          acontecendo na sua cidade, bairro e região. Utilizamos tecnologia
          avançada para garantir que você receba notícias em tempo real, com
          precisão e relevância, de forma rápida e acessível.
        </span>
        <span>
          Fundada com o objetivo de aproximar as pessoas das informações que
          realmente importam, nossa missão é conectar você com o que está
          acontecendo na sua cidade, bairro e região. Utilizamos tecnologia
          avançada para garantir que você receba notícias em tempo real, com
          precisão e relevância, de forma rápida e acessível.
        </span>
        <div>
          <h2 className="font-bold ">Nossa Visão</h2>
          <span>
            Acreditamos em um futuro onde as notícias locais são mais acessíveis
            e envolventes, ajudando as pessoas a se conectarem com suas
            comunidades e tomarem decisões mais informadas.
          </span>
        </div>
        <div>
          <h2 className="font-bold ">Diferencial</h2>
          <span>
            O que nos diferencia é a capacidade de fornecer conteúdo altamente
            personalizado e relevante. Nossa plataforma é projetada para
            entender suas preferências e oferecer notícias geolocalizadas que
            importam para você, entregando a informação certa, no momento certo.
          </span>
        </div>
        <div>
          <h2 className="font-bold ">Junte-se a Nós</h2>
          <span>
            Quer saber o que está acontecendo agora perto de você? Cadastre-se e
            fique por dentro das notícias mais recentes de sua localidade! Nós
            conectamos você ao mundo ao seu redor.
          </span>
        </div>
      </section>
      <Footer />
    </div>
  );
}
