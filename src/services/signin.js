import axios from "axios";

export const Signin =  async (credentials)=>
{

 return await axios.post(
    `http://localhost:3000/user/login`,
    credentials,
    {
        headers: {
            "Content-Type": "application/json",
        },
    }
)
};