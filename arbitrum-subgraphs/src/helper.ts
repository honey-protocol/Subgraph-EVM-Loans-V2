import { HToken } from "../generated/HToken/HToken";
import { BigInt, log } from '@graphprotocol/graph-ts'

export function getUnderlyingTokenAddress(hToken: HToken): string {
  let callResult = hToken.try_underlyingToken()
  if (callResult.reverted) {
    log.warning("call underlyingToken reverted", [])
    return ""
  } else {
    return callResult.value.toHexString()
  }
}

export function getCollateralTokenAddress(hToken: HToken): string {
  let callResult = hToken.try_collateralToken()
  if (callResult.reverted) {
    log.warning("call underlyingToken reverted", [])
    return ""
  } else {
    return callResult.value.toHexString()
  }
}

export function getCouponId(hToken: HToken, collateralId: BigInt): BigInt {
  let callResult = hToken.try_borrowCoupons(collateralId)
  if (callResult.reverted) {
    log.warning("call borrowCoupons reverted", [])
    return BigInt.fromI32(0)
  } else {
    return callResult.value.getId()
  }
}