import clsx from 'clsx';
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';

type StepData = {
  id: string;
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
  initial: { y: -100, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.4 } },
};

const animateDesc = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.4 } },
};

export default function Diagram({ section, steps }: DiagramProps) {
  return (
    <motion.div
      className={clsx(
        'bg-white rounded-[40px] flex flex-wrap items-baseline justify-center gap-16 xl:gap-x-32 xl:gap-y-8',
        'mx-auto max-w-full 2xl:max-w-7xl ',
      )}
      variants={animateParent}
      initial='initial'
      whileInView='animate'
    >
      {steps.map(({ id, image, description }, i) => (
        <div
          id={`${section}-${id}`}
          key={`${section}-${id}`}
          className='relative max-w-[250px] text-center'
        >
          <motion.div
            className='absolute right-6 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-center font-black text-white drop-shadow'
            variants={aniamteCircle}
          >
            {i + 1}
          </motion.div>
          <motion.div className='flex flex-col items-center'>
            <motion.div variants={animateImage}>
              <Image
                src={image}
                alt={description}
                width={512}
                height={512}
                className='h-64 w-64'
                style={{ aspectRatio: '1/1' }}
              />
            </motion.div>
            <motion.span
              className='font-montserrat text-sm font-medium text-gray-500'
              variants={animateDesc}
            >
              {description}
            </motion.span>
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
}
