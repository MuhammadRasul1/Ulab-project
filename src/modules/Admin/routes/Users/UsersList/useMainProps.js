import { authStore } from "store/auth.store";


export const useMainProps = () => {
  const handleLogOut = () => {
    authStore.userData = {}
    authStore.logout()
  }

  return {
    mainText: "MAIN TEXT",
    users: [],
    handleLogOut
  };
};
