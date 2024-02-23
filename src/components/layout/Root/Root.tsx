import { Outlet } from 'react-router-dom'
import { Header } from "components/UI/Header/Header";
import { Footer } from '../../UI/Footer /Footer';
export default function Root () {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}
