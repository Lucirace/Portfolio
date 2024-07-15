<template>
  <div class="bg-secondary">
    <div class="container py-3">
      <div class="row pt-1 align-items-center">
        <div
          class="col-xl-6 col-bg-6 col-md-6 col-sm-12 pbelow"
          style="color: white"
        >
          <span
            >Contact through my
            <a href="mailto:nipuntechid10t@gmail.com">Email</a>
          </span>
        </div>

        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12 align-items-center">
          <div class="text-center">
            <button
              class="btn btn-outline-secondary mx-2"
              @click="open('twitter')"
              v-tooltip.bottom="'Twitter'"
            >
              <i class="fab fa-twitter"></i>
            </button>
            <button
              class="btn btn-outline-secondary mx-2"
              @click="open('instagram')"
              v-tooltip.bottom="'Instagram'"
            >
              <i class="fab fa-instagram"></i>
            </button>
            <button
              class="btn btn-outline-secondary mx-2"
              @click="open('linkedin')"
              v-tooltip.bottom="'LinkedIn'"
            >
              <i class="fab fa-linkedin"></i>
            </button>
            <button
              class="btn btn-outline-secondary mx-2"
              @click="open('github')"
              v-tooltip.bottom="'Github'"
            >
              <i class="fab fa-github"></i>
            </button>
            <button
              class="btn btn-outline-secondary mx-2"
              @click="open('googledev')"
              v-tooltip.bottom="'Google Developer'"
            >
              <i class="fab fa-google"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import info from "../../info";

export default {
  name: "Footer",
  data() {
    return {
      instagram: info.links.instagram,
      twitter: info.links.twitter,
      linkedin: info.links.linkedin,
      github: info.links.github,
      googledev: info.links.googledev,
      resume: info.links.resume,
    };
  },
  methods: {
    open(link) {
      switch (link) {
        case "instagram":
          window.open(this.instagram, "_blank");
          break;
        case "twitter":
          window.open(this.twitter, "_blank");
          break;
        case "linkedin":
          window.open(this.linkedin, "_blank");
          break;
        case "github":
          window.open(this.github, "_blank");
          break;
        case "googledev":
          window.open(this.googledev, "_blank");
          break;
        case "resume":
          window.open(this.resume, "_blank");
          break;
        case "gmail":
          window.open(this.gmail, "_blank");
          break;
      }
    },
  },
};
</script>

<style scoped>
span {
  font-weight: 500;
}

.btn {
  border-color: white;
  color: white;
}

.btn:hover {
  background-color: white;
  border-color: white;
  color: gray;
}

.btn:focus {
  background-color: white;
  border-color: white;
  color: gray;
}

@media screen and (max-width: 580px) {
  .pbelow {
    padding-bottom: 20px;
    text-align: center;
  }
}
</style>
