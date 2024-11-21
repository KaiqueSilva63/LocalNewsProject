import { X } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "./ui/dialog";
import { verifyCep } from "../utils/verifyCep";
import { getCep } from "../api/getCep";

export function CepModal() {
  const [cep, setCep] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);
  const [failMessage, setFailMessage] = useState(false);
  const [successRemove, setSuccessRemove] = useState(false);
  const [failRemove, setFailRemove] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("cep")) setSuccessMessage(true);
  }, []);

  function handleMessage(
    successMessage: boolean,
    failMessage: boolean,
    successRemove: boolean,
    failRemove: boolean
  ) {
    setSuccessMessage(successMessage);
    setFailMessage(failMessage);
    setSuccessRemove(successRemove);
    setFailRemove(failRemove);
  }

  async function handleSubmitCep(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (verifyCep(cep)) {
      await getCep(cep).then((res) => {
        if (res.data.localidade === undefined) {
          handleMessage(false, true, false, false);
        } else {
          localStorage.setItem("cep", res.data.localidade);
          setCep("");
          handleMessage(true, false, false, false);
        }
      });
    } else {
      handleMessage(false, true, false, false);
    }
  }

  function handleRemoveButton() {
    if (localStorage.getItem("cep")) {
      handleMessage(false, false, true, false);
      localStorage.removeItem("cep");
    } else {
      handleMessage(false, false, false, true);
    }
  }

  return (
    <DialogContent className="flex justify-center z-50 fixed left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 ">
      <div className="bg-zinc-300 flex items-center justify-center rounded-md shadow-md flex-col p-4 gap-5">
        <div className="flex items-center justify-between w-full">
          <DialogTitle>Cadastrar CEP</DialogTitle>
          <DialogClose>
            <X />
          </DialogClose>
        </div>
        <DialogDescription>
          Digite seu CEP para buscar as notícias locais desde a inicialização do
          site
        </DialogDescription>
        <form className="flex flex-col w-full gap-4" onSubmit={handleSubmitCep}>
          <div className="flex flex-col w-full">
            <label htmlFor="cep">Qual seu CEP?</label>
            <input
              type="text"
              id="cep"
              placeholder="00000000"
              className="p-1.5 rounded-md"
              onChange={(event) =>
                setCep(event.target.value.replace(/[^0-9.]/g, ""))
              }
              value={cep}
              autoFocus
            />
          </div>
          <button
            className="flex items-center justify-center bg-zinc-500 p-1.5 rounded-md"
            type="submit"
          >
            Cadastrar
          </button>

          <button
            className="flex items-center justify-center bg-red-800 p-1.5 rounded-md"
            type="button"
            onClick={handleRemoveButton}
          >
            Remover CEP
          </button>
        </form>
        {successMessage && (
          <p className="text-green-800">CEP cadastrado com successo</p>
        )}
        {successRemove && (
          <p className="text-green-800">CEP removido com successo</p>
        )}
        {failMessage && (
          <p className="text-red-800">CEP invalido! Tente novamente</p>
        )}
        {failRemove && (
          <p className="text-red-800">Não há nenhum CEP cadastrado</p>
        )}
      </div>
    </DialogContent>
  );
}
