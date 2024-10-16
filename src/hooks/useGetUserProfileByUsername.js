import { collection, doc, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { firestore } from '../firebase/firebase';
import useUserProfileStore from '../store/userProfileStore';
import useShowToast from './useShowToast';

const useGetUserProfileByUsername = (username) => {
    const [isLoading,setIsLoading] = useState(true);
    const showToast = useShowToast();
    {/*Gibt alle Values zrk */}
    const {userProfile,setUserProfile} = useUserProfileStore()

    useEffect(() => {
        const getUserProfile = async() => {
            setIsLoading(true)
            try {
                const q = query(collection(firestore,"users"),where("username","==",username))
                const querySnapshot = await getDocs(q)

                if(querySnapshot.empty) return setUserProfile(null);
                let userDoc;
                querySnapshot.forEach((doc) => {
                    userDoc = doc.data();
                });

                setUserProfile(userDoc);
                console.log(userDoc);
            } catch (error) {
                showToast("Error", error.message, "error")
            } finally{
                setIsLoading(false);
                {/* Egal ob geladen oder nicht loading state ist dann false */}
            }
        }
        getUserProfile()
    },[setUserProfile, username, showToast])

    return {isLoading, userProfile};
}

export default useGetUserProfileByUsername