export interface Bike {
  id: string;
  name: string;
  /** List price shown to customers (GBP) */
  price: number;
  /** Your buy/cost price – not shown to users */
  costPrice: number;
  currency: string;
  type: string;
  condition: string;
  image: string;
  description?: string;
}
