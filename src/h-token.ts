import {
  Borrow as BorrowEvent,
  BorrowLiquidated as BorrowLiquidatedEvent,
  CollateralDeposited as CollateralDepositedEvent,
  CollateralWithdrawn as CollateralWithdrawnEvent,
  Redeem as RedeemEvent,
  RepayBorrow as RepayBorrowEvent,
  TransferSingle as TransferSingleEvent,
  UnderlyingDeposited as UnderlyingDepositedEvent,
  Withdraw as WithdrawEvent,
  HToken
} from "../generated/HToken/HToken"
import {
  Collateral,
  Coupon, UserUnderlying
} from "../generated/schema"
import { BigInt, log, dataSource } from '@graphprotocol/graph-ts'
import { getCouponId } from "./helper";


export function handleBorrow(event: BorrowEvent): void {
  let collateralId = `${event.address.toHexString()}-${event.params._tokenId.toString()}`
  let collateral = Collateral.load(collateralId)
  if (!collateral) {
    log.warning("can not find collateral {} at borrow event", [collateralId])
  } else {
    if (!collateral.active) {
      log.warning("collateral is not active {} at borrow event", [collateralId])
    } else {
      let coupon = Coupon.load(collateral.activeCoupon)
      if (!coupon) {
        log.warning("can not find coupon {} to borrow", [collateral.activeCoupon])
      } else {
        coupon.amount = coupon.amount.plus(event.params._totalBorrows)
        coupon.lastUpdateTimestamp = event.block.timestamp
        coupon.save()
      }
    }
  }
}

export function handleBorrowLiquidated(event: BorrowLiquidatedEvent): void {
  let collateralId = `${event.address.toHexString()}-${event.params._collateralId.toString()}`
  let collateral = Collateral.load(collateralId)
  if (!collateral) {
    log.warning("can not find collateral {} at borrowLiquidated event", [collateralId])
  } else {
    if (!collateral.active) {
      log.warning("collateral is not active {} at borrowLiquidated event", [collateralId])
    } else {
      let coupon = Coupon.load(collateral.activeCoupon)
      if (!coupon) {
        log.warning("can not find coupon {} to liquidate", [collateral.activeCoupon])
      } else {
        coupon.active = false
        coupon.lastUpdateTimestamp = event.block.timestamp
        coupon.save()
      }
    }
    collateral.active = false
    collateral.save()
  }
}

export function handleCollateralDeposited(
  event: CollateralDepositedEvent
): void {
  let collateralId = `${event.address.toHexString()}-${event.params._collateralId.toString()}`
  let couponId = `${event.transaction.hash.toHex()}-${event.logIndex.toString()}`
  let context = dataSource.context()
  let hToken = HToken.bind(event.address)
  let collateral = Collateral.load(collateralId)
  if (!collateral) {
    collateral = new Collateral(collateralId)
  }
  collateral.collateralTokenAddr = context.getString('collateralTokenAddr')
  collateral.underlyingTokenAddr = context.getString('underlyingTokenAddr')
  collateral.hTokenAddr = event.address.toHexString()
  collateral.collateralID = event.params._collateralId
  collateral.active = true
  let coupon = new Coupon(couponId)
  coupon.collateralTokenAddr = collateral.collateralTokenAddr
  coupon.underlyingTokenAddr = collateral.underlyingTokenAddr
  coupon.hTokenAddr = event.address.toHexString()
  coupon.collateralID = event.params._collateralId
  coupon.couponID = getCouponId(hToken, event.params._collateralId)
  coupon.amount = BigInt.fromI32(0)
  coupon.active = true
  collateral.activeCoupon = couponId
  coupon.timestamp = event.block.timestamp
  coupon.lastUpdateTimestamp = event.block.timestamp
  coupon.owner = event.params._initiator.toHexString()
  coupon.save()
  collateral.save()
}

export function handleCollateralWithdrawn(
  event: CollateralWithdrawnEvent
): void {
  let collateralId = `${event.address.toHexString()}-${event.params._collateralId.toString()}`
  let collateral = Collateral.load(collateralId)
  if (!collateral) {
    log.warning("can not find collateral {} at collateralWithdrawn event", [collateralId])
  } else {
    if (!collateral.active) {
      log.warning("collateral is not active {} at collateralWithdrawn event", [collateralId])
    } else {
      let coupon = Coupon.load(collateral.activeCoupon)
      if (!coupon) {
        log.warning("can not find coupon {} to withdraw", [collateral.activeCoupon])
      } else {
        coupon.active = false
        coupon.lastUpdateTimestamp = event.block.timestamp
        coupon.save()
      }
    }
    collateral.active = false
    collateral.save()
  }
}

export function handleRepayBorrow(event: RepayBorrowEvent): void {
  let collateralId = `${event.address.toHexString()}-${event.params._collateralId.toString()}`
  let collateral = Collateral.load(collateralId)
  if (!collateral) {
    log.warning("can not find collateral {} at repayBorrow event", [collateralId])
  } else {
    if (!collateral.active) {
      log.warning("collateral is not active {} at repayBorrow event", [collateralId])
    } else {
      let coupon = Coupon.load(collateral.activeCoupon)
      if (!coupon) {
        log.warning("can not find coupon {} to repay borrow", [collateral.activeCoupon])
      } else {
        coupon.amount = coupon.amount.minus(event.params._repayAmount)
        coupon.lastUpdateTimestamp = event.block.timestamp
        coupon.save()
      }
    }
  }
}

export function handleUnderlyingDeposited(event: UnderlyingDepositedEvent): void {
  let userUnderlyingId = `${event.address.toHexString()}-${event.params._initiator.toHexString()}`
  let userUnderlying = UserUnderlying.load(userUnderlyingId)
  if (!userUnderlying) {
    userUnderlying = new UserUnderlying(userUnderlyingId)
    userUnderlying.owner = event.params._initiator.toHexString()
    userUnderlying.hTokenAddr = event.address.toHexString()
    userUnderlying.amount = event.params._amount
  } else {
    userUnderlying.amount = userUnderlying.amount.plus(event.params._amount)
  }
  userUnderlying.save()
}

export function handleRedeem(event: RedeemEvent): void {
  let userUnderlyingId = `${event.address.toHexString()}-${event.params._initiator.toHexString()}`
  let userUnderlying = UserUnderlying.load(userUnderlyingId)
  if (!userUnderlying) {
    userUnderlying = new UserUnderlying(userUnderlyingId)
    userUnderlying.owner = event.params._initiator.toHexString()
    userUnderlying.hTokenAddr = event.address.toHexString()
    userUnderlying.amount = BigInt.fromI32(0).minus(event.params._redeemAmount)
  } else {
    userUnderlying.amount = userUnderlying.amount.minus(event.params._redeemAmount)
  }
  userUnderlying.save()
}

export function handleWithdraw(event: WithdrawEvent): void {
  let userUnderlyingId = `${event.address.toHexString()}-${event.params._initiator.toHexString()}`
  let userUnderlying = UserUnderlying.load(userUnderlyingId)
  if (!userUnderlying) {
    userUnderlying = new UserUnderlying(userUnderlyingId)
    userUnderlying.owner = event.params._initiator.toHexString()
    userUnderlying.hTokenAddr = event.address.toHexString()
    userUnderlying.amount = BigInt.fromI32(0).minus(event.params._redeemAmount)
  } else {
    userUnderlying.amount = userUnderlying.amount.minus(event.params._redeemAmount)
  }
  userUnderlying.save()
}

export function handleTransferSingle(event: TransferSingleEvent): void {
  if (event.params.id.equals(BigInt.fromI32(1)) && event.params.to.toHexString() != "0x0000000000000000000000000000000000000000") {
    let toUserUnderlyingId = `${event.address.toHexString()}-${event.params.to.toHexString()}`
    let toUserUnderlying = UserUnderlying.load(toUserUnderlyingId)
    if (!toUserUnderlying) {
      toUserUnderlying = new UserUnderlying(toUserUnderlyingId)
      toUserUnderlying.owner = event.params.to.toHexString()
      toUserUnderlying.hTokenAddr = event.address.toHexString()
      toUserUnderlying.amount = event.params.value
      toUserUnderlying.save()
    } else {
      toUserUnderlying.amount = toUserUnderlying.amount.plus(event.params.value)
      toUserUnderlying.save()
    }
    let fromUserUnderlyingId = `${event.address.toHexString()}-${event.params.from.toHexString()}`
    let fromUserUnderlying = UserUnderlying.load(fromUserUnderlyingId)
    if (!fromUserUnderlying) {
      fromUserUnderlying = new UserUnderlying(fromUserUnderlyingId)
      fromUserUnderlying.owner = event.params.from.toHexString()
      fromUserUnderlying.hTokenAddr = event.address.toHexString()
      fromUserUnderlying.amount = BigInt.fromI32(0).minus(event.params.value)
      fromUserUnderlying.save()
    } else {
      fromUserUnderlying.amount = fromUserUnderlying.amount.minus(event.params.value)
      fromUserUnderlying.save()
    }
  }
}
