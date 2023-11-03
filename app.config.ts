export default defineAppConfig({
  docus: {
    title: "Agile book",
    description: "アジャイル開発手法についてのオンラインブック",
    image:
      "https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png",
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
      repo: "docus",
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
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true,
    },
  },
});
