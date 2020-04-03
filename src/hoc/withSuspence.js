import React, { Suspense } from 'react'
import Preloader from '../components/common/preloader/preloader'


export const withSuspence = (Component) => {
    return (props) => {
        return <Suspense fallback={<Preloader/> }><Component {...props}/></Suspense>
    }
}