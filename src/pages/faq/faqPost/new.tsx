import { NewFaqPost } from '~/components';

import { useNavigate } from 'react-router-dom';


export const NewFaqPostPage = () => {
  const navigate = useNavigate();
  const handleSaved = () => navigate(`..`);
  const handleCancel = () => navigate(`..`);
  return (
    <NewFaqPost onSaved={handleSaved} onCancel={handleCancel} />
  );
};

