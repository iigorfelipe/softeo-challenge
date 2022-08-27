import * as C from "./styles";

const Header = () => {
  return (
    <C.Container>

      <C.Details>
        <span>00 usuários</span>
        <span>00 parcelas</span>
      </C.Details>

      <span>Cálculo detalhado</span>      

      <C.Values>
        <span>R$ 00.00,00</span>
        <span>R$ 00.00,00</span>
      </C.Values>

    </C.Container>
  )
};

export default Header;
