import {BulletinBoardModify} from '~/components';

import { useNavigate } from 'react-router-dom';


export const BulletinBoardModifyPage = () => {
  const navigate = useNavigate();
  const handleSaved = () => navigate(`..`);
  const handleCancel = () => navigate(`..`);
  return (
    <BulletinBoardModify onSaved={handleSaved} onCancel={handleCancel} />
  );
};

