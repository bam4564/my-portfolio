import { useEffect, useState } from "react"
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import Home from './home'
import Login from '../Login/index'

const Dashboard = () => {

    const [user, setUser] = useState(null)
    const authorization = getAuth();

    useEffect(() => {
        onAuthStateChanged(authorization, (user) => {
            if(user) {
                setUser(user);
            } else {
                setUser(null);
            }
        })
    }, [])
    return (
        <div>
            {user ? <Home /> : <Login />}
        </div>
    )
}

export default Dashboard