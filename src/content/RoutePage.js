import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginpage from './Loginpage'
import SignInPage from './SignInPage'

function RoutePage() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Loginpage />} />
                    <Route path="/sign-in-page" element={<SignInPage />} />

                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default RoutePage;
