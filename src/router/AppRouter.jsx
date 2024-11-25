import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { EcenviosRoutes } from '../ecenvios/routes/EcenviosRoutes';
import { CheckingAuth } from '../ui/';
import { useCkeckAuth } from '../hooks/useCkeckAuth';


export const AppRouter = () => {

  const status = useCkeckAuth()
    if ( status === 'checking' ){
        return <CheckingAuth />
    }
    


  return (
    <Routes>

      {
        (status === 'authenticated')
        ? <Route path="/*" element={ <EcenviosRoutes /> } />
        : <Route path="/auth/*" element={ <AuthRoutes /> } />
      }

      <Route path='/*' element={ <Navigate to='auth/login' /> }/>
        {/* login y registro */}
        {/* <Route path="/auth/*" element={ <AuthRoutes /> } /> */}

        {/* EcenviosApp */}
        {/* <Route path="/*" element={ <EcenviosRoutes /> } /> */}
    </Routes>
  )
}
