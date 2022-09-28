import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';

const Login = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const [students, setStudents] = useState([]);



    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user, pwd);



        setUser('');
        setPwd('');
        // setSuccess(true);
    }

    useEffect(() => {
        const getStudents = async () => {
            const result = await axios.get('http://localhost:8000/students/');
            setStudents(result.data);
            console.log(students);
        };
        getStudents();
        console.log('2');
    }, []);

    return (
        <>
            {success ? (
                <section>
                    <h1>in</h1>
                    <br />
                    <p>
                        <a href='http://localhost:3000/TestLogin'>go home</a>
                    </p>
                </section>
            ) : (
                <section>
                    <p nef={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Sing In</h1>

                    <label htmlFor='username'>username</label>
                    <input
                        type="text"
                        id="username"
                        ref={userRef}
                        autoComplete='off'
                        onChange={(e) => setUser(e.target.value)}
                        className="form-control"
                        value={user}
                        required
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPwd(e.target.value)}
                        className="form-control"
                        value={pwd}
                        required
                    />
                    <button onClick={handleSubmit}>Sign In</button>

                </section>
            )
            }
        </>
    );
}

export default Login