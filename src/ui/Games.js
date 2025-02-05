import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class Games extends LitElement {
  constructor() {
    super();
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <section id="about-section" class="kyiv-font flex items-center justify-center">
        <div class="w-full px-4 py-5 sm:w-[640px] sm:px-6 md:w-[768px] md:px-8 lg:w-[1024px] lg:px-10 lg:py-10 xl:w-[1280px] 2xl:w-[1300px]">
          <div class="flex w-full flex-col items-center justify-center gap-10 md:flex-row md:flex-wrap lg:gap-10 lg:text-lg md:[&>div]:w-[47%] lg:[&>div]:w-[30%]">
            <div class="game-bg flex h-[360px] w-[80%] max-w-[380px] items-end rounded-lg p-4 text-center text-white shadow-md md:max-w-full">
              <div class="w-full">Lorem ipsum dolor sit amet, consectetur</div>
            </div>

            <div class="game-bg flex h-[360px] w-[80%] max-w-[380px] items-end rounded-lg p-4 text-center text-white shadow-md md:max-w-full">
              <div class="w-full">Lorem ipsum dolor sit amet, consectetur</div>
            </div>

            <div class="game-bg flex h-[360px] w-[80%] max-w-[380px] items-end rounded-lg p-4 text-center text-white shadow-md md:max-w-full">
              <div class="w-full">Lorem ipsum dolor sit amet, consectetur</div>
            </div>

            <div class="game-bg flex h-[360px] w-[80%] max-w-[380px] items-end rounded-lg p-4 text-center text-white shadow-md md:max-w-full">
              <div class="w-full">Lorem ipsum dolor sit amet, consectetur</div>
            </div>

            <div class="game-bg flex h-[360px] w-[80%] max-w-[380px] items-end rounded-lg p-4 text-center text-white shadow-md md:max-w-full">
              <div class="w-full">Lorem ipsum dolor sit amet, consectetur</div>
            </div>

            <div class="game-bg flex h-[360px] w-[80%] max-w-[380px] items-end rounded-lg p-4 text-center text-white shadow-md md:max-w-full">
              <div class="w-full">Lorem ipsum dolor sit amet, consectetur</div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('games-section', Games);
