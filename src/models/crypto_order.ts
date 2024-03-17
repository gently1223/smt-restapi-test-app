export type CryptoOrderStatus = 'completed' | 'pending' | 'failed';

export interface CryptoOrder {
  id: string;
  status: CryptoOrderStatus;
  orderDetails: string;
  orderDate: number;
  orderID: string;
  sourceName: string;
  sourceDesc: string;
  amountCrypto: number;
  amount: number;
  cryptoCurrency: string;
  name: string;
  competitor: string;
  class: string;
  checkScorer: string;
  s1: string;
  s2: string;
  r1: string;
  r2: string;
  r3: string;
  r4: string;
  r5: string;
  r6: string;
  r7: string;
  r8: string;
  r9: string;
  r10: string;
  matchResult: string;
  centreCount: string;
}
