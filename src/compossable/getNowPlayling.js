import { Config } from "@/config/credentials";
import { ref } from "vue";

const getNowPlaying = () => {
  const nowPlaying = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: "Bearer " + Config.apiKey,
        },
      };

      const response = await fetch(
        Config.baseUrl + "/movie/now_playing?language=en-US&page=1",
        options
      );
      if (!response.ok) {
        throw new Error(
          `Failed to fetch now-playing movies. Status: ${response.status}`
        );
      }

      const data = await response.json();
      nowPlaying.value = data.results;
    } catch (err) {
      error.value = err;
      console.error(err);
    }
  };

  return { error, nowPlaying, load };
};

export default getNowPlaying;
