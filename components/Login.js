import Image from "next/image";
import {signIn} from "next-auth/client"

function Login() {
    return (
        <div className="grid place-items-center">
            <Image
            src="https://links.papareact.com/5me"
            width="100px"
            height="100px"
            />
            <h1 
            className="p-5 bg-blue-500 rounded-full text-white"
            onClick={signIn}>LogIn with Facebook</h1> 
        </div>
    )
}

export default Login
