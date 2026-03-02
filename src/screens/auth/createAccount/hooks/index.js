import { useNavigation } from "@react-navigation/native";
import { useState } from "react"
import { setSignedInUser, setIsLoggedIn } from "../../../../store/authSlice";
import { useDispatch } from 'react-redux';
import { routes } from "../../../../services";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export function useHooks() {

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false)
    // const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    // const [confirmPassword, setConfirmPassword] = useState('')

    const [isloading, setIsLoading] = useState(false)

    // Error state
    const [firstNameError, setFirstNameError] = useState('')
    const [lastNameError, setLastNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    // const [confirmPasswordError, setConfirmPasswordError] = useState('')

    const validate = () => {
        let valid = true;

        // 1. Reset Errors
        setFirstNameError('');
        setLastNameError('');
        setEmailError('');
        setPasswordError('');
        // setConfirmPasswordError('');

        const atLeastOneLetter = /[a-zA-Z]/;
        // 2. First Name Validation
        if (!firstName.trim()) {
            setFirstNameError('First name is required');
            valid = false;
        } else if (!atLeastOneLetter.test(firstName)) {
            setFirstNameError('Must contain at least one alphabet');
            valid = false;
        }

        // 3. Last Name Validation
        if (!lastName.trim()) {
            setLastNameError('Last name is required');
        } else if (!atLeastOneLetter.test(lastName)) {
            setLastNameError('Must contain at least one alphabet');
            valid = false;
        }
        // 4. Email Validation
        const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
        if (!email.trim()) {
            setEmailError('Email is required');
            valid = false;
        } else if (!emailRegex.test(email.trim())) {
            setEmailError('Please enter a valid email address');
            valid = false;
        }

        // 5. Password Validation
        if (!password) {
            setPasswordError('Password is required');
            valid = false;
        } else if (password.length < 6) {
            setPasswordError('Password must be at least 6 characters');
            valid = false;
        }

        // // 6. Confirm Password Validation
        // if (!confirmPassword) {
        //     setConfirmPasswordError('Please confirm your password');
        //     valid = false;
        // } else if (password !== confirmPassword) {
        //     setConfirmPasswordError('Passwords do not match');
        //     valid = false;
        // }

        return valid;
    };

    const handleSignup = async () => {
        if (!validate()) return;

        setIsLoading(true);
        try {
            // 1. Create User in Auth
            const userCredential = await auth().createUserWithEmailAndPassword(
                email.trim(),
                password
            );

            const uid = userCredential.user.uid;

            // 2. Prepare User Data
            const userData = {
                // uid: uid,
                firstName: firstName.trim(),
                lastName: lastName.trim(),
                email: email.trim().toLowerCase(),
                createdAt: firestore.FieldValue.serverTimestamp(),
                type: 'email',
            };


            await firestore().collection('users').doc(uid).set(userData);


            dispatch(setSignedInUser(userData));
            dispatch(setIsLoggedIn(true));


            // alert('Account created successfully 🎉');
              navigation.replace(routes.app, { isShowLanding: true });

        } catch (err) {
            console.log("Signup Error: ", err.code);
            if (err.code === 'auth/email-already-in-use') {
                setEmailError('This email is already registered. Please login.');
            } else if (err.code === 'auth/invalid-email') {
                setEmailError('Invalid email format.');
            } else if (err.code === 'auth/weak-password') {
                setPasswordError('Password is too weak.');
            } else {
                alert(err.message);
            }
        } finally {
            setIsLoading(false);
        }
    };

    return {
        navigation,
        firstName, setFirstName,
        lastName, setLastName,
        email, setEmail,
        password, setPassword,
        // confirmPassword, setConfirmPassword,
        showPassword, setShowPassword,
        // showConfirmPassword, setShowConfirmPassword,


        firstNameError, setFirstNameError,
        lastNameError, setLastNameError,
        emailError, setEmailError,
        passwordError, setPasswordError,
        // confirmPasswordError, setConfirmPasswordError,

        handleSignup,
        isloading



    }
}