declare module 'wowjs' {
    export class WOW {
      constructor(config?: WOW.WOWConfig);
      init(): void;
    }
  
    namespace WOW {
      export interface WOWConfig {
        boxClass?: string;
        animateClass?: string;
        offset?: number;
        mobile?: boolean;
        live?: boolean;
        scrollContainer?: string | null;
      }
    }
  }