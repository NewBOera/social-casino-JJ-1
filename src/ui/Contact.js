import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class BookingForm extends LitElement {
  static properties = {
    countryInfo: { type: Object },
  };

  constructor() {
    super();
    this.countryInfo = {
      flag: 'https://cdn.jsdelivr.net/npm/country-flag-icons/3x2/GB.svg',
      callingCode: '+44',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  createRenderRoot() {
    return this;
  }

  firstUpdated() {
    this.loadExternalResources();
    this.fetchUserLocation();
    this.initializeEvents();
  }

  loadExternalResources() {
    const iziToastCSS = document.createElement('link');
    iziToastCSS.rel = 'stylesheet';
    iziToastCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/izitoast/1.4.0/css/iziToast.min.css';
    document.head.appendChild(iziToastCSS);

    const iziToastScript = document.createElement('script');
    iziToastScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/izitoast/1.4.0/js/iziToast.min.js';
    document.head.appendChild(iziToastScript);

    iziToastScript.onload = () => {
      window.iziToast.settings({
        timeout: 3000,
        position: 'topRight',
      });
    };
  }

  async fetchUserLocation() {
    try {
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();

      this.countryInfo = {
        flag: `https://cdn.jsdelivr.net/npm/country-flag-icons/3x2/${data.country_code}.svg`,
        callingCode: data.country_calling_code,
      };

      this.updatePhoneInputs();
    } catch (error) {
      console.error('Error fetching location:', error);
    }
  }

  updatePhoneInputs() {
    const phoneInputContainers = this.querySelectorAll('.phone-input-container');
    phoneInputContainers.forEach(container => {
      const flagImg = container.querySelector('img');
      const phoneInput = container.querySelector('input[type="tel"]');

      if (flagImg) {
        flagImg.src = this.countryInfo.flag;
        flagImg.alt = 'Country flag';
      }

      if (phoneInput) {
        phoneInput.value = this.countryInfo.callingCode;
      }
    });
  }

  initializeEvents() {
    const form = this.querySelector('#bookingForm');
    if (form) {
      form.addEventListener('submit', this.handleSubmit);

      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.addEventListener('click', e => {
          e.preventDefault();
          this.handleSubmit(e);
        });
      }
    }
  }

  async sendForm() {
    const GOOGLE_ENPOINT = 'https://script.google.com/macros/s/AKfycbxRFMEQDlUoHs_8FbBb90kRxhJyn-Bhmv-dhYwB9UM9XAC0sAsqG7yty1Tvb4Y8NFEh/exec';

    const form = this.querySelector('#bookingForm');
    const submitBtn = this.querySelector('#submitButton');

    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <div class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-white" role="status">
        <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
      </div>
    `;

    const formData = new FormData(form);

    try {
      const params = new URLSearchParams();
      formData.forEach((value, key) => {
        params.append(key, value);
      });

      const response = await fetch(GOOGLE_ENPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      });

      if (response.ok) {
        window.iziToast.success({
          message: 'Form submitted successfully',
          position: 'topRight',
        });

        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = 'Submit';
          form.reset();
          const thankYouModal = document.getElementById('thank-you');
          if (thankYouModal) {
            thankYouModal.classList.remove('hidden');
          }
        }, 3000);
      } else {
        window.iziToast.warning({
          message: 'Error submitting form',
          position: 'topRight',
        });
      }
    } catch (error) {
      console.error('Error sending form:', error);
    }
  }

  async handleSubmit(event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    const form = this.querySelector('#bookingForm');
    if (!form) {
      console.error('Form not found');
      return;
    }

    let isValid = true;
    const inputs = form.querySelectorAll('input, select');

    inputs.forEach(input => {
      input.classList.remove('error');

      // Email validation
      if (input.name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
        isValid = false;
        input.classList.add('error');
        window.iziToast.warning({
          message: 'Invalid email address',
          position: 'topRight',
        });
      }

      // First name validation
      if (input.name === 'firstName' && (input.value.length < 3 || input.value.length > 50)) {
        isValid = false;
        input.classList.add('error');
        window.iziToast.warning({
          message: 'First name must be between 3 and 50 characters',
          position: 'topRight',
        });
      }

      // Last name validation
      if (input.name === 'lastName' && (input.value.length < 3 || input.value.length > 60)) {
        isValid = false;
        input.classList.add('error');
        window.iziToast.warning({
          message: 'Last name must be between 3 and 60 characters',
          position: 'topRight',
        });
      }
    });

    if (isValid) {
      await this.sendForm();
    }
  }

  render() {
    return html`
      <style>
        :host {
          display: block;
          width: 100%;
        }
        .phone-input-container {
          display: flex;
          align-items: center;
        }
        .phone-input-container .flag-container {
          display: flex;
          align-items: center;
          padding: 0 12px;
          border-right: 1px solid #e5e7eb;
        }
        .phone-input-container img {
          width: 24px !important;
          height: 16px !important;
          object-fit: cover;
          display: block;
        }
        .hidden {
          display: none;
        }
        .error {
          border-color: #ef4444 !important;
        }
      </style>

      <section class="flex items-center justify-center">
        <div class="mx-auto flex w-full flex-col items-center gap-6 px-2 md:w-[768px] md:gap-8 md:px-10 lg:w-[1024px] lg:gap-10 lg:px-12 xl:w-[1280px] xl:gap-12 xl:px-14 2xl:w-[1400px] 2xl:px-16">
          <article class="w-full">
            <h3 class="text-golden font-Kulim text-center font-light xl:text-lg 2xl:text-xl">Do You Need Help With Our Social Casino Games? Let’s Talk!</h3>

            <h2 class="font-Kulim text-center font-semibold text-white md:text-lg lg:text-xl xl:text-2xl">You can send us a message anytime, our team is here to assist you:</h2>
          </article>

          <form id="bookingForm" class="kyiv-font flex w-full max-w-[400px] flex-col items-center justify-center rounded-lg p-4 text-white lg:max-w-[600px] lg:p-6">
            <!-- Basic Details Section -->
            <div class="mb-8 w-full">
              <div class="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
                <!-- First Name Input -->
                <div class="col-span-2">
                  <input
                    name="firstName"
                    type="text"
                    placeholder="Your Name"
                    class="w-full border-b-[1px] border-[#FFFFFF] bg-transparent px-4 py-2 outline-none placeholder:text-center placeholder:font-light placeholder:text-[#FEFEFE] lg:text-lg lg:placeholder:text-start"
                    required
                  />
                </div>

                <!-- Email Input -->
                <div class="col-span-2">
                  <input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    class="w-full border-b-[1px] border-[#FFFFFF] bg-transparent px-4 py-2 outline-none placeholder:text-center placeholder:font-light placeholder:text-[#FEFEFE] lg:text-lg lg:placeholder:text-start"
                    required
                  />
                </div>

                <!-- Message -->
                <div class="col-span-2">
                  <textarea
                    name="message"
                    class="w-full resize-none border-b-[1px] border-[#FFFFFF] bg-transparent px-4 py-3 outline-none placeholder:text-center placeholder:font-light placeholder:text-[#FEFEFE] lg:text-lg lg:placeholder:text-start"
                    placeholder="Enter your message"
                    rows="4"
                    id=""
                  ></textarea>
                </div>
              </div>
            </div>

            <!-- Submit Button -->
            <div class="flex w-full justify-center">
              <button
                id="submitButton"
                type="submit"
                class="text-primary-600 w-full max-w-max border-b-2 border-[#FF0000] bg-transparent px-4 py-1 font-medium transition-all duration-200 hover:scale-[0.98] lg:w-auto lg:px-8"
              >
                <span class="text-lg xl:text-xl">Submit</span>
              </button>
            </div>
          </form>
        </div>
      </section>
    `;
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('click', this.handleClickOutside);
    const form = this.querySelector('#bookingForm');
    if (form) {
      form.removeEventListener('submit', this.handleSubmit);
    }
  }
}

customElements.define('booking-form', BookingForm);
