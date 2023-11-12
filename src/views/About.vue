<template>
  <main class="about-page">
    <h1>Our Story</h1>
    <section class="intro-section">
      <figcaption>
        <h2>Welcome to Assessify!</h2>
        <p>We're a SASS company that provides a Report Card Software</p>
      </figcaption>
      <figure class="about-banner">
        <img src="/assets/undraw_Educator_re_ju47.png" width="800" height="580" loading="lazy" alt="about banner"
          class="w-100">
      </figure>
    </section>
    <section class="about" aria-labelledby="about-label">
      <div class="about-content">
        <section>
          <h2>About Us</h2>
          <p>We are dedicated to providing the best report card software tool on the market.</p>
          <p>Report Card Software was founded in 2023. Since then, we continue to aid organization and schools
            streamline
            their
            report card processes.</p>
        </section>
        <section>
          <h2>Meet Our Team</h2>
          <div>
            <h5>- Stephanie Grim -</h5>
            <p>Professional Dog Lover</p>
            <p>Enjoy mentoring, learning from others, and spending time with family and friends</p>
          </div>
        </section>
        <section>
          <h2>Our Software Tool</h2>
          <p>Our report card software tool makes it easy to create and distribute report cards. It will includes
            features
            such
            as customizable templates, automatic grading, and secure sharing all of which are in progress and are soon
            to
            come.
          </p>
        </section>
        <section>
          <h2>Mission & Values</h2>
          <p>We look to empower educators, and everyone in-between with the tools they need to effectively
            communicate
            student progress to parents, students. We value innovation, quality, and exceptional customer service.</p>
        </section>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue';

const count = ref(0);
</script>

<style lang="scss" scoped>
main {
  padding: 7.5rem 0rem;
  padding-bottom: 0rem;
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
}

h2 {
  font-size: 2.75rem;
  color: var(--text-primary-color);
  text-align: center;
}

.about-page {
  display: flex;
  align-items: center;

  figcaption {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4rem;
  }

  h1 {
    text-transform: uppercase;
    font-size: 3rem;
    margin-top: 0.5rem;
    padding-bottom: 3rem;
    text-underline-offset: 0.45rem;
    text-decoration: 0.15rem underline wavy var(--text-primary-color);
    color: var(--text-primary-color);
  }

  p {
    font-size: 1.25rem;
    text-align: center;
    color: var(--text-primary-color);
    padding: 0 1rem;
    ;
  }
}

.intro-section {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 4rem;
  padding: 16rem;
  padding-top: 3rem;
  padding-bottom: 6rem;
  align-items: center;
  min-height: 70vh;
  border: 0.15rem solid var(--text-primary-color);
  border-radius:


    54% 46% 16% 84% / 42% 14% 86% 58%;
  background-color: var(--background-color-secondary);
  width: 90vw;

  img {
    min-width: 40vw;
    object-fit: contain;
    border-radius: 0.5rem;
  }
}

.about {
  background-image: url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-blend-mode: 1;
  min-width: 100%;
  min-height: 100;
  margin: 0;
}

.about-content {
  padding: 0 1rem;
  padding: 0 0.5rem;
  margin: 0 auto;
  max-width: 1000px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  h2 {
    font-size: 2.5rem;
    color: var(--text-primary-color);
    padding: 1rem 0;
    text-align: center;
    text-underline-offset: 0.45rem;
    text-decoration: 0.15rem underline wavy var(--text-primary-color);
  }

  section {
    padding: 1rem 2rem;
    margin: 2rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: 0.25rem solid var(--text-primary-color);
    border-radius: 0.5rem;
    backdrop-filter: blur(0.8rem);


    h5 {
      font-size: 1.5rem;
      text-align: center;
      color: var(--text-primary-color);
      padding: 0 1rem;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 1rem 0;

      p {
        font-size: 1rem;
        text-align: center;
        color: var(--text-primary-color);
        padding: 0 1rem;
      }
    }
  }
}

@media (max-width: 1024px) {
  .about-page {
    figcaption {
      padding: 1rem;
    }
  }

  .intro-section {
    min-height: 77vh;


    img {
      min-width: 50vw;
      object-fit: contain;
      border-radius: 0.5rem;
    }

  }

  .about-content {
    section {
      h2 {
        font-size: 2.25rem;
      }
    }
  }
}

@media (max-width: 768px) {
  .intro-section {
    display: flex;
    flex-direction: column;
    min-height: 80vh;
    border-radius: 19% 167% 142% 84% / 80% 39% 84% 30%;
    padding: 0;

    img {
      min-width: 60vw;
      object-fit: contain;
      border-radius: 0.5rem;
      margin: 0rem;
      padding: 3rem;
      padding-top: 0rem;
    }

    h2 {
      font-size: 2rem;
      text-align: center;
    }


  }

  .about-page {
    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1rem;
    }
  }

  .about-content {
    section {
      h2 {
        font-size: 2rem;
      }
    }
  }
}
</style>