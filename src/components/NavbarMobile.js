import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class NavbarMobile extends LitElement {
  static properties = {
    isLanding: {
      type: Boolean,
      attribute: 'is-landing',
      converter: {
        fromAttribute: value => value !== 'false',
        toAttribute: value => value.toString(),
      },
    },
    isMenuOpen: { type: Boolean, state: true },
  };

  static styles = css`
    :host {
      display: block;
    }

    .bg-menu-navbar {
      background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/public/assets/navbar/background.png');
      background-size: cover;
      background-position: center;
    }

    .menu-closed {
      transform: translateX(-768px);
    }

    .menu-open {
      transform: translateX(0);
    }

    .transition-menu {
      transition: all 0.2s ease-in-out;
    }
  `;

  constructor() {
    super();
    this.isMenuOpen = false;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  render() {
    return html`
      <link rel="stylesheet" href="/public/styles/output.css" />

      <header class="fixed z-40 flex w-full items-center justify-center px-4 shadow-[0px_10px_50px_-30px_#00000024] backdrop-blur-3xl sm:px-6 md:hidden md:px-8 lg:px-10">
        <nav class="relative z-50 flex h-[80px] w-full justify-between border-b-[1.5px] border-white sm:w-[640px] md:w-[768px]">
          <div class="flex items-center gap-4 text-lg">
            <a class="flex items-center gap-2" href="${this.isLanding ? '#home-section' : 'index.html'}">
              <img class="w-[45px] object-contain" src="/public/assets/navbar/logo.png" alt="" id="Best 10 UK Spots logo" title="Best 10 UK Spots logo" />
            </a>
          </div>
          <div id="menu-icon-container" class="flex items-center justify-center" @click="${this.toggleMenu}">
            <div>
              <img src="/public/assets/navbar/menu-icon.png" class="size-7 object-contain" id="menu-icon" alt="Menu icon" />
            </div>
          </div>
        </nav>

        <div
          id="menu"
          class="bg-menu-navbar transition-menu navbar-menu ${this.isMenuOpen
            ? 'menu-open'
            : 'menu-closed'} absolute left-0 right-0 top-0 z-50 flex h-screen min-h-[800px] w-full flex-col justify-center gap-12 px-8 text-[#FFFFFF] shadow-md lg:hidden"
        >
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMTIgMmM1LjUzIDAgMTAgNC40NyAxMCAxMHMtNC40NyAxMC0xMCAxMFMyIDE3LjUzIDIgMTJTNi40NyAyIDEyIDJtMy41OSA1TDEyIDEwLjU5TDguNDEgN0w3IDguNDFMMTAuNTkgMTJMNyAxNS41OUw4LjQxIDE3TDEyIDEzLjQxTDE1LjU5IDE3TDE3IDE1LjU5TDEzLjQxIDEyTDE3IDguNDF6Ii8+PC9zdmc+"
            class="fixed right-0 top-0 m-4 size-8 object-contain"
            id="close-icon"
            @click="${this.toggleMenu}"
            alt=""
          />
          <ul class="flex w-full flex-col gap-10">
            <li class="w-full">
              <a href="${this.isLanding ? '#home-section' : 'index.html'}" class="flex items-center justify-between text-lg" @click="${this.closeMenu}">
                <span>Home</span>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik04LjAyNSAyMkw2LjI1IDIwLjIyNUwxNC40NzUgMTJMNi4yNSAzLjc3NUw4LjAyNSAybDEwIDEweiIvPjwvc3ZnPg=="
                  alt="Arrow icon"
                  class="h-5 w-5 object-contain"
                />
              </a>
            </li>
            <li class="w-full">
              <a href="${this.isLanding ? '#about-section' : 'index.html#about-section'}" class="flex items-center justify-between text-lg" @click="${this.closeMenu}">
                <span>About Us</span>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik04LjAyNSAyMkw2LjI1IDIwLjIyNUwxNC40NzUgMTJMNi4yNSAzLjc3NUw4LjAyNSAybDEwIDEweiIvPjwvc3ZnPg=="
                  alt="Arrow icon"
                  class="h-5 w-5 object-contain"
                />
              </a>
            </li>
            <li class="w-full">
              <a href="${this.isLanding ? '#why-us-section' : 'index.html#why-us-section'}" class="flex items-center justify-between text-lg" @click="${this.closeMenu}">
                <span>Why Us?</span>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik04LjAyNSAyMkw2LjI1IDIwLjIyNUwxNC40NzUgMTJMNi4yNSAzLjc3NUw4LjAyNSAybDEwIDEweiIvPjwvc3ZnPg=="
                  alt="Arrow icon"
                  class="h-5 w-5 object-contain"
                />
              </a>
            </li>
            <li class="w-full">
              <a href="${this.isLanding ? '#top-7-section' : 'index.html#top-7-section'}" class="flex items-center justify-between text-lg" @click="${this.closeMenu}">
                <span>Top 7</span>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik04LjAyNSAyMkw2LjI1IDIwLjIyNUwxNC40NzUgMTJMNi4yNSAzLjc3NUw4LjAyNSAybDEwIDEweiIvPjwvc3ZnPg=="
                  alt="Arrow icon"
                  class="h-5 w-5 object-contain"
                />
              </a>
            </li>
          </ul>
        </div>
      </header>
    `;
  }
}

customElements.define('navbar-mobile', NavbarMobile);
