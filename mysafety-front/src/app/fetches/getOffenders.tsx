import axios from "axios";

type SearchBy = {
  zipcode: number;
};
export default function getOffenders(data: SearchBy) {
  const options = {
    method: "GET",
    url: "https://sex-offenders.p.rapidapi.com/sexoffender",
    params: {
      // firstName: "Joseph",
      // lastName: "Nigro",
    //   zipcode: data.zipcode,
      zipcode: data.zipcode,
    },
    headers: {
      "x-rapidapi-key": "24587ceb3bmsh5b8a71a30272f11p1d446fjsnc021a931cb39",
      "x-rapidapi-host": "sex-offenders.p.rapidapi.com",
    },
  };

  try {
    const response = axios.request(options);
    console.log('test')
    return response
  } catch (error) {
    console.log("error fetching offenders:", error)
    // res.status(500).json({ error: "Failed to fetch data" });
  }
}
