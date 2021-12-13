export default {
    name: "img1",
    computed: {
      pictureHover () {
        if (this.hover == true) {
          return this.night
        } else {
          return this.day
        }
      }
    },
    data () {
      return {
        day: "./images/travel_map.jpg",
        night: "./images/travel_flags.jpg",
        hover: false
      }
    },
    template: `
        <img :src="pictureHover" @mouseover="hover = true" @mouseleave="hover = false">
      `
  };
  