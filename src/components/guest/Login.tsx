import React, { useState } from "react"
import { useAppDispatch } from "../../app/hooks"
import type { Login } from "../../utils/interfaces"
import { loginFetch } from "../../features/actions/accountAction"


const LogIn = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState('')
  const dispatch = useAppDispatch();

  const handleClickLogin = () => {
    const user:Login = {
      login:email,
      password
    }
    dispatch(loginFetch(user));
    setEmail('')
    setPassword('')
  }

  //TODO create style
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <div className="mb-5">
            <h3>Log in</h3>
          </div>
        </div>
      </div>
        <div className="row gy-3 overflow-hidden">
          <div className="col-12">
            <div className="form-floating mb-1">
              <input type="email" className="form-control  border-2 " name="email" id="email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value.trim())}
                     placeholder="name@example.com" required />
              <label form="email" className="email form-label">Email</label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-floating mb-1">
              <input type="password" className="password form-control border-2" name="password" id="password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value.trim())}
                     defaultValue=""
                     placeholder="Password" required />
              <label htmlFor="password" className="pass form-label">Password</label>
            </div>
          </div>

          <div className="col-12">
            <div className="d-grid">
              <button className="btn bsb-btn-3xl btn-primary py-3" onClick={handleClickLogin} type="submit">Log in now</button>
            </div>
          </div>
          <div className="col-12">
            <div className="d-grid">
              <button className="btn bsb-btn-3xl btn-primary py-3" type="submit">Clear</button>
            </div>
          </div>
        </div>
    </div>


)
}

export default LogIn