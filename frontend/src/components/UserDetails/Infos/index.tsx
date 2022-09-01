import { UserProps } from '../../../types/UsersType';
import * as C from '../styles';

const UserDetailsInfos = ({ user }: UserProps): JSX.Element => {
  return (
    <C.Container>

      <C.Infos>
        informaçãoes do usuário
      </C.Infos>

      <C.Details>
        valores
      </C.Details>
  
    </C.Container>
  )
};

export default UserDetailsInfos;
