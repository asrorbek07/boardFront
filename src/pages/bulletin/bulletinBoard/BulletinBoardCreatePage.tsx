import {NewBulletinBoard, NewFaqBoard} from '~/components';

import { useNavigate } from 'react-router-dom';


export const BulletinBoardCreatePage = () => {
  const navigate = useNavigate();
  const handleSaved = () => navigate(`..`);
  const handleCancel = () => navigate(`../`);
  return (
    <NewBulletinBoard onSaved={handleSaved} onCancel={handleCancel} />
  );
};

