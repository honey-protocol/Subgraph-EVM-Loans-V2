import { MarketListed } from "../generated/Hivemind/Hivemind";
import {
  HToken as HTokenTemplate
} from "../generated/templates"
import { DataSourceContext, log } from '@graphprotocol/graph-ts'
import { getCollateralTokenAddress, getUnderlyingTokenAddress } from "./helper";
import { HToken } from "../generated/HToken/HToken";

export function handleMarketListed(event: MarketListed): void {
  let context = new DataSourceContext()
  let hToken = HToken.bind(event.params._hToken)
  context.setString('collateralTokenAddr', getCollateralTokenAddress(hToken))
  context.setString('underlyingTokenAddr', getUnderlyingTokenAddress(hToken))
  HTokenTemplate.createWithContext(event.params._hToken, context)
  log.warning("create new market {}", [event.params._hToken.toHexString()])
}