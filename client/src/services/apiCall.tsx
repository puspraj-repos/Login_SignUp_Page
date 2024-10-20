import axios from "axios";

export const registerUser = async (url: string, body: any) => {
    try {
        const result = await axios
            .post(url, { ...body });
        return result;
    } catch (err) {
        return err;
    }
};

export const loginUser = async (url: string, body: any) => {
  try {
    const result = await axios.post(url, { ...body });
    return result;
  } catch (err) {
    return err;
  }
};