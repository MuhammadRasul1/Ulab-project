import { useQuery } from "@tanstack/react-query";
import request from "services/httpRequest";

const mentorsServices = {
    getStudents: () => request.get("/mentors").then(res => res?.data),
}  

export const useGetMentors = () => {
    return  useQuery({queryKey: ['mentors'], queryFn: () => mentorsServices.getStudents()});
  };

