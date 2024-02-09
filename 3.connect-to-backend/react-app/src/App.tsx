import React from 'react'
import useUsers from './hooks/useUser';
import userService from "./services/user-servise";
import { User } from './interfaces/User';

const App = () => {
	const { users, error, isLoading, setUsers, setError } = useUsers();

	//add
	const addUser = () => {
			//oldin UI qismida qoshib olamiz keyin uni save qilish uchun serverga yuboramiz shunda ancha tez ishlidi agar servrga yuborgamda xato bop qosa avvalgi xolatini qaytaib beramiz shuda UI qilgan ozgarishimiz avvalga xolatiga qaytadi
    const originalUsers = [...users]; //avvalgi xolat
    const newUser = { id: 0, name: "Mosh" };//yangi qoshiladigan qism
    setUsers([newUser, ...users]);// ui da ozgarish
//serverga yuborish
    userService
      .create(newUser)
			.then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((err) => {
				setError(err.message);
        setUsers(originalUsers);
				//error bolganda avvalga xolatga qaytrish
      });
	};
	//update
	  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    userService.update(updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
		};
	//delete
	  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    userService.delete(user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };
	return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
	)
}

export default App
