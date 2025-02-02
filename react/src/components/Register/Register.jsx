import {useState} from 'react';
function Register({ onRouteChange, loadUser }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
  
    const onSubmitRegister = async (event) => {
      event.preventDefault();
  
      if (!email || !password || !name) {
        setError('Please fill in all fields.');
        return;
      }
  
      try {
        const response = await fetch('http://localhost:3000/api/v1/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, password }),
        });
  

        if (response.ok) {
          const data = await response.json();
          const {id, name, entries} = data
          loadUser(id, name,entries)
          onRouteChange('home');
        } else {
          setError('Registration failed.');
        }
      } catch (error) {
        setError(error.message || 'An error occurred. Please try again.');
      }
    };
  
    return (
      <article className="br3 shadow-5 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
        <main className="pa4 black-80">
          <form className="measure" onSubmit={onSubmitRegister}>
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  id="email-address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} />
              </div>
            </fieldset>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <div className="">
              <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Register" />
            </div>
          </form>
        </main>
      </article>
    );
  }
export default Register;