<template>
  <div class="home">
    <div v-if="activeTab === 'now-playing'">
      <NowPlaying />
    </div>
    <div v-if="activeTab === 'upcoming'">
      <UpComing />
    </div>
    <div v-if="activeTab === 'top-rated'">
      <TopRated />
    </div>
    <div v-if="activeTab === 'popular'">
      <Popular />
    </div>
    <nav>
      <div
        @click="changeTab('now-playing')"
        :class="{ active: activeTab === 'now-playing' }"
      >
        Now Playing
      </div>
      <div
        @click="changeTab('upcoming')"
        :class="{ active: activeTab === 'upcoming' }"
      >
        Upcoming
      </div>
      <div
        @click="changeTab('top-rated')"
        :class="{ active: activeTab === 'top-rated' }"
      >
        Top Rated
      </div>
      <div
        @click="changeTab('popular')"
        :class="{ active: activeTab === 'popular' }"
      >
        Popular
      </div>
    </nav>
  </div>
</template>

<script>
import NowPlaying from "../components/NowPlayingView.vue";
import TopRated from "../components/TopRatedView.vue";
import Popular from "../components/PopularView.vue";
import UpComing from "../components/UpcomingView.vue";

export default {
  name: "HomeView",
  components: { NowPlaying, UpComing, TopRated, Popular },
  data() {
    return {
      activeTab: "now-playing",
    };
  },
  methods: {
    changeTab(tab) {
      this.activeTab = tab;
    },
  },
};
</script>

<style scoped>
/* Add your styles for the bottom navigation here */
nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  display: flex;
  padding: 0px;
  background-color: #f8f8f8;
}

nav div {
  text-decoration: none;
  color: #333;
  width: 25%;
  padding: 12px 10px;
  margin: 0px 12px;
}

nav div.active {
  background-color: red;
  color: #f8f8f8;
}
</style>
