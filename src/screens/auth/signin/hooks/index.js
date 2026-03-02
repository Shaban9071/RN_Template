import { useState } from "react"
import { routes } from "../../../../services"
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setIsLoggedIn, setSignedInUser } from "../../../../store/authSlice";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { ErrorToast } from "react-native-toast-message";

export function useHooks() {

    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false)

    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [error, setError] = useState('')
    const [isloading, setIsLoading] = useState(false)

    const dispatch = useDispatch();


    const handleEmailChange = (text) => {
        setEmail(text);
        if (error) setError("");        
        if (emailError) setEmailError("");  
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
        if (error) setError("");
        if (passwordError) setPasswordError("");
    };



    const validate = () => {
        let valid = true;

        setEmailError('');
        setPasswordError('');

        if (!email) {
            setEmailError('Email is required');
            valid = false;
        } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
            setEmailError('Enter a valid email');
            valid = false;
        }

        if (!password) {
            setPasswordError('Password is required');
            valid = false;
        } else if (password.length < 6) {
            setPasswordError('Password must be at least 6 characters');
            valid = false;
        }

        return valid;
    };

    const handleSignin = async () => {

        if (!validate()) return;
        setIsLoading(true);
        try {
            const userCredential = await auth().signInWithEmailAndPassword(email, password);
            const firebaseUser = userCredential.user;
            if (!firebaseUser) throw new Error('Signin failed');

            const userDoc = await firestore().collection('users').doc(firebaseUser.uid).get();
            if (userDoc.exists) {
                const userData = userDoc.data();
                dispatch(setSignedInUser(userData));
                dispatch(setIsLoggedIn(true));
               navigation.replace(routes.app, { isShowLanding: true });
            } else {
                setError('User data not found.');
            }
        } catch (err) {
            console.log("Signin error caught:", err.code, err.message);

            switch (err.code) {
                case 'auth/user-disabled':
                    console.log("Firebase says: user account is disabled");
                    ErrorToast('Your account has been banned.');
                    setError('Your account has been banned.');


                    break;

                case 'auth/user-not-found':
                    console.log("Firebase says: user not found");
                    setEmailError('No account found with this email.');
                    break;

                case 'auth/wrong-password':
                    console.log("Firebase says: wrong password");
                    setPasswordError('Incorrect password. Please try again.');
                    break;

                case 'auth/invalid-email':
                    console.log("Firebase says: invalid email");
                    setEmailError('Invalid email format.');
                    break;

                case 'auth/invalid-credential':
                    console.log("🛑 Checking Firestore for email...");

                    try {
                        // Query Firestore 'users' collection for this email
                        const userQuery = await firestore()
                            .collection('users')
                            .where('email', '==', email)
                            .get();

                        if (!userQuery.empty) {
                            setPasswordError('Incorrect password. Please try again.');

                        } else {
                            console.log("❌ Email does not exist in Firestore");
                            setEmailError('No account found with this email.');
                        }
                    } catch (queryError) {
                        console.log("⚠️ Firestore query failed:", queryError);
                        setEmailError('Email or Password is incorrect.');
                    }

                    break;

                case 'auth/too-many-requests':
                    console.log("Firebase says: too many requests");
                    setEmailError('Too many failed attempts. Try again later.');
                    break;

                default:
                    console.log("Firebase unknown error:", err);
                    setError('Signin failed. Please try again.');
                    break;
            }

        } finally {
            setIsLoading(false);
        }
    };

    const handleSignUp = () => {
        navigation.navigate(routes.createAccount)
    }

    const handleForgetPassword = () => {
        navigation.navigate(routes.forgetpassword)
    }

    const socialApps = [
        { id: 1, name: "facebook" }, { id: 2, name: "google" }, { id: 3, name: "apple" },
    ]





    return {
        navigation,
        handleSignUp,
        socialApps,
        handleSignin,
        handleForgetPassword,
        email, setEmail,
        password, setPassword,
        showPassword, setShowPassword,

        emailError, setEmailError,
        passwordError, setPasswordError,

        handlePasswordChange, handleEmailChange,
isloading
        

    }
}