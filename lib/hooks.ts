//creating custom hook
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useActiveSectionContext } from '@/context/active-section-context';
import type { SectionName } from '@/lib/types';

// type useSectionInViewProps = {
//     sectionName: SectionName;
// };


export function useSectionInView(sectionName: SectionName, threshold = 0.75 ) {
  const { ref , inView } = useInView({
    threshold,
    //triggerOnce: true, // Only trigger once when it comes into view
  });
  const {setActiveSection, timeOfLastClick} = useActiveSectionContext();
  

  useEffect(() => {
  if (inView && Date.now() - timeOfLastClick > 1000) {
    setActiveSection(sectionName);
  }
}, [inView, setActiveSection, timeOfLastClick, sectionName]);

return {
    ref,
}



}