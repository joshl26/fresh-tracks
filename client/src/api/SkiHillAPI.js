import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const SkiHillAPI = () => {
  const googleTrendsState = useSelector((state) => state.settings.googleTrends);

  useEffect(() => {
    console.log("Ski hill API");
    console.log(googleTrendsState);
  }, []);
};

export default SkiHillAPI;
