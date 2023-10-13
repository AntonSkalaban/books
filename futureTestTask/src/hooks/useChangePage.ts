import { useLocation, useNavigate } from 'react-router-dom';

export const useChangePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const changePage = (path: string) => {
    if (location.pathname !== path) navigate(path);
  };

  return { changePage };
};
