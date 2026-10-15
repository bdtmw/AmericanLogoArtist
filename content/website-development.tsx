import SectionContact from '@/components/sections/SectionContact';
import SectionCta22 from '@/components/sections/SectionCta22';
import SectionInnerMain3 from '@/components/sections/SectionInnerMain3';
import SectionPackages from '@/components/sections/SectionPackages';
import SectionPageIntro3 from '@/components/sections/SectionPageIntro3';
import SectionPortfolio from '@/components/sections/SectionPortfolio';
import SectionTestimonials2 from '@/components/sections/SectionTestimonials2';
import SectionWebDesign from '@/components/sections/SectionWebDesign';

export default function WebsiteDevelopmentContent() {
  return <>
    <SectionInnerMain3 />
    <SectionPageIntro3 />
    <SectionWebDesign />
    <SectionCta22 />
    <SectionPortfolio />
    <SectionPackages />
    <SectionTestimonials2 />
    <SectionContact />
  </>;
}
