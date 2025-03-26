import { useState } from 'react';

const ContactForm = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        question: '',
    });

    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: [e.target.value] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.name && data.email && data.question) {
            setSuccess(true);
            setData({
                name: '',
                email: '',
                question: '',
            });
        }
    };

    return (
        <div>
            <h2>Contact Form</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name: </label>

                <input
                    type='text'
                    name='name'
                    id='name'
                    value={data.name}
                    onChange={handleChange}
                />

                <label htmlFor='email'>Email: </label>
                <input
                    type='email'
                    name='email'
                    id='name'
                    value={data.email}
                    onChange={handleChange}
                />

                <label htmlFor='q'>Question: </label>
                <textarea
                    name='question'
                    id='q'
                    cols='30'
                    rows='10'
                    value={data.question}
                    onChange={handleChange}
                />
                <br />
                <button type='submit'>Send Question</button>
            </form>

            {success && (
                <p
                    style={{
                        color: 'green',
                        fontSize: '2rem',
                    }}
                >
                    Thank you for message
                </p>
            )}
        </div>
    );
};
export default ContactForm;
