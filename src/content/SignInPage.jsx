import { React, useState } from 'react'
import classes from './singInPage.module.scss'
import { TextField, Button, InputAdornment } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import LockIcon from '@mui/icons-material/Lock';
import SendIcon from '@mui/icons-material/Send';


function SignInPage() {

    const [focus, setFocus] = useState("")

    return (

        <div className={classes.signInPage}>

            <div className={classes.headigSection}>
                <p>Sign In New User Detail</p>
            </div>

            <div className={classes.firstNameInputSection}>


                <TextField
                    sx={{ width: " 24rem", }}
                    label="First Name"
                    type={'text'}

                    onFocus={() => {
                        setFocus("firstName")
                    }}
                    onBlur={() => { setFocus('') }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment className={focus === 'firstName' ? classes.activeIcon : classes.inactiveIcon} position="end">< PersonIcon /></InputAdornment>
                        )
                    }}
                />
            </div>

            <div className={classes.lastNamInputSection}>

                <TextField
                    sx={{ width: " 24rem", }}
                    label="Last Name"
                    type={'text'}

                    onFocus={() => {
                        setFocus("Last Name")
                    }}
                    onBlur={() => { setFocus('') }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment className={focus === 'Last Name' ? classes.activeIcon : classes.inactiveIcon} position="end">< PersonIcon /></InputAdornment>
                        )
                    }}
                />


            </div>

            <div className={classes.phoneNumbeInputSection}>

                <TextField
                    sx={{ width: " 24rem", }}
                    label="Phone No"
                    type={'tel'}

                    onFocus={() => {
                        setFocus("Phone No")
                    }}
                    onBlur={() => { setFocus('') }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment className={focus === 'Phone No' ? classes.activeIcon : classes.inactiveIcon} position="end">< PhoneIcon /></InputAdornment>
                        )
                    }}
                />

            </div>

            <div className={classes.emailInputSection}>

                <TextField
                    sx={{ width: " 24rem", }}
                    label="Email"
                    type={'email'}

                    onFocus={() => {
                        setFocus("Email")
                    }}
                    onBlur={() => { setFocus('') }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment className={focus === 'Email' ? classes.activeIcon : classes.inactiveIcon} position="end">< MailIcon /></InputAdornment>
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
                            <InputAdornment className={focus === 'Password' ? classes.activeIcon : classes.inactiveIcon} position="end">< LockIcon /></InputAdornment>
                        )
                    }}
                />

            </div>

            <div className={classes.reEnterPasswordSection}>

                <TextField
                    sx={{ width: " 24rem" }}
                    label="Re Enter Password"
                    type={'password'}

                    onFocus={() => {
                        setFocus("Re Enter Password")
                    }}
                    onBlur={() => { setFocus('') }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment className={focus === 'Re Enter Password' ? classes.activeIcon : classes.inactiveIcon} position="end">< LockIcon /></InputAdornment>
                        )
                    }}
                />

            </div>

            <div className={classes.submitButtonSection}>

                <Button
                    sx={{ width: " 24rem" }}
                    variant="contained"
                    endIcon={<SendIcon />}
                >
                    Submit
                </Button>

            </div>

        </div>

    )
}

export default SignInPage;