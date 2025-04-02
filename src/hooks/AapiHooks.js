import axios from "axios";
import { useEffect, useState } from "react";

const useApiHooks = (api, params) => {
  const [data, setData] = useState();
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState();

  const getData = async () => {
    setLoad(true);
    try {
      const response = await axios.get(api, {
        params: params,
      });
      setLoad(false);
      setData((prev) => response.data);
    } catch (err) {
      setLoad(false);
      setErr(err.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return [data, err, load];
};
export default useApiHooks;
