import React, { useState } from 'react';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);


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

               

                <div className="card mb-3">

                  <div className="card-body">

                  <div className="d-flex justify-content-center py-4 logo d-flex align-items-center w-auto" >
                    <img src="https://tobeto.com/_next/static/media/tobeto-logo.29b55e1c.svg" alt="" />
                </div>
                    <form className="row g-3 needs-validation" noValidate onSubmit={handleSubmit}>

                      <div className="col-12">
                        <label htmlFor="yourUsername" className="form-label">E Posta</label>
                        <div className="input-group has-validation">
                          <input type="text" name="username" className="form-control" id="yourUsername" required value={username} onChange={(e) => setUsername(e.target.value)}/>
                          <div className="invalid-feedback">Please enter your username.</div>
                        </div>
                      </div>

                      <div className="col-12">
                        <label htmlFor="yourPassword" className="form-label">Şifre </label>
                        <input type="password" name="password" className="form-control" id="yourPassword" required value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <div className="invalid-feedback">Please enter your password!</div>
                      </div>

                      <div className="col-12">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe" checked={remember} onChange={(e) => setRemember(e.target.checked)}/>
                          <label className="form-check-label" htmlFor="rememberMe">Beni Hatırla</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button className="btn btn-primary w-100" type="submit">Giriş Yap</button>
                      </div>
                      <div className="col-12">
                        <p className="small mb-0">Henüz üye değil misin? <a href="pages-register.html">Kayıt Ol</a></p>
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

export default Login;