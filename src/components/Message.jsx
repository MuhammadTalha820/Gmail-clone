import React from 'react'
import { MdCropSquare } from 'react-icons/md'
import { RiStarLine } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setselectedEmails } from '../redux/appslice'
import { motion } from 'framer-motion'

const Message = ({ email }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const openMail = () => {
        dispatch(setselectedEmails(email));
        navigate(`/mail/${email.id}`);
    }

    return (

        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}

            onClick={openMail} className='flex items-start justify-between border-b cursor-pointer border-gray-200 p-3'>
            <div className='flex items-center gap-3'>
                <div className='flex-none text-gray-300'>
                    <MdCropSquare className='w-5 h-5' />
                </div>
                <div className='flex-none text-gray-300'>
                    <RiStarLine className='w-5 h-5' />
                </div>
                <div>
                    <h1 className="font-semibold">{email?.subject}</h1>
                </div>
            </div>
            <div className='flex-1 ml-4'>
                <p className='text-gray-600 truncate inline-block max-w-full'>{email?.message}</p>
            </div>
            <div className='flex-none text-gray-400 text-sm'>
                {new Date(email?.createAt?.seconds * 1000).toUTCString()}
            </div>
        </motion.div>
    )
}

export default Message