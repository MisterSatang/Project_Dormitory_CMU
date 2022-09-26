import React from 'react';
export default function Login() {
    return (
        <>
            <div className="bg-log col-12 d-flex align-items-center ">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-offset-4 col-md-4 col-sm-offset-3 col-sm-6">
                            <div className="form-container">
                                <h3 className="title">SING IN</h3>
                                <span className="description">or use you email for registration:</span>
                                <form className="form-horizontal">
                                    <div className="form-group">
                                        <p className='text-start'>Username</p>
                                        <input type="text" className="form-control" placeholder="Username" />
                                    </div>
                                    <div className="form-group">
                                        <p className='text-start '>Password</p>
                                        <input type="password" className="form-control" placeholder="Password" />
                                    </div>
                                    <div className="form-group">
                                        <input type="checkbox" className="checkbox" />
                                        <span className="check-label">I agree to the <a href>Terms</a> and <a href>Privacy Policy.</a></span>
                                    </div>
                                    <button className="btn signup">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}