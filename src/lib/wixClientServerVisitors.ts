import { createClient, OAuthStrategy } from "@wix/sdk";
import { collections, products } from "@wix/stores";

export const wixClientServerVisitors = async () => {
  const wixClient = createClient({
    modules: {
      products,
      collections,
    },
    auth: OAuthStrategy({
      clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
    }),
  });

  return wixClient;
};
