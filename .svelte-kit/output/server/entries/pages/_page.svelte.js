import { h as head } from "../../chunks/index.js";
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>C++ Developer Portfolio</title>`;
    $$payload2.out += `<meta name="description" content="C++ developer portfolio showcasing systems programming projects"/>`;
  });
  $$payload.out += `<section class="hero svelte-1yzhtm7"><div class="container svelte-1yzhtm7"><h1 class="svelte-1yzhtm7">Your Name</h1> <p class="tagline svelte-1yzhtm7">C++ Developer &amp; Systems Programmer</p> <p class="description svelte-1yzhtm7">I build high-performance applications with efficient algorithms and clean architecture.
			Passionate about computer graphics, game engines, and low-level optimization.</p> <div class="cta svelte-1yzhtm7"><a href="#projects" class="btn primary svelte-1yzhtm7">View My Work</a> <a href="#contact" class="btn secondary svelte-1yzhtm7">Get In Touch</a></div></div></section>`;
}
export {
  _page as default
};
