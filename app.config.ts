export default defineAppConfig({
  docus: {
    title: "Agile book",
    description: "アジャイル開発手法についてのオンラインブック",
    image:
      "agile-book.png",
    socials: {
      twitter: "jabelic_",
      github: "jabelic-works/Agile",
      // nuxt: {
      //   label: "Nuxt",
      //   icon: "simple-icons:nuxtdotjs",
      //   href: "https://nuxt.com",
      // },
    },
    github: {
      dir: ".starters/default/content",
      branch: "main",
      repo: "Agile",
      owner: "nuxt-themes",
      edit: true,
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: [],
    },
    main: {
      padded: true,
      fluid: true,
    },
    header: {
      logo:true,
      title: "Agile book",
      description: "アジャイル開発手法についてのオンラインブック",
      showLinkIcon: true,
      exclude: [],
      fluid: true,
    },
  },
});
