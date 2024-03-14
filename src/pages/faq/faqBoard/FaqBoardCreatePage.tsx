import { NewFaqBoard } from '~/components';

import { useNavigate } from 'react-router-dom';


export const FaqBoardCreatePage = () => {
  const navigate = useNavigate();
  const handleSaved = () => navigate(`..`);
  const handleCancel = () => navigate(`../`);
  return (
    <NewFaqBoard onSaved={handleSaved} onCancel={handleCancel} />
  );
};

