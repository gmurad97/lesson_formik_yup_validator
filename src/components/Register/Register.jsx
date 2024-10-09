import RegisterSchema from '../Schema/RegisterSchema'
import './Register.css'
import { useFormik } from 'formik'

const Register = () => {


    const submit = (values, action) => {
        // console.log(values)
        // console.log(action)

        setTimeout(() => {
            action.resetForm();
        }, 2000)

    }

    const {errors, values, handleChange, handleSubmit} = useFormik({
        initialValues: {
            email: "", 
            username: "",
            age:"",
            password: "",  
            confirm_password: "",
            term: "",
        },
        validationSchema:RegisterSchema,
        onSubmit:submit

    })



    console.log(errors)




    return (
        <div className='Forminus'>
            <form onSubmit={handleSubmit}>

                <label htmlFor="email">Email</label>
                <input type="email" id='email' onChange={handleChange} value={values.email}  />
                <p>{errors.email}</p>
                <br />

                <label htmlFor="username">Username</label>
                <input type="text" id='username' onChange={handleChange} value={values.username} />
                <p>{errors.username}</p>
                <br />

                <label htmlFor="age">Age</label>
                <input type="number" id='age' onChange={handleChange} value={values.age} />
                <p>{errors.age}</p>
                <br />

                <label htmlFor="password">Password</label>
                <input type="password" id='password' onChange={handleChange} value={values.password}/>
                <p>{errors.password}</p>
                <br />

                <label htmlFor="confirm_password">Confirm Password</label>
                <input type="password" id='confirm_password' onChange={handleChange} value={values.confirm_password}/>
                <p>{errors.confirm_password}</p>
                <br />
                
              
                <input type="checkbox" id="term"  onChange={handleChange} value={values.term}/>
                  <label htmlFor="term" className='Term'>Term</label>
                  <p>{errors.term}</p>
                <br />


                <button type='submit'>Send</button>
            </form>
        </div>
    )
}

export default Register;