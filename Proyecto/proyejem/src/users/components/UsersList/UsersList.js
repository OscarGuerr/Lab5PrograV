import React from "react";

import './UsersList.css';
import UserItem from '../UserItem/UserItem.js';
import Card from '../../../shared/components/UIElements/Card/Card.js';

const UsersList = (props) => {
    if(props.items.length === 0){
        return(
            <Card className="center">
                <h2> No se Enconraron Juegos Registrados. </h2>
            </Card>
        );
    } else {
        return(
            <ul className="users-list">
                {props.items.map(user =>{
                    return(
                        <UserItem
                            key={user.id}
                            id={user.id}
                            name={user.name}
                            image={user.image}
                            infogame={user.info}
                        />
                    );
                })}
            </ul>
        );
    }
}

export default UsersList;