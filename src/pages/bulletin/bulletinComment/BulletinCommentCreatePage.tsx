import { NewFaqPost } from '~/components';

import { useNavigate } from 'react-router-dom';
import {BulletinPostCreate} from "~/components/bulletin/BulletinPost/BulletinPostCreate";
import {BulletinCommentCreate} from "~/components/bulletin/BulletinComment/BulletinCommentCreate";


export const BulletinCommentCreatePage = () => {
  const navigate = useNavigate();
  const handleSaved = () => navigate(`..`);
  const handleCancel = () => navigate(`..`);
  return (
    <BulletinCommentCreate onSaved={handleSaved} onCancel={handleCancel} />
  );
};

