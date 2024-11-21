import { Mail, Phone } from "lucide-react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

export function Contact() {
  return (
    <div className="flex items-center flex-col w-full">
      <Header />
      <main className="flex flex-col items-center p-10 bg-zinc-300 mt-24 w-[80%] rounded-lg justify-between gap-12">
        <div className="flex flex-col items-center justify-center gap-10">
          <h1 className="font-bold text-xl">Contato</h1>
          <div className="flex justify-center items-center gap-10">
            <div className="flex flex-col justify-center items-start">
              <Mail className="text-blue-400" />
              <h2 className="text-lg font-bold text-zinc-700">Email</h2>
              <span className="italic">localnews@gmail.com</span>
            </div>
            <div className="flex flex-col justify-center items-start">
              <Phone className="text-blue-400" />
              <h2 className="text-lg font-bold text-zinc-700">Telefone</h2>
              <span className="italic">+55 11 95218-0600</span>
            </div>
          </div>
        </div>
        <span className="italic font-bold">
          *Todos os dados acima são fictícios*
        </span>
      </main>
      <Footer />
    </div>
  );
}
