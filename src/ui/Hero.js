import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class Hero extends LitElement {
  constructor() {
    super();
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <style>
        #hero-section {
          height: calc(100vh - 180px);
          min-height: 800px;
        }

        @media (min-width: 1524px) {
          #hero-section {
            height: calc(100vh - 80px);
            min-height: 800px;
          }
        }

        @media (min-width: 1024px) {
          #hero-section {
            height: calc(100vh - 80px);
            min-height: 800px;
          }
        }
      </style>

      <section id="hero-section" class="flex items-center justify-center">
        <div
          class="mt-[130px] flex h-full w-full flex-col items-center justify-center gap-6 px-4 text-white sm:w-[640px] sm:px-6 md:w-[768px] md:px-8 lg:mt-[80px] lg:w-[1024px] lg:flex-row lg:px-10 xl:w-[1280px] 2xl:w-[1300px]"
        >
          <article class="flex flex-col items-center gap-3 lg:relative lg:z-30 lg:w-7/12 lg:items-start xl:w-8/12">
            <h1 class="font-Kulim text-center text-3xl font-semibold uppercase tracking-[20%] md:text-4xl lg:text-start xl:text-5xl 2xl:text-6xl">
              <span class="text-lg font-extralight tracking-[20%] md:text-xl xl:text-3xl">CHECK OUT</span>
              <br />
              THE MOST INTENSE SOCIAL CASINO GAMES
            </h1>

            <p class="font-Kulim text-center text-lg font-[255] md:w-10/12 md:text-xl lg:text-start lg:text-lg xl:text-3xl">
              Get ready for the best action of the casino games without downloading any program. This is your chance to play like a pro without risking your cash
              <br />
            </p>

            <div class="mt-5 flex gap-4">
              <a href="#top-7-section" class="rounded-sm bg-white px-4 py-2 text-center font-medium text-black transition-all duration-200 hover:scale-95 md:text-lg lg:px-6 lg:text-xl">Let’s Play!</a>

              <div class="h-8 rounded-2xl bg-white"></div>
            </div>
          </article>

          <article class="lg:w-5/12">
            <img src="/public/assets/hero/vintage-gold.png" alt="Hero Image" class="h-auto w-full max-w-[320px] object-contain lg:relative lg:z-20 lg:-ml-36 lg:max-w-[550px] xl:-ml-52 xl:w-[800px]" />
          </article>
        </div>
      </section>
    `;
  }
}

customElements.define('hero-section', Hero);
