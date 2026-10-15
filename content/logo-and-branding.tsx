import SectionBrandingCustom from '@/components/sections/SectionBrandingCustom';
import SectionBrandingWorkflow from '@/components/sections/SectionBrandingWorkflow';
import SectionContact from '@/components/sections/SectionContact';
import SectionCta2 from '@/components/sections/SectionCta2';
import SectionInnerMain from '@/components/sections/SectionInnerMain';
import SectionPackages from '@/components/sections/SectionPackages';
import SectionPageIntro from '@/components/sections/SectionPageIntro';
import SectionPortfolio2 from '@/components/sections/SectionPortfolio2';
import SectionTestimonials2 from '@/components/sections/SectionTestimonials2';

export default function LogoAndBrandingContent() {
  return <>
    <SectionInnerMain />
    <SectionPageIntro />
    <SectionBrandingCustom />
    <SectionBrandingWorkflow />
    <SectionCta2 />
    <SectionPortfolio2 />
    <SectionPackages />
    <SectionTestimonials2 />
    <SectionContact />
  </>;
}
