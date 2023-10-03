"use client"
import React, { useEffect, useState } from 'react'
import UserContext from './userContext'
import { toast } from 'react-toastify';
import { currentUser } from '@/services/userServices';
function UserProvider({ children }) {
    const [user, setUser] = useState(undefined);
    useEffect(() => {
        async function load() {
            try {
                const cUser = await currentUser();
                setUser({ ...cUser })
            } catch (error) {
                console.log(error);
                toast.warn("you are not logIn")
                setUser(undefined)
            }
        }
        load();
    }, [])
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}
export default UserProvider