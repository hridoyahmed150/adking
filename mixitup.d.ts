// mixitup.d.ts
declare module "mixitup" {
  export interface Mixer {
    // Define the methods you need from the MixItUp instance
    destroy: () => void;
    // Add any other methods you will use
  }

  export default function mixitup(
    container: string | HTMLElement,
    options?: unknown
  ): Mixer;
}
