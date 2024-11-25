import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from "../pages/RegisterPage"


export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path="login" element={ <LoginPage /> } />
        <Route path="register" element={ <RegisterPage /> } />

        {/* ruta si el usuario no esta ni en el login ni el registro */}

        <Route path='/*' element={ <Navigate to="/auth/login" />} />
    </Routes>
  )
}
