import axios from "axios";
import { TUNNEL } from "@env";

export default axios.create({
  baseURL: `${TUNNEL}`,
})
