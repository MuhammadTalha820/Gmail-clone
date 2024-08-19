// SendMail.js
import React, { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import { setopen } from '../redux/appslice';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

const SendMail = () => {
    const open = useSelector(store => store.appSlice.open);
    const dispatch = useDispatch()
    const [formData, setformData] = useState({
        to: "",
        subject: "",
        message: ""
    })
    const changeHandler = (e) => {
        setformData({
            ...formData,
            [e.target.name]: e.target.value
        }
        )
    }
    const submitHandler = async (e) => {
        e.preventDefault()
        await addDoc(collection(db, "emails"), {
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            createAt: serverTimestamp()
        })
        dispatch(setopen(false))
        setformData({
            to: "",
            subject: "",
            message: ""
        })

    }
    return (
        <div className={`${open ? 'block' : 'hidden'}  bg-white max-w-6xl shadow-xl shadow-slate-600 rounded-t-md`}>
            <div className='flex px-3 py-2 bg-[#F2F6F6] justify-between rounded-t-md'>
                <h1>New Message</h1>
                <div
                    onClick={() => dispatch(setopen(false))}
                    className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
                    <RxCross2 size={"10px"} />
                </div>
            </div>
            <form onSubmit={submitHandler} className='flex flex-col p-3 gap-2'>
                <input type="text" name='to'
                    value={formData.to}
                    onChange={changeHandler}
                    placeholder='To' className='outline-none py-1' />
                <input type="text"
                    value={formData.subject}
                    onChange={changeHandler}

                    name='subject' placeholder='Subject' className='outline-none py-1' />
                <textarea
                    value={formData.message}
                    onChange={changeHandler}

                    name="message" cols="30" rows="10" className='outline-none py-1'></textarea>
                <button type='submit' className='bg-[#0B57D0] rounded-full w-fit px-4 text-white font-medium'>Send</button>
            </form>
        </div>
    );
};

export default SendMail;
