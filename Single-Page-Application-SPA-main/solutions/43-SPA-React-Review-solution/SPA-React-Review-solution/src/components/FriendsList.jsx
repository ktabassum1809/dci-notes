import { useEffect, useState } from 'react';

const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        let isMount = true;
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((json) => {
                if (isMount) {
                    setFriends(json);
                }
            })
            .catch((e) => {
                console.log(e);
            });

        return () => {
            isMount = false;
        };
    }, []);
    return (
        <div>
            <h2>FriendsList</h2>
            <ul>
                {' '}
                {friends &&
                    friends.map((el) => {
                        return <li key={el.id}> {el.name}</li>;
                    })}
            </ul>
        </div>
    );
};
export default FriendsList;
