// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Coupon extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Coupon entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Coupon must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Coupon", id.toString(), this);
    }
  }

  static load(id: string): Coupon | null {
    return changetype<Coupon | null>(store.get("Coupon", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get collateralID(): BigInt {
    let value = this.get("collateralID");
    return value!.toBigInt();
  }

  set collateralID(value: BigInt) {
    this.set("collateralID", Value.fromBigInt(value));
  }

  get couponID(): BigInt {
    let value = this.get("couponID");
    return value!.toBigInt();
  }

  set couponID(value: BigInt) {
    this.set("couponID", Value.fromBigInt(value));
  }

  get underlyingTokenAddr(): string {
    let value = this.get("underlyingTokenAddr");
    return value!.toString();
  }

  set underlyingTokenAddr(value: string) {
    this.set("underlyingTokenAddr", Value.fromString(value));
  }

  get collateralTokenAddr(): string {
    let value = this.get("collateralTokenAddr");
    return value!.toString();
  }

  set collateralTokenAddr(value: string) {
    this.set("collateralTokenAddr", Value.fromString(value));
  }

  get hTokenAddr(): string {
    let value = this.get("hTokenAddr");
    return value!.toString();
  }

  set hTokenAddr(value: string) {
    this.set("hTokenAddr", Value.fromString(value));
  }

  get active(): boolean {
    let value = this.get("active");
    return value!.toBoolean();
  }

  set active(value: boolean) {
    this.set("active", Value.fromBoolean(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }
}

export class Collateral extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Collateral entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Collateral must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Collateral", id.toString(), this);
    }
  }

  static load(id: string): Collateral | null {
    return changetype<Collateral | null>(store.get("Collateral", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get collateralID(): BigInt {
    let value = this.get("collateralID");
    return value!.toBigInt();
  }

  set collateralID(value: BigInt) {
    this.set("collateralID", Value.fromBigInt(value));
  }

  get underlyingTokenAddr(): string {
    let value = this.get("underlyingTokenAddr");
    return value!.toString();
  }

  set underlyingTokenAddr(value: string) {
    this.set("underlyingTokenAddr", Value.fromString(value));
  }

  get collateralTokenAddr(): string {
    let value = this.get("collateralTokenAddr");
    return value!.toString();
  }

  set collateralTokenAddr(value: string) {
    this.set("collateralTokenAddr", Value.fromString(value));
  }

  get hTokenAddr(): string {
    let value = this.get("hTokenAddr");
    return value!.toString();
  }

  set hTokenAddr(value: string) {
    this.set("hTokenAddr", Value.fromString(value));
  }

  get activeCoupon(): string {
    let value = this.get("activeCoupon");
    return value!.toString();
  }

  set activeCoupon(value: string) {
    this.set("activeCoupon", Value.fromString(value));
  }

  get active(): boolean {
    let value = this.get("active");
    return value!.toBoolean();
  }

  set active(value: boolean) {
    this.set("active", Value.fromBoolean(value));
  }
}
