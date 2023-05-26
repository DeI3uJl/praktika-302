import React from 'react';
import User from './User';

const Users = () => {
    return (
        <div className="users">
            <span>Пользователи</span>
            <User />
            <User />
            <User />
        </div>
    );
};

export default Users;