export const useSidebarProps = () => {

  const auth = JSON.parse(localStorage.getItem("auth"));

  return { 
    auth
   };

};
