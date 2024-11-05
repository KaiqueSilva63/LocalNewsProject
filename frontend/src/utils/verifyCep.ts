export function verifyCep(cep: string): boolean {
  if (cep.length !== 8) {
    return false;
  }

  if (!/^\d{8}$/.test(cep)) {
    return false;
  }

  const cepNumber = parseInt(cep, 10);

  return cepNumber >= 1000000 && cepNumber <= 99999999;
}
