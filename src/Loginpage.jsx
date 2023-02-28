import { React, useState } from 'react'
import classes from './Loginpage.module.scss'
import { TextField, Button, InputAdornment, endAdornment } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import VpnKeyOffIcon from '@mui/icons-material/VpnKeyOff';



function LoginPage() {

    const [focus, setFocus] = useState("")




    const IconTextField = ({ iconEnd, InputProps, onFocus, onBlur, focusComponent, ...props }) => {
        return (
            <TextField
                {...props}
                onFocus={onFocus}
                onBlur={onBlur}
                InputProps={{
                    endAdornment: iconEnd ? (
                        <InputAdornment className={focus === focusComponent ? classes.activeIcon : classes.inactiveIcon} position="end">{iconEnd}</InputAdornment>
                    ) : null
                }}
            />
        );
    };


    return (
        <div className={classes.loginMainPage}>

            <div className={classes.imageSection}>
                <img src="" alt="" />
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
                    <Button >Log In</Button>


                </div>
            </div>


        </div >
    )
}
export default LoginPage;