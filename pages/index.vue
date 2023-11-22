<template>
  <div>
    <Header :links="links" />
    <main class="main">
      <Intro id="home" url="#projects" />
      <About id="about" />
      <News id="news" />
      <Projects id="projects" />
      <Gallery id="gallery" />
      <Representative id="partners" />
      <Vacancy id="careers" />
    </main>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        links: [
          {
            id: 1,
            name: 'Home',
            url: '/#home'
          },
          {
            id: 2,
            name: 'About us',
            url: '#about'
          },
          {
            id: 3,
            name: 'News',
            url: '#news'
          },
          {
            id: 4,
            name: 'Projects',
            url: '#projects'
          },
          {
            id: 5,
            name: 'Gallery',
            url: '#gallery'
          },
          {
            id: 6,
            name: 'Partner',
            url: '#partners'
          },

          {
            id: 7,
            name: 'Contact us',
            url: '#careers'
          }
        ]
      }
    }
  }
</script>
