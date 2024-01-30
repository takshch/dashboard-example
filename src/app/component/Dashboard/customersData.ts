import ChrisDataURI from '../../../assets/customers/chris.png';
import MaggieDataURI from '../../../assets/customers/maggie.png';
import GaelDataURI from '../../../assets/customers/gael.png';
import JennaDataURI from '../../../assets/customers/jenna.png';
import { CustomerType } from '../../../types/CustomerType';

export const mockCustomers: CustomerType[] = [
  {
    text: 'Chris Friedkly',
    src: ChrisDataURI,
    company: 'Supermarket Villanova',
  },
  {
    text: 'Maggie Johnson',
    src: MaggieDataURI,
    company: 'Oasis Organic Inc.',
  },
  {
    text: 'Gael Harry',
    src: GaelDataURI,
    company: 'New York Finest Fruits',
  },
  {
    text: 'Jenna Sullivan',
    src: JennaDataURI,
    company: 'Walmart',
  },
];
