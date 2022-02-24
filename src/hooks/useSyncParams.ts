import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useSyncParams = (name: string, value: string, url: string = '/?') => {
  const navigate = useNavigate();
  const { search } = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(search);
    params.set(name, value);
    navigate(`${url}${params.toString()}`);
  }, [navigate, search, name, value, url]);
};

export default useSyncParams;
