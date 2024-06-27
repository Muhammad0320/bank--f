import { MdOutlineAccountBalance } from 'react-icons/md';
import { TbReportAnalytics } from 'react-icons/tb';

import { LuLayoutDashboard } from 'react-icons/lu';
import { IoMoonOutline } from 'react-icons/io5';
import { IoSunnyOutline } from 'react-icons/io5';
import { CiCreditCard2 } from 'react-icons/ci';
import { GrTransaction } from 'react-icons/gr';
import { IconType } from 'react-icons';

export const navData: { href: string; content: string; icon: IconType }[] = [
  {
    href: '/dashboard',
    content: 'Dashboard',
    icon: LuLayoutDashboard,
  },

  {
    href: '/transaction',
    content: 'Tracsaction',
    icon: GrTransaction,
  },

  {
    href: '/report',
    content: 'Report',
    icon: TbReportAnalytics,
  },

  {
    href: '/card',
    content: 'Card',
    icon: CiCreditCard2,
  },

  {
    href: '/account',
    content: 'Account',
    icon: MdOutlineAccountBalance,
  },
];
