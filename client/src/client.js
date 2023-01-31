import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "xl3lbhvz",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "sknBulAPkshpFaviUZxR1gCMInpdNplKeQDn8VgpsRuVkud0VzXfiT3fu8yx1qv3P2T0eWGxND2DHx3mZu8BzhgdV11bQpn7edO4njtjm1ySHJXCD918ovWE2dKLly0KzOweQFKXMTh4oko5goNVOpaF4KNmRRm9dICIqV6eQ9pupoBtaZD7",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
