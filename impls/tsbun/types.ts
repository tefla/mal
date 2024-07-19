export interface BaseType {
  toString(): string;
}

export class AtomType implements BaseType {
  constructor(public value: any) {
  }
  toString(): string {
    return this.value.toString();
  }
  valueOf(): any {
    return this.value;
  }
}

export class IDType extends AtomType {
  toString(): string {
    return this.value;
  }
}
export class ArrayType implements BaseType {
  constructor(public elements: BaseType[]) {
  }
  toString(): string {
    return `[${this.elements.map(node => node.toString()).join(" ")}]`;
  }
}

export class MapType extends Object implements BaseType {
  toString(): string {
    return `{${Object.entries(this).map(([key, value]) => `${key} ${value}`).join(" ")}}`;
  }

  static from(arr: any[]): MapType {
    const obj = new MapType();
    for (let i = 0; i < arr.length; i = i + 2) {
      obj[arr[i]] = arr[i + 1];
    }
    return obj;
  }
}