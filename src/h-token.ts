import {
  AddressUpdated as AddressUpdatedEvent,
  AdminFeesWithdrawn as AdminFeesWithdrawnEvent,
  ApprovalForAll as ApprovalForAllEvent,
  Borrow as BorrowEvent,
  BorrowFeesWithdrawn as BorrowFeesWithdrawnEvent,
  BorrowLiquidated as BorrowLiquidatedEvent,
  BorrowReferred as BorrowReferredEvent,
  CollateralDeposited as CollateralDepositedEvent,
  CollateralWithdrawn as CollateralWithdrawnEvent,
  HiveFeesWithdrawn as HiveFeesWithdrawnEvent,
  InterestAccrued as InterestAccruedEvent,
  LiquidationClosed as LiquidationClosedEvent,
  ProtocolFeesUpdated as ProtocolFeesUpdatedEvent,
  Redeem as RedeemEvent,
  RepayBorrow as RepayBorrowEvent,
  ReservesAdded as ReservesAddedEvent,
  ReservesReduced as ReservesReducedEvent,
  RoleAdminChanged as RoleAdminChangedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent,
  TransferBatch as TransferBatchEvent,
  TransferSingle as TransferSingleEvent,
  URI as URIEvent,
  UnderlyingDeposited as UnderlyingDepositedEvent,
  Withdraw as WithdrawEvent
} from "../generated/HToken/HToken"
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
} from "../generated/schema"

export function handleAddressUpdated(event: AddressUpdatedEvent): void {
  let entity = new AddressUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._oldAddress = event.params._oldAddress
  entity._newAddress = event.params._newAddress
  entity._target = event.params._target
  entity.save()
}

export function handleAdminFeesWithdrawn(event: AdminFeesWithdrawnEvent): void {
  let entity = new AdminFeesWithdrawn(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._amount = event.params._amount
  entity.save()
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.account = event.params.account
  entity.operator = event.params.operator
  entity.approved = event.params.approved
  entity.save()
}

export function handleBorrow(event: BorrowEvent): void {
  let entity = new Borrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._borrower = event.params._borrower
  entity._borrowAmount = event.params._borrowAmount
  entity._tokenId = event.params._tokenId
  entity._totalBorrows = event.params._totalBorrows
  entity.save()
}

export function handleBorrowFeesWithdrawn(
  event: BorrowFeesWithdrawnEvent
): void {
  let entity = new BorrowFeesWithdrawn(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._amount = event.params._amount
  entity._referralFees = event.params._referralFees
  entity.save()
}

export function handleBorrowLiquidated(event: BorrowLiquidatedEvent): void {
  let entity = new BorrowLiquidated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._initiator = event.params._initiator
  entity._liquidator = event.params._liquidator
  entity._owner = event.params._owner
  entity._collateralId = event.params._collateralId
  entity.save()
}

export function handleBorrowReferred(event: BorrowReferredEvent): void {
  let entity = new BorrowReferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._initiator = event.params._initiator
  entity._referrer = event.params._referrer
  entity._amount = event.params._amount
  entity._fee = event.params._fee
  entity.save()
}

export function handleCollateralDeposited(
  event: CollateralDepositedEvent
): void {
  let entity = new CollateralDeposited(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._initiator = event.params._initiator
  entity._collateralId = event.params._collateralId
  entity._couponId = event.params._couponId
  entity.save()
}

export function handleCollateralWithdrawn(
  event: CollateralWithdrawnEvent
): void {
  let entity = new CollateralWithdrawn(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._initiator = event.params._initiator
  entity._collateralId = event.params._collateralId
  entity.save()
}

export function handleHiveFeesWithdrawn(event: HiveFeesWithdrawnEvent): void {
  let entity = new HiveFeesWithdrawn(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._amount = event.params._amount
  entity.save()
}

export function handleInterestAccrued(event: InterestAccruedEvent): void {
  let entity = new InterestAccrued(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._interestAccumulated = event.params._interestAccumulated
  entity._interestIndex = event.params._interestIndex
  entity._totalBorrows = event.params._totalBorrows
  entity.save()
}

export function handleLiquidationClosed(event: LiquidationClosedEvent): void {
  let entity = new LiquidationClosed(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._initiator = event.params._initiator
  entity._borrower = event.params._borrower
  entity._collateralId = event.params._collateralId
  entity._borrowAmount = event.params._borrowAmount
  entity.save()
}

export function handleProtocolFeesUpdated(
  event: ProtocolFeesUpdatedEvent
): void {
  let entity = new ProtocolFeesUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._oldHiveFee = event.params._oldHiveFee
  entity._newHiveFee = event.params._newHiveFee
  entity._oldAdminFee = event.params._oldAdminFee
  entity._newAdminFee = event.params._newAdminFee
  entity._oldReserveFactor = event.params._oldReserveFactor
  entity._newReserveFactor = event.params._newReserveFactor
  entity.save()
}

export function handleRedeem(event: RedeemEvent): void {
  let entity = new Redeem(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._initiator = event.params._initiator
  entity._redeemAmount = event.params._redeemAmount
  entity._tokensWithdrawn = event.params._tokensWithdrawn
  entity._totalHTokenSupply = event.params._totalHTokenSupply
  entity.save()
}

export function handleRepayBorrow(event: RepayBorrowEvent): void {
  let entity = new RepayBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._payer = event.params._payer
  entity._borrower = event.params._borrower
  entity._repayAmount = event.params._repayAmount
  entity._accountBorrows = event.params._accountBorrows
  entity._totalBorrows = event.params._totalBorrows
  entity._collateralId = event.params._collateralId
  entity.save()
}

export function handleReservesAdded(event: ReservesAddedEvent): void {
  let entity = new ReservesAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._supplier = event.params._supplier
  entity._addAmount = event.params._addAmount
  entity._newTotalReserves = event.params._newTotalReserves
  entity.save()
}

export function handleReservesReduced(event: ReservesReducedEvent): void {
  let entity = new ReservesReduced(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._supplier = event.params._supplier
  entity._reduceAmount = event.params._reduceAmount
  entity._newTotalReserves = event.params._newTotalReserves
  entity.save()
}

export function handleRoleAdminChanged(event: RoleAdminChangedEvent): void {
  let entity = new RoleAdminChanged(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.role = event.params.role
  entity.previousAdminRole = event.params.previousAdminRole
  entity.newAdminRole = event.params.newAdminRole
  entity.save()
}

export function handleRoleGranted(event: RoleGrantedEvent): void {
  let entity = new RoleGranted(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender
  entity.save()
}

export function handleRoleRevoked(event: RoleRevokedEvent): void {
  let entity = new RoleRevoked(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender
  entity.save()
}

export function handleTransferBatch(event: TransferBatchEvent): void {
  let entity = new TransferBatch(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.operator = event.params.operator
  entity.from = event.params.from
  entity.to = event.params.to
  entity.ids = event.params.ids
  entity.values = event.params.values
  entity.save()
}

export function handleTransferSingle(event: TransferSingleEvent): void {
  let entity = new TransferSingle(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.operator = event.params.operator
  entity.from = event.params.from
  entity.to = event.params.to
  entity.id = event.params.id
  entity.value = event.params.value
  entity.save()
}

export function handleURI(event: URIEvent): void {
  let entity = new URI(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.value = event.params.value
  entity.id = event.params.id
  entity.save()
}

export function handleUnderlyingDeposited(
  event: UnderlyingDepositedEvent
): void {
  let entity = new UnderlyingDeposited(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._initiator = event.params._initiator
  entity._to = event.params._to
  entity._amount = event.params._amount
  entity._tokensToMint = event.params._tokensToMint
  entity._totalhTokenSupply = event.params._totalhTokenSupply
  entity.save()
}

export function handleWithdraw(event: WithdrawEvent): void {
  let entity = new Withdraw(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._initiator = event.params._initiator
  entity._redeemAmount = event.params._redeemAmount
  entity._tokensWithdrawn = event.params._tokensWithdrawn
  entity._totalHTokenSupply = event.params._totalHTokenSupply
  entity.save()
}
