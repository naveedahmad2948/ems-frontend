import * as yup from 'yup';

const UserSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().required("Email is required"),
    password: yup.string().required("Password is required"),
});
export default UserSchema;