import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class Games extends LitElement {
  constructor() {
    super();
    this.activeVideoContainer = null;
    this.iframeCache = {}; // Cache para evitar múltiples cargas del mismo iframe
  }

  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
    this.boundHandleButtonClick = this.handleButtonClick.bind(this);
    this.addEventListener('click', this.boundHandleButtonClick);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('click', this.boundHandleButtonClick);
  }

  handleButtonClick(event) {
    const button = event.target.closest('.openVideoBtn');
    const closeBtn = event.target.closest('.close-btn');

    if (button) {
      const iframeId = button.getAttribute('data-iframe');
      this.showIframeModal(iframeId);
    }

    if (closeBtn) {
      this.hideIframeModal();
    }
  }

  showIframeModal(iframeId) {
    this.activeVideoContainer = this.querySelector(`#videoContainer${iframeId}`);

    if (this.activeVideoContainer) {
      const iframe = this.activeVideoContainer.querySelector('iframe');

      // Solo cargar el iframe si no está en el cache
      if (!this.iframeCache[iframeId]) {
        const src = iframe.getAttribute('data-src');
        if (src) {
          iframe.src = src;
          this.iframeCache[iframeId] = true; // Marcar como cargado
        } else {
          console.error(`URL inválida para el iframe con data-iframe: ${iframeId}`);
        }
      }

      // Mostrar el modal
      this.activeVideoContainer.style.display = 'flex';
    }
  }

  hideIframeModal() {
    if (this.activeVideoContainer) {
      // Pausar el contenido del iframe sin destruirlo
      const iframe = this.activeVideoContainer.querySelector('iframe');
      iframe.src = ''; // Detiene la carga del iframe

      this.activeVideoContainer.style.display = 'none';
      this.activeVideoContainer = null;
    }
  }

  render() {
    return html`
      <section id="games-section" class="kyiv-font flex items-center justify-center">
        <div class="w-full px-4 py-5 sm:w-[640px] sm:px-6 md:w-[768px] md:px-8 lg:w-[1024px] lg:px-10 lg:py-10 xl:w-[1280px] 2xl:w-[1300px]">
          <div class="grid place-content-center gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">${this.renderGames()}</div>
          <!-- Video Modals -->
          ${this.renderModals()}
        </div>
      </section>
    `;
  }

  renderGames() {
    const games = [
      { title: 'The Hand of Midas', img: 'Midas.jpg', iframe: '1' },
      { title: 'Gold Rush', img: 'Rush.jpg', iframe: '2' },
      { title: 'Starlight Princess', img: 'Princess.jpg', iframe: '3' },
      { title: 'Lucky Lightning', img: 'Lucky.jpg', iframe: '4' },
      { title: 'Dragon Tiger', img: 'Dragon.jpg', iframe: '5' },
      { title: 'Star Pirates Code', img: 'Star.jpg', iframe: '6' },
      { title: 'Treasure Wild', img: 'Treasure.jpg', iframe: '7' },
      { title: 'Heart of Rio Slot', img: 'Rise.jpg', iframe: '8' },
      { title: 'Wild Booster Slot', img: 'Booster.jpg', iframe: '9' },
    ];

    return games.map(
      game => html`
        <div class="wow fadeInUp" data-wow-delay="0.1s">
          <div class="w-full max-w-[350px] rounded-lg bg-gray-100 shadow-lg">
            <div class="relative overflow-hidden">
              <img class="h-auto w-full" src="https://shualim.online/wlp/scsn/en/britishreelquest.com/assets/${game.img}" alt="${game.title}" />
            </div>
            <div class="p-4 text-center">
              <h3 class="pb-3 text-lg font-semibold">${game.title}</h3>
              <button class="openVideoBtn rounded bg-black px-4 py-1 text-white transition-all duration-200 hover:scale-95" data-iframe="${game.iframe}">Play Now</button>
            </div>
          </div>
        </div>
      `
    );
  }

  renderModals() {
    const modals = [
      { id: '1', src: 'vs20midas' },
      { id: '2', src: 'vs25goldrush' },
      { id: '3', src: 'vs20starlight' },
      { id: '4', src: 'vswayslight' },
      { id: '5', src: 'vs1024dtiger' },
      { id: '6', src: 'vs10starpirate' },
      { id: '7', src: 'vs20trsbox' },
      { id: '8', src: 'vs25rio' },
      { id: '9', src: 'vs20wildboost' },
    ];

    return modals.map(
      modal => html`
        <div id="videoContainer${modal.id}" class="fixed inset-0 z-50 flex hidden h-screen min-h-[600px] w-full items-center justify-center bg-black/85">
          <div class="relative h-max w-[800px] rounded-lg bg-white p-8 shadow-lg">
            <span class="close-btn absolute -top-1.5 right-1 cursor-pointer text-3xl text-black" data-iframe="${modal.id}">&times;</span>
            <iframe
              class="h-full min-h-[600px] w-full border-none"
              data-src="https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=${modal.src}&websiteUrl=https%3A%2F%2Fdemogamesfree.pragmaticplay.net&jurisdiction=99&lobbyURL=https%3A%2F%2Fwww.pragmaticplay.com&lang=en&cur=USD"
              scrolling="no"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      `
    );
  }
}

customElements.define('games-section', Games);
