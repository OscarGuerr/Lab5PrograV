//ejercicio3
import React from "react";

//importamos lista de usuarios.
import UserList from '../components/UsersList/UsersList.js';

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Elden Ring',
            image: 'https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/phvVT0qZfcRms5qDAk0SI3CM.png',
            info: 'Elden Ring is FromSoftware´s best work yet and one of the highest rated games of all time. With refined, accessible, and satisfying combat in a vast, beautiful, and intriguing open world, players will find a lot to love'
        }

    ]

    return(
        <UserList items={USERS} />
    );
}

export default Users;