import {
  Borrow as BorrowEvent,
  BorrowLiquidated as BorrowLiquidatedEvent,
  CollateralDeposited as CollateralDepositedEvent,
  CollateralWithdrawn as CollateralWithdrawnEvent,
  RepayBorrow as RepayBorrowEvent,
  HToken
} from "../generated/HToken/HToken"
import {
  Collateral,
  Coupon
} from "../generated/schema"
import { BigInt, log, dataSource } from '@graphprotocol/graph-ts'
import { getCouponId } from "./helper";


export function handleBorrow(event: BorrowEvent): void {
  let collateralId = `${event.address.toHexString()}-${event.params._tokenId.toString()}`
  let collateral = Collateral.load(collateralId)
  if (!collateral) {
    log.warning("can not find collateral {} at handleBorrow event", [collateralId])
  } else {
    if (!collateral.active) {
      log.warning("collateral is not active {} at handleBorrow event", [collateralId])
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
    log.warning("can not find collateral {} at handleBorrowLiquidated event", [collateralId])
  } else {
    if (!collateral.active) {
      log.warning("collateral is not active {} at handleBorrowLiquidated event", [collateralId])
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
    log.warning("can not find collateral {} at handleRepayBorrow event", [collateralId])
  } else {
    if (!collateral.active) {
      log.warning("collateral is not active {} at handleRepayBorrow event", [collateralId])
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

