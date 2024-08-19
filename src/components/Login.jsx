import React from 'react';
import GoogleButton from 'react-google-button';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';
import { useDispatch } from 'react-redux';
import { setAuthUser } from '../redux/appslice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch();
    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            // Dispatch the user details to the store
            dispatch(setAuthUser({
                displayName: result.user.displayName,
                email: result.user.email,
                photoURL: result.user.photoURL,
            }));
        } catch (error) {
            // Log the error details
            console.error("Error during Google sign-in: ", error);
            alert("Failed to sign in with Google. Please try again.");
        }
    };

    return (
        <div className='w-screen h-screen flex items-center justify-center bg-gray-200'>
            <div className='p-8 bg-white flex flex-col gap-3 rounded-md'>
                <h1 className='text-center text-xl font-medium mb-5'>LOGIN</h1>
                <GoogleButton onClick={signInWithGoogle} />
            </div>
        </div>
    );
};

export default Login;
