import { Card } from '@mui/material';
import { CryptoOrder } from 'src/models/crypto_order';
import RecentOrdersTable from './RecentOrdersTable';
import { subDays } from 'date-fns';

function RecentOrders() {
  const cryptoOrders: CryptoOrder[] = [
    {
      id: '1',
      orderDetails: 'Fiat Deposit',
      orderDate: new Date().getTime(),
      status: 'completed',
      orderID: 'VUVX709ET7BY',
      sourceName: 'Bank Account',
      sourceDesc: '*** 1111',
      amountCrypto: 34.4565,
      amount: 56787,
      cryptoCurrency: 'ETH',
      s1: '4',
      s2: '5',
      r1: '5',
      r2: '5',
      r3: 'V',
      r4: 'V',
      r5: 'V',
      r6: 'V',
      r7: '',
      r8: '',
      r9: '',
      r10: '',
      matchResult: '30',
      centreCount: '4',
      name: 'Danny',
      competitor: 'John@Endorson',
      class: 'TR',
      checkScorer: 'Joe'
    },
    {
      id: '2',
      orderDetails: 'Fiat Deposit',
      orderDate: new Date().getTime(),
      status: 'completed',
      orderID: 'VUVX709ET7BY',
      sourceName: 'Bank Account',
      sourceDesc: '*** 1111',
      amountCrypto: 34.4565,
      amount: 56787,
      cryptoCurrency: 'ETH',
      s1: '5',
      s2: '4',
      r1: '5',
      r2: '5',
      r3: 'V',
      r4: 'V',
      r5: 'V',
      r6: 'V',
      r7: 'V',
      r8: '5',
      r9: 'V',
      r10: 'V',
      matchResult: '50',
      centreCount: '7',
      name: 'Tom',
      competitor: 'Franklin',
      class: 'TR',
      checkScorer: 'Joe'
    }
  ];

  return (
    <Card>
      <RecentOrdersTable cryptoOrders={cryptoOrders} />
    </Card>
  );
}

export default RecentOrders;
