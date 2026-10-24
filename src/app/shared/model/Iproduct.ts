export interface IProduct {
    pName: string;
    pId: string;
    pStatus: 'Delivered' | 'Shipped' | 'Pending';
    canReturn: 1 | 0
}
