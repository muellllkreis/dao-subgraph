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

export class Dao extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("gracePeriod", Value.fromBigInt(BigInt.zero()));
    this.set("dilutionBond", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Dao entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Dao entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Dao", id.toString(), this);
    }
  }

  static load(id: string): Dao | null {
    return changetype<Dao | null>(store.get("Dao", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get gracePeriod(): BigInt {
    let value = this.get("gracePeriod");
    return value!.toBigInt();
  }

  set gracePeriod(value: BigInt) {
    this.set("gracePeriod", Value.fromBigInt(value));
  }

  get dilutionBond(): BigInt {
    let value = this.get("dilutionBond");
    return value!.toBigInt();
  }

  set dilutionBond(value: BigInt) {
    this.set("dilutionBond", Value.fromBigInt(value));
  }
}
