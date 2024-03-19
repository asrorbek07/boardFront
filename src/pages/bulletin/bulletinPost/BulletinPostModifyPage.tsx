import {BulletinBoardModify, BulletinPostModify} from '~/components';

import { useNavigate } from 'react-router-dom';


export const BulletinPostModifyPage = () => {
  const navigate = useNavigate();
  const handleSaved = () => navigate(`..`);
  const handleCancel = () => navigate(`..`);
  return (
    <BulletinPostModify onSaved={handleSaved} onCancel={handleCancel} />
  );
};

