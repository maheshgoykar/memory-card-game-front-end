import axios from "axios";

export const Signin =  async (credentials)=>
{

 return await axios.post(
    `https://back-end-mah7.onrender.com/user/login`,
    credentials,
    {
        headers: {
            "Content-Type": "application/json",
        },
    }
)
};