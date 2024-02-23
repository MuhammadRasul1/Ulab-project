import { useQuery } from "@tanstack/react-query";
import request from "services/httpRequest";

const studentsServices = {
    getStudents: () => request.get("/students").then(res => res?.data),
}  

export const useGetStudents = () => {
    return  useQuery({queryKey: ['students'], queryFn: () => studentsServices.getStudents()});
  };