/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Address,
  Contract,
  ContractState,
  TestContractResult,
  HexString,
  ContractFactory,
  EventSubscribeOptions,
  EventSubscription,
  CallContractParams,
  CallContractResult,
  TestContractParams,
  ContractEvent,
  subscribeContractEvent,
  subscribeContractEvents,
  testMethod,
  callMethod,
  multicallMethods,
  fetchContractState,
  ContractInstance,
  getContractEventsCurrentCount,
  Val,
} from "@alephium/web3";
import { default as AuctionContractJson } from "../Auction.ral.json";
import { getContractByCodeHash } from "./contracts";

import { Bid, AllStructs } from "./types";
import { AllGeneratedContracts } from "./types";

// Custom types for the contract
export namespace AuctionTypes {
  export interface Fields extends Record<string, Val> {
    beneficiary: Address;
    biddingEnd: bigint;
    revealEnd: bigint;
    ended: boolean;
    highestBidder: Address;
    highestBid: bigint;
  }

  export type State = ContractState<Fields>;

  export type AuctionEndedEvent = ContractEvent<{
    winner: Address;
    amount: bigint;
  }>;

  export interface CallMethodTable {
    getBidNum: {
      params: CallContractParams<{ bidder: Address }>;
      result: CallContractResult<bigint>;
    };
    getBid: {
      params: CallContractParams<{ bidder: Address; index: bigint }>;
      result: CallContractResult<Bid>;
    };
    getPendingReturn: {
      params: CallContractParams<{ bidder: Address }>;
      result: CallContractResult<bigint>;
    };
  }
  export type CallMethodParams<T extends keyof CallMethodTable> =
    CallMethodTable[T]["params"];
  export type CallMethodResult<T extends keyof CallMethodTable> =
    CallMethodTable[T]["result"];
  export type MultiCallParams = Partial<{
    [Name in keyof CallMethodTable]: CallMethodTable[Name]["params"];
  }>;
  export type MultiCallResults<T extends MultiCallParams> = {
    [MaybeName in keyof T]: MaybeName extends keyof CallMethodTable
      ? CallMethodTable[MaybeName]["result"]
      : undefined;
  };
}

class Factory extends ContractFactory<AuctionInstance, AuctionTypes.Fields> {
  getInitialFieldsWithDefaultValues() {
    return this.contract.getInitialFieldsWithDefaultValues() as AuctionTypes.Fields;
  }

  eventIndex = { AuctionEnded: 0 };
  consts = {
    ErrorCodes: {
      InvalidArg: BigInt(0),
      BiddingAlreadyEnded: BigInt(1),
      InvalidBidderAddress: BigInt(2),
      BiddingNotEnd: BigInt(3),
      RevealAlreadyEnded: BigInt(4),
      RevealNotEnd: BigInt(5),
      AuctionEndAlreadyCalled: BigInt(6),
    },
  };

  at(address: string): AuctionInstance {
    return new AuctionInstance(address);
  }

  tests = {
    bid: async (
      params: TestContractParams<
        AuctionTypes.Fields & {
          bids?: Map<HexString, Bid>;
          bidNum?: Map<Address, bigint>;
          pendingReturns?: Map<Address, bigint>;
        },
        { bidder: Address; blindedBid: HexString; deposit: bigint }
      >
    ): Promise<
      TestContractResult<
        null,
        {
          bids?: Map<HexString, Bid>;
          bidNum?: Map<Address, bigint>;
          pendingReturns?: Map<Address, bigint>;
        }
      >
    > => {
      return testMethod(this, "bid", params);
    },
    reveal: async (
      params: TestContractParams<
        AuctionTypes.Fields & {
          bids?: Map<HexString, Bid>;
          bidNum?: Map<Address, bigint>;
          pendingReturns?: Map<Address, bigint>;
        },
        {
          bidder: Address;
          values: HexString;
          fakes: HexString;
          secrets: HexString;
        }
      >
    ): Promise<
      TestContractResult<
        null,
        {
          bids?: Map<HexString, Bid>;
          bidNum?: Map<Address, bigint>;
          pendingReturns?: Map<Address, bigint>;
        }
      >
    > => {
      return testMethod(this, "reveal", params);
    },
    withdraw: async (
      params: TestContractParams<
        AuctionTypes.Fields & {
          bids?: Map<HexString, Bid>;
          bidNum?: Map<Address, bigint>;
          pendingReturns?: Map<Address, bigint>;
        },
        { bidder: Address }
      >
    ): Promise<
      TestContractResult<
        null,
        {
          bids?: Map<HexString, Bid>;
          bidNum?: Map<Address, bigint>;
          pendingReturns?: Map<Address, bigint>;
        }
      >
    > => {
      return testMethod(this, "withdraw", params);
    },
    auctionEnd: async (
      params: Omit<
        TestContractParams<
          AuctionTypes.Fields & {
            bids?: Map<HexString, Bid>;
            bidNum?: Map<Address, bigint>;
            pendingReturns?: Map<Address, bigint>;
          },
          never
        >,
        "testArgs"
      >
    ): Promise<
      TestContractResult<
        null,
        {
          bids?: Map<HexString, Bid>;
          bidNum?: Map<Address, bigint>;
          pendingReturns?: Map<Address, bigint>;
        }
      >
    > => {
      return testMethod(this, "auctionEnd", params);
    },
    placeBid: async (
      params: TestContractParams<
        AuctionTypes.Fields & {
          bids?: Map<HexString, Bid>;
          bidNum?: Map<Address, bigint>;
          pendingReturns?: Map<Address, bigint>;
        },
        { bidder: Address; value: bigint }
      >
    ): Promise<
      TestContractResult<
        null,
        {
          bids?: Map<HexString, Bid>;
          bidNum?: Map<Address, bigint>;
          pendingReturns?: Map<Address, bigint>;
        }
      >
    > => {
      return testMethod(this, "placeBid", params);
    },
    getBidNum: async (
      params: TestContractParams<
        AuctionTypes.Fields & {
          bids?: Map<HexString, Bid>;
          bidNum?: Map<Address, bigint>;
          pendingReturns?: Map<Address, bigint>;
        },
        { bidder: Address }
      >
    ): Promise<
      TestContractResult<
        bigint,
        {
          bids?: Map<HexString, Bid>;
          bidNum?: Map<Address, bigint>;
          pendingReturns?: Map<Address, bigint>;
        }
      >
    > => {
      return testMethod(this, "getBidNum", params);
    },
    getBid: async (
      params: TestContractParams<
        AuctionTypes.Fields & {
          bids?: Map<HexString, Bid>;
          bidNum?: Map<Address, bigint>;
          pendingReturns?: Map<Address, bigint>;
        },
        { bidder: Address; index: bigint }
      >
    ): Promise<
      TestContractResult<
        Bid,
        {
          bids?: Map<HexString, Bid>;
          bidNum?: Map<Address, bigint>;
          pendingReturns?: Map<Address, bigint>;
        }
      >
    > => {
      return testMethod(this, "getBid", params);
    },
    getPendingReturn: async (
      params: TestContractParams<
        AuctionTypes.Fields & {
          bids?: Map<HexString, Bid>;
          bidNum?: Map<Address, bigint>;
          pendingReturns?: Map<Address, bigint>;
        },
        { bidder: Address }
      >
    ): Promise<
      TestContractResult<
        bigint,
        {
          bids?: Map<HexString, Bid>;
          bidNum?: Map<Address, bigint>;
          pendingReturns?: Map<Address, bigint>;
        }
      >
    > => {
      return testMethod(this, "getPendingReturn", params);
    },
  };
}

// Use this object to test and deploy the contract
export const Auction = new Factory(
  Contract.fromJson(
    AuctionContractJson,
    "=6-2=1-3+0=2-3+1=2-1+35a=2-1+7=4-1+b=3+e44=1+2=1-3+42e=12-2+60=83-1+4=40+7a037e0300012c00=254+7a037e0300012c00=228-2+d5=165-1+f=57-1+a=201-1+f=46+402=1-1=39-1+3=40+7a037e0300012c00=196+7a047e0300012c00=50-2+6d=21-1+c=40+7a047e0300012c00=17-1+c=57-1+f=40+7a047e0300012c00=440",
    "4ce43828743c50b8b65da08b96ec6e69f1f2d5f04cc372024fdffb292357d6d1",
    AllStructs,
    AllGeneratedContracts
  )
);

// Use this class to interact with the blockchain
export class AuctionInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<AuctionTypes.State> {
    return fetchContractState(Auction, this);
  }

  async getContractEventsCurrentCount(): Promise<number> {
    return getContractEventsCurrentCount(this.address);
  }

  subscribeAuctionEndedEvent(
    options: EventSubscribeOptions<AuctionTypes.AuctionEndedEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      Auction.contract,
      this,
      options,
      "AuctionEnded",
      fromCount
    );
  }

  methods = {
    getBidNum: async (
      params: AuctionTypes.CallMethodParams<"getBidNum">
    ): Promise<AuctionTypes.CallMethodResult<"getBidNum">> => {
      return callMethod(
        Auction,
        this,
        "getBidNum",
        params,
        getContractByCodeHash
      );
    },
    getBid: async (
      params: AuctionTypes.CallMethodParams<"getBid">
    ): Promise<AuctionTypes.CallMethodResult<"getBid">> => {
      return callMethod(Auction, this, "getBid", params, getContractByCodeHash);
    },
    getPendingReturn: async (
      params: AuctionTypes.CallMethodParams<"getPendingReturn">
    ): Promise<AuctionTypes.CallMethodResult<"getPendingReturn">> => {
      return callMethod(
        Auction,
        this,
        "getPendingReturn",
        params,
        getContractByCodeHash
      );
    },
  };

  async multicall<Calls extends AuctionTypes.MultiCallParams>(
    calls: Calls
  ): Promise<AuctionTypes.MultiCallResults<Calls>> {
    return (await multicallMethods(
      Auction,
      this,
      calls,
      getContractByCodeHash
    )) as AuctionTypes.MultiCallResults<Calls>;
  }
}
