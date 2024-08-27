import { Queries } from "@/services/Queries";
import { useUserStore } from "@/stores/UserStore";
import React from "react";
import styled from "styled-components"

const Container = styled.main`
  display: grid;
  min-height: 80dvh;
`;

const CarDisplay = () => {

  const { refetch, data } = Queries.useFetchLessors();
  const setLessors = useUserStore(state => state.setLessors);
  const lessors = useUserStore(state => state.lessors);

  React.useEffect(() => {
    refetch();
    if(data) 
      setLessors(data);
  }, [data]);
  
  React.useEffect(() => {
    console.log("Fetcheado com sucesso: ", lessors);
  },[lessors]);

  return (
    <Container>
      CarDisplay
      
    </Container>
  )
}

export default CarDisplay