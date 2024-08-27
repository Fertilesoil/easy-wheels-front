
import { useMenuStore } from '@/stores/MenuStore';
import { useUserStore } from '@/stores/UserStore';
import { SquareX } from 'lucide-react';
import { Dropdown, Icon, Row, Section, SectionTitle, Tag, UserInfo } from './DropdownMenu';

const DropdownMenu = () => {

  const { isOpen, setOpen } = useMenuStore();
  const userInfo = useUserStore(state => state.userInfo);

  return (
    <Dropdown $isOpen={isOpen}>
      <UserInfo>
        <Icon onMouseDown={setOpen}>
          <SquareX size={30} />
        </Icon>

        {userInfo &&
          <div>
            <Section>
              <SectionTitle>Informações pessoais</SectionTitle>
              <Row><strong>Nome: </strong>{userInfo.FirstName + " " + userInfo.LastName}</Row>
              <Row><strong>Nacionalidade: </strong>{userInfo.Nationality}</Row>
              <Row><strong>Profissão: </strong>{userInfo.Profession}</Row>
              <Row><strong>Email: </strong>{userInfo.Email}</Row>
            </Section>
            <Section>
              <SectionTitle>Endereço</SectionTitle>
              <Row>
                <Row><strong>Cidade: </strong>{userInfo.City}</Row>
                <Row><strong>Rua: </strong>{userInfo.Street + " " + userInfo.HouseNumber}</Row>
                <Row><strong>Cep: </strong>{userInfo.PostalCode}</Row>
                <Row><strong>Estado: </strong>{userInfo.State}</Row>
              </Row>
            </Section>
            <Tag>{userInfo.UserType === 'Lessor' ? "Locador(a)" : "Locatário(a)"}</Tag>
          </div>
        }
      </UserInfo>
    </Dropdown>
  )
}

export default DropdownMenu