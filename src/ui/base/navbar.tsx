import Link from 'next/link';

import { Section } from '../layouts/section';
import { Logo } from './logo';

const Navbar = () => (
  <Section yPadding="py-8">
    <div className="flex flex-wrap justify-between items-center">
      <div>
        <Link href="/">
          <a>
            <Logo xl />
          </a>
        </Link>
      </div>

      <nav>
        <ul className="navbar flex items-center font-medium text-xl text-gray-800">
          <li>
            <Link href="/">
              <a>Link 1</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Link 2</a>
            </Link>
          </li>
        </ul>
      </nav>

      <style jsx>
        {`
          .navbar :global(li:not(:first-child)) {
            @apply mt-0;
          }

          .navbar :global(li:not(:last-child)) {
            @apply mr-5;
          }
        `}
      </style>
    </div>
  </Section>
);

export { Navbar };
