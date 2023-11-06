import { Navigate, Route, Routes } from 'react-router-dom'
import Signup from "../Pages/Signup/signup";
import Login from '../Pages/Login/login';
import GamesBoard from '../Pages/GamesBoard/GamesBoard';
import GamesDetails from '../Pages/GameDetails/GameDetails';

const Router = () =>{
    return(
        <Routes>
            <Route path='/' element = {<Navigate to = '/login' replace />}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/signup" element={<Signup/>}/>
            <Route exact path="/GamesBoard" element={<GamesBoard/>}/>
            <Route exact path="/GameDetails" element={<GamesDetails/>}/>
        </Routes>
    )
}
export default Router