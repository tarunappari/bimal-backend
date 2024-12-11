import type { Schema, Struct } from '@strapi/strapi';

export interface LandingpageAboutUs extends Struct.ComponentSchema {
  collectionName: 'components_landingpage_aboutuses';
  info: {
    displayName: 'AboutUs';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface LandingpageHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_landingpage_hero_sections';
  info: {
    displayName: 'HeroSection';
  };
  attributes: {
    background: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'landingpage.about-us': LandingpageAboutUs;
      'landingpage.hero-section': LandingpageHeroSection;
    }
  }
}
