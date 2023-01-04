import axios from "axios";

export const register =  async (credentials)=>
{
    return await axios.post(
        `http://localhost:3000/user/register`,
        credentials,
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    )
};

