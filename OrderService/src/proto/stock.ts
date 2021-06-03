import type * as grpc from '@grpc/grpc-js';
import type { ServiceDefinition, EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { StockClient as _stock_StockClient, StockDefinition as _stock_StockDefinition } from './stock/Stock';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  stock: {
    Empty: MessageTypeDefinition
    Product: MessageTypeDefinition
    Products: MessageTypeDefinition
    Stock: SubtypeConstructor<typeof grpc.Client, _stock_StockClient> & { service: _stock_StockDefinition }
  }
}

