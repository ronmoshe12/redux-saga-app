import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from '../redux/actions/users';
import Card from './CardComponent';

const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);
    const loading = useSelector(state => state.users.loading);
    const error = useSelector(state => state.users.error);

    // getUsers from actions
    useEffect(() => {
        dispatch(getUsers());
    }, [])

    return (
        <>
            {users.loading && <p>Loading...</p>}
            {users.length === 0 && !loading && <p>No users available!</p>}
            {error && !loading && <p>{error}</p>}
            {users.length > 0 && users.map((user) => (
                <Card key={user.id} user={user} />
            ))}
        </>
    )
}

export default Users;

// We used hooks from react-redux and useEffect() where I’m dispatching the action in this code.
// When we run the application, the action is dispatched, and user data is passed to the store.
