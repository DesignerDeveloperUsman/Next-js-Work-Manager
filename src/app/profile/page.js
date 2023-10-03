import React from 'react'
import BannerSection from '@/components/homepage/HomeBanner'
import UserContext from '@/context/userContext'
import { useContext } from 'react'
function page() {
    const user = useContext(UserContext)
    return (
        <div>
            <BannerSection />
            <div>

            </div>
        </div>
    )
}

export default page