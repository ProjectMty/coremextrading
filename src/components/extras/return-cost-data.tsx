/* eslint-disable sonarjs/no-duplicate-string */
import { getCurrencyFormat } from '@/utils';

const returnCostsData = [
  {
    id: crypto.randomUUID(),
    top: { title: 'Return Processing', cost: getCurrencyFormat(0.99), type: 'Per Item' },
    content: (
      <ul className='mx-auto flex list-disc flex-col gap-2 px-16 py-6 text-[20px] text-white'>
        <li>Return wholesale buy back offers</li>
        <li>No account set up fees</li>
        <li>Free storage for the first 60 days</li>
        <li>No mandatory contracts</li>
        <li>Customized pricing to fit your product</li>
        <li>size, rotation, and handling requirements</li>
      </ul>
    ),
  },
  {
    id: crypto.randomUUID(),
    top: { title: 'Dispose', cost: getCurrencyFormat(1.5), type: 'Receiving Fee' },
    content: (
      <div className='space-y-4 px-8 py-6'>
        <p className='text-center text-lg font-bold text-[#8FCB80]'>Repackage Fee:</p>
        <ul className='mx-auto flex list-disc flex-col gap-1 px-8 text-lg text-white'>
          <li>
            <span className='text-primary'>$0.50</span> for items less than 5 lbs
          </li>
          <li>
            <span className='text-primary'>$1.00</span> for items less than 10 lbs
          </li>
          <li>
            <span className='text-primary'>$2.00</span> for items less than 25 lbs
          </li>
          <li>
            <span className='text-primary'>$4.00</span> for items less than 50 lbs
          </li>
          <li>
            <span className='text-primary'>$5.50</span> for items greater than 50 lbs
          </li>
        </ul>
        <p className='text-center text-lg font-bold text-[#8FCB80]'>Shipping Fee:</p>
        <p className='text-center text-lg text-white'>N/A</p>
      </div>
    ),
  },
  {
    id: crypto.randomUUID(),
    top: { title: 'Donate', cost: getCurrencyFormat(1.5), type: 'Receiving Fee' },
    content: (
      <div className='space-y-4 px-8 py-6'>
        <p className='text-center text-lg font-bold text-[#8FCB80]'>Resale Fee:</p>
        <p className='text-center text-lg text-white'>N/A</p>
        <p className='text-center text-lg font-bold text-[#8FCB80]'>Shipping Fee:</p>
        <p className='text-center text-lg text-white'>
          At the seller&apos;s expense, you can schedule LTL or carrier pickup, or you can provide
          us with shipping labels. Oftentimes, sellers already have shipment agreements with
          charities and the receiver provides the shipping labels. If the charity is local and you
          would like us to deliver or coordinate delivery, we will quote out transport on a case by
          case basis.
        </p>
      </div>
    ),
  },
  {
    id: crypto.randomUUID(),
    top: { title: 'Consolidate', cost: getCurrencyFormat(1.5), type: 'Receiving Fee' },
    content: (
      <div className='space-y-4 px-8 py-6'>
        <p className='text-center text-lg font-bold text-[#8FCB80]'>Consolidate Fee:</p>
        <p className='text-center text-4xl font-bold text-primary'>$0.50</p>
        <p className='text-center text-lg font-bold text-[#8FCB80]'>Shipping Fee:</p>
        <p className='text-center text-lg text-white'>
          At seller&apos;s expense, you can schedule LTL or carrier pickup, or you can provide us
          with shipping labels.
        </p>
      </div>
    ),
  },

  {
    id: crypto.randomUUID(),
    top: { title: 'Resale', cost: getCurrencyFormat(1.5), type: 'Receiving Fee' },
    content: (
      <div className='space-y-4 px-8 py-6'>
        <p className='text-center text-lg font-bold text-[#8FCB80]'>Resale Fee:</p>
        <p className='text-center text-4xl font-bold text-white'>$1.50</p>
        <p className='text-center text-lg font-bold text-[#8FCB80]'>Shipping Fee:</p>
        <p className='text-center text-lg text-white'>N/A</p>
      </div>
    ),
  },
  {
    id: crypto.randomUUID(),
    top: { title: 'Repackage and Ship', cost: getCurrencyFormat(1.5), type: 'Receiving Fee' },
    content: (
      <div className='space-y-4 px-8 py-6'>
        <p className='text-center text-lg font-bold text-[#8FCB80]'>Repackage Fee:</p>
        <ul className='mx-auto flex list-disc flex-col gap-1 px-8 text-lg text-white'>
          <li>
            <span className='text-primary'>$1.00</span> for items less than 5 lbs
          </li>
          <li>
            <span className='text-primary'>$2.00</span> for items less than 10 lbs
          </li>
          <li>
            <span className='text-primary'>$4.00</span> for items less than 25 lbs
          </li>
          <li>
            <span className='text-primary'>$5.00</span> for items less than 50 lbs
          </li>
          <li>
            <span className='text-primary'>$7.00</span> for items greater than 50 lbs
          </li>
        </ul>
        <p className='text-center text-lg font-bold text-[#8FCB80]'>Shipping Fee:</p>
        <p className='text-center text-lg text-white'>
          At seller&apos;s expense, you can schedule LTL or carrier pickup, or you can provide us
          with shipping labels.
        </p>
      </div>
    ),
  },
];

export default returnCostsData;
