export default function BuscaCep({ endereco }) {
  return (
    <ul>
      <li>Rua: {endereco.logradouro}</li>
      <li>Bairro: {endereco.bairro}</li>
      <li>
        Cidade: {endereco.localidade} - {endereco.uf}
      </li>
    </ul>
  );
}