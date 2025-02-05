import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class Cards extends LitElement {
  constructor() {
    super();
  }

  createRenderRoot() {
    return this;
  }

  render() {
    const CARDS = [
      {
        icon: '/public/assets/cards/diamond.webp',
        title: 'Amusing Casino Games',
        description: 'A lot of entertainment games, from the classics to the newest titles. ',
      },
      {
        icon: '/public/assets/cards/diamond.webp',
        title: 'Without Any Risk',
        description: 'Without downloading any program, just push the button and play!',
      },
      {
        icon: '/public/assets/cards/diamond.webp',
        title: 'A Great Community of Players',
        description: 'This place is for sharing and competing with hundreds of gamers online.',
      },
      {
        icon: '/public/assets/cards/diamond.webp',
        title: 'Unrestricted Access',
        description: 'Play your favorite social casino game anytime and anywhere you want.',
      },
      {
        icon: '/public/assets/cards/diamond.webp',
        title: 'It’s Completely Free',
        description: 'Fun in your leisure time, while playing without betting real money.',
      },
    ];

    return html`
      <section id="about-section" class="kyiv-font flex items-center justify-center">
        <div class="w-full px-4 sm:w-[640px] sm:px-6 md:w-[768px] md:px-8 lg:w-[1024px] lg:px-10 xl:w-[1280px] 2xl:w-[1300px]">
          <div class="flex w-full flex-col items-center justify-center gap-6 md:flex-row md:flex-wrap">
            <!--!Cards -->
            ${CARDS.map(
              card => html`
                <div class="flex flex-col items-center justify-center gap-3 text-center text-white md:h-[235px] md:w-[30%] lg:gap-10 lg:text-lg">
                  <img src="${card.icon}" class="animate-pulse" alt="Diamond Icon Card" />
                  <div class="flex flex-col gap-1">
                    <span class="font-bold">${card.title}</span>
                    <p>${card.description}</p>
                  </div>
                </div>
              `
            )}
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('cards-section', Cards);
