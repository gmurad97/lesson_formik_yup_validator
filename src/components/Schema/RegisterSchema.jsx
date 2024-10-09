import * as yup from 'yup';

const RegisterSchema = yup.object().shape({
    
    email: yup.string().email("Email formasi yalnisdir").required("Email bos olmamalidir"),
    
    username:yup.string().min(2, 'Minimum 2 simvoldan cox olmalidir').max(10, 'Maximum 10 simvol olmalidir').required("Bosluq buraxmayin"),
    
    age: yup.number().positive("Yash musbet reqem olmalidir").integer("Yash reqem kimi gosterilmelidir").required("Bosluq buraxmayin"),
    
    password: yup.string().required("Bosluq buraxmayin"),

    confirm_password: yup.string()
    .required("Bosluq buraxmayin")
    .oneOf([yup.ref("password")], "Sifre tekrari yalnisdir"),

    term: yup.boolean().required("Qaydalari tesdiq etmelisiniz!")
    
})

export default RegisterSchema;