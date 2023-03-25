import { React, useState } from 'react'
import classes from './singInPage.module.scss'
import { TextField, Button, InputAdornment } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import LockIcon from '@mui/icons-material/Lock';
import SendIcon from '@mui/icons-material/Send';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css'


function SignInPage() {

    const [focus, setFocus] = useState("")
    const [firstNameInput, setFirstNameInput] = useState("")
    const [lastNameInput, setLastNameInput] = useState("")
    const [phoneNumber, setPhoneNumber] = useState()
    const [emailInput, setEmailInput] = useState("")
    const [passwordVal, setPassword] = useState("")
    const [reEnterPasswordVal, setReEnterPasswordVal] = useState("")



    const handleFirstNameChange = (e) => {
        setFirstNameInput(e.target.value)

    }

    const validateFirstName = () => {
        const FirstNameRegex = /^[A-Za-z-,]{1,30}/

        if (FirstNameRegex.test(firstNameInput)) {

        }
        else {
            alert("Please enter your First name")
        }

    }

    const handleLastNameChange = (e) => {
        setLastNameInput(e.target.value)
    }

    const validateLastName = () => {
        const LastNameRegex = /^[A-Za-z-,]{1,30}/
        if (LastNameRegex.test(lastNameInput)) {

        } else {
            alert("Please enter your Last name")
        }
    }



    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e)
    }

    const validatePhoneNumber = () => {

        if (phoneNumber && isValidPhoneNumber(phoneNumber)) {
        } else {
            alert("Enter Valid Phone Number")
        }
    }



    const handleEmailChange = (e) => {
        setEmailInput(e.target.value)
    }

    const validateEmails = () => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,30}$/i;
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


    const handleReEnterPasswordChange = (e) => {
        setReEnterPasswordVal(e.target.value)

    }
    const validateReEnterPassword = () => {
        if (reEnterPasswordVal !== "" && reEnterPasswordVal === passwordVal) {

        } else {
            alert("ReEnter Password ")
        }
    }





    const submitSignInDetail = () => {
        validateFirstName()
        validateLastName()
        validatePhoneNumber()
        validateEmails()
        validatePassword()
        validateReEnterPassword()

        setFirstNameInput("")
        setLastNameInput("")
        setPhoneNumber()
        setEmailInput("")
        setPassword("")
        setReEnterPasswordVal("")
    }



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
                    onChange={handleFirstNameChange}
                    value={firstNameInput}
                    autoComplete={"off"}

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
                    onChange={handleLastNameChange}
                    value={lastNameInput}
                    autoComplete={"off"}


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

                <PhoneInput
                    className={classes.phoneInput}
                    placeholder="Enter phone number"
                    defaultCountry="IN"
                    onChange={handlePhoneNumberChange}
                    value={phoneNumber}

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
                    onChange={handleEmailChange}
                    value={emailInput}
                    autoComplete={"off"}

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
                    onChange={handlePasswordChange}
                    value={passwordVal}
                    autoComplete={"off"}

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
                    onChange={handleReEnterPasswordChange}
                    value={reEnterPasswordVal}
                    autoComplete={"off"}

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
                    onClick={submitSignInDetail}
                >
                    Submit
                </Button>

            </div>

        </div>

    )
}

export default SignInPage;