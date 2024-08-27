
import React from 'react';
import { Mutations } from './services/Mutations';
import { useUserStore } from './stores/UserStore';
import CarDisplay from './components/CarDisplay';

function Home() {
  const lesseeEmail = Mutations.useLesseeEmail();
  const lessorEmail = Mutations.useLessorEmail();
  const { userStatus } = useUserStore();

  React.useEffect(() => {
    if (userStatus.userType === 'Lessor') {
      lessorEmail.mutate(userStatus.email);
    } else {
      lesseeEmail.mutate(userStatus.email);
    }
  }, []);

    return (
      <CarDisplay />
    )
}

export default Home