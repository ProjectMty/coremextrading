import clsx from 'clsx';
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import UpAnimate from '../Animate/UpAnimate';

type StepData = {
  id: number;
  image: StaticImageData;
  description: string;
};

type DiagramProps = {
  section: string;
  steps: Array<StepData>;
};

const animateParent = {
  animate: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const aniamteCircle = {
  initial: { scale: 0 },
  animate: { scale: 1, transition: { duration: 0.4 } },
};

const animateImage = {
  initial: { y: 0, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.4 } },
};

const animateDesc = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.4 } },
};

export default function Diagram({ section, steps }: DiagramProps) {
  return (
    <motion.div
      className="contenedor-pasos-operationsR"
      variants={animateParent}
      initial='initial'
      whileInView='animate'
    >
      {steps.map(({ id, image, description }, i) => (
        <UpAnimate key={`${section}-${id}`} move={-20}>
          <div
            id={`${section}-${id}`}
            className={id % 2 === 0 ? "contenedor-paso1-operationsR" : "contenedor-paso2-operationsR"}
          >
            <motion.div
              className='contenedor-numero-operationsR z-100'
              variants={aniamteCircle}
            >
              {id}
            </motion.div>
            <motion.div className='flex flex-col items-center'>
              <motion.div variants={animateImage}>
                <Image
                  src={image}
                  alt={description}
                  width={512}
                  height={512}
                  className='h-40 w-50 mt-5 z-0'
                />
              </motion.div>
              <motion.span
                className='w-[80%] mx-auto font-montserrat text-sm font-medium text-gray-500 mt-5'
                variants={animateDesc}
              >
                {description}
              </motion.span>
            </motion.div>
          </div>
        </UpAnimate>

      ))}
    </motion.div>
  );
}
