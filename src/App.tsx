
import React from 'react';
import { Mutations } from './services/Mutations'
import { Queries } from './services/Queries';

function App() {
  const { isPending, isSuccess, mutate } = Mutations.useLoginMutation();
  const { refetch } = Queries.useFetchLessors();

  const { refetch: retomar } = Queries.useFetchLessees();

  const { mutate: deslogar } = Mutations.useLogoutMutation();

  const handleFetchLessors = async () => {
    const result = await refetch();
    console.log(result.data);
  };

  const handleFetchLessees = async () => {
    const result = await retomar();
    console.log(result.data);
  };

  const handleLogout = () => {
    deslogar({ email: "fernandodias@gmail.com" });
  };

  const handleLogin = () => {
    mutate({ email: 'fernandodias@gmail.com', password: 'Senhasegura123!' });
  };

  // if (isPending) {
  //   return <p>Loading data ...</p>
  // }

  return (
    <>
      <p>Data fetched</p>
      <button onClick={handleFetchLessors}>Atualizar Lessors</button>
      <button onClick={handleFetchLessees}>Atualizar Lessees</button>
      <button onClick={handleLogout}>Deslogar</button>
      <button onClick={handleLogin}>Logar</button>

      {
        isSuccess && <div>
          <p>Usuário logado</p>
        </div>
      }
    </>
  )
}

export default App
