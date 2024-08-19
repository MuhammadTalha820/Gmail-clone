import React, { useEffect, useState } from 'react'
import Message from './Message'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../firebase'
import { useDispatch, useSelector } from 'react-redux'
import { setemails } from '../redux/appslice'


const Messages = () => {
    const { searchText, emails } = useSelector(store => store.appSlice)
    const [tempEmail, setTempEmail] = useState(emails)
    const dispatch = useDispatch()
    useEffect(() => {
        const q = query(collection(db, "emails"), orderBy('createAt', 'desc'))
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const allEmails = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            dispatch(setemails(allEmails))
        })
        return () => unsubscribe();
    }, [])
    useEffect(() => {
        const filterEmail = emails?.filter((email) => {
            return email?.subject?.toLowerCase().includes(searchText.toLowerCase()) || email?.to?.toLowerCase().includes(searchText.toLowerCase()) || email?.message?.toLowerCase().includes(searchText.toLowerCase())
        })
        setTempEmail(filterEmail)
    }, [searchText, emails])
    return (
        <div>
            {
                tempEmail && tempEmail?.map((emails) => <Message key={emails.id} email={emails} />)

            }
        </div>
    )
}

export default Messages
