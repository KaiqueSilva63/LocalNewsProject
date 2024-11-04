import Logo from "../assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-zinc-800 mt-28 flex flex-col items-center gap-4 w-full">
      <img src={Logo} alt="Logo do LocalNews" className="size-20" />
      <div className="h-[1px] bg-zinc-500 w-[60%]"></div>
      <p className="text-zinc-300">
        © 2024 LocalNews. Todos os direitos reservados.
      </p>
      <div className="flex flex-col items-left pt-2 pb-12 gap-3">
        <p className="text-zinc-300 text-lg font-bold">Membros do grupo:</p>
        <ul className="text-zinc-400 flex flex-col gap-1">
          <li>Gustavo Borges Vasconcelos Silva</li>
          <li>Abner Ananias Filho</li>
          <li>Philip Viana Soares</li>
          <li>Jonatas David Cerqueira da Silva</li>
          <li>Kaique Araújo de Jesus Silva</li>
        </ul>
      </div>
    </footer>
  );
}
