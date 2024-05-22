export const clients = [...new Array(10)].map((client, i) => ({
  href: `/${i + 1}.png`,
}));
