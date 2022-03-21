import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingtStatus, setCheckingtStatus] = useState(true);

  const { user } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }

    setCheckingtStatus(false);
  }, [user]);

  return { loggedIn, checkingtStatus };
};

export default useAuthStatus;
