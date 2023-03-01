import { React, useState } from 'react'
import classes from './Loginpage.module.scss'
import { TextField, Button, InputAdornment, endAdornment, Alert } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import VpnKeyOffIcon from '@mui/icons-material/VpnKeyOff';
import logoAa from '../image/logoAa.jpg'




function LoginPage() {

    const [focus, setFocus] = useState("")
    const [emailInput, setEmailInput] = useState("")
    const [passwordVal, setPassword] = useState("")



    const handleEmailChange = (e) => {
        setEmailInput(e.target.value)
    }

    const validateEmails = () => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (!emailInput.match(emailRegex)) {
            alert("Please Enter Valid Email")
        }

    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)

    }

    const validatePassword = () => {
        if (passwordVal !== "") {

        } else {
            alert("Enter Password")
        }
    }




    const submitData = () => {
        validateEmails()
        validatePassword()
        setEmailInput("")
        setPassword("")


    }




    // const IconTextField = ({ iconEnd, InputProps, onFocus, onBlur, focusComponent, ...props }) => {
    //     return (
    //         <TextField
    //             {...props}
    //             onFocus={onFocus}
    //             onBlur={onBlur}
    //             InputProps={{
    //                 endAdornment: iconEnd ? (
    //                     <InputAdornment className={focus === focusComponent ? classes.activeIcon : classes.inactiveIcon} position="end">{iconEnd}</InputAdornment>
    //                 ) : null
    //             }}
    //         />
    //     );
    // };


    return (
        <div className={classes.loginMainPage}>

            <div className={classes.imageSection}>
                <img className={classes.logo} src={logoAa} alt="img" />
            </div>

            <div className={classes.tittleSection}>
                welcome  <br></br>
                back !
            </div>

            <div className={classes.emailInputSection}>
                <TextField
                    sx={{ width: " 24rem", }}
                    label="Email"
                    type={'email'}
                    onChange={handleEmailChange}
                    value={emailInput}
                    onFocus={() => {
                        setFocus("email")
                    }}
                    onBlur={() => { setFocus('') }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment className={focus === 'email' ? classes.activeIcon : classes.inactiveIcon} position="end">< PersonIcon /></InputAdornment>
                        )
                    }}
                />

            </div>


            <div className={classes.passwordInputSection}>

                <TextField
                    sx={{ width: " 24rem", }}
                    label="Password"
                    type={'password'}
                    onChange={handlePasswordChange}
                    value={passwordVal}
                    onFocus={() => {
                        setFocus("Password")
                    }}
                    onBlur={() => { setFocus('') }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment className={focus === 'Password' ? classes.activeIcon : classes.inactiveIcon} position="end">< VpnKeyOffIcon /></InputAdornment>
                        )
                    }}
                />
            </div>

            <div className={classes.passwordForgetSection}>
                <Button >Forgot Password</Button>
            </div>


            <div className={classes.btnSection}>
                <div className={classes.signUpBtn}>
                    <Button >SignUp</Button>
                </div>
                <div className={classes.loginBtn}>
                    <Button onClick={submitData}  >Log In</Button>


                </div>
            </div>


        </div >
    )
}

export default LoginPage;