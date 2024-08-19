import React, { useEffect, useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { PiDotsNineBold } from "react-icons/pi";
import { FaRegQuestionCircle } from "react-icons/fa";
import Avatar from '@mui/material/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { setsearchText, setAuthUser } from '../redux/appslice';
import { signOut } from 'firebase/auth';  // Import signOut
import { auth } from '../firebase';  // Import auth
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [input, setInput] = useState("");
    const [toggle, setToggle] = useState(false);
    const dispatch = useDispatch();
    const signOutHandler = () => {
        signOut(auth).then(() => {
            dispatch(setAuthUser(null));
        }).catch((error) => {
            console.log(error);
        });
    };

    useEffect(() => {
        dispatch(setsearchText(input));
    }, [input, dispatch]);

    return (
        <div className='flex justify-between items-center mx-3 h-16 border-2 border-red-50'>
            <div className='flex items-center gap-10'>
                <div className='flex items-center gap-2'>
                    <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                        <RxHamburgerMenu />
                    </div>
                    <img className='w-8' src={"https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png"} alt="gmail-logo" />
                    <h1 className='text-2xl font-medium text-gray-500'>Gmail</h1>
                </div>
            </div>
            <div className='md:block hidden w-1/2 mr-60'>
                <div className='flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full'>
                    <IoIosSearch size="24px" className='text-gray-700' />
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        type="text"
                        placeholder='Search mail'
                        className='rounded-full w-full bg-transparent outline-none px-1'
                    />
                </div>
            </div>
            <div className='md:block hidden'>
                <div className='flex items-center gap-2'>
                    <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                        <FaRegQuestionCircle size={"20px"} />
                    </div>
                    <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                        <IoSettingsOutline size={"20px"} />
                    </div>
                    <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                        <PiDotsNineBold size={"20px"} />
                    </div>
                    <div className='cursor-pointer relative'>
                        <Avatar onClick={() => setToggle(!toggle)} src="https://up.yimg.com/ib/th?id=OIP.XSZAFm-5JI7nriDLwZqRQQHaE7&pid=Api&rs=1&c=1&qlt=95&w=167&h=111" alt="avatar image"></Avatar>
                        <AnimatePresence>
                            {
                                toggle && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        transition={{ duration: 0.1 }}
                                        className='absolute right-2 z-20 shadow-lg bg-white rounded-md'>
                                        <p onClick={signOutHandler} className='p-2 underline'>LogOut</p>
                                    </motion.div>
                                )
                            }
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
