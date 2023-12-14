import { signInWithGoogle } from "../../Firebase"

const Login = () => {
    return (
        <div className="dashboard">
            <button onClick={signInWithGoogle}>
                Sign in with Gmail
            </button>
        </div>
    )
}

export default Login