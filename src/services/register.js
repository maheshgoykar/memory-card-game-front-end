import axios from "axios";

export const register =  async (credentials)=>
{
    return await axios.post(
        `https://back-end-mah7.onrender.com/user/register`,
        credentials,
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    )
};

