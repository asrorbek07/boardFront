
import { useNavigate } from 'react-router-dom';


export const BulletinBoardPage = () => {
    //
    const navigate = useNavigate();
    const handleNewBulletinPost = () => navigate(`post/new`);
    const handleModifyBulletinPost = () => navigate(`modify`);

    return null;
    // (
    //     <BulletinBoard onNewPost ={handleNewBulletinPost} onModifyBoard = {handleModifyBulletinPost}/>
    // );
};

