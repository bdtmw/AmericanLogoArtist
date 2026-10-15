import SectionAppCat from '@/components/sections/SectionAppCat';
import SectionAppTabs from '@/components/sections/SectionAppTabs';
import SectionContact from '@/components/sections/SectionContact';
import SectionInnerMain5 from '@/components/sections/SectionInnerMain5';
import SectionPackages from '@/components/sections/SectionPackages';
import SectionPageIntro5 from '@/components/sections/SectionPageIntro5';
import SectionPortfolio from '@/components/sections/SectionPortfolio';
import SectionPowered from '@/components/sections/SectionPowered';
import SectionTestimonials3 from '@/components/sections/SectionTestimonials3';

export default function AppDevelopmentContent() {
  return <>
    <SectionInnerMain5 />
    <SectionPageIntro5 />
    <SectionAppTabs />
    <SectionPowered />
    <SectionAppCat />
    <SectionPortfolio />
    <SectionPackages />
    <SectionTestimonials3 />
    <SectionContact />
  </>;
}
