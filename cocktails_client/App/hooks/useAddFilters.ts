import { useState } from "react";

const initialFilters = { selectedType: 'Alcohol', filtersActiveTab: 'Base' }

export const useAddFilters = () => {
    const [filters, setFilters] = useState<typeof initialFilters>(initialFilters);
    const [userData, setUserData] = useState<User>({} as User);

    const addFilters = (data: typeof initialFilters) => {
        setFilters(data)
    }
    const addUserData = (data: User) => {
        setUserData(data)
    }

    const addReaction = (reaction: string) => {
        if (userData?.liked_cocktails?.includes(reaction)) {
            setUserData({ ...userData, liked_cocktails: userData.liked_cocktails.filter(id => id !== reaction) })
        } else {
            setUserData({ ...userData, liked_cocktails: [...userData?.liked_cocktails ?? [], reaction] })
        }
    }


    return { filters, userData, addFilters, addUserData, addReaction }
}

interface User {
    __v: number;
    _id: string;
    email: string;
    friends: string[];
    liked_cocktails: string[];
    password: string;
}