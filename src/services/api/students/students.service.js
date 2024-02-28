import { useQuery } from "@tanstack/react-query";
import request from "services/httpRequest";

const studentsServices = {
    getStudents: (params) => request.get("/students", {params}).then(res => res?.data),
}  

export const useGetStudents = (params) => {
    return  useQuery({queryKey: ['students', params], queryFn: () => studentsServices.getStudents(params)});
  };