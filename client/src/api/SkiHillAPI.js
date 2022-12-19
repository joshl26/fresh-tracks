import { useEffect } from "react";
import { useSelector } from "react-redux";

const SkiHillAPI = () => {
  const googleTrendsState = useSelector((state) => state.settings.googleTrends);

  useEffect(() => {
    if (googleTrendsState.length > 0) {
      console.log("Ski hill API");
      console.log(googleTrendsState);
    }
  }, [googleTrendsState]);
};

export default SkiHillAPI;
