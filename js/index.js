var app = new Vue({
    el: '#app',
    data: {
        currentSlide: 0,
        isPreviousSlide: false,
        isFirstLoad: true,
        slides: [
            {
                headlineFirstLine: "FIFA",
                headlineSecondLine: "18",
                sublineFirstLine: "#UNITE",
                sublineSecondLine: "",
                bgImg: "https://s27.postimg.org/iz6qk21wz/slide0.jpg",
                rectImg: "https://s27.postimg.org/rgouhim83/slide_rect0.jpg"
            },
            {
                headlineFirstLine: "DOTA ",
                headlineSecondLine: "2",
                sublineFirstLine: "#UNITE",
                sublineSecondLine: "",
                bgImg: "https://s24.postimg.org/3xfyl0zat/slide1.jpg",
                rectImg: "https://s27.postimg.org/r00xg9gib/slide_rect1.jpg"
            },
            {
                headlineFirstLine: "CS",
                headlineSecondLine: "GO",
                sublineFirstLine: "#UNITE",
                sublineSecondLine: "",
                bgImg: "https://s29.postimg.org/80bb1536f/slide2.jpg",
                rectImg: "https://s28.postimg.org/a2i6ateul/slide_rect2.jpg"
            },
            {
                headlineFirstLine: "BLUR",
                headlineSecondLine: "",
                sublineFirstLine: "#UNITE",
                sublineSecondLine: "",
                bgImg: "https://s29.postimg.org/80bb1536f/slide2.jpg",
                rectImg: "https://s28.postimg.org/a2i6ateul/slide_rect2.jpg"
            },
            {
                headlineFirstLine: "RAINBOW",
                headlineSecondLine: "SIX SIEGE",
                sublineFirstLine: "#UNITE",
                sublineSecondLine: "",
                bgImg: "https://s29.postimg.org/80bb1536f/slide2.jpg",
                rectImg: "https://s28.postimg.org/a2i6ateul/slide_rect2.jpg"
            }        ]
    },
  mounted: function () {
    var productRotatorSlide = document.getElementById("app");
        var startX = 0;
        var endX = 0;

        productRotatorSlide.addEventListener("touchstart", (event) => startX = event.touches[0].pageX);

        productRotatorSlide.addEventListener("touchmove", (event) => endX = event.touches[0].pageX);

        productRotatorSlide.addEventListener("touchend", function(event) {
            var threshold = startX - endX;

            if (threshold < 150 && 0 < this.currentSlide) {
                this.currentSlide--;
            }
            if (threshold > -150 && this.currentSlide < this.slides.length - 1) {
                this.currentSlide++;
            }
        }.bind(this));
  },
    methods: {
        updateSlide(index) {
            index < this.currentSlide ? this.isPreviousSlide = true : this.isPreviousSlide = false;
            this.currentSlide = index;
            this.isFirstLoad = false;
        }
    }
})