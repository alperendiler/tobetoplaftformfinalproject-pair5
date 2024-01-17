import React, { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = () => {
   
    // Handle form submission here
  };

  return (
    <main>
      <div className="container">
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div className="d-flex justify-content-center py-4">
                  <a href="index.html" className="logo d-flex align-items-center w-auto">
                    <img src="assets/img/logo.png" alt=""/>
                  </a>
                </div>
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="pt-4 pb-2">
                    
                    </div>
                    <form className="row g-3 needs-validation" onSubmit={handleSubmit} noValidate>
                      <div className="col-12">
                        <label htmlFor="yourName" className="form-label">Your Name</label>
                        <input type="text" name="name" className="form-control" id="yourName" required value={name} onChange={(e) => setName(e.target.value)}/>
                        <div className="invalid-feedback">Please, enter your name!</div>
                      </div>
                      <div className="col-12">
                        <label htmlFor="yourEmail" className="form-label">Your Email</label>
                        <input type="email" name="email" className="form-control" id="yourEmail" required value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <div className="invalid-feedback">Please enter a valid Email adddress!</div>
                      </div>
                      <div className="col-12">
                        <label htmlFor="yourUsername" className="form-label">Username</label>
                        <div className="input-group has-validation">
                          <span className="input-group-text" id="inputGroupPrepend">@</span>
                          <input type="text" name="username" className="form-control" id="yourUsername" required value={username} onChange={(e) => setUsername(e.target.value)}/>
                          <div className="invalid-feedback">Please choose a username.</div>
                        </div>
                      </div>
                      <div className="col-12">
                        <label htmlFor="yourPassword" className="form-label">Password</label>
                        <input type="password" name="password" className="form-control" id="yourPassword" required value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <div className="invalid-feedback">Please enter your password!</div>
                      </div>
                      <div className="col-12">
                        <div className="form-check">
                          <input className="form-check-input" name="terms" type="checkbox" value="" id="acceptTerms" required checked={acceptTerms} onChange={() => setAcceptTerms(!acceptTerms)}/>
                          <label className="form-check-label" htmlFor="acceptTerms">I agree and accept the <a href="#">terms and conditions</a></label>
                          <div className="invalid-feedback">You must agree before submitting.</div>
                        </div>
                      </div>
                      <div className="col-12">
                        <button className="btn btn-primary w-100" type="submit">Create Account</button>
                      </div>
                      <div className="col-12">
                        <p className="small mb-0">Already have an account? <a href="pages-login.html">Log in</a></p>
                      </div>
                    </form>
                  </div>
                </div>
             
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Register;