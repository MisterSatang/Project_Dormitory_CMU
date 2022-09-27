import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';

const Login = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user, pwd);
        setUser('');
        setPwd('');
        setSuccess(true);
    }

    return (
        <>
            {
                success ? (
                    <section>
                        <h1>in</h1>
                        <p>
                            <a href='#'>go home</a>
                        </p>
                    </section>
                ) : (
                    <section>
                        <p nef={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                        <h1>Sing In</h1>
                        <from onSubmit={handleSubmit}>
                            <label htmlFor='username'>username</label>
                            <input
                                type="text"
                                id="username"
                                ref={userRef}
                                autoComplete='off'
                                onChange={(e) => setUser(e.target.value)}
                                class="form-control"
                                value={user}
                                required
                                placeholder="Email@cmu.ac.th"
                            />

                            <label htmlFor="password">password:</label>
                            <input
                                type="password"
                                id="password"
                                onChange={(e) => setPwd(e.target.value)}
                                value={pwd}
                                required
                                placeholder="password"
                            />
                            <button>Sign In</button>
                        </from>
                    </section>
                )
            }
        </>
    );
}

export default Login