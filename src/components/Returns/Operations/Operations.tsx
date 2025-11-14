"use client";
import Diagram from '@/components/extras/diagram';
import { animateFadeIn } from '@/utils';
import { motion } from 'framer-motion';
import "@/components/Returns/Operations/Operations.css"

import Step1 from './assets/Step1.png'
import Step2 from './assets/Step2.png'
import Step3 from './assets/Step3.png'
import Step4 from './assets/Step4.png'

const steps = [
  {
    id: 1,
    image: Step1,
    description: 'We receive and check in your return including labeling and registration.',
  },
  {
    id: 2,
    image: Step2,
    description: 'Your return is inspected and categorized based on packaging and item condition.',
  },
  {
    id: 3,
    image: Step3,
    description: 'Your return is handled according to predefined instructions.',
  },
  {
    id: 4,
    image: Step4,
    description:
      'Your return is moved to the next phase and either consolidated, forwarded, repackaged, and shipped to new destination.',
  },
];
export default function Operations_Returns() {
  return (
    <section  className='section-operationsR'>
      <motion.h2 {...animateFadeIn} className='titulo-operationsR'>Operational Process</motion.h2>
      <Diagram section='logistics-process' steps={steps} />
    </section>
  );
}
