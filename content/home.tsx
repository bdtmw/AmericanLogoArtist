import SectionCta from '@/components/sections/SectionCta';
import SectionDots from '@/components/sections/SectionDots';
import SectionMain from '@/components/sections/SectionMain';
import SectionPackages from '@/components/sections/SectionPackages';
import SectionPortfolio from '@/components/sections/SectionPortfolio';
import SectionServices from '@/components/sections/SectionServices';
import SectionTestimonials from '@/components/sections/SectionTestimonials';
import SectionWorkflow from '@/components/sections/SectionWorkflow';

export default function HomeContent() {
  return <>
    <SectionMain />
    <SectionCta />
    <SectionDots />
    <SectionPortfolio />
    <SectionServices />
    <SectionPackages />
    <SectionWorkflow />
    <SectionTestimonials />
  </>;
}
