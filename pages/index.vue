<template>
  <div>
    <Header :links="links" />
    <main class="main">
      <Intro id="home" url="#projects" :intro="intro" />
      <About id="about" :aboutUs="aboutUs" />
      <News id="news" :news="news" />
      <Projects id="projects" :projects="projects" />
      <Gallery id="gallery" :gallery="gallery" />
      <Representative id="partners" :main="main" />
      <Vacancy id="careers" />
    </main>
  </div>
</template>

<script>
import {
  GET_ABOUT,
  GET_GALLERY,
  GET_HOME,
  GET_NEWS,
  GET_PARTNERS,
  GET_PROJECTS,
} from "@/api/home.api";

export default {
  data() {
    return {
      aboutUs: {},
      intro: {},
      news: {},
      projects: [],
      gallery: [],
      main: {
        dealership: [],
        clients: [],
        projects: [],
      },
      links: [
        {
          id: 1,
          name: "Home",
          url: "/#home",
        },
        {
          id: 2,
          name: "About us",
          url: "#about",
        },
        {
          id: 3,
          name: "EHS",
          url: "/ehs",
        },
        {
          id: 4,
          name: "News",
          url: "#news",
        },
        {
          id: 5,
          name: "Projects",
          url: "#projects",
        },
        {
          id: 6,
          name: "Gallery",
          url: "#gallery",
        },
        {
          id: 7,
          name: "Partner",
          url: "#partners",
        },

        {
          id: 8,
          name: "Contact us",
          url: "#careers",
        },
      ],
    };
  },

  async mounted() {
    await this.fetchAbout();
    await this.fetchIntro();
    await this.fetchNews();
    await this.fetchProjects();
    await this.fetchPartners();
    await this.fetchGallery();
  },

  methods: {
    async fetchIntro() {
      try {
        const { data, statusCode } = await GET_HOME();
        if (statusCode) {
          this.intro = data || {};
        }
      } catch (error) {
        console.error(error);
      }
    },

    async fetchAbout() {
      try {
        const { data, statusCode } = await GET_ABOUT();
        if (statusCode) {
          this.aboutUs = data || {};
        }
      } catch (error) {
        console.error(error);
      }
    },

    async fetchNews() {
      try {
        const { data, statusCode } = await GET_NEWS();
        if (statusCode) {
          this.news = data || {};
        }
      } catch (error) {
        console.error(error);
      }
    },

    async fetchProjects() {
      try {
        const { data, statusCode } = await GET_PROJECTS();
        if (statusCode) {
          this.projects = data || [];
        }
      } catch (error) {
        console.error(error);
      }
    },

    async fetchGallery() {
      try {
        const { data, statusCode } = await GET_GALLERY();
        if (statusCode) {
          this.gallery = data || [];
        }
      } catch (error) {
        console.error(error);
      }
    },

    async fetchPartners() {
      try {
        const { data, statusCode } = await GET_PARTNERS();
        if (statusCode) {
          this.main = data || {};
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
