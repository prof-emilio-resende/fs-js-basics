const axios = require("axios");

const encodedParams = new URLSearchParams();
encodedParams.set("voice_code", "en-US-1");
encodedParams.set("text", "hello, what is your name?");
encodedParams.set("speed", "1.00");
encodedParams.set("pitch", "1.00");
encodedParams.set("output_type", "audio_url");

const options = {
  method: "POST",
  url: "https://cloudlabs-text-to-speech.p.rapidapi.com/synthesize",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "X-RapidAPI-Key": "3e64dc6694msh68cd9dcff7cf744p195956jsn6f27877e2ed4",
    "X-RapidAPI-Host": "cloudlabs-text-to-speech.p.rapidapi.com",
  },
  data: encodedParams,
};

async function apiCall() {
  console.log("=================== API ====================");
  console.log("=================== API ====================");
  
  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }

  console.log("=================== API ====================");
  console.log("=================== API ====================");
}

module.exports = {
  apiCall,
};
