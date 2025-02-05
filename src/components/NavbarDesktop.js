import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class NavbarDesktop extends LitElement {
  static properties = {
    isLanding: {
      type: Boolean,
      attribute: 'is-landing',
      converter: {
        fromAttribute: value => value !== 'false',
        toAttribute: value => value.toString(),
      },
    },
    activeSection: { type: String },
  };

  static styles = css`
    :host {
      display: block;
    }
    .active {
      color: #ffffff;
      font-weight: bolder;
    }
  `;

  constructor() {
    super();
    this.activeSection = 'hero-section';
    this.observers = new Map();
  }

  firstUpdated() {
    const hash = window.location.hash;
    if (hash) {
      this.activeSection = hash.slice(1);
      if (this.isLanding) {
        setTimeout(() => {
          this.scrollToSection(this.activeSection);
        }, 100);
      }
    }

    if (this.isLanding) {
      this.setupIntersectionObservers();
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.observers.forEach(observer => observer.disconnect());
    this.observers.clear();
  }

  setupIntersectionObservers() {
    const options = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    const sections = ['hero-section', 'about-section', 'why-us-section', 'games-section', 'contact-us-section'];

    sections.forEach(sectionId => {
      const section = document.getElementById(sectionId);
      if (section && !this.observers.has(sectionId)) {
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              this.activeSection = sectionId;
              this.requestUpdate();
            }
          });
        }, options);

        observer.observe(section);
        this.observers.set(sectionId, observer);
      }
    });
  }

  scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = 120;
      const offset = section.offsetTop - headerHeight;
      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      });
    }
  }

  handleNavClick(e, sectionId) {
    e.preventDefault();

    if (!this.isLanding) {
      window.location.href = `/index.html#${sectionId}`;
      return;
    }

    this.activeSection = sectionId;
    this.scrollToSection(sectionId);
    history.pushState(null, null, `#${sectionId}`);
  }

  getNavItemHref(sectionId) {
    return this.isLanding ? `#${sectionId}` : `/index.html#${sectionId}`;
  }

  render() {
    return html`
      <link rel="stylesheet" href="/public/styles/output.css" />
      <link rel="stylesheet" href="/public/styles/globals.css" />

      <header class="fixed z-40 hidden w-full items-center justify-center text-white shadow-sm backdrop-blur-3xl md:inline-flex">
        <div class="w-full border-b-[1px] border-l-[1px] border-r-[1px] border-white sm:w-[640px] md:w-[768px] lg:w-[1024px] lg:px-0 xl:w-[1280px] 2xl:w-[1300px]">
          <nav class="flex h-[80px] w-full justify-between">
            <div class="flex flex-grow-0 items-center border-r-[1px] border-white px-4">
              <a href="${this.getNavItemHref('hero-section')}" @click="${e => this.handleNavClick(e, 'hero-section')}">
                <img id="navbar-logo" class="size-12 shrink-0 object-contain" src="/public/assets/navbar/logo.webp" alt="Top UK Experience" title="Top UK Experience" />
              </a>
            </div>

            <div class="flex-grow-1 flex w-full flex-col justify-center gap-3">
              <div class="flex justify-end py-2 pr-20">
                <ul id="nav-items" class="flex justify-center gap-10 xl:gap-20">
                  <li class="nav-item ${this.activeSection === 'hero-section' ? 'active' : ''} transition-all duration-200" id-nav="hero-section">
                    <a href="${this.getNavItemHref('hero-section')}" @click="${e => this.handleNavClick(e, 'hero-section')}">HOME</a>
                  </li>
                  <li class="nav-item ${this.activeSection === 'about-section' ? 'active' : ''} transition-all duration-200" id-nav="about-section">
                    <a href="${this.getNavItemHref('about-section')}" @click="${e => this.handleNavClick(e, 'about-section')}">ABOUT US</a>
                  </li>
                  <li class="nav-item ${this.activeSection === 'games-section' ? 'active' : ''} transition-all duration-200" id-nav="games-section">
                    <a href="${this.getNavItemHref('games-section')}" @click="${e => this.handleNavClick(e, 'games-section')}">GAMES</a>
                  </li>
                  <li class="nav-item ${this.activeSection === 'contact-us-section' ? 'active' : ''} transition-all duration-200" id-nav="contact-us-section">
                    <a href="${this.getNavItemHref('contact-us-section')}" @click="${e => this.handleNavClick(e, 'contact-us-section')}">CONTACT US</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    `;
  }
}

customElements.define('navbar-desktop', NavbarDesktop);
