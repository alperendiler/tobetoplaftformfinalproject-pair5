import React from 'react'
import { Route, Navigate, Routes } from 'react-router-dom';
type Props = {
    element: JSX.Element;
    path: string;

}


export default function PrivateRoot({element, path }: Props) {
 
 const token =localStorage.getItem("user") ;
    return (
        <>
        <Routes>
        <Route
        path={path}
        element={token ? element : <Navigate to="/" />}/>
     </Routes>
     </>
  )
}