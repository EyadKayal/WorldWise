import { useSearchParams } from "react-router-dom";

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

export function useUrlPosition() {
  const [searchParams] = useSearchParams(`${BASE_URL}`);
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  // console.log(lng);

  return [lat, lng];
}
