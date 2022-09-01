import { UserProps } from '../../../types/UsersType';
import * as C from '../styles';

const UserDetailsFilter = ({ user }: UserProps) => {
  return (
    <C.FilterContainer>

      <C.Message>
        mensagem
      </C.Message>

      <C.Filter>3 meses</C.Filter>
      <C.Filter>6 meses</C.Filter>
      <C.Filter>1 meses</C.Filter>

      <C.CustomFilter>
        Personalizado
      </C.CustomFilter>

    </C.FilterContainer>
  )
};

export default UserDetailsFilter;