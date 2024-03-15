import { NewFaqPost } from '~/components';

import { useNavigate } from 'react-router-dom';
import {NewBulletinPost} from "~/components/bulletin/BulletinPost/NewBulletinPost";


export const NewBulletinPostPage = () => {
  const navigate = useNavigate();
  const handleSaved = () => navigate(`..`);
  const handleCancel = () => navigate(`..`);
  return (
    <NewBulletinPost onSaved={handleSaved} onCancel={handleCancel} />
  );
};

