import { useContext, useState } from 'react';
import { Context } from '../context';

const DisplayUser = () => {
    const [value, setValue] = useState({
        name: '',
        surname: '',
    });
    const { user, setUser } = useContext(Context);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser(value);
        setValue({ name: '', surname: '' });
    };
    return (
        <div>
            <h2>User Page</h2>
            <p>
                Welcome {user.surname}, {user.name}
            </p>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Change name</label>
                <input
                    type='text'
                    id='name'
                    value={value.name}
                    onChange={(e) =>
                        setValue({ ...value, name: e.target.value })
                    }
                />
                <label htmlFor='name'>Change Surname</label>
                <input
                    type='text'
                    id='name'
                    value={value.surname}
                    onChange={(e) =>
                        setValue({ ...value, surname: e.target.value })
                    }
                />
                <button type='submit'>Send </button>
            </form>
        </div>
    );
};
export default DisplayUser;
