import {Outlet} from 'react-router-dom'
import {Header} from "components/UI/Header/Header";
export default function Root () {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
)

}
