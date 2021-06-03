// Original file: ../sharedrepos/stock.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Empty as _stock_Empty, Empty__Output as _stock_Empty__Output } from '../stock/Empty';
import type { Product as _stock_Product, Product__Output as _stock_Product__Output } from '../stock/Product';

export interface StockClient extends grpc.Client {
  ClientStock(metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _stock_Empty__Output) => void): grpc.ClientWritableStream<_stock_Product>;
  ClientStock(metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _stock_Empty__Output) => void): grpc.ClientWritableStream<_stock_Product>;
  ClientStock(options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _stock_Empty__Output) => void): grpc.ClientWritableStream<_stock_Product>;
  ClientStock(callback: (error?: grpc.ServiceError, result?: _stock_Empty__Output) => void): grpc.ClientWritableStream<_stock_Product>;
  clientStock(metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _stock_Empty__Output) => void): grpc.ClientWritableStream<_stock_Product>;
  clientStock(metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _stock_Empty__Output) => void): grpc.ClientWritableStream<_stock_Product>;
  clientStock(options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _stock_Empty__Output) => void): grpc.ClientWritableStream<_stock_Product>;
  clientStock(callback: (error?: grpc.ServiceError, result?: _stock_Empty__Output) => void): grpc.ClientWritableStream<_stock_Product>;
  
}

export interface StockHandlers extends grpc.UntypedServiceImplementation {
  ClientStock: grpc.handleClientStreamingCall<_stock_Product__Output, _stock_Empty>;
  
}

export interface StockDefinition extends grpc.ServiceDefinition {
  ClientStock: MethodDefinition<_stock_Product, _stock_Empty, _stock_Product__Output, _stock_Empty__Output>
}
