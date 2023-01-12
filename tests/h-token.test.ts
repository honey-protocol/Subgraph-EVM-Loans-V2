import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import { AddressUpdated } from "../generated/schema"
import { AddressUpdated as AddressUpdatedEvent } from "../generated/HToken/HToken"
import { handleAddressUpdated } from "../src/h-token"
import { createAddressUpdatedEvent } from "./h-token-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let _oldAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let _newAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let _target = BigInt.fromI32(234)
    let newAddressUpdatedEvent = createAddressUpdatedEvent(
      _oldAddress,
      _newAddress,
      _target
    )
    handleAddressUpdated(newAddressUpdatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AddressUpdated created and stored", () => {
    assert.entityCount("AddressUpdated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AddressUpdated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_oldAddress",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "AddressUpdated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_newAddress",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "AddressUpdated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_target",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
