import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  ActionPausedhToken,
  BorrowCapGuardianUpdated,
  BorrowCapUpdated,
  BorrowFeePerMarketUpdated,
  CollateralFactorUpdated,
  ControllerPaused,
  MarketEntered,
  MarketExited,
  MarketListed,
  MarketRemoved,
  NewMaxLTVFactor,
  Paused,
  PriceOracleUpdated,
  ReferralSignerUpdated,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  Unpaused
} from "../generated/Controller/Controller"

export function createActionPausedhTokenEvent(
  _hToken: Address,
  _action: string,
  _pauseState: boolean
): ActionPausedhToken {
  let actionPausedhTokenEvent = changetype<ActionPausedhToken>(newMockEvent())

  actionPausedhTokenEvent.parameters = new Array()

  actionPausedhTokenEvent.parameters.push(
    new ethereum.EventParam("_hToken", ethereum.Value.fromAddress(_hToken))
  )
  actionPausedhTokenEvent.parameters.push(
    new ethereum.EventParam("_action", ethereum.Value.fromString(_action))
  )
  actionPausedhTokenEvent.parameters.push(
    new ethereum.EventParam(
      "_pauseState",
      ethereum.Value.fromBoolean(_pauseState)
    )
  )

  return actionPausedhTokenEvent
}

export function createBorrowCapGuardianUpdatedEvent(
  _oldBorrowCapGuardian: Address,
  _newBorrowCapGuardian: Address
): BorrowCapGuardianUpdated {
  let borrowCapGuardianUpdatedEvent = changetype<BorrowCapGuardianUpdated>(
    newMockEvent()
  )

  borrowCapGuardianUpdatedEvent.parameters = new Array()

  borrowCapGuardianUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_oldBorrowCapGuardian",
      ethereum.Value.fromAddress(_oldBorrowCapGuardian)
    )
  )
  borrowCapGuardianUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_newBorrowCapGuardian",
      ethereum.Value.fromAddress(_newBorrowCapGuardian)
    )
  )

  return borrowCapGuardianUpdatedEvent
}

export function createBorrowCapUpdatedEvent(
  _hToken: Address,
  _newBorrowCap: BigInt
): BorrowCapUpdated {
  let borrowCapUpdatedEvent = changetype<BorrowCapUpdated>(newMockEvent())

  borrowCapUpdatedEvent.parameters = new Array()

  borrowCapUpdatedEvent.parameters.push(
    new ethereum.EventParam("_hToken", ethereum.Value.fromAddress(_hToken))
  )
  borrowCapUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_newBorrowCap",
      ethereum.Value.fromUnsignedBigInt(_newBorrowCap)
    )
  )

  return borrowCapUpdatedEvent
}

export function createBorrowFeePerMarketUpdatedEvent(
  _market: Address,
  _fee: BigInt,
  _referralFee: BigInt
): BorrowFeePerMarketUpdated {
  let borrowFeePerMarketUpdatedEvent = changetype<BorrowFeePerMarketUpdated>(
    newMockEvent()
  )

  borrowFeePerMarketUpdatedEvent.parameters = new Array()

  borrowFeePerMarketUpdatedEvent.parameters.push(
    new ethereum.EventParam("_market", ethereum.Value.fromAddress(_market))
  )
  borrowFeePerMarketUpdatedEvent.parameters.push(
    new ethereum.EventParam("_fee", ethereum.Value.fromUnsignedBigInt(_fee))
  )
  borrowFeePerMarketUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_referralFee",
      ethereum.Value.fromUnsignedBigInt(_referralFee)
    )
  )

  return borrowFeePerMarketUpdatedEvent
}

export function createCollateralFactorUpdatedEvent(
  _hToken: Address,
  _oldCollateralFactorMantissa: BigInt,
  _newCollateralFactorMantissa: BigInt
): CollateralFactorUpdated {
  let collateralFactorUpdatedEvent = changetype<CollateralFactorUpdated>(
    newMockEvent()
  )

  collateralFactorUpdatedEvent.parameters = new Array()

  collateralFactorUpdatedEvent.parameters.push(
    new ethereum.EventParam("_hToken", ethereum.Value.fromAddress(_hToken))
  )
  collateralFactorUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_oldCollateralFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(_oldCollateralFactorMantissa)
    )
  )
  collateralFactorUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_newCollateralFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(_newCollateralFactorMantissa)
    )
  )

  return collateralFactorUpdatedEvent
}

export function createControllerPausedEvent(
  _paused: boolean
): ControllerPaused {
  let controllerPausedEvent = changetype<ControllerPaused>(newMockEvent())

  controllerPausedEvent.parameters = new Array()

  controllerPausedEvent.parameters.push(
    new ethereum.EventParam("_paused", ethereum.Value.fromBoolean(_paused))
  )

  return controllerPausedEvent
}

export function createMarketEnteredEvent(
  _hToken: Address,
  _account: Address
): MarketEntered {
  let marketEnteredEvent = changetype<MarketEntered>(newMockEvent())

  marketEnteredEvent.parameters = new Array()

  marketEnteredEvent.parameters.push(
    new ethereum.EventParam("_hToken", ethereum.Value.fromAddress(_hToken))
  )
  marketEnteredEvent.parameters.push(
    new ethereum.EventParam("_account", ethereum.Value.fromAddress(_account))
  )

  return marketEnteredEvent
}

export function createMarketExitedEvent(
  _hToken: Address,
  _account: Address
): MarketExited {
  let marketExitedEvent = changetype<MarketExited>(newMockEvent())

  marketExitedEvent.parameters = new Array()

  marketExitedEvent.parameters.push(
    new ethereum.EventParam("_hToken", ethereum.Value.fromAddress(_hToken))
  )
  marketExitedEvent.parameters.push(
    new ethereum.EventParam("_account", ethereum.Value.fromAddress(_account))
  )

  return marketExitedEvent
}

export function createMarketListedEvent(_hToken: Address): MarketListed {
  let marketListedEvent = changetype<MarketListed>(newMockEvent())

  marketListedEvent.parameters = new Array()

  marketListedEvent.parameters.push(
    new ethereum.EventParam("_hToken", ethereum.Value.fromAddress(_hToken))
  )

  return marketListedEvent
}

export function createMarketRemovedEvent(_hToken: Address): MarketRemoved {
  let marketRemovedEvent = changetype<MarketRemoved>(newMockEvent())

  marketRemovedEvent.parameters = new Array()

  marketRemovedEvent.parameters.push(
    new ethereum.EventParam("_hToken", ethereum.Value.fromAddress(_hToken))
  )

  return marketRemovedEvent
}

export function createNewMaxLTVFactorEvent(
  _hToken: Address,
  _oldMaxLTVFactorMantissa: BigInt,
  _newMaxLTVFactorMantissa: BigInt
): NewMaxLTVFactor {
  let newMaxLtvFactorEvent = changetype<NewMaxLTVFactor>(newMockEvent())

  newMaxLtvFactorEvent.parameters = new Array()

  newMaxLtvFactorEvent.parameters.push(
    new ethereum.EventParam("_hToken", ethereum.Value.fromAddress(_hToken))
  )
  newMaxLtvFactorEvent.parameters.push(
    new ethereum.EventParam(
      "_oldMaxLTVFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(_oldMaxLTVFactorMantissa)
    )
  )
  newMaxLtvFactorEvent.parameters.push(
    new ethereum.EventParam(
      "_newMaxLTVFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(_newMaxLTVFactorMantissa)
    )
  )

  return newMaxLtvFactorEvent
}

export function createPausedEvent(account: Address): Paused {
  let pausedEvent = changetype<Paused>(newMockEvent())

  pausedEvent.parameters = new Array()

  pausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return pausedEvent
}

export function createPriceOracleUpdatedEvent(
  _oldPriceOracle: Address,
  _newPriceOracle: Address
): PriceOracleUpdated {
  let priceOracleUpdatedEvent = changetype<PriceOracleUpdated>(newMockEvent())

  priceOracleUpdatedEvent.parameters = new Array()

  priceOracleUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_oldPriceOracle",
      ethereum.Value.fromAddress(_oldPriceOracle)
    )
  )
  priceOracleUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_newPriceOracle",
      ethereum.Value.fromAddress(_newPriceOracle)
    )
  )

  return priceOracleUpdatedEvent
}

export function createReferralSignerUpdatedEvent(
  _oldSigner: Address,
  _newSigner: Address
): ReferralSignerUpdated {
  let referralSignerUpdatedEvent = changetype<ReferralSignerUpdated>(
    newMockEvent()
  )

  referralSignerUpdatedEvent.parameters = new Array()

  referralSignerUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_oldSigner",
      ethereum.Value.fromAddress(_oldSigner)
    )
  )
  referralSignerUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_newSigner",
      ethereum.Value.fromAddress(_newSigner)
    )
  )

  return referralSignerUpdatedEvent
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

export function createUnpausedEvent(account: Address): Unpaused {
  let unpausedEvent = changetype<Unpaused>(newMockEvent())

  unpausedEvent.parameters = new Array()

  unpausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return unpausedEvent
}
