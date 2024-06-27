import { MdOutlineAccountBalance } from 'react-icons/md';
import { TbReportAnalytics } from 'react-icons/tb';
import { LuLayoutDashboard } from 'react-icons/lu';
import { CiCreditCard2 } from 'react-icons/ci';
import { GrTransaction } from 'react-icons/gr';

import { type ReactNode } from 'react';

export const navData: { href: string; content: string; icon: ReactNode }[] = [
  {
    href: '/dashboard',
    content: 'Dashboard',
    icon: `< ${LuLayoutDashboard} />`,
  },

  {
    href: '/transaction',
    content: 'Tracsaction',
    icon: `<${GrTransaction} />`,
  },

  {
    href: '/report',
    content: 'Report',
    icon: `< ${TbReportAnalytics} />`,
  },

  {
    href: '/card',
    content: 'Card',
    icon: `< ${CiCreditCard2} />`,
  },

  {
    href: '/account',
    content: 'Account',
    icon: `< ${MdOutlineAccountBalance} />`,
  },
];
