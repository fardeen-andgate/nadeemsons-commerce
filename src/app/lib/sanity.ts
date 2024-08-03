import { createClient } from "next-sanity";
import urlBuilder from "@sanity/image-url";

export const client = createClient({
    projectId: 'hb6o25bt',
    dataset: 'production',
    apiVersion: '2024-07-02',
    useCdn: true
})

const builder = urlBuilder (client);

export function urlFor(source:any) {
    return builder.image(source);
}