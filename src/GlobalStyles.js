import { createGlobalStyle } from "styled-components";

// This is where we'll hold our 'app-wide' styled so we can use them inside of our App.js
// Essentially, this is where you'll want to reset you css styles, set global fonts, etc. etc.
export default createGlobalStyle`
    :root {
        --tone-0: #0F0F0F;
        --tone-1: #202020;
        --tone-2: #303030;
        --tone-3: #484848;
        --tone-4: #606060;
        --tone-5: #909090;
        --tone-6: #B0B0B0;
        --tone-7: #D0D0D0;
        --tone-8: #E0E0E0;
        --tone-9: #F0F0F0;

        --color-sinopia: #D42F00;
        --color-tenne-tawny: #D25D00;
        --color-ochre: #D27200;
        --color-harvest-gold: #D28800;
        --color-lemon-curry: #CF9800;
        --color-apple-green: #95B700;
        --color-olive-drab-3: #7D9A00;
        --color-spanish-green: #2B9457;
        --color-mountain-meadow: #00C1A1;
        --color-turquoise: #00E5DB;

        --color-dark-sienna: #45001A;
        --color-kobe: #891D00;
        --color-chocolate-traditional: #854700;
        --color-bistre-brown: #816500;
        --color-avocado: #4B7E00;
        --color-dark-moss-green: #436100;
        --color-forest-green-traditional: #003E15;
        --color-castleton-green: #105935;
        --color-generic-viridian: #007F6E;
        --color-pacific-blue: #00A4BF;
    }
    *,
    *:before,
    *:after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
    }
    html, body {
        max-width: 100vw;
        background-color: var(--tone-0);
    }
    /* http://meyerweb.com/eric/tools/css/reset/
        v2.0 | 20110126
        License: none (public domain)
    */
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    body {
        font-family: sans-serif;
        font-size:24px;
    }
    a {
        text-decoration: none;
    }
    a:hover {
    }
    h1 {
        /* font-family: sans-serif; */
        font-size: 3rem;
        font-family: 'Nunito Sans', sans-serif;
        display: inline-block;
      }
      h2 {
        font-family: 'Averia Libre';
        /* font-family: sans-serif; */
        font-size: 2rem;
        font-weight: lighter;
        display: inline-block;
      }
      h3 {
        font-family: 'Work Sans', sans-serif;
        font-size: 1.2rem;
        display: inline-block;
      }
  /* tones */
  .tone0{
    background-color: var(--tone-0);
  }
  .tone1{
    background-color: var(--tone-1);
  }
  .tone2{
    background-color: var(--tone-3);
  }
  .tone3{
    background-color: var(--tone-3);
  }
  .tone4{
    background-color: var(--tone-4);
  }
  .tone5{
    background-color: var(--tone-5);
  }
  .tone6{
    background-color: var(--tone-6);
  }
  .tone7{
    background-color: var(--tone-7);
  }
  .tone8{
    background-color: var(--tone-8);
  }
  .tone9{
    background-color: var(--tone-9);
  }
  /* P-Light */
  .sinopia{
    background-color: var(--color-sinopia);
  }
  .tenneTawny{
    background-color: var(--color-tenne-tawny);
  }
  .ochre{
    background-color: var(--color-ochre);
  }
  .harvestGold{
    background-color: var(--color-harvest-gold);
  }
  .lemonCurry{
    background-color: var(--color-lemon-curry);
  }
  .appleGreen{
    background-color: var(--color-apple-green);
  }
  .oliveDrab3{
    background-color: var(--color-olive-drab-3);
  }
  .spanishGreen{
    background-color: var(--color-spanish-green);
  }
  .mountainMeadow{
    background-color: var(--color-mountain-meadow);
  }
  .turquoise{
    background-color: var(--color-turquoise);
  }
  /* P-Dark */
  .darkSienna{
    background-color: var(--color-dark-sienna);
  }
  .kobe{
    background-color: var(--color-kobe);
  }
  .chocolateTraditional{
    background-color: var(--color-chocolate-traditional);
  }
  .bistreBrown{
    background-color: var(--color-bistre-brown);
  }
  .avocado{
    background-color: var(--color-avocado);
  }
  .darkMossGreen{
    background-color: var(--color-dark-moss-green);
  }
  .forestGreenTraditional{
    background-color: var(--color-forest-green-traditional);
  }
  .castletonGreen{
    background-color: var(--color-castleton-green);
  }
  .genericViridian{
    background-color: var(--color-generic-viridian);
  }
  .pacificBlue{
    background-color: var(--color-pacific-blue);
  }
`;
