// Original file: example.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Request as _example_package_Request, Request__Output as _example_package_Request__Output } from '../example_package/Request';
import type { Response as _example_package_Response, Response__Output as _example_package_Response__Output } from '../example_package/Response';

export interface ExampleClient extends grpc.Client {
  BidStream(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_example_package_Request, _example_package_Response__Output>;
  BidStream(options?: grpc.CallOptions): grpc.ClientDuplexStream<_example_package_Request, _example_package_Response__Output>;
  bidStream(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_example_package_Request, _example_package_Response__Output>;
  bidStream(options?: grpc.CallOptions): grpc.ClientDuplexStream<_example_package_Request, _example_package_Response__Output>;
  
  ClientRequest(argument: _example_package_Request, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _example_package_Response__Output) => void): grpc.ClientUnaryCall;
  ClientRequest(argument: _example_package_Request, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _example_package_Response__Output) => void): grpc.ClientUnaryCall;
  ClientRequest(argument: _example_package_Request, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _example_package_Response__Output) => void): grpc.ClientUnaryCall;
  ClientRequest(argument: _example_package_Request, callback: (error?: grpc.ServiceError, result?: _example_package_Response__Output) => void): grpc.ClientUnaryCall;
  clientRequest(argument: _example_package_Request, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _example_package_Response__Output) => void): grpc.ClientUnaryCall;
  clientRequest(argument: _example_package_Request, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _example_package_Response__Output) => void): grpc.ClientUnaryCall;
  clientRequest(argument: _example_package_Request, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _example_package_Response__Output) => void): grpc.ClientUnaryCall;
  clientRequest(argument: _example_package_Request, callback: (error?: grpc.ServiceError, result?: _example_package_Response__Output) => void): grpc.ClientUnaryCall;
  
  ClientStream(metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _example_package_Response__Output) => void): grpc.ClientWritableStream<_example_package_Request>;
  ClientStream(metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _example_package_Response__Output) => void): grpc.ClientWritableStream<_example_package_Request>;
  ClientStream(options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _example_package_Response__Output) => void): grpc.ClientWritableStream<_example_package_Request>;
  ClientStream(callback: (error?: grpc.ServiceError, result?: _example_package_Response__Output) => void): grpc.ClientWritableStream<_example_package_Request>;
  clientStream(metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _example_package_Response__Output) => void): grpc.ClientWritableStream<_example_package_Request>;
  clientStream(metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _example_package_Response__Output) => void): grpc.ClientWritableStream<_example_package_Request>;
  clientStream(options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _example_package_Response__Output) => void): grpc.ClientWritableStream<_example_package_Request>;
  clientStream(callback: (error?: grpc.ServiceError, result?: _example_package_Response__Output) => void): grpc.ClientWritableStream<_example_package_Request>;
  
  ServerStream(argument: _example_package_Request, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_example_package_Response__Output>;
  ServerStream(argument: _example_package_Request, options?: grpc.CallOptions): grpc.ClientReadableStream<_example_package_Response__Output>;
  serverStream(argument: _example_package_Request, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_example_package_Response__Output>;
  serverStream(argument: _example_package_Request, options?: grpc.CallOptions): grpc.ClientReadableStream<_example_package_Response__Output>;
  
}

export interface ExampleHandlers extends grpc.UntypedServiceImplementation {
  BidStream: grpc.handleBidiStreamingCall<_example_package_Request__Output, _example_package_Response>;
  
  ClientRequest: grpc.handleUnaryCall<_example_package_Request__Output, _example_package_Response>;
  
  ClientStream: grpc.handleClientStreamingCall<_example_package_Request__Output, _example_package_Response>;
  
  ServerStream: grpc.handleServerStreamingCall<_example_package_Request__Output, _example_package_Response>;
  
}

export interface ExampleDefinition extends grpc.ServiceDefinition {
  BidStream: MethodDefinition<_example_package_Request, _example_package_Response, _example_package_Request__Output, _example_package_Response__Output>
  ClientRequest: MethodDefinition<_example_package_Request, _example_package_Response, _example_package_Request__Output, _example_package_Response__Output>
  ClientStream: MethodDefinition<_example_package_Request, _example_package_Response, _example_package_Request__Output, _example_package_Response__Output>
  ServerStream: MethodDefinition<_example_package_Request, _example_package_Response, _example_package_Request__Output, _example_package_Response__Output>
}
