import { Config } from "@/config/credentials";
import { ref } from "vue";

const getUpComing = () => {
  const upComing = ref([]);
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
        Config.baseUrl + "/movie/upcoming?language=en-US&page=1",
        options
      );
      if (!response.ok) {
        throw new Error(
          `Failed to fetch popular movies. Status: ${response.status}`
        );
      }

      const data = await response.json();
      upComing.value = data.results;
    } catch (err) {
      error.value = err;
      console.error(err);
    }
  };

  return { error, upComing, load };
};

export default getUpComing;
