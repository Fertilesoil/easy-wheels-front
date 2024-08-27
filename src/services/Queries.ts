import { useQuery } from "@tanstack/react-query"
import { Api } from "./Api";


const useFetchLessors = () => {
  return useQuery({
    queryKey: ['lessors'],
    queryFn: Api.allLessors,
    enabled: false,
    retry: false
  });
}

const useFetchLessees = () => {
  return useQuery({
    queryKey: ['lessees'],
    queryFn: Api.allLessees,
    enabled: false,
    retry: false
  });
}

// const useFetchIndividualLessor = (id: string) => {
//   return useQuery({
//     queryKey: ['lessors', id], 
//     queryFn: () => Api.individualLessor(id),
//     enabled: false,
//     retry: false
//   });
// }

// const useFetchIndividualLessee = (id: string) => {
//   return useQuery({
//     queryKey: ['lessees', id], 
//     queryFn: () => Api.individualLessee(id),
//     enabled: false,
//     retry: false
//   });
// }

export const Queries = {
  useFetchLessors,
  useFetchLessees,
  // useFetchIndividualLessor,
  // useFetchIndividualLessee
}