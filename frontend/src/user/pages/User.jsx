import React from 'react';

import UsersList from 'src/user/components/UsersList';

const User = () => {
    const USERS = [{ id: 'u1', name: 'Manish Sharma', image: 'https://blog.cpanel.com/wp-content/uploads/2019/08/user-01.png', places: 3 }];
    return (
        <>
            <UsersList items={USERS} />
        </>
    );
};

export default User;
