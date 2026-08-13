
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Location
 * 
 */
export type Location = $Result.DefaultSelection<Prisma.$LocationPayload>
/**
 * Model Substance
 * 
 */
export type Substance = $Result.DefaultSelection<Prisma.$SubstancePayload>
/**
 * Model Container
 * 
 */
export type Container = $Result.DefaultSelection<Prisma.$ContainerPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Locations
 * const locations = await prisma.location.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Locations
   * const locations = await prisma.location.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.location`: Exposes CRUD operations for the **Location** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.location.findMany()
    * ```
    */
  get location(): Prisma.LocationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.substance`: Exposes CRUD operations for the **Substance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Substances
    * const substances = await prisma.substance.findMany()
    * ```
    */
  get substance(): Prisma.SubstanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.container`: Exposes CRUD operations for the **Container** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Containers
    * const containers = await prisma.container.findMany()
    * ```
    */
  get container(): Prisma.ContainerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.9.1
   * Query Engine version: e922089b7d7502aff4249d5da3420f6fa55fc6ad
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Location: 'Location',
    Substance: 'Substance',
    Container: 'Container',
    Transaction: 'Transaction',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "location" | "substance" | "container" | "transaction" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Location: {
        payload: Prisma.$LocationPayload<ExtArgs>
        fields: Prisma.LocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findFirst: {
            args: Prisma.LocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findMany: {
            args: Prisma.LocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          create: {
            args: Prisma.LocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          createMany: {
            args: Prisma.LocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LocationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          delete: {
            args: Prisma.LocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          update: {
            args: Prisma.LocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          deleteMany: {
            args: Prisma.LocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          upsert: {
            args: Prisma.LocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          aggregate: {
            args: Prisma.LocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocation>
          }
          groupBy: {
            args: Prisma.LocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocationCountArgs<ExtArgs>
            result: $Utils.Optional<LocationCountAggregateOutputType> | number
          }
        }
      }
      Substance: {
        payload: Prisma.$SubstancePayload<ExtArgs>
        fields: Prisma.SubstanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubstanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubstancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubstanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubstancePayload>
          }
          findFirst: {
            args: Prisma.SubstanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubstancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubstanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubstancePayload>
          }
          findMany: {
            args: Prisma.SubstanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubstancePayload>[]
          }
          create: {
            args: Prisma.SubstanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubstancePayload>
          }
          createMany: {
            args: Prisma.SubstanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubstanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubstancePayload>[]
          }
          delete: {
            args: Prisma.SubstanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubstancePayload>
          }
          update: {
            args: Prisma.SubstanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubstancePayload>
          }
          deleteMany: {
            args: Prisma.SubstanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubstanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubstanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubstancePayload>[]
          }
          upsert: {
            args: Prisma.SubstanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubstancePayload>
          }
          aggregate: {
            args: Prisma.SubstanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubstance>
          }
          groupBy: {
            args: Prisma.SubstanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubstanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubstanceCountArgs<ExtArgs>
            result: $Utils.Optional<SubstanceCountAggregateOutputType> | number
          }
        }
      }
      Container: {
        payload: Prisma.$ContainerPayload<ExtArgs>
        fields: Prisma.ContainerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContainerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContainerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContainerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContainerPayload>
          }
          findFirst: {
            args: Prisma.ContainerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContainerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContainerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContainerPayload>
          }
          findMany: {
            args: Prisma.ContainerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContainerPayload>[]
          }
          create: {
            args: Prisma.ContainerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContainerPayload>
          }
          createMany: {
            args: Prisma.ContainerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContainerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContainerPayload>[]
          }
          delete: {
            args: Prisma.ContainerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContainerPayload>
          }
          update: {
            args: Prisma.ContainerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContainerPayload>
          }
          deleteMany: {
            args: Prisma.ContainerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContainerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContainerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContainerPayload>[]
          }
          upsert: {
            args: Prisma.ContainerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContainerPayload>
          }
          aggregate: {
            args: Prisma.ContainerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContainer>
          }
          groupBy: {
            args: Prisma.ContainerGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContainerGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContainerCountArgs<ExtArgs>
            result: $Utils.Optional<ContainerCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    location?: LocationOmit
    substance?: SubstanceOmit
    container?: ContainerOmit
    transaction?: TransactionOmit
    user?: UserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type LocationCountOutputType
   */

  export type LocationCountOutputType = {
    fromTransactions: number
    toTransactions: number
  }

  export type LocationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromTransactions?: boolean | LocationCountOutputTypeCountFromTransactionsArgs
    toTransactions?: boolean | LocationCountOutputTypeCountToTransactionsArgs
  }

  // Custom InputTypes
  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationCountOutputType
     */
    select?: LocationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountFromTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountToTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type SubstanceCountOutputType
   */

  export type SubstanceCountOutputType = {
    containers: number
  }

  export type SubstanceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    containers?: boolean | SubstanceCountOutputTypeCountContainersArgs
  }

  // Custom InputTypes
  /**
   * SubstanceCountOutputType without action
   */
  export type SubstanceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubstanceCountOutputType
     */
    select?: SubstanceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubstanceCountOutputType without action
   */
  export type SubstanceCountOutputTypeCountContainersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContainerWhereInput
  }


  /**
   * Count Type ContainerCountOutputType
   */

  export type ContainerCountOutputType = {
    transactions: number
  }

  export type ContainerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | ContainerCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * ContainerCountOutputType without action
   */
  export type ContainerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContainerCountOutputType
     */
    select?: ContainerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContainerCountOutputType without action
   */
  export type ContainerCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    used: number
    verified: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    used?: boolean | UserCountOutputTypeCountUsedArgs
    verified?: boolean | UserCountOutputTypeCountVerifiedArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUsedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVerifiedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Location
   */

  export type AggregateLocation = {
    _count: LocationCountAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  export type LocationMinAggregateOutputType = {
    name: string | null
  }

  export type LocationMaxAggregateOutputType = {
    name: string | null
  }

  export type LocationCountAggregateOutputType = {
    name: number
    _all: number
  }


  export type LocationMinAggregateInputType = {
    name?: true
  }

  export type LocationMaxAggregateInputType = {
    name?: true
  }

  export type LocationCountAggregateInputType = {
    name?: true
    _all?: true
  }

  export type LocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Location to aggregate.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locations
    **/
    _count?: true | LocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationMaxAggregateInputType
  }

  export type GetLocationAggregateType<T extends LocationAggregateArgs> = {
        [P in keyof T & keyof AggregateLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocation[P]>
      : GetScalarType<T[P], AggregateLocation[P]>
  }




  export type LocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithAggregationInput | LocationOrderByWithAggregationInput[]
    by: LocationScalarFieldEnum[] | LocationScalarFieldEnum
    having?: LocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationCountAggregateInputType | true
    _min?: LocationMinAggregateInputType
    _max?: LocationMaxAggregateInputType
  }

  export type LocationGroupByOutputType = {
    name: string
    _count: LocationCountAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  type GetLocationGroupByPayload<T extends LocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationGroupByOutputType[P]>
            : GetScalarType<T[P], LocationGroupByOutputType[P]>
        }
      >
    >


  export type LocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    fromTransactions?: boolean | Location$fromTransactionsArgs<ExtArgs>
    toTransactions?: boolean | Location$toTransactionsArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>

  export type LocationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
  }, ExtArgs["result"]["location"]>

  export type LocationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
  }, ExtArgs["result"]["location"]>

  export type LocationSelectScalar = {
    name?: boolean
  }

  export type LocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"name", ExtArgs["result"]["location"]>
  export type LocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromTransactions?: boolean | Location$fromTransactionsArgs<ExtArgs>
    toTransactions?: boolean | Location$toTransactionsArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LocationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LocationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Location"
    objects: {
      fromTransactions: Prisma.$TransactionPayload<ExtArgs>[]
      toTransactions: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      name: string
    }, ExtArgs["result"]["location"]>
    composites: {}
  }

  type LocationGetPayload<S extends boolean | null | undefined | LocationDefaultArgs> = $Result.GetResult<Prisma.$LocationPayload, S>

  type LocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocationCountAggregateInputType | true
    }

  export interface LocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Location'], meta: { name: 'Location' } }
    /**
     * Find zero or one Location that matches the filter.
     * @param {LocationFindUniqueArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocationFindUniqueArgs>(args: SelectSubset<T, LocationFindUniqueArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Location that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocationFindUniqueOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocationFindUniqueOrThrowArgs>(args: SelectSubset<T, LocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocationFindFirstArgs>(args?: SelectSubset<T, LocationFindFirstArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocationFindFirstOrThrowArgs>(args?: SelectSubset<T, LocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.location.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.location.findMany({ take: 10 })
     * 
     * // Only select the `name`
     * const locationWithNameOnly = await prisma.location.findMany({ select: { name: true } })
     * 
     */
    findMany<T extends LocationFindManyArgs>(args?: SelectSubset<T, LocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Location.
     * @param {LocationCreateArgs} args - Arguments to create a Location.
     * @example
     * // Create one Location
     * const Location = await prisma.location.create({
     *   data: {
     *     // ... data to create a Location
     *   }
     * })
     * 
     */
    create<T extends LocationCreateArgs>(args: SelectSubset<T, LocationCreateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Locations.
     * @param {LocationCreateManyArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocationCreateManyArgs>(args?: SelectSubset<T, LocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Locations and returns the data saved in the database.
     * @param {LocationCreateManyAndReturnArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Locations and only return the `name`
     * const locationWithNameOnly = await prisma.location.createManyAndReturn({
     *   select: { name: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LocationCreateManyAndReturnArgs>(args?: SelectSubset<T, LocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Location.
     * @param {LocationDeleteArgs} args - Arguments to delete one Location.
     * @example
     * // Delete one Location
     * const Location = await prisma.location.delete({
     *   where: {
     *     // ... filter to delete one Location
     *   }
     * })
     * 
     */
    delete<T extends LocationDeleteArgs>(args: SelectSubset<T, LocationDeleteArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Location.
     * @param {LocationUpdateArgs} args - Arguments to update one Location.
     * @example
     * // Update one Location
     * const location = await prisma.location.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocationUpdateArgs>(args: SelectSubset<T, LocationUpdateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Locations.
     * @param {LocationDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.location.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocationDeleteManyArgs>(args?: SelectSubset<T, LocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocationUpdateManyArgs>(args: SelectSubset<T, LocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations and returns the data updated in the database.
     * @param {LocationUpdateManyAndReturnArgs} args - Arguments to update many Locations.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Locations and only return the `name`
     * const locationWithNameOnly = await prisma.location.updateManyAndReturn({
     *   select: { name: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LocationUpdateManyAndReturnArgs>(args: SelectSubset<T, LocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Location.
     * @param {LocationUpsertArgs} args - Arguments to update or create a Location.
     * @example
     * // Update or create a Location
     * const location = await prisma.location.upsert({
     *   create: {
     *     // ... data to create a Location
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Location we want to update
     *   }
     * })
     */
    upsert<T extends LocationUpsertArgs>(args: SelectSubset<T, LocationUpsertArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.location.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends LocationCountArgs>(
      args?: Subset<T, LocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LocationAggregateArgs>(args: Subset<T, LocationAggregateArgs>): Prisma.PrismaPromise<GetLocationAggregateType<T>>

    /**
     * Group by Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationGroupByArgs['orderBy'] }
        : { orderBy?: LocationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Location model
   */
  readonly fields: LocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Location.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fromTransactions<T extends Location$fromTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, Location$fromTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    toTransactions<T extends Location$toTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, Location$toTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Location model
   */
  interface LocationFieldRefs {
    readonly name: FieldRef<"Location", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Location findUnique
   */
  export type LocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findUniqueOrThrow
   */
  export type LocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findFirst
   */
  export type LocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findFirstOrThrow
   */
  export type LocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findMany
   */
  export type LocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location create
   */
  export type LocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to create a Location.
     */
    data: XOR<LocationCreateInput, LocationUncheckedCreateInput>
  }

  /**
   * Location createMany
   */
  export type LocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Location createManyAndReturn
   */
  export type LocationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Location update
   */
  export type LocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to update a Location.
     */
    data: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
    /**
     * Choose, which Location to update.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location updateMany
   */
  export type LocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location updateManyAndReturn
   */
  export type LocationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location upsert
   */
  export type LocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The filter to search for the Location to update in case it exists.
     */
    where: LocationWhereUniqueInput
    /**
     * In case the Location found by the `where` argument doesn't exist, create a new Location with this data.
     */
    create: XOR<LocationCreateInput, LocationUncheckedCreateInput>
    /**
     * In case the Location was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
  }

  /**
   * Location delete
   */
  export type LocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter which Location to delete.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location deleteMany
   */
  export type LocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locations to delete
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to delete.
     */
    limit?: number
  }

  /**
   * Location.fromTransactions
   */
  export type Location$fromTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Location.toTransactions
   */
  export type Location$toTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Location without action
   */
  export type LocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
  }


  /**
   * Model Substance
   */

  export type AggregateSubstance = {
    _count: SubstanceCountAggregateOutputType | null
    _avg: SubstanceAvgAggregateOutputType | null
    _sum: SubstanceSumAggregateOutputType | null
    _min: SubstanceMinAggregateOutputType | null
    _max: SubstanceMaxAggregateOutputType | null
  }

  export type SubstanceAvgAggregateOutputType = {
    id: number | null
  }

  export type SubstanceSumAggregateOutputType = {
    id: number | null
  }

  export type SubstanceMinAggregateOutputType = {
    id: number | null
    dateAdded: Date | null
    productName: string | null
    lotNumber: string | null
    materialType: string | null
    unit: string | null
    expirationDate: Date | null
    receivedDate: Date | null
  }

  export type SubstanceMaxAggregateOutputType = {
    id: number | null
    dateAdded: Date | null
    productName: string | null
    lotNumber: string | null
    materialType: string | null
    unit: string | null
    expirationDate: Date | null
    receivedDate: Date | null
  }

  export type SubstanceCountAggregateOutputType = {
    id: number
    dateAdded: number
    productName: number
    lotNumber: number
    materialType: number
    unit: number
    expirationDate: number
    receivedDate: number
    _all: number
  }


  export type SubstanceAvgAggregateInputType = {
    id?: true
  }

  export type SubstanceSumAggregateInputType = {
    id?: true
  }

  export type SubstanceMinAggregateInputType = {
    id?: true
    dateAdded?: true
    productName?: true
    lotNumber?: true
    materialType?: true
    unit?: true
    expirationDate?: true
    receivedDate?: true
  }

  export type SubstanceMaxAggregateInputType = {
    id?: true
    dateAdded?: true
    productName?: true
    lotNumber?: true
    materialType?: true
    unit?: true
    expirationDate?: true
    receivedDate?: true
  }

  export type SubstanceCountAggregateInputType = {
    id?: true
    dateAdded?: true
    productName?: true
    lotNumber?: true
    materialType?: true
    unit?: true
    expirationDate?: true
    receivedDate?: true
    _all?: true
  }

  export type SubstanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Substance to aggregate.
     */
    where?: SubstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Substances to fetch.
     */
    orderBy?: SubstanceOrderByWithRelationInput | SubstanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Substances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Substances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Substances
    **/
    _count?: true | SubstanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubstanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubstanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubstanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubstanceMaxAggregateInputType
  }

  export type GetSubstanceAggregateType<T extends SubstanceAggregateArgs> = {
        [P in keyof T & keyof AggregateSubstance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubstance[P]>
      : GetScalarType<T[P], AggregateSubstance[P]>
  }




  export type SubstanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubstanceWhereInput
    orderBy?: SubstanceOrderByWithAggregationInput | SubstanceOrderByWithAggregationInput[]
    by: SubstanceScalarFieldEnum[] | SubstanceScalarFieldEnum
    having?: SubstanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubstanceCountAggregateInputType | true
    _avg?: SubstanceAvgAggregateInputType
    _sum?: SubstanceSumAggregateInputType
    _min?: SubstanceMinAggregateInputType
    _max?: SubstanceMaxAggregateInputType
  }

  export type SubstanceGroupByOutputType = {
    id: number
    dateAdded: Date
    productName: string
    lotNumber: string
    materialType: string
    unit: string
    expirationDate: Date | null
    receivedDate: Date
    _count: SubstanceCountAggregateOutputType | null
    _avg: SubstanceAvgAggregateOutputType | null
    _sum: SubstanceSumAggregateOutputType | null
    _min: SubstanceMinAggregateOutputType | null
    _max: SubstanceMaxAggregateOutputType | null
  }

  type GetSubstanceGroupByPayload<T extends SubstanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubstanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubstanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubstanceGroupByOutputType[P]>
            : GetScalarType<T[P], SubstanceGroupByOutputType[P]>
        }
      >
    >


  export type SubstanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dateAdded?: boolean
    productName?: boolean
    lotNumber?: boolean
    materialType?: boolean
    unit?: boolean
    expirationDate?: boolean
    receivedDate?: boolean
    containers?: boolean | Substance$containersArgs<ExtArgs>
    _count?: boolean | SubstanceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["substance"]>

  export type SubstanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dateAdded?: boolean
    productName?: boolean
    lotNumber?: boolean
    materialType?: boolean
    unit?: boolean
    expirationDate?: boolean
    receivedDate?: boolean
  }, ExtArgs["result"]["substance"]>

  export type SubstanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dateAdded?: boolean
    productName?: boolean
    lotNumber?: boolean
    materialType?: boolean
    unit?: boolean
    expirationDate?: boolean
    receivedDate?: boolean
  }, ExtArgs["result"]["substance"]>

  export type SubstanceSelectScalar = {
    id?: boolean
    dateAdded?: boolean
    productName?: boolean
    lotNumber?: boolean
    materialType?: boolean
    unit?: boolean
    expirationDate?: boolean
    receivedDate?: boolean
  }

  export type SubstanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dateAdded" | "productName" | "lotNumber" | "materialType" | "unit" | "expirationDate" | "receivedDate", ExtArgs["result"]["substance"]>
  export type SubstanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    containers?: boolean | Substance$containersArgs<ExtArgs>
    _count?: boolean | SubstanceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubstanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SubstanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SubstancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Substance"
    objects: {
      containers: Prisma.$ContainerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      dateAdded: Date
      productName: string
      lotNumber: string
      materialType: string
      unit: string
      expirationDate: Date | null
      receivedDate: Date
    }, ExtArgs["result"]["substance"]>
    composites: {}
  }

  type SubstanceGetPayload<S extends boolean | null | undefined | SubstanceDefaultArgs> = $Result.GetResult<Prisma.$SubstancePayload, S>

  type SubstanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubstanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubstanceCountAggregateInputType | true
    }

  export interface SubstanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Substance'], meta: { name: 'Substance' } }
    /**
     * Find zero or one Substance that matches the filter.
     * @param {SubstanceFindUniqueArgs} args - Arguments to find a Substance
     * @example
     * // Get one Substance
     * const substance = await prisma.substance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubstanceFindUniqueArgs>(args: SelectSubset<T, SubstanceFindUniqueArgs<ExtArgs>>): Prisma__SubstanceClient<$Result.GetResult<Prisma.$SubstancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Substance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubstanceFindUniqueOrThrowArgs} args - Arguments to find a Substance
     * @example
     * // Get one Substance
     * const substance = await prisma.substance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubstanceFindUniqueOrThrowArgs>(args: SelectSubset<T, SubstanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubstanceClient<$Result.GetResult<Prisma.$SubstancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Substance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubstanceFindFirstArgs} args - Arguments to find a Substance
     * @example
     * // Get one Substance
     * const substance = await prisma.substance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubstanceFindFirstArgs>(args?: SelectSubset<T, SubstanceFindFirstArgs<ExtArgs>>): Prisma__SubstanceClient<$Result.GetResult<Prisma.$SubstancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Substance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubstanceFindFirstOrThrowArgs} args - Arguments to find a Substance
     * @example
     * // Get one Substance
     * const substance = await prisma.substance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubstanceFindFirstOrThrowArgs>(args?: SelectSubset<T, SubstanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubstanceClient<$Result.GetResult<Prisma.$SubstancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Substances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubstanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Substances
     * const substances = await prisma.substance.findMany()
     * 
     * // Get first 10 Substances
     * const substances = await prisma.substance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const substanceWithIdOnly = await prisma.substance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubstanceFindManyArgs>(args?: SelectSubset<T, SubstanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubstancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Substance.
     * @param {SubstanceCreateArgs} args - Arguments to create a Substance.
     * @example
     * // Create one Substance
     * const Substance = await prisma.substance.create({
     *   data: {
     *     // ... data to create a Substance
     *   }
     * })
     * 
     */
    create<T extends SubstanceCreateArgs>(args: SelectSubset<T, SubstanceCreateArgs<ExtArgs>>): Prisma__SubstanceClient<$Result.GetResult<Prisma.$SubstancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Substances.
     * @param {SubstanceCreateManyArgs} args - Arguments to create many Substances.
     * @example
     * // Create many Substances
     * const substance = await prisma.substance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubstanceCreateManyArgs>(args?: SelectSubset<T, SubstanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Substances and returns the data saved in the database.
     * @param {SubstanceCreateManyAndReturnArgs} args - Arguments to create many Substances.
     * @example
     * // Create many Substances
     * const substance = await prisma.substance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Substances and only return the `id`
     * const substanceWithIdOnly = await prisma.substance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubstanceCreateManyAndReturnArgs>(args?: SelectSubset<T, SubstanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubstancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Substance.
     * @param {SubstanceDeleteArgs} args - Arguments to delete one Substance.
     * @example
     * // Delete one Substance
     * const Substance = await prisma.substance.delete({
     *   where: {
     *     // ... filter to delete one Substance
     *   }
     * })
     * 
     */
    delete<T extends SubstanceDeleteArgs>(args: SelectSubset<T, SubstanceDeleteArgs<ExtArgs>>): Prisma__SubstanceClient<$Result.GetResult<Prisma.$SubstancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Substance.
     * @param {SubstanceUpdateArgs} args - Arguments to update one Substance.
     * @example
     * // Update one Substance
     * const substance = await prisma.substance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubstanceUpdateArgs>(args: SelectSubset<T, SubstanceUpdateArgs<ExtArgs>>): Prisma__SubstanceClient<$Result.GetResult<Prisma.$SubstancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Substances.
     * @param {SubstanceDeleteManyArgs} args - Arguments to filter Substances to delete.
     * @example
     * // Delete a few Substances
     * const { count } = await prisma.substance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubstanceDeleteManyArgs>(args?: SelectSubset<T, SubstanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Substances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubstanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Substances
     * const substance = await prisma.substance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubstanceUpdateManyArgs>(args: SelectSubset<T, SubstanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Substances and returns the data updated in the database.
     * @param {SubstanceUpdateManyAndReturnArgs} args - Arguments to update many Substances.
     * @example
     * // Update many Substances
     * const substance = await prisma.substance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Substances and only return the `id`
     * const substanceWithIdOnly = await prisma.substance.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubstanceUpdateManyAndReturnArgs>(args: SelectSubset<T, SubstanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubstancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Substance.
     * @param {SubstanceUpsertArgs} args - Arguments to update or create a Substance.
     * @example
     * // Update or create a Substance
     * const substance = await prisma.substance.upsert({
     *   create: {
     *     // ... data to create a Substance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Substance we want to update
     *   }
     * })
     */
    upsert<T extends SubstanceUpsertArgs>(args: SelectSubset<T, SubstanceUpsertArgs<ExtArgs>>): Prisma__SubstanceClient<$Result.GetResult<Prisma.$SubstancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Substances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubstanceCountArgs} args - Arguments to filter Substances to count.
     * @example
     * // Count the number of Substances
     * const count = await prisma.substance.count({
     *   where: {
     *     // ... the filter for the Substances we want to count
     *   }
     * })
    **/
    count<T extends SubstanceCountArgs>(
      args?: Subset<T, SubstanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubstanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Substance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubstanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubstanceAggregateArgs>(args: Subset<T, SubstanceAggregateArgs>): Prisma.PrismaPromise<GetSubstanceAggregateType<T>>

    /**
     * Group by Substance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubstanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubstanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubstanceGroupByArgs['orderBy'] }
        : { orderBy?: SubstanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubstanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubstanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Substance model
   */
  readonly fields: SubstanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Substance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubstanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    containers<T extends Substance$containersArgs<ExtArgs> = {}>(args?: Subset<T, Substance$containersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Substance model
   */
  interface SubstanceFieldRefs {
    readonly id: FieldRef<"Substance", 'Int'>
    readonly dateAdded: FieldRef<"Substance", 'DateTime'>
    readonly productName: FieldRef<"Substance", 'String'>
    readonly lotNumber: FieldRef<"Substance", 'String'>
    readonly materialType: FieldRef<"Substance", 'String'>
    readonly unit: FieldRef<"Substance", 'String'>
    readonly expirationDate: FieldRef<"Substance", 'DateTime'>
    readonly receivedDate: FieldRef<"Substance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Substance findUnique
   */
  export type SubstanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Substance
     */
    select?: SubstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Substance
     */
    omit?: SubstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubstanceInclude<ExtArgs> | null
    /**
     * Filter, which Substance to fetch.
     */
    where: SubstanceWhereUniqueInput
  }

  /**
   * Substance findUniqueOrThrow
   */
  export type SubstanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Substance
     */
    select?: SubstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Substance
     */
    omit?: SubstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubstanceInclude<ExtArgs> | null
    /**
     * Filter, which Substance to fetch.
     */
    where: SubstanceWhereUniqueInput
  }

  /**
   * Substance findFirst
   */
  export type SubstanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Substance
     */
    select?: SubstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Substance
     */
    omit?: SubstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubstanceInclude<ExtArgs> | null
    /**
     * Filter, which Substance to fetch.
     */
    where?: SubstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Substances to fetch.
     */
    orderBy?: SubstanceOrderByWithRelationInput | SubstanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Substances.
     */
    cursor?: SubstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Substances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Substances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Substances.
     */
    distinct?: SubstanceScalarFieldEnum | SubstanceScalarFieldEnum[]
  }

  /**
   * Substance findFirstOrThrow
   */
  export type SubstanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Substance
     */
    select?: SubstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Substance
     */
    omit?: SubstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubstanceInclude<ExtArgs> | null
    /**
     * Filter, which Substance to fetch.
     */
    where?: SubstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Substances to fetch.
     */
    orderBy?: SubstanceOrderByWithRelationInput | SubstanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Substances.
     */
    cursor?: SubstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Substances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Substances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Substances.
     */
    distinct?: SubstanceScalarFieldEnum | SubstanceScalarFieldEnum[]
  }

  /**
   * Substance findMany
   */
  export type SubstanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Substance
     */
    select?: SubstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Substance
     */
    omit?: SubstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubstanceInclude<ExtArgs> | null
    /**
     * Filter, which Substances to fetch.
     */
    where?: SubstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Substances to fetch.
     */
    orderBy?: SubstanceOrderByWithRelationInput | SubstanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Substances.
     */
    cursor?: SubstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Substances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Substances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Substances.
     */
    distinct?: SubstanceScalarFieldEnum | SubstanceScalarFieldEnum[]
  }

  /**
   * Substance create
   */
  export type SubstanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Substance
     */
    select?: SubstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Substance
     */
    omit?: SubstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubstanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Substance.
     */
    data: XOR<SubstanceCreateInput, SubstanceUncheckedCreateInput>
  }

  /**
   * Substance createMany
   */
  export type SubstanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Substances.
     */
    data: SubstanceCreateManyInput | SubstanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Substance createManyAndReturn
   */
  export type SubstanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Substance
     */
    select?: SubstanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Substance
     */
    omit?: SubstanceOmit<ExtArgs> | null
    /**
     * The data used to create many Substances.
     */
    data: SubstanceCreateManyInput | SubstanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Substance update
   */
  export type SubstanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Substance
     */
    select?: SubstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Substance
     */
    omit?: SubstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubstanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Substance.
     */
    data: XOR<SubstanceUpdateInput, SubstanceUncheckedUpdateInput>
    /**
     * Choose, which Substance to update.
     */
    where: SubstanceWhereUniqueInput
  }

  /**
   * Substance updateMany
   */
  export type SubstanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Substances.
     */
    data: XOR<SubstanceUpdateManyMutationInput, SubstanceUncheckedUpdateManyInput>
    /**
     * Filter which Substances to update
     */
    where?: SubstanceWhereInput
    /**
     * Limit how many Substances to update.
     */
    limit?: number
  }

  /**
   * Substance updateManyAndReturn
   */
  export type SubstanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Substance
     */
    select?: SubstanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Substance
     */
    omit?: SubstanceOmit<ExtArgs> | null
    /**
     * The data used to update Substances.
     */
    data: XOR<SubstanceUpdateManyMutationInput, SubstanceUncheckedUpdateManyInput>
    /**
     * Filter which Substances to update
     */
    where?: SubstanceWhereInput
    /**
     * Limit how many Substances to update.
     */
    limit?: number
  }

  /**
   * Substance upsert
   */
  export type SubstanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Substance
     */
    select?: SubstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Substance
     */
    omit?: SubstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubstanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Substance to update in case it exists.
     */
    where: SubstanceWhereUniqueInput
    /**
     * In case the Substance found by the `where` argument doesn't exist, create a new Substance with this data.
     */
    create: XOR<SubstanceCreateInput, SubstanceUncheckedCreateInput>
    /**
     * In case the Substance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubstanceUpdateInput, SubstanceUncheckedUpdateInput>
  }

  /**
   * Substance delete
   */
  export type SubstanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Substance
     */
    select?: SubstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Substance
     */
    omit?: SubstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubstanceInclude<ExtArgs> | null
    /**
     * Filter which Substance to delete.
     */
    where: SubstanceWhereUniqueInput
  }

  /**
   * Substance deleteMany
   */
  export type SubstanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Substances to delete
     */
    where?: SubstanceWhereInput
    /**
     * Limit how many Substances to delete.
     */
    limit?: number
  }

  /**
   * Substance.containers
   */
  export type Substance$containersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Container
     */
    select?: ContainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Container
     */
    omit?: ContainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerInclude<ExtArgs> | null
    where?: ContainerWhereInput
    orderBy?: ContainerOrderByWithRelationInput | ContainerOrderByWithRelationInput[]
    cursor?: ContainerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContainerScalarFieldEnum | ContainerScalarFieldEnum[]
  }

  /**
   * Substance without action
   */
  export type SubstanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Substance
     */
    select?: SubstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Substance
     */
    omit?: SubstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubstanceInclude<ExtArgs> | null
  }


  /**
   * Model Container
   */

  export type AggregateContainer = {
    _count: ContainerCountAggregateOutputType | null
    _avg: ContainerAvgAggregateOutputType | null
    _sum: ContainerSumAggregateOutputType | null
    _min: ContainerMinAggregateOutputType | null
    _max: ContainerMaxAggregateOutputType | null
  }

  export type ContainerAvgAggregateOutputType = {
    id: number | null
    substanceId: number | null
    initialGross: Decimal | null
    initialTare: Decimal | null
    initialNet: Decimal | null
  }

  export type ContainerSumAggregateOutputType = {
    id: number | null
    substanceId: number | null
    initialGross: Decimal | null
    initialTare: Decimal | null
    initialNet: Decimal | null
  }

  export type ContainerMinAggregateOutputType = {
    id: number | null
    substanceId: number | null
    bin: string | null
    label: string | null
    serialNumber: string | null
    initialGross: Decimal | null
    initialTare: Decimal | null
    initialNet: Decimal | null
    container: string | null
  }

  export type ContainerMaxAggregateOutputType = {
    id: number | null
    substanceId: number | null
    bin: string | null
    label: string | null
    serialNumber: string | null
    initialGross: Decimal | null
    initialTare: Decimal | null
    initialNet: Decimal | null
    container: string | null
  }

  export type ContainerCountAggregateOutputType = {
    id: number
    substanceId: number
    bin: number
    label: number
    serialNumber: number
    initialGross: number
    initialTare: number
    initialNet: number
    container: number
    _all: number
  }


  export type ContainerAvgAggregateInputType = {
    id?: true
    substanceId?: true
    initialGross?: true
    initialTare?: true
    initialNet?: true
  }

  export type ContainerSumAggregateInputType = {
    id?: true
    substanceId?: true
    initialGross?: true
    initialTare?: true
    initialNet?: true
  }

  export type ContainerMinAggregateInputType = {
    id?: true
    substanceId?: true
    bin?: true
    label?: true
    serialNumber?: true
    initialGross?: true
    initialTare?: true
    initialNet?: true
    container?: true
  }

  export type ContainerMaxAggregateInputType = {
    id?: true
    substanceId?: true
    bin?: true
    label?: true
    serialNumber?: true
    initialGross?: true
    initialTare?: true
    initialNet?: true
    container?: true
  }

  export type ContainerCountAggregateInputType = {
    id?: true
    substanceId?: true
    bin?: true
    label?: true
    serialNumber?: true
    initialGross?: true
    initialTare?: true
    initialNet?: true
    container?: true
    _all?: true
  }

  export type ContainerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Container to aggregate.
     */
    where?: ContainerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Containers to fetch.
     */
    orderBy?: ContainerOrderByWithRelationInput | ContainerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContainerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Containers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Containers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Containers
    **/
    _count?: true | ContainerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContainerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContainerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContainerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContainerMaxAggregateInputType
  }

  export type GetContainerAggregateType<T extends ContainerAggregateArgs> = {
        [P in keyof T & keyof AggregateContainer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContainer[P]>
      : GetScalarType<T[P], AggregateContainer[P]>
  }




  export type ContainerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContainerWhereInput
    orderBy?: ContainerOrderByWithAggregationInput | ContainerOrderByWithAggregationInput[]
    by: ContainerScalarFieldEnum[] | ContainerScalarFieldEnum
    having?: ContainerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContainerCountAggregateInputType | true
    _avg?: ContainerAvgAggregateInputType
    _sum?: ContainerSumAggregateInputType
    _min?: ContainerMinAggregateInputType
    _max?: ContainerMaxAggregateInputType
  }

  export type ContainerGroupByOutputType = {
    id: number
    substanceId: number
    bin: string | null
    label: string | null
    serialNumber: string | null
    initialGross: Decimal | null
    initialTare: Decimal | null
    initialNet: Decimal
    container: string | null
    _count: ContainerCountAggregateOutputType | null
    _avg: ContainerAvgAggregateOutputType | null
    _sum: ContainerSumAggregateOutputType | null
    _min: ContainerMinAggregateOutputType | null
    _max: ContainerMaxAggregateOutputType | null
  }

  type GetContainerGroupByPayload<T extends ContainerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContainerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContainerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContainerGroupByOutputType[P]>
            : GetScalarType<T[P], ContainerGroupByOutputType[P]>
        }
      >
    >


  export type ContainerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    substanceId?: boolean
    bin?: boolean
    label?: boolean
    serialNumber?: boolean
    initialGross?: boolean
    initialTare?: boolean
    initialNet?: boolean
    container?: boolean
    substance?: boolean | SubstanceDefaultArgs<ExtArgs>
    transactions?: boolean | Container$transactionsArgs<ExtArgs>
    _count?: boolean | ContainerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["container"]>

  export type ContainerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    substanceId?: boolean
    bin?: boolean
    label?: boolean
    serialNumber?: boolean
    initialGross?: boolean
    initialTare?: boolean
    initialNet?: boolean
    container?: boolean
    substance?: boolean | SubstanceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["container"]>

  export type ContainerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    substanceId?: boolean
    bin?: boolean
    label?: boolean
    serialNumber?: boolean
    initialGross?: boolean
    initialTare?: boolean
    initialNet?: boolean
    container?: boolean
    substance?: boolean | SubstanceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["container"]>

  export type ContainerSelectScalar = {
    id?: boolean
    substanceId?: boolean
    bin?: boolean
    label?: boolean
    serialNumber?: boolean
    initialGross?: boolean
    initialTare?: boolean
    initialNet?: boolean
    container?: boolean
  }

  export type ContainerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "substanceId" | "bin" | "label" | "serialNumber" | "initialGross" | "initialTare" | "initialNet" | "container", ExtArgs["result"]["container"]>
  export type ContainerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    substance?: boolean | SubstanceDefaultArgs<ExtArgs>
    transactions?: boolean | Container$transactionsArgs<ExtArgs>
    _count?: boolean | ContainerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ContainerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    substance?: boolean | SubstanceDefaultArgs<ExtArgs>
  }
  export type ContainerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    substance?: boolean | SubstanceDefaultArgs<ExtArgs>
  }

  export type $ContainerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Container"
    objects: {
      substance: Prisma.$SubstancePayload<ExtArgs>
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      substanceId: number
      bin: string | null
      label: string | null
      serialNumber: string | null
      initialGross: Prisma.Decimal | null
      initialTare: Prisma.Decimal | null
      initialNet: Prisma.Decimal
      container: string | null
    }, ExtArgs["result"]["container"]>
    composites: {}
  }

  type ContainerGetPayload<S extends boolean | null | undefined | ContainerDefaultArgs> = $Result.GetResult<Prisma.$ContainerPayload, S>

  type ContainerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContainerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContainerCountAggregateInputType | true
    }

  export interface ContainerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Container'], meta: { name: 'Container' } }
    /**
     * Find zero or one Container that matches the filter.
     * @param {ContainerFindUniqueArgs} args - Arguments to find a Container
     * @example
     * // Get one Container
     * const container = await prisma.container.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContainerFindUniqueArgs>(args: SelectSubset<T, ContainerFindUniqueArgs<ExtArgs>>): Prisma__ContainerClient<$Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Container that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContainerFindUniqueOrThrowArgs} args - Arguments to find a Container
     * @example
     * // Get one Container
     * const container = await prisma.container.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContainerFindUniqueOrThrowArgs>(args: SelectSubset<T, ContainerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContainerClient<$Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Container that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContainerFindFirstArgs} args - Arguments to find a Container
     * @example
     * // Get one Container
     * const container = await prisma.container.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContainerFindFirstArgs>(args?: SelectSubset<T, ContainerFindFirstArgs<ExtArgs>>): Prisma__ContainerClient<$Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Container that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContainerFindFirstOrThrowArgs} args - Arguments to find a Container
     * @example
     * // Get one Container
     * const container = await prisma.container.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContainerFindFirstOrThrowArgs>(args?: SelectSubset<T, ContainerFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContainerClient<$Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Containers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContainerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Containers
     * const containers = await prisma.container.findMany()
     * 
     * // Get first 10 Containers
     * const containers = await prisma.container.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const containerWithIdOnly = await prisma.container.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContainerFindManyArgs>(args?: SelectSubset<T, ContainerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Container.
     * @param {ContainerCreateArgs} args - Arguments to create a Container.
     * @example
     * // Create one Container
     * const Container = await prisma.container.create({
     *   data: {
     *     // ... data to create a Container
     *   }
     * })
     * 
     */
    create<T extends ContainerCreateArgs>(args: SelectSubset<T, ContainerCreateArgs<ExtArgs>>): Prisma__ContainerClient<$Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Containers.
     * @param {ContainerCreateManyArgs} args - Arguments to create many Containers.
     * @example
     * // Create many Containers
     * const container = await prisma.container.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContainerCreateManyArgs>(args?: SelectSubset<T, ContainerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Containers and returns the data saved in the database.
     * @param {ContainerCreateManyAndReturnArgs} args - Arguments to create many Containers.
     * @example
     * // Create many Containers
     * const container = await prisma.container.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Containers and only return the `id`
     * const containerWithIdOnly = await prisma.container.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContainerCreateManyAndReturnArgs>(args?: SelectSubset<T, ContainerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Container.
     * @param {ContainerDeleteArgs} args - Arguments to delete one Container.
     * @example
     * // Delete one Container
     * const Container = await prisma.container.delete({
     *   where: {
     *     // ... filter to delete one Container
     *   }
     * })
     * 
     */
    delete<T extends ContainerDeleteArgs>(args: SelectSubset<T, ContainerDeleteArgs<ExtArgs>>): Prisma__ContainerClient<$Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Container.
     * @param {ContainerUpdateArgs} args - Arguments to update one Container.
     * @example
     * // Update one Container
     * const container = await prisma.container.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContainerUpdateArgs>(args: SelectSubset<T, ContainerUpdateArgs<ExtArgs>>): Prisma__ContainerClient<$Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Containers.
     * @param {ContainerDeleteManyArgs} args - Arguments to filter Containers to delete.
     * @example
     * // Delete a few Containers
     * const { count } = await prisma.container.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContainerDeleteManyArgs>(args?: SelectSubset<T, ContainerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Containers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContainerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Containers
     * const container = await prisma.container.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContainerUpdateManyArgs>(args: SelectSubset<T, ContainerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Containers and returns the data updated in the database.
     * @param {ContainerUpdateManyAndReturnArgs} args - Arguments to update many Containers.
     * @example
     * // Update many Containers
     * const container = await prisma.container.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Containers and only return the `id`
     * const containerWithIdOnly = await prisma.container.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContainerUpdateManyAndReturnArgs>(args: SelectSubset<T, ContainerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Container.
     * @param {ContainerUpsertArgs} args - Arguments to update or create a Container.
     * @example
     * // Update or create a Container
     * const container = await prisma.container.upsert({
     *   create: {
     *     // ... data to create a Container
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Container we want to update
     *   }
     * })
     */
    upsert<T extends ContainerUpsertArgs>(args: SelectSubset<T, ContainerUpsertArgs<ExtArgs>>): Prisma__ContainerClient<$Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Containers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContainerCountArgs} args - Arguments to filter Containers to count.
     * @example
     * // Count the number of Containers
     * const count = await prisma.container.count({
     *   where: {
     *     // ... the filter for the Containers we want to count
     *   }
     * })
    **/
    count<T extends ContainerCountArgs>(
      args?: Subset<T, ContainerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContainerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Container.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContainerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContainerAggregateArgs>(args: Subset<T, ContainerAggregateArgs>): Prisma.PrismaPromise<GetContainerAggregateType<T>>

    /**
     * Group by Container.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContainerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContainerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContainerGroupByArgs['orderBy'] }
        : { orderBy?: ContainerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContainerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContainerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Container model
   */
  readonly fields: ContainerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Container.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContainerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    substance<T extends SubstanceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubstanceDefaultArgs<ExtArgs>>): Prisma__SubstanceClient<$Result.GetResult<Prisma.$SubstancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transactions<T extends Container$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Container$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Container model
   */
  interface ContainerFieldRefs {
    readonly id: FieldRef<"Container", 'Int'>
    readonly substanceId: FieldRef<"Container", 'Int'>
    readonly bin: FieldRef<"Container", 'String'>
    readonly label: FieldRef<"Container", 'String'>
    readonly serialNumber: FieldRef<"Container", 'String'>
    readonly initialGross: FieldRef<"Container", 'Decimal'>
    readonly initialTare: FieldRef<"Container", 'Decimal'>
    readonly initialNet: FieldRef<"Container", 'Decimal'>
    readonly container: FieldRef<"Container", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Container findUnique
   */
  export type ContainerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Container
     */
    select?: ContainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Container
     */
    omit?: ContainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerInclude<ExtArgs> | null
    /**
     * Filter, which Container to fetch.
     */
    where: ContainerWhereUniqueInput
  }

  /**
   * Container findUniqueOrThrow
   */
  export type ContainerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Container
     */
    select?: ContainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Container
     */
    omit?: ContainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerInclude<ExtArgs> | null
    /**
     * Filter, which Container to fetch.
     */
    where: ContainerWhereUniqueInput
  }

  /**
   * Container findFirst
   */
  export type ContainerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Container
     */
    select?: ContainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Container
     */
    omit?: ContainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerInclude<ExtArgs> | null
    /**
     * Filter, which Container to fetch.
     */
    where?: ContainerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Containers to fetch.
     */
    orderBy?: ContainerOrderByWithRelationInput | ContainerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Containers.
     */
    cursor?: ContainerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Containers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Containers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Containers.
     */
    distinct?: ContainerScalarFieldEnum | ContainerScalarFieldEnum[]
  }

  /**
   * Container findFirstOrThrow
   */
  export type ContainerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Container
     */
    select?: ContainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Container
     */
    omit?: ContainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerInclude<ExtArgs> | null
    /**
     * Filter, which Container to fetch.
     */
    where?: ContainerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Containers to fetch.
     */
    orderBy?: ContainerOrderByWithRelationInput | ContainerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Containers.
     */
    cursor?: ContainerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Containers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Containers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Containers.
     */
    distinct?: ContainerScalarFieldEnum | ContainerScalarFieldEnum[]
  }

  /**
   * Container findMany
   */
  export type ContainerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Container
     */
    select?: ContainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Container
     */
    omit?: ContainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerInclude<ExtArgs> | null
    /**
     * Filter, which Containers to fetch.
     */
    where?: ContainerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Containers to fetch.
     */
    orderBy?: ContainerOrderByWithRelationInput | ContainerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Containers.
     */
    cursor?: ContainerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Containers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Containers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Containers.
     */
    distinct?: ContainerScalarFieldEnum | ContainerScalarFieldEnum[]
  }

  /**
   * Container create
   */
  export type ContainerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Container
     */
    select?: ContainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Container
     */
    omit?: ContainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerInclude<ExtArgs> | null
    /**
     * The data needed to create a Container.
     */
    data: XOR<ContainerCreateInput, ContainerUncheckedCreateInput>
  }

  /**
   * Container createMany
   */
  export type ContainerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Containers.
     */
    data: ContainerCreateManyInput | ContainerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Container createManyAndReturn
   */
  export type ContainerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Container
     */
    select?: ContainerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Container
     */
    omit?: ContainerOmit<ExtArgs> | null
    /**
     * The data used to create many Containers.
     */
    data: ContainerCreateManyInput | ContainerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Container update
   */
  export type ContainerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Container
     */
    select?: ContainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Container
     */
    omit?: ContainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerInclude<ExtArgs> | null
    /**
     * The data needed to update a Container.
     */
    data: XOR<ContainerUpdateInput, ContainerUncheckedUpdateInput>
    /**
     * Choose, which Container to update.
     */
    where: ContainerWhereUniqueInput
  }

  /**
   * Container updateMany
   */
  export type ContainerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Containers.
     */
    data: XOR<ContainerUpdateManyMutationInput, ContainerUncheckedUpdateManyInput>
    /**
     * Filter which Containers to update
     */
    where?: ContainerWhereInput
    /**
     * Limit how many Containers to update.
     */
    limit?: number
  }

  /**
   * Container updateManyAndReturn
   */
  export type ContainerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Container
     */
    select?: ContainerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Container
     */
    omit?: ContainerOmit<ExtArgs> | null
    /**
     * The data used to update Containers.
     */
    data: XOR<ContainerUpdateManyMutationInput, ContainerUncheckedUpdateManyInput>
    /**
     * Filter which Containers to update
     */
    where?: ContainerWhereInput
    /**
     * Limit how many Containers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Container upsert
   */
  export type ContainerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Container
     */
    select?: ContainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Container
     */
    omit?: ContainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerInclude<ExtArgs> | null
    /**
     * The filter to search for the Container to update in case it exists.
     */
    where: ContainerWhereUniqueInput
    /**
     * In case the Container found by the `where` argument doesn't exist, create a new Container with this data.
     */
    create: XOR<ContainerCreateInput, ContainerUncheckedCreateInput>
    /**
     * In case the Container was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContainerUpdateInput, ContainerUncheckedUpdateInput>
  }

  /**
   * Container delete
   */
  export type ContainerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Container
     */
    select?: ContainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Container
     */
    omit?: ContainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerInclude<ExtArgs> | null
    /**
     * Filter which Container to delete.
     */
    where: ContainerWhereUniqueInput
  }

  /**
   * Container deleteMany
   */
  export type ContainerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Containers to delete
     */
    where?: ContainerWhereInput
    /**
     * Limit how many Containers to delete.
     */
    limit?: number
  }

  /**
   * Container.transactions
   */
  export type Container$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Container without action
   */
  export type ContainerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Container
     */
    select?: ContainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Container
     */
    omit?: ContainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    id: number | null
    containerId: number | null
    amountCheckedOut: Decimal | null
    amountUsed: Decimal | null
    amountLost: Decimal | null
    amountRemaining: Decimal | null
    newGross: Decimal | null
    userId: number | null
    verifierId: number | null
  }

  export type TransactionSumAggregateOutputType = {
    id: number | null
    containerId: number | null
    amountCheckedOut: Decimal | null
    amountUsed: Decimal | null
    amountLost: Decimal | null
    amountRemaining: Decimal | null
    newGross: Decimal | null
    userId: number | null
    verifierId: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: number | null
    containerId: number | null
    amountCheckedOut: Decimal | null
    amountUsed: Decimal | null
    amountLost: Decimal | null
    amountRemaining: Decimal | null
    newGross: Decimal | null
    purpose: string | null
    description: string | null
    comment: string | null
    fromId: string | null
    toId: string | null
    date: Date | null
    userId: number | null
    verifierId: number | null
    adminVerified: boolean | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: number | null
    containerId: number | null
    amountCheckedOut: Decimal | null
    amountUsed: Decimal | null
    amountLost: Decimal | null
    amountRemaining: Decimal | null
    newGross: Decimal | null
    purpose: string | null
    description: string | null
    comment: string | null
    fromId: string | null
    toId: string | null
    date: Date | null
    userId: number | null
    verifierId: number | null
    adminVerified: boolean | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    containerId: number
    amountCheckedOut: number
    amountUsed: number
    amountLost: number
    amountRemaining: number
    newGross: number
    purpose: number
    description: number
    comment: number
    fromId: number
    toId: number
    date: number
    userId: number
    verifierId: number
    adminVerified: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    id?: true
    containerId?: true
    amountCheckedOut?: true
    amountUsed?: true
    amountLost?: true
    amountRemaining?: true
    newGross?: true
    userId?: true
    verifierId?: true
  }

  export type TransactionSumAggregateInputType = {
    id?: true
    containerId?: true
    amountCheckedOut?: true
    amountUsed?: true
    amountLost?: true
    amountRemaining?: true
    newGross?: true
    userId?: true
    verifierId?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    containerId?: true
    amountCheckedOut?: true
    amountUsed?: true
    amountLost?: true
    amountRemaining?: true
    newGross?: true
    purpose?: true
    description?: true
    comment?: true
    fromId?: true
    toId?: true
    date?: true
    userId?: true
    verifierId?: true
    adminVerified?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    containerId?: true
    amountCheckedOut?: true
    amountUsed?: true
    amountLost?: true
    amountRemaining?: true
    newGross?: true
    purpose?: true
    description?: true
    comment?: true
    fromId?: true
    toId?: true
    date?: true
    userId?: true
    verifierId?: true
    adminVerified?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    containerId?: true
    amountCheckedOut?: true
    amountUsed?: true
    amountLost?: true
    amountRemaining?: true
    newGross?: true
    purpose?: true
    description?: true
    comment?: true
    fromId?: true
    toId?: true
    date?: true
    userId?: true
    verifierId?: true
    adminVerified?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: number
    containerId: number
    amountCheckedOut: Decimal
    amountUsed: Decimal | null
    amountLost: Decimal | null
    amountRemaining: Decimal | null
    newGross: Decimal | null
    purpose: string
    description: string
    comment: string | null
    fromId: string
    toId: string
    date: Date
    userId: number
    verifierId: number | null
    adminVerified: boolean
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    containerId?: boolean
    amountCheckedOut?: boolean
    amountUsed?: boolean
    amountLost?: boolean
    amountRemaining?: boolean
    newGross?: boolean
    purpose?: boolean
    description?: boolean
    comment?: boolean
    fromId?: boolean
    toId?: boolean
    date?: boolean
    userId?: boolean
    verifierId?: boolean
    adminVerified?: boolean
    container?: boolean | ContainerDefaultArgs<ExtArgs>
    from?: boolean | LocationDefaultArgs<ExtArgs>
    to?: boolean | LocationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    verifier?: boolean | Transaction$verifierArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    containerId?: boolean
    amountCheckedOut?: boolean
    amountUsed?: boolean
    amountLost?: boolean
    amountRemaining?: boolean
    newGross?: boolean
    purpose?: boolean
    description?: boolean
    comment?: boolean
    fromId?: boolean
    toId?: boolean
    date?: boolean
    userId?: boolean
    verifierId?: boolean
    adminVerified?: boolean
    container?: boolean | ContainerDefaultArgs<ExtArgs>
    from?: boolean | LocationDefaultArgs<ExtArgs>
    to?: boolean | LocationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    verifier?: boolean | Transaction$verifierArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    containerId?: boolean
    amountCheckedOut?: boolean
    amountUsed?: boolean
    amountLost?: boolean
    amountRemaining?: boolean
    newGross?: boolean
    purpose?: boolean
    description?: boolean
    comment?: boolean
    fromId?: boolean
    toId?: boolean
    date?: boolean
    userId?: boolean
    verifierId?: boolean
    adminVerified?: boolean
    container?: boolean | ContainerDefaultArgs<ExtArgs>
    from?: boolean | LocationDefaultArgs<ExtArgs>
    to?: boolean | LocationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    verifier?: boolean | Transaction$verifierArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    containerId?: boolean
    amountCheckedOut?: boolean
    amountUsed?: boolean
    amountLost?: boolean
    amountRemaining?: boolean
    newGross?: boolean
    purpose?: boolean
    description?: boolean
    comment?: boolean
    fromId?: boolean
    toId?: boolean
    date?: boolean
    userId?: boolean
    verifierId?: boolean
    adminVerified?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "containerId" | "amountCheckedOut" | "amountUsed" | "amountLost" | "amountRemaining" | "newGross" | "purpose" | "description" | "comment" | "fromId" | "toId" | "date" | "userId" | "verifierId" | "adminVerified", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    container?: boolean | ContainerDefaultArgs<ExtArgs>
    from?: boolean | LocationDefaultArgs<ExtArgs>
    to?: boolean | LocationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    verifier?: boolean | Transaction$verifierArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    container?: boolean | ContainerDefaultArgs<ExtArgs>
    from?: boolean | LocationDefaultArgs<ExtArgs>
    to?: boolean | LocationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    verifier?: boolean | Transaction$verifierArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    container?: boolean | ContainerDefaultArgs<ExtArgs>
    from?: boolean | LocationDefaultArgs<ExtArgs>
    to?: boolean | LocationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    verifier?: boolean | Transaction$verifierArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      container: Prisma.$ContainerPayload<ExtArgs>
      from: Prisma.$LocationPayload<ExtArgs>
      to: Prisma.$LocationPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      verifier: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      containerId: number
      amountCheckedOut: Prisma.Decimal
      amountUsed: Prisma.Decimal | null
      amountLost: Prisma.Decimal | null
      amountRemaining: Prisma.Decimal | null
      newGross: Prisma.Decimal | null
      purpose: string
      description: string
      comment: string | null
      fromId: string
      toId: string
      date: Date
      userId: number
      verifierId: number | null
      adminVerified: boolean
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    container<T extends ContainerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContainerDefaultArgs<ExtArgs>>): Prisma__ContainerClient<$Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    from<T extends LocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocationDefaultArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    to<T extends LocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocationDefaultArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    verifier<T extends Transaction$verifierArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$verifierArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'Int'>
    readonly containerId: FieldRef<"Transaction", 'Int'>
    readonly amountCheckedOut: FieldRef<"Transaction", 'Decimal'>
    readonly amountUsed: FieldRef<"Transaction", 'Decimal'>
    readonly amountLost: FieldRef<"Transaction", 'Decimal'>
    readonly amountRemaining: FieldRef<"Transaction", 'Decimal'>
    readonly newGross: FieldRef<"Transaction", 'Decimal'>
    readonly purpose: FieldRef<"Transaction", 'String'>
    readonly description: FieldRef<"Transaction", 'String'>
    readonly comment: FieldRef<"Transaction", 'String'>
    readonly fromId: FieldRef<"Transaction", 'String'>
    readonly toId: FieldRef<"Transaction", 'String'>
    readonly date: FieldRef<"Transaction", 'DateTime'>
    readonly userId: FieldRef<"Transaction", 'Int'>
    readonly verifierId: FieldRef<"Transaction", 'Int'>
    readonly adminVerified: FieldRef<"Transaction", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction.verifier
   */
  export type Transaction$verifierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    initials: string | null
    hashedPassword: string | null
    role: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    initials: string | null
    hashedPassword: string | null
    role: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    initials: number
    hashedPassword: number
    role: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    initials?: true
    hashedPassword?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    initials?: true
    hashedPassword?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    initials?: true
    hashedPassword?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    initials: string
    hashedPassword: string
    role: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    initials?: boolean
    hashedPassword?: boolean
    role?: boolean
    used?: boolean | User$usedArgs<ExtArgs>
    verified?: boolean | User$verifiedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    initials?: boolean
    hashedPassword?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    initials?: boolean
    hashedPassword?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    initials?: boolean
    hashedPassword?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "initials" | "hashedPassword" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    used?: boolean | User$usedArgs<ExtArgs>
    verified?: boolean | User$verifiedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      used: Prisma.$TransactionPayload<ExtArgs>[]
      verified: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      initials: string
      hashedPassword: string
      role: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    used<T extends User$usedArgs<ExtArgs> = {}>(args?: Subset<T, User$usedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    verified<T extends User$verifiedArgs<ExtArgs> = {}>(args?: Subset<T, User$verifiedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly initials: FieldRef<"User", 'String'>
    readonly hashedPassword: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.used
   */
  export type User$usedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * User.verified
   */
  export type User$verifiedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const LocationScalarFieldEnum: {
    name: 'name'
  };

  export type LocationScalarFieldEnum = (typeof LocationScalarFieldEnum)[keyof typeof LocationScalarFieldEnum]


  export const SubstanceScalarFieldEnum: {
    id: 'id',
    dateAdded: 'dateAdded',
    productName: 'productName',
    lotNumber: 'lotNumber',
    materialType: 'materialType',
    unit: 'unit',
    expirationDate: 'expirationDate',
    receivedDate: 'receivedDate'
  };

  export type SubstanceScalarFieldEnum = (typeof SubstanceScalarFieldEnum)[keyof typeof SubstanceScalarFieldEnum]


  export const ContainerScalarFieldEnum: {
    id: 'id',
    substanceId: 'substanceId',
    bin: 'bin',
    label: 'label',
    serialNumber: 'serialNumber',
    initialGross: 'initialGross',
    initialTare: 'initialTare',
    initialNet: 'initialNet',
    container: 'container'
  };

  export type ContainerScalarFieldEnum = (typeof ContainerScalarFieldEnum)[keyof typeof ContainerScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    containerId: 'containerId',
    amountCheckedOut: 'amountCheckedOut',
    amountUsed: 'amountUsed',
    amountLost: 'amountLost',
    amountRemaining: 'amountRemaining',
    newGross: 'newGross',
    purpose: 'purpose',
    description: 'description',
    comment: 'comment',
    fromId: 'fromId',
    toId: 'toId',
    date: 'date',
    userId: 'userId',
    verifierId: 'verifierId',
    adminVerified: 'adminVerified'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    initials: 'initials',
    hashedPassword: 'hashedPassword',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
<<<<<<< HEAD
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
=======
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
>>>>>>> 111da0b (label)
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type LocationWhereInput = {
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    name?: StringFilter<"Location"> | string
    fromTransactions?: TransactionListRelationFilter
    toTransactions?: TransactionListRelationFilter
  }

  export type LocationOrderByWithRelationInput = {
    name?: SortOrder
    fromTransactions?: TransactionOrderByRelationAggregateInput
    toTransactions?: TransactionOrderByRelationAggregateInput
  }

  export type LocationWhereUniqueInput = Prisma.AtLeast<{
    name?: string
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    fromTransactions?: TransactionListRelationFilter
    toTransactions?: TransactionListRelationFilter
  }, "name">

  export type LocationOrderByWithAggregationInput = {
    name?: SortOrder
    _count?: LocationCountOrderByAggregateInput
    _max?: LocationMaxOrderByAggregateInput
    _min?: LocationMinOrderByAggregateInput
  }

  export type LocationScalarWhereWithAggregatesInput = {
    AND?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    OR?: LocationScalarWhereWithAggregatesInput[]
    NOT?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    name?: StringWithAggregatesFilter<"Location"> | string
  }

  export type SubstanceWhereInput = {
    AND?: SubstanceWhereInput | SubstanceWhereInput[]
    OR?: SubstanceWhereInput[]
    NOT?: SubstanceWhereInput | SubstanceWhereInput[]
    id?: IntFilter<"Substance"> | number
    dateAdded?: DateTimeFilter<"Substance"> | Date | string
    productName?: StringFilter<"Substance"> | string
    lotNumber?: StringFilter<"Substance"> | string
    materialType?: StringFilter<"Substance"> | string
    unit?: StringFilter<"Substance"> | string
    expirationDate?: DateTimeNullableFilter<"Substance"> | Date | string | null
    receivedDate?: DateTimeFilter<"Substance"> | Date | string
    containers?: ContainerListRelationFilter
  }

  export type SubstanceOrderByWithRelationInput = {
    id?: SortOrder
    dateAdded?: SortOrder
    productName?: SortOrder
    lotNumber?: SortOrder
    materialType?: SortOrder
    unit?: SortOrder
    expirationDate?: SortOrderInput | SortOrder
    receivedDate?: SortOrder
    containers?: ContainerOrderByRelationAggregateInput
  }

  export type SubstanceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SubstanceWhereInput | SubstanceWhereInput[]
    OR?: SubstanceWhereInput[]
    NOT?: SubstanceWhereInput | SubstanceWhereInput[]
    dateAdded?: DateTimeFilter<"Substance"> | Date | string
    productName?: StringFilter<"Substance"> | string
    lotNumber?: StringFilter<"Substance"> | string
    materialType?: StringFilter<"Substance"> | string
    unit?: StringFilter<"Substance"> | string
    expirationDate?: DateTimeNullableFilter<"Substance"> | Date | string | null
    receivedDate?: DateTimeFilter<"Substance"> | Date | string
    containers?: ContainerListRelationFilter
  }, "id">

  export type SubstanceOrderByWithAggregationInput = {
    id?: SortOrder
    dateAdded?: SortOrder
    productName?: SortOrder
    lotNumber?: SortOrder
    materialType?: SortOrder
    unit?: SortOrder
    expirationDate?: SortOrderInput | SortOrder
    receivedDate?: SortOrder
    _count?: SubstanceCountOrderByAggregateInput
    _avg?: SubstanceAvgOrderByAggregateInput
    _max?: SubstanceMaxOrderByAggregateInput
    _min?: SubstanceMinOrderByAggregateInput
    _sum?: SubstanceSumOrderByAggregateInput
  }

  export type SubstanceScalarWhereWithAggregatesInput = {
    AND?: SubstanceScalarWhereWithAggregatesInput | SubstanceScalarWhereWithAggregatesInput[]
    OR?: SubstanceScalarWhereWithAggregatesInput[]
    NOT?: SubstanceScalarWhereWithAggregatesInput | SubstanceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Substance"> | number
    dateAdded?: DateTimeWithAggregatesFilter<"Substance"> | Date | string
    productName?: StringWithAggregatesFilter<"Substance"> | string
    lotNumber?: StringWithAggregatesFilter<"Substance"> | string
    materialType?: StringWithAggregatesFilter<"Substance"> | string
    unit?: StringWithAggregatesFilter<"Substance"> | string
    expirationDate?: DateTimeNullableWithAggregatesFilter<"Substance"> | Date | string | null
    receivedDate?: DateTimeWithAggregatesFilter<"Substance"> | Date | string
  }

  export type ContainerWhereInput = {
    AND?: ContainerWhereInput | ContainerWhereInput[]
    OR?: ContainerWhereInput[]
    NOT?: ContainerWhereInput | ContainerWhereInput[]
    id?: IntFilter<"Container"> | number
    substanceId?: IntFilter<"Container"> | number
    bin?: StringNullableFilter<"Container"> | string | null
    label?: StringNullableFilter<"Container"> | string | null
    serialNumber?: StringNullableFilter<"Container"> | string | null
    initialGross?: DecimalNullableFilter<"Container"> | Decimal | DecimalJsLike | number | string | null
    initialTare?: DecimalNullableFilter<"Container"> | Decimal | DecimalJsLike | number | string | null
    initialNet?: DecimalFilter<"Container"> | Decimal | DecimalJsLike | number | string
    container?: StringNullableFilter<"Container"> | string | null
    substance?: XOR<SubstanceScalarRelationFilter, SubstanceWhereInput>
    transactions?: TransactionListRelationFilter
  }

  export type ContainerOrderByWithRelationInput = {
    id?: SortOrder
    substanceId?: SortOrder
    bin?: SortOrderInput | SortOrder
    label?: SortOrderInput | SortOrder
    serialNumber?: SortOrderInput | SortOrder
    initialGross?: SortOrderInput | SortOrder
    initialTare?: SortOrderInput | SortOrder
    initialNet?: SortOrder
    container?: SortOrderInput | SortOrder
    substance?: SubstanceOrderByWithRelationInput
    transactions?: TransactionOrderByRelationAggregateInput
  }

  export type ContainerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    serialNumber?: string
    AND?: ContainerWhereInput | ContainerWhereInput[]
    OR?: ContainerWhereInput[]
    NOT?: ContainerWhereInput | ContainerWhereInput[]
    substanceId?: IntFilter<"Container"> | number
    bin?: StringNullableFilter<"Container"> | string | null
    label?: StringNullableFilter<"Container"> | string | null
    initialGross?: DecimalNullableFilter<"Container"> | Decimal | DecimalJsLike | number | string | null
    initialTare?: DecimalNullableFilter<"Container"> | Decimal | DecimalJsLike | number | string | null
    initialNet?: DecimalFilter<"Container"> | Decimal | DecimalJsLike | number | string
    container?: StringNullableFilter<"Container"> | string | null
    substance?: XOR<SubstanceScalarRelationFilter, SubstanceWhereInput>
    transactions?: TransactionListRelationFilter
  }, "id" | "serialNumber">

  export type ContainerOrderByWithAggregationInput = {
    id?: SortOrder
    substanceId?: SortOrder
    bin?: SortOrderInput | SortOrder
    label?: SortOrderInput | SortOrder
    serialNumber?: SortOrderInput | SortOrder
    initialGross?: SortOrderInput | SortOrder
    initialTare?: SortOrderInput | SortOrder
    initialNet?: SortOrder
    container?: SortOrderInput | SortOrder
    _count?: ContainerCountOrderByAggregateInput
    _avg?: ContainerAvgOrderByAggregateInput
    _max?: ContainerMaxOrderByAggregateInput
    _min?: ContainerMinOrderByAggregateInput
    _sum?: ContainerSumOrderByAggregateInput
  }

  export type ContainerScalarWhereWithAggregatesInput = {
    AND?: ContainerScalarWhereWithAggregatesInput | ContainerScalarWhereWithAggregatesInput[]
    OR?: ContainerScalarWhereWithAggregatesInput[]
    NOT?: ContainerScalarWhereWithAggregatesInput | ContainerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Container"> | number
    substanceId?: IntWithAggregatesFilter<"Container"> | number
    bin?: StringNullableWithAggregatesFilter<"Container"> | string | null
    label?: StringNullableWithAggregatesFilter<"Container"> | string | null
    serialNumber?: StringNullableWithAggregatesFilter<"Container"> | string | null
    initialGross?: DecimalNullableWithAggregatesFilter<"Container"> | Decimal | DecimalJsLike | number | string | null
    initialTare?: DecimalNullableWithAggregatesFilter<"Container"> | Decimal | DecimalJsLike | number | string | null
    initialNet?: DecimalWithAggregatesFilter<"Container"> | Decimal | DecimalJsLike | number | string
    container?: StringNullableWithAggregatesFilter<"Container"> | string | null
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: IntFilter<"Transaction"> | number
    containerId?: IntFilter<"Transaction"> | number
    amountCheckedOut?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    amountUsed?: DecimalNullableFilter<"Transaction"> | Decimal | DecimalJsLike | number | string | null
    amountLost?: DecimalNullableFilter<"Transaction"> | Decimal | DecimalJsLike | number | string | null
    amountRemaining?: DecimalNullableFilter<"Transaction"> | Decimal | DecimalJsLike | number | string | null
    newGross?: DecimalNullableFilter<"Transaction"> | Decimal | DecimalJsLike | number | string | null
    purpose?: StringFilter<"Transaction"> | string
    description?: StringFilter<"Transaction"> | string
    comment?: StringNullableFilter<"Transaction"> | string | null
    fromId?: StringFilter<"Transaction"> | string
    toId?: StringFilter<"Transaction"> | string
    date?: DateTimeFilter<"Transaction"> | Date | string
    userId?: IntFilter<"Transaction"> | number
    verifierId?: IntNullableFilter<"Transaction"> | number | null
    adminVerified?: BoolFilter<"Transaction"> | boolean
    container?: XOR<ContainerScalarRelationFilter, ContainerWhereInput>
    from?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    to?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    verifier?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    containerId?: SortOrder
    amountCheckedOut?: SortOrder
    amountUsed?: SortOrderInput | SortOrder
    amountLost?: SortOrderInput | SortOrder
    amountRemaining?: SortOrderInput | SortOrder
    newGross?: SortOrderInput | SortOrder
    purpose?: SortOrder
    description?: SortOrder
    comment?: SortOrderInput | SortOrder
    fromId?: SortOrder
    toId?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    verifierId?: SortOrderInput | SortOrder
    adminVerified?: SortOrder
    container?: ContainerOrderByWithRelationInput
    from?: LocationOrderByWithRelationInput
    to?: LocationOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    verifier?: UserOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    containerId?: IntFilter<"Transaction"> | number
    amountCheckedOut?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    amountUsed?: DecimalNullableFilter<"Transaction"> | Decimal | DecimalJsLike | number | string | null
    amountLost?: DecimalNullableFilter<"Transaction"> | Decimal | DecimalJsLike | number | string | null
    amountRemaining?: DecimalNullableFilter<"Transaction"> | Decimal | DecimalJsLike | number | string | null
    newGross?: DecimalNullableFilter<"Transaction"> | Decimal | DecimalJsLike | number | string | null
    purpose?: StringFilter<"Transaction"> | string
    description?: StringFilter<"Transaction"> | string
    comment?: StringNullableFilter<"Transaction"> | string | null
    fromId?: StringFilter<"Transaction"> | string
    toId?: StringFilter<"Transaction"> | string
    date?: DateTimeFilter<"Transaction"> | Date | string
    userId?: IntFilter<"Transaction"> | number
    verifierId?: IntNullableFilter<"Transaction"> | number | null
    adminVerified?: BoolFilter<"Transaction"> | boolean
    container?: XOR<ContainerScalarRelationFilter, ContainerWhereInput>
    from?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    to?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    verifier?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    containerId?: SortOrder
    amountCheckedOut?: SortOrder
    amountUsed?: SortOrderInput | SortOrder
    amountLost?: SortOrderInput | SortOrder
    amountRemaining?: SortOrderInput | SortOrder
    newGross?: SortOrderInput | SortOrder
    purpose?: SortOrder
    description?: SortOrder
    comment?: SortOrderInput | SortOrder
    fromId?: SortOrder
    toId?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    verifierId?: SortOrderInput | SortOrder
    adminVerified?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Transaction"> | number
    containerId?: IntWithAggregatesFilter<"Transaction"> | number
    amountCheckedOut?: DecimalWithAggregatesFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    amountUsed?: DecimalNullableWithAggregatesFilter<"Transaction"> | Decimal | DecimalJsLike | number | string | null
    amountLost?: DecimalNullableWithAggregatesFilter<"Transaction"> | Decimal | DecimalJsLike | number | string | null
    amountRemaining?: DecimalNullableWithAggregatesFilter<"Transaction"> | Decimal | DecimalJsLike | number | string | null
    newGross?: DecimalNullableWithAggregatesFilter<"Transaction"> | Decimal | DecimalJsLike | number | string | null
    purpose?: StringWithAggregatesFilter<"Transaction"> | string
    description?: StringWithAggregatesFilter<"Transaction"> | string
    comment?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    fromId?: StringWithAggregatesFilter<"Transaction"> | string
    toId?: StringWithAggregatesFilter<"Transaction"> | string
    date?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    userId?: IntWithAggregatesFilter<"Transaction"> | number
    verifierId?: IntNullableWithAggregatesFilter<"Transaction"> | number | null
    adminVerified?: BoolWithAggregatesFilter<"Transaction"> | boolean
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    initials?: StringFilter<"User"> | string
    hashedPassword?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    used?: TransactionListRelationFilter
    verified?: TransactionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    initials?: SortOrder
    hashedPassword?: SortOrder
    role?: SortOrder
    used?: TransactionOrderByRelationAggregateInput
    verified?: TransactionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    initials?: StringFilter<"User"> | string
    hashedPassword?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    used?: TransactionListRelationFilter
    verified?: TransactionListRelationFilter
  }, "id" | "name">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    initials?: SortOrder
    hashedPassword?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    initials?: StringWithAggregatesFilter<"User"> | string
    hashedPassword?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
  }

  export type LocationCreateInput = {
    name: string
    fromTransactions?: TransactionCreateNestedManyWithoutFromInput
    toTransactions?: TransactionCreateNestedManyWithoutToInput
  }

  export type LocationUncheckedCreateInput = {
    name: string
    fromTransactions?: TransactionUncheckedCreateNestedManyWithoutFromInput
    toTransactions?: TransactionUncheckedCreateNestedManyWithoutToInput
  }

  export type LocationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    fromTransactions?: TransactionUpdateManyWithoutFromNestedInput
    toTransactions?: TransactionUpdateManyWithoutToNestedInput
  }

  export type LocationUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    fromTransactions?: TransactionUncheckedUpdateManyWithoutFromNestedInput
    toTransactions?: TransactionUncheckedUpdateManyWithoutToNestedInput
  }

  export type LocationCreateManyInput = {
    name: string
  }

  export type LocationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LocationUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SubstanceCreateInput = {
    dateAdded?: Date | string
    productName: string
    lotNumber: string
    materialType: string
    unit: string
    expirationDate?: Date | string | null
    receivedDate: Date | string
    containers?: ContainerCreateNestedManyWithoutSubstanceInput
  }

  export type SubstanceUncheckedCreateInput = {
    id?: number
    dateAdded?: Date | string
    productName: string
    lotNumber: string
    materialType: string
    unit: string
    expirationDate?: Date | string | null
    receivedDate: Date | string
    containers?: ContainerUncheckedCreateNestedManyWithoutSubstanceInput
  }

  export type SubstanceUpdateInput = {
    dateAdded?: DateTimeFieldUpdateOperationsInput | Date | string
    productName?: StringFieldUpdateOperationsInput | string
    lotNumber?: StringFieldUpdateOperationsInput | string
    materialType?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receivedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    containers?: ContainerUpdateManyWithoutSubstanceNestedInput
  }

  export type SubstanceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateAdded?: DateTimeFieldUpdateOperationsInput | Date | string
    productName?: StringFieldUpdateOperationsInput | string
    lotNumber?: StringFieldUpdateOperationsInput | string
    materialType?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receivedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    containers?: ContainerUncheckedUpdateManyWithoutSubstanceNestedInput
  }

  export type SubstanceCreateManyInput = {
    id?: number
    dateAdded?: Date | string
    productName: string
    lotNumber: string
    materialType: string
    unit: string
    expirationDate?: Date | string | null
    receivedDate: Date | string
  }

  export type SubstanceUpdateManyMutationInput = {
    dateAdded?: DateTimeFieldUpdateOperationsInput | Date | string
    productName?: StringFieldUpdateOperationsInput | string
    lotNumber?: StringFieldUpdateOperationsInput | string
    materialType?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receivedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubstanceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateAdded?: DateTimeFieldUpdateOperationsInput | Date | string
    productName?: StringFieldUpdateOperationsInput | string
    lotNumber?: StringFieldUpdateOperationsInput | string
    materialType?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receivedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContainerCreateInput = {
    bin?: string | null
    label?: string | null
    serialNumber?: string | null
    initialGross?: Decimal | DecimalJsLike | number | string | null
    initialTare?: Decimal | DecimalJsLike | number | string | null
    initialNet: Decimal | DecimalJsLike | number | string
    container?: string | null
    substance: SubstanceCreateNestedOneWithoutContainersInput
    transactions?: TransactionCreateNestedManyWithoutContainerInput
  }

  export type ContainerUncheckedCreateInput = {
    id?: number
    substanceId: number
    bin?: string | null
    label?: string | null
    serialNumber?: string | null
    initialGross?: Decimal | DecimalJsLike | number | string | null
    initialTare?: Decimal | DecimalJsLike | number | string | null
    initialNet: Decimal | DecimalJsLike | number | string
    container?: string | null
    transactions?: TransactionUncheckedCreateNestedManyWithoutContainerInput
  }

  export type ContainerUpdateInput = {
    bin?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    initialGross?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    initialTare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    initialNet?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    container?: NullableStringFieldUpdateOperationsInput | string | null
    substance?: SubstanceUpdateOneRequiredWithoutContainersNestedInput
    transactions?: TransactionUpdateManyWithoutContainerNestedInput
  }

  export type ContainerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    substanceId?: IntFieldUpdateOperationsInput | number
    bin?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    initialGross?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    initialTare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    initialNet?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    container?: NullableStringFieldUpdateOperationsInput | string | null
    transactions?: TransactionUncheckedUpdateManyWithoutContainerNestedInput
  }

  export type ContainerCreateManyInput = {
    id?: number
    substanceId: number
    bin?: string | null
    label?: string | null
    serialNumber?: string | null
    initialGross?: Decimal | DecimalJsLike | number | string | null
    initialTare?: Decimal | DecimalJsLike | number | string | null
    initialNet: Decimal | DecimalJsLike | number | string
    container?: string | null
  }

  export type ContainerUpdateManyMutationInput = {
    bin?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    initialGross?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    initialTare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    initialNet?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    container?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContainerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    substanceId?: IntFieldUpdateOperationsInput | number
    bin?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    initialGross?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    initialTare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    initialNet?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    container?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionCreateInput = {
    amountCheckedOut: Decimal | DecimalJsLike | number | string
    amountUsed?: Decimal | DecimalJsLike | number | string | null
    amountLost?: Decimal | DecimalJsLike | number | string | null
    amountRemaining?: Decimal | DecimalJsLike | number | string | null
    newGross?: Decimal | DecimalJsLike | number | string | null
    purpose: string
    description: string
    comment?: string | null
    date?: Date | string
    adminVerified?: boolean
    container: ContainerCreateNestedOneWithoutTransactionsInput
    from: LocationCreateNestedOneWithoutFromTransactionsInput
    to: LocationCreateNestedOneWithoutToTransactionsInput
    user: UserCreateNestedOneWithoutUsedInput
    verifier?: UserCreateNestedOneWithoutVerifiedInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: number
    containerId: number
    amountCheckedOut: Decimal | DecimalJsLike | number | string
    amountUsed?: Decimal | DecimalJsLike | number | string | null
    amountLost?: Decimal | DecimalJsLike | number | string | null
    amountRemaining?: Decimal | DecimalJsLike | number | string | null
    newGross?: Decimal | DecimalJsLike | number | string | null
    purpose: string
    description: string
    comment?: string | null
    fromId: string
    toId: string
    date?: Date | string
    userId: number
    verifierId?: number | null
    adminVerified?: boolean
  }

  export type TransactionUpdateInput = {
    amountCheckedOut?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountUsed?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amountLost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amountRemaining?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    newGross?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    purpose?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    adminVerified?: BoolFieldUpdateOperationsInput | boolean
    container?: ContainerUpdateOneRequiredWithoutTransactionsNestedInput
    from?: LocationUpdateOneRequiredWithoutFromTransactionsNestedInput
    to?: LocationUpdateOneRequiredWithoutToTransactionsNestedInput
    user?: UserUpdateOneRequiredWithoutUsedNestedInput
    verifier?: UserUpdateOneWithoutVerifiedNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    containerId?: IntFieldUpdateOperationsInput | number
    amountCheckedOut?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountUsed?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amountLost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amountRemaining?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    newGross?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    purpose?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    fromId?: StringFieldUpdateOperationsInput | string
    toId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    verifierId?: NullableIntFieldUpdateOperationsInput | number | null
    adminVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TransactionCreateManyInput = {
    id?: number
    containerId: number
    amountCheckedOut: Decimal | DecimalJsLike | number | string
    amountUsed?: Decimal | DecimalJsLike | number | string | null
    amountLost?: Decimal | DecimalJsLike | number | string | null
    amountRemaining?: Decimal | DecimalJsLike | number | string | null
    newGross?: Decimal | DecimalJsLike | number | string | null
    purpose: string
    description: string
    comment?: string | null
    fromId: string
    toId: string
    date?: Date | string
    userId: number
    verifierId?: number | null
    adminVerified?: boolean
  }

  export type TransactionUpdateManyMutationInput = {
    amountCheckedOut?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountUsed?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amountLost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amountRemaining?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    newGross?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    purpose?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    adminVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    containerId?: IntFieldUpdateOperationsInput | number
    amountCheckedOut?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountUsed?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amountLost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amountRemaining?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    newGross?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    purpose?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    fromId?: StringFieldUpdateOperationsInput | string
    toId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    verifierId?: NullableIntFieldUpdateOperationsInput | number | null
    adminVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserCreateInput = {
    name: string
    initials: string
    hashedPassword: string
    role?: string
    used?: TransactionCreateNestedManyWithoutUserInput
    verified?: TransactionCreateNestedManyWithoutVerifierInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    initials: string
    hashedPassword: string
    role?: string
    used?: TransactionUncheckedCreateNestedManyWithoutUserInput
    verified?: TransactionUncheckedCreateNestedManyWithoutVerifierInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    initials?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    used?: TransactionUpdateManyWithoutUserNestedInput
    verified?: TransactionUpdateManyWithoutVerifierNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    initials?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    used?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    verified?: TransactionUncheckedUpdateManyWithoutVerifierNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    initials: string
    hashedPassword: string
    role?: string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    initials?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    initials?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LocationCountOrderByAggregateInput = {
    name?: SortOrder
  }

  export type LocationMaxOrderByAggregateInput = {
    name?: SortOrder
  }

  export type LocationMinOrderByAggregateInput = {
    name?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ContainerListRelationFilter = {
    every?: ContainerWhereInput
    some?: ContainerWhereInput
    none?: ContainerWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ContainerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubstanceCountOrderByAggregateInput = {
    id?: SortOrder
    dateAdded?: SortOrder
    productName?: SortOrder
    lotNumber?: SortOrder
    materialType?: SortOrder
    unit?: SortOrder
    expirationDate?: SortOrder
    receivedDate?: SortOrder
  }

  export type SubstanceAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SubstanceMaxOrderByAggregateInput = {
    id?: SortOrder
    dateAdded?: SortOrder
    productName?: SortOrder
    lotNumber?: SortOrder
    materialType?: SortOrder
    unit?: SortOrder
    expirationDate?: SortOrder
    receivedDate?: SortOrder
  }

  export type SubstanceMinOrderByAggregateInput = {
    id?: SortOrder
    dateAdded?: SortOrder
    productName?: SortOrder
    lotNumber?: SortOrder
    materialType?: SortOrder
    unit?: SortOrder
    expirationDate?: SortOrder
    receivedDate?: SortOrder
  }

  export type SubstanceSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type SubstanceScalarRelationFilter = {
    is?: SubstanceWhereInput
    isNot?: SubstanceWhereInput
  }

  export type ContainerCountOrderByAggregateInput = {
    id?: SortOrder
    substanceId?: SortOrder
    bin?: SortOrder
    label?: SortOrder
    serialNumber?: SortOrder
    initialGross?: SortOrder
    initialTare?: SortOrder
    initialNet?: SortOrder
    container?: SortOrder
  }

  export type ContainerAvgOrderByAggregateInput = {
    id?: SortOrder
    substanceId?: SortOrder
    initialGross?: SortOrder
    initialTare?: SortOrder
    initialNet?: SortOrder
  }

  export type ContainerMaxOrderByAggregateInput = {
    id?: SortOrder
    substanceId?: SortOrder
    bin?: SortOrder
    label?: SortOrder
    serialNumber?: SortOrder
    initialGross?: SortOrder
    initialTare?: SortOrder
    initialNet?: SortOrder
    container?: SortOrder
  }

  export type ContainerMinOrderByAggregateInput = {
    id?: SortOrder
    substanceId?: SortOrder
    bin?: SortOrder
    label?: SortOrder
    serialNumber?: SortOrder
    initialGross?: SortOrder
    initialTare?: SortOrder
    initialNet?: SortOrder
    container?: SortOrder
  }

  export type ContainerSumOrderByAggregateInput = {
    id?: SortOrder
    substanceId?: SortOrder
    initialGross?: SortOrder
    initialTare?: SortOrder
    initialNet?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ContainerScalarRelationFilter = {
    is?: ContainerWhereInput
    isNot?: ContainerWhereInput
  }

  export type LocationScalarRelationFilter = {
    is?: LocationWhereInput
    isNot?: LocationWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    containerId?: SortOrder
    amountCheckedOut?: SortOrder
    amountUsed?: SortOrder
    amountLost?: SortOrder
    amountRemaining?: SortOrder
    newGross?: SortOrder
    purpose?: SortOrder
    description?: SortOrder
    comment?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    verifierId?: SortOrder
    adminVerified?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    id?: SortOrder
    containerId?: SortOrder
    amountCheckedOut?: SortOrder
    amountUsed?: SortOrder
    amountLost?: SortOrder
    amountRemaining?: SortOrder
    newGross?: SortOrder
    userId?: SortOrder
    verifierId?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    containerId?: SortOrder
    amountCheckedOut?: SortOrder
    amountUsed?: SortOrder
    amountLost?: SortOrder
    amountRemaining?: SortOrder
    newGross?: SortOrder
    purpose?: SortOrder
    description?: SortOrder
    comment?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    verifierId?: SortOrder
    adminVerified?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    containerId?: SortOrder
    amountCheckedOut?: SortOrder
    amountUsed?: SortOrder
    amountLost?: SortOrder
    amountRemaining?: SortOrder
    newGross?: SortOrder
    purpose?: SortOrder
    description?: SortOrder
    comment?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    verifierId?: SortOrder
    adminVerified?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    id?: SortOrder
    containerId?: SortOrder
    amountCheckedOut?: SortOrder
    amountUsed?: SortOrder
    amountLost?: SortOrder
    amountRemaining?: SortOrder
    newGross?: SortOrder
    userId?: SortOrder
    verifierId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    initials?: SortOrder
    hashedPassword?: SortOrder
    role?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    initials?: SortOrder
    hashedPassword?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    initials?: SortOrder
    hashedPassword?: SortOrder
    role?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TransactionCreateNestedManyWithoutFromInput = {
    create?: XOR<TransactionCreateWithoutFromInput, TransactionUncheckedCreateWithoutFromInput> | TransactionCreateWithoutFromInput[] | TransactionUncheckedCreateWithoutFromInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutFromInput | TransactionCreateOrConnectWithoutFromInput[]
    createMany?: TransactionCreateManyFromInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutToInput = {
    create?: XOR<TransactionCreateWithoutToInput, TransactionUncheckedCreateWithoutToInput> | TransactionCreateWithoutToInput[] | TransactionUncheckedCreateWithoutToInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutToInput | TransactionCreateOrConnectWithoutToInput[]
    createMany?: TransactionCreateManyToInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutFromInput = {
    create?: XOR<TransactionCreateWithoutFromInput, TransactionUncheckedCreateWithoutFromInput> | TransactionCreateWithoutFromInput[] | TransactionUncheckedCreateWithoutFromInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutFromInput | TransactionCreateOrConnectWithoutFromInput[]
    createMany?: TransactionCreateManyFromInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutToInput = {
    create?: XOR<TransactionCreateWithoutToInput, TransactionUncheckedCreateWithoutToInput> | TransactionCreateWithoutToInput[] | TransactionUncheckedCreateWithoutToInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutToInput | TransactionCreateOrConnectWithoutToInput[]
    createMany?: TransactionCreateManyToInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type TransactionUpdateManyWithoutFromNestedInput = {
    create?: XOR<TransactionCreateWithoutFromInput, TransactionUncheckedCreateWithoutFromInput> | TransactionCreateWithoutFromInput[] | TransactionUncheckedCreateWithoutFromInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutFromInput | TransactionCreateOrConnectWithoutFromInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutFromInput | TransactionUpsertWithWhereUniqueWithoutFromInput[]
    createMany?: TransactionCreateManyFromInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutFromInput | TransactionUpdateWithWhereUniqueWithoutFromInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutFromInput | TransactionUpdateManyWithWhereWithoutFromInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutToNestedInput = {
    create?: XOR<TransactionCreateWithoutToInput, TransactionUncheckedCreateWithoutToInput> | TransactionCreateWithoutToInput[] | TransactionUncheckedCreateWithoutToInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutToInput | TransactionCreateOrConnectWithoutToInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutToInput | TransactionUpsertWithWhereUniqueWithoutToInput[]
    createMany?: TransactionCreateManyToInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutToInput | TransactionUpdateWithWhereUniqueWithoutToInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutToInput | TransactionUpdateManyWithWhereWithoutToInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutFromNestedInput = {
    create?: XOR<TransactionCreateWithoutFromInput, TransactionUncheckedCreateWithoutFromInput> | TransactionCreateWithoutFromInput[] | TransactionUncheckedCreateWithoutFromInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutFromInput | TransactionCreateOrConnectWithoutFromInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutFromInput | TransactionUpsertWithWhereUniqueWithoutFromInput[]
    createMany?: TransactionCreateManyFromInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutFromInput | TransactionUpdateWithWhereUniqueWithoutFromInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutFromInput | TransactionUpdateManyWithWhereWithoutFromInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutToNestedInput = {
    create?: XOR<TransactionCreateWithoutToInput, TransactionUncheckedCreateWithoutToInput> | TransactionCreateWithoutToInput[] | TransactionUncheckedCreateWithoutToInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutToInput | TransactionCreateOrConnectWithoutToInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutToInput | TransactionUpsertWithWhereUniqueWithoutToInput[]
    createMany?: TransactionCreateManyToInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutToInput | TransactionUpdateWithWhereUniqueWithoutToInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutToInput | TransactionUpdateManyWithWhereWithoutToInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type ContainerCreateNestedManyWithoutSubstanceInput = {
    create?: XOR<ContainerCreateWithoutSubstanceInput, ContainerUncheckedCreateWithoutSubstanceInput> | ContainerCreateWithoutSubstanceInput[] | ContainerUncheckedCreateWithoutSubstanceInput[]
    connectOrCreate?: ContainerCreateOrConnectWithoutSubstanceInput | ContainerCreateOrConnectWithoutSubstanceInput[]
    createMany?: ContainerCreateManySubstanceInputEnvelope
    connect?: ContainerWhereUniqueInput | ContainerWhereUniqueInput[]
  }

  export type ContainerUncheckedCreateNestedManyWithoutSubstanceInput = {
    create?: XOR<ContainerCreateWithoutSubstanceInput, ContainerUncheckedCreateWithoutSubstanceInput> | ContainerCreateWithoutSubstanceInput[] | ContainerUncheckedCreateWithoutSubstanceInput[]
    connectOrCreate?: ContainerCreateOrConnectWithoutSubstanceInput | ContainerCreateOrConnectWithoutSubstanceInput[]
    createMany?: ContainerCreateManySubstanceInputEnvelope
    connect?: ContainerWhereUniqueInput | ContainerWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ContainerUpdateManyWithoutSubstanceNestedInput = {
    create?: XOR<ContainerCreateWithoutSubstanceInput, ContainerUncheckedCreateWithoutSubstanceInput> | ContainerCreateWithoutSubstanceInput[] | ContainerUncheckedCreateWithoutSubstanceInput[]
    connectOrCreate?: ContainerCreateOrConnectWithoutSubstanceInput | ContainerCreateOrConnectWithoutSubstanceInput[]
    upsert?: ContainerUpsertWithWhereUniqueWithoutSubstanceInput | ContainerUpsertWithWhereUniqueWithoutSubstanceInput[]
    createMany?: ContainerCreateManySubstanceInputEnvelope
    set?: ContainerWhereUniqueInput | ContainerWhereUniqueInput[]
    disconnect?: ContainerWhereUniqueInput | ContainerWhereUniqueInput[]
    delete?: ContainerWhereUniqueInput | ContainerWhereUniqueInput[]
    connect?: ContainerWhereUniqueInput | ContainerWhereUniqueInput[]
    update?: ContainerUpdateWithWhereUniqueWithoutSubstanceInput | ContainerUpdateWithWhereUniqueWithoutSubstanceInput[]
    updateMany?: ContainerUpdateManyWithWhereWithoutSubstanceInput | ContainerUpdateManyWithWhereWithoutSubstanceInput[]
    deleteMany?: ContainerScalarWhereInput | ContainerScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ContainerUncheckedUpdateManyWithoutSubstanceNestedInput = {
    create?: XOR<ContainerCreateWithoutSubstanceInput, ContainerUncheckedCreateWithoutSubstanceInput> | ContainerCreateWithoutSubstanceInput[] | ContainerUncheckedCreateWithoutSubstanceInput[]
    connectOrCreate?: ContainerCreateOrConnectWithoutSubstanceInput | ContainerCreateOrConnectWithoutSubstanceInput[]
    upsert?: ContainerUpsertWithWhereUniqueWithoutSubstanceInput | ContainerUpsertWithWhereUniqueWithoutSubstanceInput[]
    createMany?: ContainerCreateManySubstanceInputEnvelope
    set?: ContainerWhereUniqueInput | ContainerWhereUniqueInput[]
    disconnect?: ContainerWhereUniqueInput | ContainerWhereUniqueInput[]
    delete?: ContainerWhereUniqueInput | ContainerWhereUniqueInput[]
    connect?: ContainerWhereUniqueInput | ContainerWhereUniqueInput[]
    update?: ContainerUpdateWithWhereUniqueWithoutSubstanceInput | ContainerUpdateWithWhereUniqueWithoutSubstanceInput[]
    updateMany?: ContainerUpdateManyWithWhereWithoutSubstanceInput | ContainerUpdateManyWithWhereWithoutSubstanceInput[]
    deleteMany?: ContainerScalarWhereInput | ContainerScalarWhereInput[]
  }

  export type SubstanceCreateNestedOneWithoutContainersInput = {
    create?: XOR<SubstanceCreateWithoutContainersInput, SubstanceUncheckedCreateWithoutContainersInput>
    connectOrCreate?: SubstanceCreateOrConnectWithoutContainersInput
    connect?: SubstanceWhereUniqueInput
  }

  export type TransactionCreateNestedManyWithoutContainerInput = {
    create?: XOR<TransactionCreateWithoutContainerInput, TransactionUncheckedCreateWithoutContainerInput> | TransactionCreateWithoutContainerInput[] | TransactionUncheckedCreateWithoutContainerInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutContainerInput | TransactionCreateOrConnectWithoutContainerInput[]
    createMany?: TransactionCreateManyContainerInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutContainerInput = {
    create?: XOR<TransactionCreateWithoutContainerInput, TransactionUncheckedCreateWithoutContainerInput> | TransactionCreateWithoutContainerInput[] | TransactionUncheckedCreateWithoutContainerInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutContainerInput | TransactionCreateOrConnectWithoutContainerInput[]
    createMany?: TransactionCreateManyContainerInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type SubstanceUpdateOneRequiredWithoutContainersNestedInput = {
    create?: XOR<SubstanceCreateWithoutContainersInput, SubstanceUncheckedCreateWithoutContainersInput>
    connectOrCreate?: SubstanceCreateOrConnectWithoutContainersInput
    upsert?: SubstanceUpsertWithoutContainersInput
    connect?: SubstanceWhereUniqueInput
    update?: XOR<XOR<SubstanceUpdateToOneWithWhereWithoutContainersInput, SubstanceUpdateWithoutContainersInput>, SubstanceUncheckedUpdateWithoutContainersInput>
  }

  export type TransactionUpdateManyWithoutContainerNestedInput = {
    create?: XOR<TransactionCreateWithoutContainerInput, TransactionUncheckedCreateWithoutContainerInput> | TransactionCreateWithoutContainerInput[] | TransactionUncheckedCreateWithoutContainerInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutContainerInput | TransactionCreateOrConnectWithoutContainerInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutContainerInput | TransactionUpsertWithWhereUniqueWithoutContainerInput[]
    createMany?: TransactionCreateManyContainerInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutContainerInput | TransactionUpdateWithWhereUniqueWithoutContainerInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutContainerInput | TransactionUpdateManyWithWhereWithoutContainerInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutContainerNestedInput = {
    create?: XOR<TransactionCreateWithoutContainerInput, TransactionUncheckedCreateWithoutContainerInput> | TransactionCreateWithoutContainerInput[] | TransactionUncheckedCreateWithoutContainerInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutContainerInput | TransactionCreateOrConnectWithoutContainerInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutContainerInput | TransactionUpsertWithWhereUniqueWithoutContainerInput[]
    createMany?: TransactionCreateManyContainerInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutContainerInput | TransactionUpdateWithWhereUniqueWithoutContainerInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutContainerInput | TransactionUpdateManyWithWhereWithoutContainerInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type ContainerCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<ContainerCreateWithoutTransactionsInput, ContainerUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: ContainerCreateOrConnectWithoutTransactionsInput
    connect?: ContainerWhereUniqueInput
  }

  export type LocationCreateNestedOneWithoutFromTransactionsInput = {
    create?: XOR<LocationCreateWithoutFromTransactionsInput, LocationUncheckedCreateWithoutFromTransactionsInput>
    connectOrCreate?: LocationCreateOrConnectWithoutFromTransactionsInput
    connect?: LocationWhereUniqueInput
  }

  export type LocationCreateNestedOneWithoutToTransactionsInput = {
    create?: XOR<LocationCreateWithoutToTransactionsInput, LocationUncheckedCreateWithoutToTransactionsInput>
    connectOrCreate?: LocationCreateOrConnectWithoutToTransactionsInput
    connect?: LocationWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUsedInput = {
    create?: XOR<UserCreateWithoutUsedInput, UserUncheckedCreateWithoutUsedInput>
    connectOrCreate?: UserCreateOrConnectWithoutUsedInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutVerifiedInput = {
    create?: XOR<UserCreateWithoutVerifiedInput, UserUncheckedCreateWithoutVerifiedInput>
    connectOrCreate?: UserCreateOrConnectWithoutVerifiedInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ContainerUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<ContainerCreateWithoutTransactionsInput, ContainerUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: ContainerCreateOrConnectWithoutTransactionsInput
    upsert?: ContainerUpsertWithoutTransactionsInput
    connect?: ContainerWhereUniqueInput
    update?: XOR<XOR<ContainerUpdateToOneWithWhereWithoutTransactionsInput, ContainerUpdateWithoutTransactionsInput>, ContainerUncheckedUpdateWithoutTransactionsInput>
  }

  export type LocationUpdateOneRequiredWithoutFromTransactionsNestedInput = {
    create?: XOR<LocationCreateWithoutFromTransactionsInput, LocationUncheckedCreateWithoutFromTransactionsInput>
    connectOrCreate?: LocationCreateOrConnectWithoutFromTransactionsInput
    upsert?: LocationUpsertWithoutFromTransactionsInput
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutFromTransactionsInput, LocationUpdateWithoutFromTransactionsInput>, LocationUncheckedUpdateWithoutFromTransactionsInput>
  }

  export type LocationUpdateOneRequiredWithoutToTransactionsNestedInput = {
    create?: XOR<LocationCreateWithoutToTransactionsInput, LocationUncheckedCreateWithoutToTransactionsInput>
    connectOrCreate?: LocationCreateOrConnectWithoutToTransactionsInput
    upsert?: LocationUpsertWithoutToTransactionsInput
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutToTransactionsInput, LocationUpdateWithoutToTransactionsInput>, LocationUncheckedUpdateWithoutToTransactionsInput>
  }

  export type UserUpdateOneRequiredWithoutUsedNestedInput = {
    create?: XOR<UserCreateWithoutUsedInput, UserUncheckedCreateWithoutUsedInput>
    connectOrCreate?: UserCreateOrConnectWithoutUsedInput
    upsert?: UserUpsertWithoutUsedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUsedInput, UserUpdateWithoutUsedInput>, UserUncheckedUpdateWithoutUsedInput>
  }

  export type UserUpdateOneWithoutVerifiedNestedInput = {
    create?: XOR<UserCreateWithoutVerifiedInput, UserUncheckedCreateWithoutVerifiedInput>
    connectOrCreate?: UserCreateOrConnectWithoutVerifiedInput
    upsert?: UserUpsertWithoutVerifiedInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVerifiedInput, UserUpdateWithoutVerifiedInput>, UserUncheckedUpdateWithoutVerifiedInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutVerifierInput = {
    create?: XOR<TransactionCreateWithoutVerifierInput, TransactionUncheckedCreateWithoutVerifierInput> | TransactionCreateWithoutVerifierInput[] | TransactionUncheckedCreateWithoutVerifierInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutVerifierInput | TransactionCreateOrConnectWithoutVerifierInput[]
    createMany?: TransactionCreateManyVerifierInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutVerifierInput = {
    create?: XOR<TransactionCreateWithoutVerifierInput, TransactionUncheckedCreateWithoutVerifierInput> | TransactionCreateWithoutVerifierInput[] | TransactionUncheckedCreateWithoutVerifierInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutVerifierInput | TransactionCreateOrConnectWithoutVerifierInput[]
    createMany?: TransactionCreateManyVerifierInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutVerifierNestedInput = {
    create?: XOR<TransactionCreateWithoutVerifierInput, TransactionUncheckedCreateWithoutVerifierInput> | TransactionCreateWithoutVerifierInput[] | TransactionUncheckedCreateWithoutVerifierInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutVerifierInput | TransactionCreateOrConnectWithoutVerifierInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutVerifierInput | TransactionUpsertWithWhereUniqueWithoutVerifierInput[]
    createMany?: TransactionCreateManyVerifierInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutVerifierInput | TransactionUpdateWithWhereUniqueWithoutVerifierInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutVerifierInput | TransactionUpdateManyWithWhereWithoutVerifierInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutVerifierNestedInput = {
    create?: XOR<TransactionCreateWithoutVerifierInput, TransactionUncheckedCreateWithoutVerifierInput> | TransactionCreateWithoutVerifierInput[] | TransactionUncheckedCreateWithoutVerifierInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutVerifierInput | TransactionCreateOrConnectWithoutVerifierInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutVerifierInput | TransactionUpsertWithWhereUniqueWithoutVerifierInput[]
    createMany?: TransactionCreateManyVerifierInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutVerifierInput | TransactionUpdateWithWhereUniqueWithoutVerifierInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutVerifierInput | TransactionUpdateManyWithWhereWithoutVerifierInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type TransactionCreateWithoutFromInput = {
    amountCheckedOut: Decimal | DecimalJsLike | number | string
    amountUsed?: Decimal | DecimalJsLike | number | string | null
    amountLost?: Decimal | DecimalJsLike | number | string | null
    amountRemaining?: Decimal | DecimalJsLike | number | string | null
    newGross?: Decimal | DecimalJsLike | number | string | null
    purpose: string
    description: string
    comment?: string | null
    date?: Date | string
    adminVerified?: boolean
    container: ContainerCreateNestedOneWithoutTransactionsInput
    to: LocationCreateNestedOneWithoutToTransactionsInput
    user: UserCreateNestedOneWithoutUsedInput
    verifier?: UserCreateNestedOneWithoutVerifiedInput
  }

  export type TransactionUncheckedCreateWithoutFromInput = {
    id?: number
    containerId: number
    amountCheckedOut: Decimal | DecimalJsLike | number | string
    amountUsed?: Decimal | DecimalJsLike | number | string | null
    amountLost?: Decimal | DecimalJsLike | number | string | null
    amountRemaining?: Decimal | DecimalJsLike | number | string | null
    newGross?: Decimal | DecimalJsLike | number | string | null
    purpose: string
    description: string
    comment?: string | null
    toId: string
    date?: Date | string
    userId: number
    verifierId?: number | null
    adminVerified?: boolean
  }

  export type TransactionCreateOrConnectWithoutFromInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutFromInput, TransactionUncheckedCreateWithoutFromInput>
  }

  export type TransactionCreateManyFromInputEnvelope = {
    data: TransactionCreateManyFromInput | TransactionCreateManyFromInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutToInput = {
    amountCheckedOut: Decimal | DecimalJsLike | number | string
    amountUsed?: Decimal | DecimalJsLike | number | string | null
    amountLost?: Decimal | DecimalJsLike | number | string | null
    amountRemaining?: Decimal | DecimalJsLike | number | string | null
    newGross?: Decimal | DecimalJsLike | number | string | null
    purpose: string
    description: string
    comment?: string | null
    date?: Date | string
    adminVerified?: boolean
    container: ContainerCreateNestedOneWithoutTransactionsInput
    from: LocationCreateNestedOneWithoutFromTransactionsInput
    user: UserCreateNestedOneWithoutUsedInput
    verifier?: UserCreateNestedOneWithoutVerifiedInput
  }

  export type TransactionUncheckedCreateWithoutToInput = {
    id?: number
    containerId: number
    amountCheckedOut: Decimal | DecimalJsLike | number | string
    amountUsed?: Decimal | DecimalJsLike | number | string | null
    amountLost?: Decimal | DecimalJsLike | number | string | null
    amountRemaining?: Decimal | DecimalJsLike | number | string | null
    newGross?: Decimal | DecimalJsLike | number | string | null
    purpose: string
    description: string
    comment?: string | null
    fromId: string
    date?: Date | string
    userId: number
    verifierId?: number | null
    adminVerified?: boolean
  }

  export type TransactionCreateOrConnectWithoutToInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutToInput, TransactionUncheckedCreateWithoutToInput>
  }

  export type TransactionCreateManyToInputEnvelope = {
    data: TransactionCreateManyToInput | TransactionCreateManyToInput[]
    skipDuplicates?: boolean
  }

  export type TransactionUpsertWithWhereUniqueWithoutFromInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutFromInput, TransactionUncheckedUpdateWithoutFromInput>
    create: XOR<TransactionCreateWithoutFromInput, TransactionUncheckedCreateWithoutFromInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutFromInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutFromInput, TransactionUncheckedUpdateWithoutFromInput>
  }

  export type TransactionUpdateManyWithWhereWithoutFromInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutFromInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: IntFilter<"Transaction"> | number
    containerId?: IntFilter<"Transaction"> | number
    amountCheckedOut?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    amountUsed?: DecimalNullableFilter<"Transaction"> | Decimal | DecimalJsLike | number | string | null
    amountLost?: DecimalNullableFilter<"Transaction"> | Decimal | DecimalJsLike | number | string | null
    amountRemaining?: DecimalNullableFilter<"Transaction"> | Decimal | DecimalJsLike | number | string | null
    newGross?: DecimalNullableFilter<"Transaction"> | Decimal | DecimalJsLike | number | string | null
    purpose?: StringFilter<"Transaction"> | string
    description?: StringFilter<"Transaction"> | string
    comment?: StringNullableFilter<"Transaction"> | string | null
    fromId?: StringFilter<"Transaction"> | string
    toId?: StringFilter<"Transaction"> | string
    date?: DateTimeFilter<"Transaction"> | Date | string
    userId?: IntFilter<"Transaction"> | number
    verifierId?: IntNullableFilter<"Transaction"> | number | null
    adminVerified?: BoolFilter<"Transaction"> | boolean
  }

  export type TransactionUpsertWithWhereUniqueWithoutToInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutToInput, TransactionUncheckedUpdateWithoutToInput>
    create: XOR<TransactionCreateWithoutToInput, TransactionUncheckedCreateWithoutToInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutToInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutToInput, TransactionUncheckedUpdateWithoutToInput>
  }

  export type TransactionUpdateManyWithWhereWithoutToInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutToInput>
  }

  export type ContainerCreateWithoutSubstanceInput = {
    bin?: string | null
    label?: string | null
    serialNumber?: string | null
    initialGross?: Decimal | DecimalJsLike | number | string | null
    initialTare?: Decimal | DecimalJsLike | number | string | null
    initialNet: Decimal | DecimalJsLike | number | string
    container?: string | null
    transactions?: TransactionCreateNestedManyWithoutContainerInput
  }

  export type ContainerUncheckedCreateWithoutSubstanceInput = {
    id?: number
    bin?: string | null
    label?: string | null
    serialNumber?: string | null
    initialGross?: Decimal | DecimalJsLike | number | string | null
    initialTare?: Decimal | DecimalJsLike | number | string | null
    initialNet: Decimal | DecimalJsLike | number | string
    container?: string | null
    transactions?: TransactionUncheckedCreateNestedManyWithoutContainerInput
  }

  export type ContainerCreateOrConnectWithoutSubstanceInput = {
    where: ContainerWhereUniqueInput
    create: XOR<ContainerCreateWithoutSubstanceInput, ContainerUncheckedCreateWithoutSubstanceInput>
  }

  export type ContainerCreateManySubstanceInputEnvelope = {
    data: ContainerCreateManySubstanceInput | ContainerCreateManySubstanceInput[]
    skipDuplicates?: boolean
  }

  export type ContainerUpsertWithWhereUniqueWithoutSubstanceInput = {
    where: ContainerWhereUniqueInput
    update: XOR<ContainerUpdateWithoutSubstanceInput, ContainerUncheckedUpdateWithoutSubstanceInput>
    create: XOR<ContainerCreateWithoutSubstanceInput, ContainerUncheckedCreateWithoutSubstanceInput>
  }

  export type ContainerUpdateWithWhereUniqueWithoutSubstanceInput = {
    where: ContainerWhereUniqueInput
    data: XOR<ContainerUpdateWithoutSubstanceInput, ContainerUncheckedUpdateWithoutSubstanceInput>
  }

  export type ContainerUpdateManyWithWhereWithoutSubstanceInput = {
    where: ContainerScalarWhereInput
    data: XOR<ContainerUpdateManyMutationInput, ContainerUncheckedUpdateManyWithoutSubstanceInput>
  }

  export type ContainerScalarWhereInput = {
    AND?: ContainerScalarWhereInput | ContainerScalarWhereInput[]
    OR?: ContainerScalarWhereInput[]
    NOT?: ContainerScalarWhereInput | ContainerScalarWhereInput[]
    id?: IntFilter<"Container"> | number
    substanceId?: IntFilter<"Container"> | number
    bin?: StringNullableFilter<"Container"> | string | null
    label?: StringNullableFilter<"Container"> | string | null
    serialNumber?: StringNullableFilter<"Container"> | string | null
    initialGross?: DecimalNullableFilter<"Container"> | Decimal | DecimalJsLike | number | string | null
    initialTare?: DecimalNullableFilter<"Container"> | Decimal | DecimalJsLike | number | string | null
    initialNet?: DecimalFilter<"Container"> | Decimal | DecimalJsLike | number | string
    container?: StringNullableFilter<"Container"> | string | null
  }

  export type SubstanceCreateWithoutContainersInput = {
    dateAdded?: Date | string
    productName: string
    lotNumber: string
    materialType: string
    unit: string
    expirationDate?: Date | string | null
    receivedDate: Date | string
  }

  export type SubstanceUncheckedCreateWithoutContainersInput = {
    id?: number
    dateAdded?: Date | string
    productName: string
    lotNumber: string
    materialType: string
    unit: string
    expirationDate?: Date | string | null
    receivedDate: Date | string
  }

  export type SubstanceCreateOrConnectWithoutContainersInput = {
    where: SubstanceWhereUniqueInput
    create: XOR<SubstanceCreateWithoutContainersInput, SubstanceUncheckedCreateWithoutContainersInput>
  }

  export type TransactionCreateWithoutContainerInput = {
    amountCheckedOut: Decimal | DecimalJsLike | number | string
    amountUsed?: Decimal | DecimalJsLike | number | string | null
    amountLost?: Decimal | DecimalJsLike | number | string | null
    amountRemaining?: Decimal | DecimalJsLike | number | string | null
    newGross?: Decimal | DecimalJsLike | number | string | null
    purpose: string
    description: string
    comment?: string | null
    date?: Date | string
    adminVerified?: boolean
    from: LocationCreateNestedOneWithoutFromTransactionsInput
    to: LocationCreateNestedOneWithoutToTransactionsInput
    user: UserCreateNestedOneWithoutUsedInput
    verifier?: UserCreateNestedOneWithoutVerifiedInput
  }

  export type TransactionUncheckedCreateWithoutContainerInput = {
    id?: number
    amountCheckedOut: Decimal | DecimalJsLike | number | string
    amountUsed?: Decimal | DecimalJsLike | number | string | null
    amountLost?: Decimal | DecimalJsLike | number | string | null
    amountRemaining?: Decimal | DecimalJsLike | number | string | null
    newGross?: Decimal | DecimalJsLike | number | string | null
    purpose: string
    description: string
    comment?: string | null
    fromId: string
    toId: string
    date?: Date | string
    userId: number
    verifierId?: number | null
    adminVerified?: boolean
  }

  export type TransactionCreateOrConnectWithoutContainerInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutContainerInput, TransactionUncheckedCreateWithoutContainerInput>
  }

  export type TransactionCreateManyContainerInputEnvelope = {
    data: TransactionCreateManyContainerInput | TransactionCreateManyContainerInput[]
    skipDuplicates?: boolean
  }

  export type SubstanceUpsertWithoutContainersInput = {
    update: XOR<SubstanceUpdateWithoutContainersInput, SubstanceUncheckedUpdateWithoutContainersInput>
    create: XOR<SubstanceCreateWithoutContainersInput, SubstanceUncheckedCreateWithoutContainersInput>
    where?: SubstanceWhereInput
  }

  export type SubstanceUpdateToOneWithWhereWithoutContainersInput = {
    where?: SubstanceWhereInput
    data: XOR<SubstanceUpdateWithoutContainersInput, SubstanceUncheckedUpdateWithoutContainersInput>
  }

  export type SubstanceUpdateWithoutContainersInput = {
    dateAdded?: DateTimeFieldUpdateOperationsInput | Date | string
    productName?: StringFieldUpdateOperationsInput | string
    lotNumber?: StringFieldUpdateOperationsInput | string
    materialType?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receivedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubstanceUncheckedUpdateWithoutContainersInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateAdded?: DateTimeFieldUpdateOperationsInput | Date | string
    productName?: StringFieldUpdateOperationsInput | string
    lotNumber?: StringFieldUpdateOperationsInput | string
    materialType?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receivedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpsertWithWhereUniqueWithoutContainerInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutContainerInput, TransactionUncheckedUpdateWithoutContainerInput>
    create: XOR<TransactionCreateWithoutContainerInput, TransactionUncheckedCreateWithoutContainerInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutContainerInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutContainerInput, TransactionUncheckedUpdateWithoutContainerInput>
  }

  export type TransactionUpdateManyWithWhereWithoutContainerInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutContainerInput>
  }

  export type ContainerCreateWithoutTransactionsInput = {
    bin?: string | null
    label?: string | null
    serialNumber?: string | null
    initialGross?: Decimal | DecimalJsLike | number | string | null
    initialTare?: Decimal | DecimalJsLike | number | string | null
    initialNet: Decimal | DecimalJsLike | number | string
    container?: string | null
    substance: SubstanceCreateNestedOneWithoutContainersInput
  }

  export type ContainerUncheckedCreateWithoutTransactionsInput = {
    id?: number
    substanceId: number
    bin?: string | null
    label?: string | null
    serialNumber?: string | null
    initialGross?: Decimal | DecimalJsLike | number | string | null
    initialTare?: Decimal | DecimalJsLike | number | string | null
    initialNet: Decimal | DecimalJsLike | number | string
    container?: string | null
  }

  export type ContainerCreateOrConnectWithoutTransactionsInput = {
    where: ContainerWhereUniqueInput
    create: XOR<ContainerCreateWithoutTransactionsInput, ContainerUncheckedCreateWithoutTransactionsInput>
  }

  export type LocationCreateWithoutFromTransactionsInput = {
    name: string
    toTransactions?: TransactionCreateNestedManyWithoutToInput
  }

  export type LocationUncheckedCreateWithoutFromTransactionsInput = {
    name: string
    toTransactions?: TransactionUncheckedCreateNestedManyWithoutToInput
  }

  export type LocationCreateOrConnectWithoutFromTransactionsInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutFromTransactionsInput, LocationUncheckedCreateWithoutFromTransactionsInput>
  }

  export type LocationCreateWithoutToTransactionsInput = {
    name: string
    fromTransactions?: TransactionCreateNestedManyWithoutFromInput
  }

  export type LocationUncheckedCreateWithoutToTransactionsInput = {
    name: string
    fromTransactions?: TransactionUncheckedCreateNestedManyWithoutFromInput
  }

  export type LocationCreateOrConnectWithoutToTransactionsInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutToTransactionsInput, LocationUncheckedCreateWithoutToTransactionsInput>
  }

  export type UserCreateWithoutUsedInput = {
    name: string
    initials: string
    hashedPassword: string
    role?: string
    verified?: TransactionCreateNestedManyWithoutVerifierInput
  }

  export type UserUncheckedCreateWithoutUsedInput = {
    id?: number
    name: string
    initials: string
    hashedPassword: string
    role?: string
    verified?: TransactionUncheckedCreateNestedManyWithoutVerifierInput
  }

  export type UserCreateOrConnectWithoutUsedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUsedInput, UserUncheckedCreateWithoutUsedInput>
  }

  export type UserCreateWithoutVerifiedInput = {
    name: string
    initials: string
    hashedPassword: string
    role?: string
    used?: TransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVerifiedInput = {
    id?: number
    name: string
    initials: string
    hashedPassword: string
    role?: string
    used?: TransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVerifiedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVerifiedInput, UserUncheckedCreateWithoutVerifiedInput>
  }

  export type ContainerUpsertWithoutTransactionsInput = {
    update: XOR<ContainerUpdateWithoutTransactionsInput, ContainerUncheckedUpdateWithoutTransactionsInput>
    create: XOR<ContainerCreateWithoutTransactionsInput, ContainerUncheckedCreateWithoutTransactionsInput>
    where?: ContainerWhereInput
  }

  export type ContainerUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: ContainerWhereInput
    data: XOR<ContainerUpdateWithoutTransactionsInput, ContainerUncheckedUpdateWithoutTransactionsInput>
  }

  export type ContainerUpdateWithoutTransactionsInput = {
    bin?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    initialGross?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    initialTare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    initialNet?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    container?: NullableStringFieldUpdateOperationsInput | string | null
    substance?: SubstanceUpdateOneRequiredWithoutContainersNestedInput
  }

  export type ContainerUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    substanceId?: IntFieldUpdateOperationsInput | number
    bin?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    initialGross?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    initialTare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    initialNet?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    container?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LocationUpsertWithoutFromTransactionsInput = {
    update: XOR<LocationUpdateWithoutFromTransactionsInput, LocationUncheckedUpdateWithoutFromTransactionsInput>
    create: XOR<LocationCreateWithoutFromTransactionsInput, LocationUncheckedCreateWithoutFromTransactionsInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutFromTransactionsInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutFromTransactionsInput, LocationUncheckedUpdateWithoutFromTransactionsInput>
  }

  export type LocationUpdateWithoutFromTransactionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    toTransactions?: TransactionUpdateManyWithoutToNestedInput
  }

  export type LocationUncheckedUpdateWithoutFromTransactionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    toTransactions?: TransactionUncheckedUpdateManyWithoutToNestedInput
  }

  export type LocationUpsertWithoutToTransactionsInput = {
    update: XOR<LocationUpdateWithoutToTransactionsInput, LocationUncheckedUpdateWithoutToTransactionsInput>
    create: XOR<LocationCreateWithoutToTransactionsInput, LocationUncheckedCreateWithoutToTransactionsInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutToTransactionsInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutToTransactionsInput, LocationUncheckedUpdateWithoutToTransactionsInput>
  }

  export type LocationUpdateWithoutToTransactionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    fromTransactions?: TransactionUpdateManyWithoutFromNestedInput
  }

  export type LocationUncheckedUpdateWithoutToTransactionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    fromTransactions?: TransactionUncheckedUpdateManyWithoutFromNestedInput
  }

  export type UserUpsertWithoutUsedInput = {
    update: XOR<UserUpdateWithoutUsedInput, UserUncheckedUpdateWithoutUsedInput>
    create: XOR<UserCreateWithoutUsedInput, UserUncheckedCreateWithoutUsedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUsedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUsedInput, UserUncheckedUpdateWithoutUsedInput>
  }

  export type UserUpdateWithoutUsedInput = {
    name?: StringFieldUpdateOperationsInput | string
    initials?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    verified?: TransactionUpdateManyWithoutVerifierNestedInput
  }

  export type UserUncheckedUpdateWithoutUsedInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    initials?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    verified?: TransactionUncheckedUpdateManyWithoutVerifierNestedInput
  }

  export type UserUpsertWithoutVerifiedInput = {
    update: XOR<UserUpdateWithoutVerifiedInput, UserUncheckedUpdateWithoutVerifiedInput>
    create: XOR<UserCreateWithoutVerifiedInput, UserUncheckedCreateWithoutVerifiedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVerifiedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVerifiedInput, UserUncheckedUpdateWithoutVerifiedInput>
  }

  export type UserUpdateWithoutVerifiedInput = {
    name?: StringFieldUpdateOperationsInput | string
    initials?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    used?: TransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVerifiedInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    initials?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    used?: TransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TransactionCreateWithoutUserInput = {
    amountCheckedOut: Decimal | DecimalJsLike | number | string
    amountUsed?: Decimal | DecimalJsLike | number | string | null
    amountLost?: Decimal | DecimalJsLike | number | string | null
    amountRemaining?: Decimal | DecimalJsLike | number | string | null
    newGross?: Decimal | DecimalJsLike | number | string | null
    purpose: string
    description: string
    comment?: string | null
    date?: Date | string
    adminVerified?: boolean
    container: ContainerCreateNestedOneWithoutTransactionsInput
    from: LocationCreateNestedOneWithoutFromTransactionsInput
    to: LocationCreateNestedOneWithoutToTransactionsInput
    verifier?: UserCreateNestedOneWithoutVerifiedInput
  }

  export type TransactionUncheckedCreateWithoutUserInput = {
    id?: number
    containerId: number
    amountCheckedOut: Decimal | DecimalJsLike | number | string
    amountUsed?: Decimal | DecimalJsLike | number | string | null
    amountLost?: Decimal | DecimalJsLike | number | string | null
    amountRemaining?: Decimal | DecimalJsLike | number | string | null
    newGross?: Decimal | DecimalJsLike | number | string | null
    purpose: string
    description: string
    comment?: string | null
    fromId: string
    toId: string
    date?: Date | string
    verifierId?: number | null
    adminVerified?: boolean
  }

  export type TransactionCreateOrConnectWithoutUserInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionCreateManyUserInputEnvelope = {
    data: TransactionCreateManyUserInput | TransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutVerifierInput = {
    amountCheckedOut: Decimal | DecimalJsLike | number | string
    amountUsed?: Decimal | DecimalJsLike | number | string | null
    amountLost?: Decimal | DecimalJsLike | number | string | null
    amountRemaining?: Decimal | DecimalJsLike | number | string | null
    newGross?: Decimal | DecimalJsLike | number | string | null
    purpose: string
    description: string
    comment?: string | null
    date?: Date | string
    adminVerified?: boolean
    container: ContainerCreateNestedOneWithoutTransactionsInput
    from: LocationCreateNestedOneWithoutFromTransactionsInput
    to: LocationCreateNestedOneWithoutToTransactionsInput
    user: UserCreateNestedOneWithoutUsedInput
  }

  export type TransactionUncheckedCreateWithoutVerifierInput = {
    id?: number
    containerId: number
    amountCheckedOut: Decimal | DecimalJsLike | number | string
    amountUsed?: Decimal | DecimalJsLike | number | string | null
    amountLost?: Decimal | DecimalJsLike | number | string | null
    amountRemaining?: Decimal | DecimalJsLike | number | string | null
    newGross?: Decimal | DecimalJsLike | number | string | null
    purpose: string
    description: string
    comment?: string | null
    fromId: string
    toId: string
    date?: Date | string
    userId: number
    adminVerified?: boolean
  }

  export type TransactionCreateOrConnectWithoutVerifierInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutVerifierInput, TransactionUncheckedCreateWithoutVerifierInput>
  }

  export type TransactionCreateManyVerifierInputEnvelope = {
    data: TransactionCreateManyVerifierInput | TransactionCreateManyVerifierInput[]
    skipDuplicates?: boolean
  }

  export type TransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
  }

  export type TransactionUpdateManyWithWhereWithoutUserInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type TransactionUpsertWithWhereUniqueWithoutVerifierInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutVerifierInput, TransactionUncheckedUpdateWithoutVerifierInput>
    create: XOR<TransactionCreateWithoutVerifierInput, TransactionUncheckedCreateWithoutVerifierInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutVerifierInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutVerifierInput, TransactionUncheckedUpdateWithoutVerifierInput>
  }

  export type TransactionUpdateManyWithWhereWithoutVerifierInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutVerifierInput>
  }

  export type TransactionCreateManyFromInput = {
    id?: number
    containerId: number
    amountCheckedOut: Decimal | DecimalJsLike | number | string
    amountUsed?: Decimal | DecimalJsLike | number | string | null
    amountLost?: Decimal | DecimalJsLike | number | string | null
    amountRemaining?: Decimal | DecimalJsLike | number | string | null
    newGross?: Decimal | DecimalJsLike | number | string | null
    purpose: string
    description: string
    comment?: string | null
    toId: string
    date?: Date | string
    userId: number
    verifierId?: number | null
    adminVerified?: boolean
  }

  export type TransactionCreateManyToInput = {
    id?: number
    containerId: number
    amountCheckedOut: Decimal | DecimalJsLike | number | string
    amountUsed?: Decimal | DecimalJsLike | number | string | null
    amountLost?: Decimal | DecimalJsLike | number | string | null
    amountRemaining?: Decimal | DecimalJsLike | number | string | null
    newGross?: Decimal | DecimalJsLike | number | string | null
    purpose: string
    description: string
    comment?: string | null
    fromId: string
    date?: Date | string
    userId: number
    verifierId?: number | null
    adminVerified?: boolean
  }

  export type TransactionUpdateWithoutFromInput = {
    amountCheckedOut?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountUsed?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amountLost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amountRemaining?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    newGross?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    purpose?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    adminVerified?: BoolFieldUpdateOperationsInput | boolean
    container?: ContainerUpdateOneRequiredWithoutTransactionsNestedInput
    to?: LocationUpdateOneRequiredWithoutToTransactionsNestedInput
    user?: UserUpdateOneRequiredWithoutUsedNestedInput
    verifier?: UserUpdateOneWithoutVerifiedNestedInput
  }

  export type TransactionUncheckedUpdateWithoutFromInput = {
    id?: IntFieldUpdateOperationsInput | number
    containerId?: IntFieldUpdateOperationsInput | number
    amountCheckedOut?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountUsed?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amountLost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amountRemaining?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    newGross?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    purpose?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    toId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    verifierId?: NullableIntFieldUpdateOperationsInput | number | null
    adminVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TransactionUncheckedUpdateManyWithoutFromInput = {
    id?: IntFieldUpdateOperationsInput | number
    containerId?: IntFieldUpdateOperationsInput | number
    amountCheckedOut?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountUsed?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amountLost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amountRemaining?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    newGross?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    purpose?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    toId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    verifierId?: NullableIntFieldUpdateOperationsInput | number | null
    adminVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TransactionUpdateWithoutToInput = {
    amountCheckedOut?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountUsed?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amountLost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amountRemaining?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    newGross?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    purpose?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    adminVerified?: BoolFieldUpdateOperationsInput | boolean
    container?: ContainerUpdateOneRequiredWithoutTransactionsNestedInput
    from?: LocationUpdateOneRequiredWithoutFromTransactionsNestedInput
    user?: UserUpdateOneRequiredWithoutUsedNestedInput
    verifier?: UserUpdateOneWithoutVerifiedNestedInput
  }

  export type TransactionUncheckedUpdateWithoutToInput = {
    id?: IntFieldUpdateOperationsInput | number
    containerId?: IntFieldUpdateOperationsInput | number
    amountCheckedOut?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountUsed?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amountLost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amountRemaining?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    newGross?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    purpose?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    fromId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    verifierId?: NullableIntFieldUpdateOperationsInput | number | null
    adminVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TransactionUncheckedUpdateManyWithoutToInput = {
    id?: IntFieldUpdateOperationsInput | number
    containerId?: IntFieldUpdateOperationsInput | number
    amountCheckedOut?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountUsed?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amountLost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amountRemaining?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    newGross?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    purpose?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    fromId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    verifierId?: NullableIntFieldUpdateOperationsInput | number | null
    adminVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ContainerCreateManySubstanceInput = {
    id?: number
    bin?: string | null
    label?: string | null
    serialNumber?: string | null
    initialGross?: Decimal | DecimalJsLike | number | string | null
    initialTare?: Decimal | DecimalJsLike | number | string | null
    initialNet: Decimal | DecimalJsLike | number | string
    container?: string | null
  }

  export type ContainerUpdateWithoutSubstanceInput = {
    bin?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    initialGross?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    initialTare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    initialNet?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    container?: NullableStringFieldUpdateOperationsInput | string | null
    transactions?: TransactionUpdateManyWithoutContainerNestedInput
  }

  export type ContainerUncheckedUpdateWithoutSubstanceInput = {
    id?: IntFieldUpdateOperationsInput | number
    bin?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    initialGross?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    initialTare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    initialNet?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    container?: NullableStringFieldUpdateOperationsInput | string | null
    transactions?: TransactionUncheckedUpdateManyWithoutContainerNestedInput
  }

  export type ContainerUncheckedUpdateManyWithoutSubstanceInput = {
    id?: IntFieldUpdateOperationsInput | number
    bin?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    initialGross?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    initialTare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    initialNet?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    container?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionCreateManyContainerInput = {
    id?: number
    amountCheckedOut: Decimal | DecimalJsLike | number | string
    amountUsed?: Decimal | DecimalJsLike | number | string | null
    amountLost?: Decimal | DecimalJsLike | number | string | null
    amountRemaining?: Decimal | DecimalJsLike | number | string | null
    newGross?: Decimal | DecimalJsLike | number | string | null
    purpose: string
    description: string
    comment?: string | null
    fromId: string
    toId: string
    date?: Date | string
    userId: number
    verifierId?: number | null
    adminVerified?: boolean
  }

  export type TransactionUpdateWithoutContainerInput = {
    amountCheckedOut?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountUsed?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amountLost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amountRemaining?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    newGross?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    purpose?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    adminVerified?: BoolFieldUpdateOperationsInput | boolean
    from?: LocationUpdateOneRequiredWithoutFromTransactionsNestedInput
    to?: LocationUpdateOneRequiredWithoutToTransactionsNestedInput
    user?: UserUpdateOneRequiredWithoutUsedNestedInput
    verifier?: UserUpdateOneWithoutVerifiedNestedInput
  }

  export type TransactionUncheckedUpdateWithoutContainerInput = {
    id?: IntFieldUpdateOperationsInput | number
    amountCheckedOut?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountUsed?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amountLost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amountRemaining?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    newGross?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    purpose?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    fromId?: StringFieldUpdateOperationsInput | string
    toId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    verifierId?: NullableIntFieldUpdateOperationsInput | number | null
    adminVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TransactionUncheckedUpdateManyWithoutContainerInput = {
    id?: IntFieldUpdateOperationsInput | number
    amountCheckedOut?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountUsed?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amountLost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amountRemaining?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    newGross?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    purpose?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    fromId?: StringFieldUpdateOperationsInput | string
    toId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    verifierId?: NullableIntFieldUpdateOperationsInput | number | null
    adminVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TransactionCreateManyUserInput = {
    id?: number
    containerId: number
    amountCheckedOut: Decimal | DecimalJsLike | number | string
    amountUsed?: Decimal | DecimalJsLike | number | string | null
    amountLost?: Decimal | DecimalJsLike | number | string | null
    amountRemaining?: Decimal | DecimalJsLike | number | string | null
    newGross?: Decimal | DecimalJsLike | number | string | null
    purpose: string
    description: string
    comment?: string | null
    fromId: string
    toId: string
    date?: Date | string
    verifierId?: number | null
    adminVerified?: boolean
  }

  export type TransactionCreateManyVerifierInput = {
    id?: number
    containerId: number
    amountCheckedOut: Decimal | DecimalJsLike | number | string
    amountUsed?: Decimal | DecimalJsLike | number | string | null
    amountLost?: Decimal | DecimalJsLike | number | string | null
    amountRemaining?: Decimal | DecimalJsLike | number | string | null
    newGross?: Decimal | DecimalJsLike | number | string | null
    purpose: string
    description: string
    comment?: string | null
    fromId: string
    toId: string
    date?: Date | string
    userId: number
    adminVerified?: boolean
  }

  export type TransactionUpdateWithoutUserInput = {
    amountCheckedOut?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountUsed?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amountLost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amountRemaining?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    newGross?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    purpose?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    adminVerified?: BoolFieldUpdateOperationsInput | boolean
    container?: ContainerUpdateOneRequiredWithoutTransactionsNestedInput
    from?: LocationUpdateOneRequiredWithoutFromTransactionsNestedInput
    to?: LocationUpdateOneRequiredWithoutToTransactionsNestedInput
    verifier?: UserUpdateOneWithoutVerifiedNestedInput
  }

  export type TransactionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    containerId?: IntFieldUpdateOperationsInput | number
    amountCheckedOut?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountUsed?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amountLost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amountRemaining?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    newGross?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    purpose?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    fromId?: StringFieldUpdateOperationsInput | string
    toId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    verifierId?: NullableIntFieldUpdateOperationsInput | number | null
    adminVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TransactionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    containerId?: IntFieldUpdateOperationsInput | number
    amountCheckedOut?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountUsed?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amountLost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amountRemaining?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    newGross?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    purpose?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    fromId?: StringFieldUpdateOperationsInput | string
    toId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    verifierId?: NullableIntFieldUpdateOperationsInput | number | null
    adminVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TransactionUpdateWithoutVerifierInput = {
    amountCheckedOut?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountUsed?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amountLost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amountRemaining?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    newGross?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    purpose?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    adminVerified?: BoolFieldUpdateOperationsInput | boolean
    container?: ContainerUpdateOneRequiredWithoutTransactionsNestedInput
    from?: LocationUpdateOneRequiredWithoutFromTransactionsNestedInput
    to?: LocationUpdateOneRequiredWithoutToTransactionsNestedInput
    user?: UserUpdateOneRequiredWithoutUsedNestedInput
  }

  export type TransactionUncheckedUpdateWithoutVerifierInput = {
    id?: IntFieldUpdateOperationsInput | number
    containerId?: IntFieldUpdateOperationsInput | number
    amountCheckedOut?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountUsed?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amountLost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amountRemaining?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    newGross?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    purpose?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    fromId?: StringFieldUpdateOperationsInput | string
    toId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    adminVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TransactionUncheckedUpdateManyWithoutVerifierInput = {
    id?: IntFieldUpdateOperationsInput | number
    containerId?: IntFieldUpdateOperationsInput | number
    amountCheckedOut?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountUsed?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amountLost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amountRemaining?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    newGross?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    purpose?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    fromId?: StringFieldUpdateOperationsInput | string
    toId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    adminVerified?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}