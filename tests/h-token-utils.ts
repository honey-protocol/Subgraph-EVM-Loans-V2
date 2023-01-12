import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  AddressUpdated,
  AdminFeesWithdrawn,
  ApprovalForAll,
  Borrow,
  BorrowFeesWithdrawn,
  BorrowLiquidated,
  BorrowReferred,
  CollateralDeposited,
  CollateralWithdrawn,
  HiveFeesWithdrawn,
  InterestAccrued,
  LiquidationClosed,
  ProtocolFeesUpdated,
  Redeem,
  RepayBorrow,
  ReservesAdded,
  ReservesReduced,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  TransferBatch,
  TransferSingle,
  URI,
  UnderlyingDeposited,
  Withdraw
} from "../generated/HToken/HToken"

export function createAddressUpdatedEvent(
  _oldAddress: Address,
  _newAddress: Address,
  _target: BigInt
): AddressUpdated {
  let addressUpdatedEvent = changetype<AddressUpdated>(newMockEvent())

  addressUpdatedEvent.parameters = new Array()

  addressUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_oldAddress",
      ethereum.Value.fromAddress(_oldAddress)
    )
  )
  addressUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_newAddress",
      ethereum.Value.fromAddress(_newAddress)
    )
  )
  addressUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_target",
      ethereum.Value.fromUnsignedBigInt(_target)
    )
  )

  return addressUpdatedEvent
}

export function createAdminFeesWithdrawnEvent(
  _amount: BigInt
): AdminFeesWithdrawn {
  let adminFeesWithdrawnEvent = changetype<AdminFeesWithdrawn>(newMockEvent())

  adminFeesWithdrawnEvent.parameters = new Array()

  adminFeesWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )

  return adminFeesWithdrawnEvent
}

export function createApprovalForAllEvent(
  account: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createBorrowEvent(
  _borrower: Address,
  _borrowAmount: BigInt,
  _tokenId: BigInt,
  _totalBorrows: BigInt
): Borrow {
  let borrowEvent = changetype<Borrow>(newMockEvent())

  borrowEvent.parameters = new Array()

  borrowEvent.parameters.push(
    new ethereum.EventParam("_borrower", ethereum.Value.fromAddress(_borrower))
  )
  borrowEvent.parameters.push(
    new ethereum.EventParam(
      "_borrowAmount",
      ethereum.Value.fromUnsignedBigInt(_borrowAmount)
    )
  )
  borrowEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenId",
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    )
  )
  borrowEvent.parameters.push(
    new ethereum.EventParam(
      "_totalBorrows",
      ethereum.Value.fromUnsignedBigInt(_totalBorrows)
    )
  )

  return borrowEvent
}

export function createBorrowFeesWithdrawnEvent(
  _amount: BigInt,
  _referralFees: boolean
): BorrowFeesWithdrawn {
  let borrowFeesWithdrawnEvent = changetype<BorrowFeesWithdrawn>(newMockEvent())

  borrowFeesWithdrawnEvent.parameters = new Array()

  borrowFeesWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )
  borrowFeesWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "_referralFees",
      ethereum.Value.fromBoolean(_referralFees)
    )
  )

  return borrowFeesWithdrawnEvent
}

export function createBorrowLiquidatedEvent(
  _initiator: Address,
  _liquidator: Address,
  _owner: Address,
  _collateralId: BigInt
): BorrowLiquidated {
  let borrowLiquidatedEvent = changetype<BorrowLiquidated>(newMockEvent())

  borrowLiquidatedEvent.parameters = new Array()

  borrowLiquidatedEvent.parameters.push(
    new ethereum.EventParam(
      "_initiator",
      ethereum.Value.fromAddress(_initiator)
    )
  )
  borrowLiquidatedEvent.parameters.push(
    new ethereum.EventParam(
      "_liquidator",
      ethereum.Value.fromAddress(_liquidator)
    )
  )
  borrowLiquidatedEvent.parameters.push(
    new ethereum.EventParam("_owner", ethereum.Value.fromAddress(_owner))
  )
  borrowLiquidatedEvent.parameters.push(
    new ethereum.EventParam(
      "_collateralId",
      ethereum.Value.fromUnsignedBigInt(_collateralId)
    )
  )

  return borrowLiquidatedEvent
}

export function createBorrowReferredEvent(
  _initiator: Address,
  _referrer: string,
  _amount: BigInt,
  _fee: BigInt
): BorrowReferred {
  let borrowReferredEvent = changetype<BorrowReferred>(newMockEvent())

  borrowReferredEvent.parameters = new Array()

  borrowReferredEvent.parameters.push(
    new ethereum.EventParam(
      "_initiator",
      ethereum.Value.fromAddress(_initiator)
    )
  )
  borrowReferredEvent.parameters.push(
    new ethereum.EventParam("_referrer", ethereum.Value.fromString(_referrer))
  )
  borrowReferredEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )
  borrowReferredEvent.parameters.push(
    new ethereum.EventParam("_fee", ethereum.Value.fromUnsignedBigInt(_fee))
  )

  return borrowReferredEvent
}

export function createCollateralDepositedEvent(
  _initiator: Address,
  _collateralId: BigInt,
  _couponId: BigInt
): CollateralDeposited {
  let collateralDepositedEvent = changetype<CollateralDeposited>(newMockEvent())

  collateralDepositedEvent.parameters = new Array()

  collateralDepositedEvent.parameters.push(
    new ethereum.EventParam(
      "_initiator",
      ethereum.Value.fromAddress(_initiator)
    )
  )
  collateralDepositedEvent.parameters.push(
    new ethereum.EventParam(
      "_collateralId",
      ethereum.Value.fromUnsignedBigInt(_collateralId)
    )
  )
  collateralDepositedEvent.parameters.push(
    new ethereum.EventParam(
      "_couponId",
      ethereum.Value.fromUnsignedBigInt(_couponId)
    )
  )

  return collateralDepositedEvent
}

export function createCollateralWithdrawnEvent(
  _initiator: Address,
  _collateralId: BigInt
): CollateralWithdrawn {
  let collateralWithdrawnEvent = changetype<CollateralWithdrawn>(newMockEvent())

  collateralWithdrawnEvent.parameters = new Array()

  collateralWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "_initiator",
      ethereum.Value.fromAddress(_initiator)
    )
  )
  collateralWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "_collateralId",
      ethereum.Value.fromUnsignedBigInt(_collateralId)
    )
  )

  return collateralWithdrawnEvent
}

export function createHiveFeesWithdrawnEvent(
  _amount: BigInt
): HiveFeesWithdrawn {
  let hiveFeesWithdrawnEvent = changetype<HiveFeesWithdrawn>(newMockEvent())

  hiveFeesWithdrawnEvent.parameters = new Array()

  hiveFeesWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )

  return hiveFeesWithdrawnEvent
}

export function createInterestAccruedEvent(
  _interestAccumulated: BigInt,
  _interestIndex: BigInt,
  _totalBorrows: BigInt
): InterestAccrued {
  let interestAccruedEvent = changetype<InterestAccrued>(newMockEvent())

  interestAccruedEvent.parameters = new Array()

  interestAccruedEvent.parameters.push(
    new ethereum.EventParam(
      "_interestAccumulated",
      ethereum.Value.fromUnsignedBigInt(_interestAccumulated)
    )
  )
  interestAccruedEvent.parameters.push(
    new ethereum.EventParam(
      "_interestIndex",
      ethereum.Value.fromUnsignedBigInt(_interestIndex)
    )
  )
  interestAccruedEvent.parameters.push(
    new ethereum.EventParam(
      "_totalBorrows",
      ethereum.Value.fromUnsignedBigInt(_totalBorrows)
    )
  )

  return interestAccruedEvent
}

export function createLiquidationClosedEvent(
  _initiator: Address,
  _borrower: Address,
  _collateralId: BigInt,
  _borrowAmount: BigInt
): LiquidationClosed {
  let liquidationClosedEvent = changetype<LiquidationClosed>(newMockEvent())

  liquidationClosedEvent.parameters = new Array()

  liquidationClosedEvent.parameters.push(
    new ethereum.EventParam(
      "_initiator",
      ethereum.Value.fromAddress(_initiator)
    )
  )
  liquidationClosedEvent.parameters.push(
    new ethereum.EventParam("_borrower", ethereum.Value.fromAddress(_borrower))
  )
  liquidationClosedEvent.parameters.push(
    new ethereum.EventParam(
      "_collateralId",
      ethereum.Value.fromUnsignedBigInt(_collateralId)
    )
  )
  liquidationClosedEvent.parameters.push(
    new ethereum.EventParam(
      "_borrowAmount",
      ethereum.Value.fromUnsignedBigInt(_borrowAmount)
    )
  )

  return liquidationClosedEvent
}

export function createProtocolFeesUpdatedEvent(
  _oldHiveFee: BigInt,
  _newHiveFee: BigInt,
  _oldAdminFee: BigInt,
  _newAdminFee: BigInt,
  _oldReserveFactor: BigInt,
  _newReserveFactor: BigInt
): ProtocolFeesUpdated {
  let protocolFeesUpdatedEvent = changetype<ProtocolFeesUpdated>(newMockEvent())

  protocolFeesUpdatedEvent.parameters = new Array()

  protocolFeesUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_oldHiveFee",
      ethereum.Value.fromUnsignedBigInt(_oldHiveFee)
    )
  )
  protocolFeesUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_newHiveFee",
      ethereum.Value.fromUnsignedBigInt(_newHiveFee)
    )
  )
  protocolFeesUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_oldAdminFee",
      ethereum.Value.fromUnsignedBigInt(_oldAdminFee)
    )
  )
  protocolFeesUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_newAdminFee",
      ethereum.Value.fromUnsignedBigInt(_newAdminFee)
    )
  )
  protocolFeesUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_oldReserveFactor",
      ethereum.Value.fromUnsignedBigInt(_oldReserveFactor)
    )
  )
  protocolFeesUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_newReserveFactor",
      ethereum.Value.fromUnsignedBigInt(_newReserveFactor)
    )
  )

  return protocolFeesUpdatedEvent
}

export function createRedeemEvent(
  _initiator: Address,
  _redeemAmount: BigInt,
  _tokensWithdrawn: BigInt,
  _totalHTokenSupply: BigInt
): Redeem {
  let redeemEvent = changetype<Redeem>(newMockEvent())

  redeemEvent.parameters = new Array()

  redeemEvent.parameters.push(
    new ethereum.EventParam(
      "_initiator",
      ethereum.Value.fromAddress(_initiator)
    )
  )
  redeemEvent.parameters.push(
    new ethereum.EventParam(
      "_redeemAmount",
      ethereum.Value.fromUnsignedBigInt(_redeemAmount)
    )
  )
  redeemEvent.parameters.push(
    new ethereum.EventParam(
      "_tokensWithdrawn",
      ethereum.Value.fromUnsignedBigInt(_tokensWithdrawn)
    )
  )
  redeemEvent.parameters.push(
    new ethereum.EventParam(
      "_totalHTokenSupply",
      ethereum.Value.fromUnsignedBigInt(_totalHTokenSupply)
    )
  )

  return redeemEvent
}

export function createRepayBorrowEvent(
  _payer: Address,
  _borrower: Address,
  _repayAmount: BigInt,
  _accountBorrows: BigInt,
  _totalBorrows: BigInt,
  _collateralId: BigInt
): RepayBorrow {
  let repayBorrowEvent = changetype<RepayBorrow>(newMockEvent())

  repayBorrowEvent.parameters = new Array()

  repayBorrowEvent.parameters.push(
    new ethereum.EventParam("_payer", ethereum.Value.fromAddress(_payer))
  )
  repayBorrowEvent.parameters.push(
    new ethereum.EventParam("_borrower", ethereum.Value.fromAddress(_borrower))
  )
  repayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "_repayAmount",
      ethereum.Value.fromUnsignedBigInt(_repayAmount)
    )
  )
  repayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "_accountBorrows",
      ethereum.Value.fromUnsignedBigInt(_accountBorrows)
    )
  )
  repayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "_totalBorrows",
      ethereum.Value.fromUnsignedBigInt(_totalBorrows)
    )
  )
  repayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "_collateralId",
      ethereum.Value.fromUnsignedBigInt(_collateralId)
    )
  )

  return repayBorrowEvent
}

export function createReservesAddedEvent(
  _supplier: Address,
  _addAmount: BigInt,
  _newTotalReserves: BigInt
): ReservesAdded {
  let reservesAddedEvent = changetype<ReservesAdded>(newMockEvent())

  reservesAddedEvent.parameters = new Array()

  reservesAddedEvent.parameters.push(
    new ethereum.EventParam("_supplier", ethereum.Value.fromAddress(_supplier))
  )
  reservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "_addAmount",
      ethereum.Value.fromUnsignedBigInt(_addAmount)
    )
  )
  reservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "_newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(_newTotalReserves)
    )
  )

  return reservesAddedEvent
}

export function createReservesReducedEvent(
  _supplier: Address,
  _reduceAmount: BigInt,
  _newTotalReserves: BigInt
): ReservesReduced {
  let reservesReducedEvent = changetype<ReservesReduced>(newMockEvent())

  reservesReducedEvent.parameters = new Array()

  reservesReducedEvent.parameters.push(
    new ethereum.EventParam("_supplier", ethereum.Value.fromAddress(_supplier))
  )
  reservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "_reduceAmount",
      ethereum.Value.fromUnsignedBigInt(_reduceAmount)
    )
  )
  reservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "_newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(_newTotalReserves)
    )
  )

  return reservesReducedEvent
}

export function createRoleAdminChangedEvent(
  role: Bytes,
  previousAdminRole: Bytes,
  newAdminRole: Bytes
): RoleAdminChanged {
  let roleAdminChangedEvent = changetype<RoleAdminChanged>(newMockEvent())

  roleAdminChangedEvent.parameters = new Array()

  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdminRole",
      ethereum.Value.fromFixedBytes(previousAdminRole)
    )
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAdminRole",
      ethereum.Value.fromFixedBytes(newAdminRole)
    )
  )

  return roleAdminChangedEvent
}

export function createRoleGrantedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleGranted {
  let roleGrantedEvent = changetype<RoleGranted>(newMockEvent())

  roleGrantedEvent.parameters = new Array()

  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleGrantedEvent
}

export function createRoleRevokedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleRevoked {
  let roleRevokedEvent = changetype<RoleRevoked>(newMockEvent())

  roleRevokedEvent.parameters = new Array()

  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleRevokedEvent
}

export function createTransferBatchEvent(
  operator: Address,
  from: Address,
  to: Address,
  ids: Array<BigInt>,
  values: Array<BigInt>
): TransferBatch {
  let transferBatchEvent = changetype<TransferBatch>(newMockEvent())

  transferBatchEvent.parameters = new Array()

  transferBatchEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("ids", ethereum.Value.fromUnsignedBigIntArray(ids))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam(
      "values",
      ethereum.Value.fromUnsignedBigIntArray(values)
    )
  )

  return transferBatchEvent
}

export function createTransferSingleEvent(
  operator: Address,
  from: Address,
  to: Address,
  id: BigInt,
  value: BigInt
): TransferSingle {
  let transferSingleEvent = changetype<TransferSingle>(newMockEvent())

  transferSingleEvent.parameters = new Array()

  transferSingleEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferSingleEvent
}

export function createURIEvent(value: string, id: BigInt): URI {
  let uriEvent = changetype<URI>(newMockEvent())

  uriEvent.parameters = new Array()

  uriEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromString(value))
  )
  uriEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )

  return uriEvent
}

export function createUnderlyingDepositedEvent(
  _initiator: Address,
  _to: Address,
  _amount: BigInt,
  _tokensToMint: BigInt,
  _totalhTokenSupply: BigInt
): UnderlyingDeposited {
  let underlyingDepositedEvent = changetype<UnderlyingDeposited>(newMockEvent())

  underlyingDepositedEvent.parameters = new Array()

  underlyingDepositedEvent.parameters.push(
    new ethereum.EventParam(
      "_initiator",
      ethereum.Value.fromAddress(_initiator)
    )
  )
  underlyingDepositedEvent.parameters.push(
    new ethereum.EventParam("_to", ethereum.Value.fromAddress(_to))
  )
  underlyingDepositedEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )
  underlyingDepositedEvent.parameters.push(
    new ethereum.EventParam(
      "_tokensToMint",
      ethereum.Value.fromUnsignedBigInt(_tokensToMint)
    )
  )
  underlyingDepositedEvent.parameters.push(
    new ethereum.EventParam(
      "_totalhTokenSupply",
      ethereum.Value.fromUnsignedBigInt(_totalhTokenSupply)
    )
  )

  return underlyingDepositedEvent
}

export function createWithdrawEvent(
  _initiator: Address,
  _redeemAmount: BigInt,
  _tokensWithdrawn: BigInt,
  _totalHTokenSupply: BigInt
): Withdraw {
  let withdrawEvent = changetype<Withdraw>(newMockEvent())

  withdrawEvent.parameters = new Array()

  withdrawEvent.parameters.push(
    new ethereum.EventParam(
      "_initiator",
      ethereum.Value.fromAddress(_initiator)
    )
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam(
      "_redeemAmount",
      ethereum.Value.fromUnsignedBigInt(_redeemAmount)
    )
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam(
      "_tokensWithdrawn",
      ethereum.Value.fromUnsignedBigInt(_tokensWithdrawn)
    )
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam(
      "_totalHTokenSupply",
      ethereum.Value.fromUnsignedBigInt(_totalHTokenSupply)
    )
  )

  return withdrawEvent
}
