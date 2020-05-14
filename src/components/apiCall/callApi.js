import axios from "axios";

//get data
export const GetData = url => axios.get(url).then(res => res.data);
