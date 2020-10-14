import { useState, useEffect } from 'react';
import axios from 'axios';

import { User } from '../domain/types';

const userKey = 'user';

type ReturnType = {
  user: User,
  setUser: (newUser: User) => void;
}

export const useUserStorage = (): ReturnType => {
  const [user, setUser] = useState<User>({
    fullName: 'Иванов Иван Иванович',
    email: 'someMail@mail.ru',
    phone: '',
  });

  useEffect(() => {
    const userInStorage = JSON.parse(window.localStorage.getItem(userKey));

    if (userInStorage) {
      setUser(userInStorage);
    }
  }, []);

  const changeUser = (newUser: User) => {
    setUser(newUser);
    window.localStorage.setItem(userKey, JSON.stringify(newUser));
    axios.post('http://localhost:3000/api/onsave', newUser);
  };

  return {
    user,
    setUser: changeUser,
  };
};
