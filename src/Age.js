import { useEffect } from "react"

export const Age = () => {
    useEffect(() => {

        console.log('age did mount')
    
        // component will unmount
        return () => {
            console.log(' will unmont')
        }
    })
    return(<div> my age component </div>)
}