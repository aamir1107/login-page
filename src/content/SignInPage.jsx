import { React, useState } from 'react'
import classes from './singInPage.module.scss'
import { TextField, Button, InputAdornment, endAdornment, Alert } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';


function SignInPage() {

    const [focus, setFocus] = useState("")

    return (
        <div>
            <div className={classes.signInPage}>
                <div className={classes.contentSection}>
                    Aamir

                    <TextField
                        sx={{ width: " 24rem", }}
                        label="First Name"
                        type={'text'}
                        // onChange={handleEmailChange}
                        // value={emailInput}
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

            </div>
        </div>
    )
}
export default SignInPage;