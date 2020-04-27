//////////For Ref, will be deleted in final

import { useContext, useEffect } from 'react';
import UserContext from '../src/context/userContext.context';

const UserInfo = () => {
  const { userGlobal } = useContext(UserContext);

  console.log(userGlobal);
  return (
    <>
      {userGlobal ? (
        <div className='user-info'>
          <p>
            Hello, <strong>{userGlobal.displayName}</strong>
          </p>
          <p>Welcome to our app</p>

          <style jsx>{`
            .user-info {
              padding: 20px;
              text-align: center;
            }
            .btn {
              margin-top: 20px;
            }
          `}</style>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default UserInfo;
