import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify'

export default function Signup() {

    const navigate = useNavigate()

    const [formData, setFormData] = useState ({
        username: "",
        email: "",
        password: "",
        passwordConfirmation: "",
    })

    function handleChange (e) {
        const newFormData = structuredClone(formData)
        newFormData[e.target.name] = e.target.value
        setFormData(newFormData)
    }

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            await axios.post('/auth/signup', formData)
            toast.success('Signup successful');
            navigate('auth/login')
            
        } catch (err) {
            console.log(err.response.data)
            toast.error('Signup failed');
        }
    }

    return <div className="section">
    <div className="container">
      <form onSubmit ={handleSubmit}>
        <div className="field">
          <label className="label">Username</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name={'username'}
              onChange={handleChange}
              value={formData.username}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name={'email'}
              onChange={handleChange}
              value={formData.email}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input
              className="input"
              type="password"
              name={'password'}
              onChange={handleChange}
              value={formData.password}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Confirm password</label>
          <div className="control">
            <input
              className="input"
              type="password"
              name={'passwordConfirmation'}
              onChange={handleChange}
              value={formData.passwordConfirmation}
            />
          </div>
        </div>
        <button className="button">Submit</button>
      </form>
    </div>
  </div>
}


