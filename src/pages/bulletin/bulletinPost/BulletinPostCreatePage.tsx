import { NewFaqPost } from '~/components';

import { useNavigate } from 'react-router-dom';
import {BulletinPostCreate} from "~/components/bulletin/BulletinPost/BulletinPostCreate";


export const BulletinPostCreatePage = () => {
  const navigate = useNavigate();
  const handleSaved = () => navigate(`..`);
  const handleCancel = () => navigate(`..`);
  return (
    <BulletinPostCreate onSaved={handleSaved} onCancel={handleCancel} />
  );
};

