/* eslint-disable no-use-before-define */
/* eslint-disable consistent-return */
/* eslint-disable react/jsx-no-constructed-context-values */

'use client';

import { cn } from '@/utils';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useEmblaCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react';
import * as React from 'react';

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: 'horizontal' | 'vertical';
  setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

// eslint-disable-next-line unicorn/no-null
const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />');
  }

  return context;
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(({ orientation = 'horizontal', opts, setApi, plugins, className, children, ...props }, ref) => {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === 'horizontal' ? 'x' : 'y',
      loop: opts?.loop,
    },
    plugins,
  );
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const onSelect = React.useCallback((carouselApi: CarouselApi) => {
    if (!carouselApi) {
      return;
    }

    setCanScrollPrev(carouselApi.canScrollPrev());
    setCanScrollNext(carouselApi.canScrollNext());
  }, []);

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext],
  );

  React.useEffect(() => {
    if (!api || !setApi) {
      return;
    }

    setApi(api);
  }, [api, setApi]);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    onSelect(api);
    api.on('reInit', onSelect);
    api.on('select', onSelect);

    return () => {
      api?.off('select', onSelect);
    };
  }, [api, onSelect]);

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api,
        opts,
        orientation: orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        ref={ref}
        onKeyDownCapture={handleKeyDown}
        className={cn('relative', className)}
        role='region'
        aria-roledescription='carousel'
        {...props}
      >
        {children}
        <CarouselControls />
      </div>
    </CarouselContext.Provider>
  );
});
Carousel.displayName = 'Carousel';

const CarouselContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();

    return (
      <div ref={carouselRef} className='overflow-hidden'>
        <div
          ref={ref}
          className={cn(
            'flex',
            orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col',
            className,
          )}
          {...props}
        />
      </div>
    );
  },
);
CarouselContent.displayName = 'CarouselContent';

const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarousel();

    return (
      <div
        ref={ref}
        role='group'
        aria-roledescription='slide'
        className={cn(
          'min-w-0 shrink-0 grow-0 basis-full',
          orientation === 'horizontal' ? 'pl-4' : 'pt-4',
          className,
        )}
        {...props}
      />
    );
  },
);
CarouselItem.displayName = 'CarouselItem';

const CarouselPrevious = React.forwardRef<HTMLButtonElement>((props, ref) => {
  const { scrollPrev, canScrollPrev } = useCarousel();

  return (
    <button
      type='button'
      ref={ref}
      className={cn(
        'h-12 w-12 text-secondary bg-transparent border border-secondary rounded-full p-2 hover:bg-secondary hover:text-primary focus:bg-secondary focus:text-primary disabled:bg-gray-300 disabled:text-gray-500 disabled:border-gray-300 disabled:cursor-not-allowed',
        'mr-2',
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      aria-disabled={!canScrollPrev}
      {...props}
    >
      <FontAwesomeIcon className='h-4 w-4' icon={faArrowLeft} />
      <span className='sr-only'>Previous slide</span>
    </button>
  );
});
CarouselPrevious.displayName = 'CarouselPrevious';

const CarouselNext = React.forwardRef<HTMLButtonElement>((props, ref) => {
  const { scrollNext, canScrollNext } = useCarousel();

  return (
    <button
      type='button'
      ref={ref}
      className={cn(
        'h-12 w-12 text-secondary bg-transparent border border-secondary rounded-full p-2 hover:bg-secondary hover:text-primary focus:bg-secondary focus:text-primary disabled:bg-gray-300 disabled:text-gray-500 disabled:border-gray-300 disabled:cursor-not-allowed',
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      aria-disabled={!canScrollNext}
      {...props}
    >
      <FontAwesomeIcon className='h-4 w-4' icon={faArrowRight} />
      <span className='sr-only'>Next slide</span>
    </button>
  );
});
CarouselNext.displayName = 'CarouselNext';

function CarouselControls() {
  return (
    <div className='mt-4 flex justify-start pb-4'>
      <CarouselPrevious />
      <CarouselNext />
    </div>
  );
}

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
};
