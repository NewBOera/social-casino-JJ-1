import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class Footer extends LitElement {
  static properties = {
    isLanding: {
      type: Boolean,
      attribute: 'is-landing',
      converter: {
        fromAttribute: value => value !== 'false',
        toAttribute: value => value.toString(),
      },
    },
  };

  constructor() {
    super();
  }

  openModalLegals(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <footer id="footer-section" class="kyiv-font flex items-center justify-center bg-[#202024]">
        <div class="w-full px-4 sm:w-[640px] sm:px-6 md:w-[768px] md:px-8 lg:w-[1024px] lg:px-10 xl:w-[1280px] 2xl:w-[1300px]">
          <div class="flex flex-col items-center gap-6 py-5 text-center text-white lg:py-10">
            <div class="flex flex-col gap-6 md:flex-row md:justify-between">
              <div class="flex justify-center lg:w-2/12 lg:items-start">
                <img src="/public/assets/footer/logo.webp" alt="Logo" class="object-contain" />
              </div>

              <div class="lg:w-3/12">
                <h5 class="mb-3 font-bold">Contact Information</h5>
                <ul class="flex flex-col gap-5">
                  <li>
                    <span>Name: Top UK Experience</span>
                  </li>
                  <li>
                    <span>Address: Canterbury Court, 1-3 Brixton Rd, London SW9 6DE, United Kingdom</span>
                  </li>
                  <li>
                    <span>Email: info@topukexperience.com</span>
                  </li>
                </ul>
              </div>

              <div class="lg:w-3/12">
                <h5 class="mb-3 font-bold">Useful Links</h5>
                <ul class="flex flex-col gap-5">
                  <li>
                    <span @click="${() => this.openModalLegals('disclaimer')}" class="cursor-pointer">Disclaimer</span>
                  </li>
                  <li>
                    <span @click="${() => this.openModalLegals('privacy-policy')}" class="cursor-pointer">Privacy Policy</span>
                  </li>
                  <li>
                    <span @click="${() => this.openModalLegals('terms-conditions')}" class="cursor-pointer">Terms and Conditions</span>
                  </li>
                </ul>
              </div>

              <p class="hidden lg:!block lg:w-4/12">
                Always remember to take your gaming with caution and responsibility. At Top UK Experience we want you to have fun in a safe manner. In order to prevent issues with your wellbeing and
                health we encourage you to measure your time gaming online. Whenever you feel that your gaming habits are growing negatively, we strongly suggest that you seek professional
                help immediately.
              </p>
            </div>
            <p class="lg:hidden">
              Always remember to take your gaming with caution and responsibility. At Top UK Experience we want you to have fun in a safe manner. In order to prevent issues with your wellbeing and
              health we encourage you to measure your time gaming online. Whenever you feel that your gaming habits are growing negatively, we strongly suggest that you seek professional
              help immediately.
            </p>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('footer-element', Footer);
