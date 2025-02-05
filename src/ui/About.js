import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class About extends LitElement {
  constructor() {
    super();
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <section id="about-section" class="flex items-center justify-center overflow-x-hidden xl:w-[1280px] 2xl:w-[1300px]">
        <div class="3xl:px-0 flex w-full flex-col gap-12 overflow-x-hidden px-20 sm:w-[640px] sm:px-24 md:w-[768px] md:px-32 lg:w-[1024px] lg:px-36 xl:w-[1280px] 2xl:w-[1300px]">
          <img
            src="/public/assets/about-us/dices.png"
            class="xss:-left-[75%] xs:-left-[80%] absolute -left-[75%] h-full object-contain sm:-left-[40%] md:-left-[30%] lg:-left-[15%] xl:-left-[10%] 2xl:hidden"
            alt=""
          />

          <img src="/public/assets/about-us/dices-complete.png" class="3xl:left-16 absolute top-1/2 hidden h-[280px] -translate-y-1/2 object-contain 2xl:left-0 2xl:!block" alt="" />

          <img
            src="/public/assets/about-us/cards.png"
            class="xss:-right-[90%] xs:-right-[85%] absolute -right-[85%] h-full object-contain sm:-right-[40%] md:-right-[30%] lg:-right-[15%] xl:-right-[10%] 2xl:hidden"
            alt=""
          />

          <img src="/public/assets/about-us/cards.png" class="3xl:right-16 absolute top-1/2 hidden h-[300px] -translate-y-1/2 object-contain 2xl:right-0 2xl:!block" alt="" />

          <article class="flex items-center justify-between">
            <div class="h-0.5 w-full flex-grow rounded-2xl bg-white"></div>

            <div class="flex-grow-0 border-x-[2px] px-4">
              <h3 class="text-golden font-Kulim text-center font-light xl:text-lg 2xl:text-xl">Delivering Social Fun</h3>
            </div>

            <div class="h-0.5 w-full flex-grow rounded-2xl bg-white"></div>
          </article>

          <article class="3xl:px-36 flex flex-col items-center justify-center gap-6 border-b-2 border-white pb-6 text-white lg:pb-10">
            <h2 class="text-golden font-Kulim w-max border-b-4 border-white pb-6 text-center font-semibold md:text-lg lg:text-xl xl:text-2xl">ABOUT US</h2>
            <p class="kyiv-font text-center xl:text-lg">
              Do you like casino games but don't like gambling with real money? Do you want to take some time out of your day and have a game of poker or try your luck with slot machines? Would you
              like to experience the thrill of the casino without leaving your home? Then this site is for you.
            </p>

            <p class="kyiv-font text-center xl:text-lg">
              At [change_DOMAIN] we offer you a great selection of the best social casino for your entertainment. This is a special selection of the best games to fill the thrill of the casino gaming
              without leaving your home and without risking real money! Here you’ll find:
            </p>

            <ul class="kyiv-font ml-5 list-disc xl:text-lg">
              <li>
                <p>Community of players and enthusiasts</p>
              </li>
              <li>
                <p>A lot of complimentary casino games</p>
              </li>
              <li>
                <p>Easy access, without downloads</p>
              </li>
              <li>
                <p>Hours of fun and joy with exclusive games</p>
              </li>
            </ul>
          </article>
        </div>
      </section>
    `;
  }
}

customElements.define('about-section', About);
