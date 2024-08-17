
import React from 'react';
import './App.css'
import { Mutations } from './services/Mutations'
import { Queries } from './services/Queries';

function App() {
  const { isPending, isSuccess, mutate } = Mutations.useLoginMutation();
  const { refetch } = Queries.useFetchLessors();

  const { refetch: retomar } = Queries.useFetchLessees();

  const handleFetchLessors = async () => {
    const result = await refetch();
    console.log(result.data);
  };
  
  const handleFetchLessees = async () => {
    const result = await retomar();
    console.log(result.data);
  };

  React.useEffect(() => {
    mutate({ email: 'fernandodias@gmail.com', password: 'Senhasegura123!' });
  }, []);

  if (isPending) {
    return <p>Loading data ...</p>
  }

  if (isSuccess) {
    return (
      <p>
        Data fetched

        <button onClick={handleFetchLessors}>Atualizar Lessors</button>
        <button onClick={handleFetchLessees}>Atualizar Lessees</button>
      </p>
    )
  }
}

export default App
