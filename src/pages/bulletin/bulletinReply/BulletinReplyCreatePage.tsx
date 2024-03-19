import { NewFaqPost } from '~/components';

import { useNavigate } from 'react-router-dom';
import {BulletinPostCreate} from "~/components/bulletin/BulletinPost/BulletinPostCreate";
import {BulletinCommentCreate} from "~/components/bulletin/BulletinComment/BulletinCommentCreate";
import {BulletinReplyCreate} from "~/components/bulletin/BulletinReply/BulletinReplyCreate";


export const BulletinReplyCreatePage = () => {
  const navigate = useNavigate();
  const handleSaved = () => navigate(`..`);
  const handleCancel = () => navigate(`..`);
  return (
    <BulletinReplyCreate onSaved={handleSaved} onCancel={handleCancel} />
  );
};

