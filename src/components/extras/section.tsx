import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';

type SectionProps = React.PropsWithChildren<{
  id: string;
  withPadding?: boolean;
  className?: HTMLAttributes<HTMLElement>['className'];
}>;

export default function Section({ id, className, children, withPadding = true }: SectionProps) {
  return (
    <section
      id={id}
      className={clsx(
        'text-base lg:text-lg 2xl:text-xl',
        withPadding && 'px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24',
        withPadding && 'py-6 sm:py-10 md:py-14 lg:py-[4.5rem] xl:py-[5.5rem] 2xl:py-[6.5rem]',
        className,
      )}
    >
      {children}
    </section>
  );
}
