import { NavButton } from '../Buttons/NavButton';
import { useUserStore } from "@/stores/UserStore";
import { Mutations } from "@/services/Mutations";
import { UserCog } from "lucide-react";
import { Header, Nav, NavOptions, Title, Icon } from '@/components/Navbar/NavBar';
import { useMenuStore } from '@/stores/MenuStore';

const Navbar = () => {
  const userStatus = useUserStore(state => state.userStatus);
  const logoutMutation = Mutations.useLogoutMutation();
  const { setOpen } = useMenuStore();

  return (
    <Header>
      <Nav>
        <Title>EasyWheels</Title>

        <NavOptions>
          <NavButton
            to={logoutMutation.isSuccess ? 'login' : ''}
            onClick={() => {
              return logoutMutation.mutate({ email: userStatus.email });
            }}
          >
            {logoutMutation.isPending ? 'Logout...' : 'Logout'}
          </NavButton>

          <Icon onMouseDown={setOpen}>
            <UserCog />
          </Icon>
        </NavOptions>

      </Nav>
    </Header>
  )
}

export default Navbar