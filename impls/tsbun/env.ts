

export class Env {
  data: Map<string, any> = new Map();
  outer: Env | null = null;

  constructor(outer: Env | null = null) {
    this.outer = outer;
  }

  set(key: string, value: any) {
    this.data.set(key, value);
  }

  find(key: string): Env | null {
    if (this.data.has(key)) {
      return this;
    }
    if (this.outer) {
      return this.outer.find(key);
    }
    return null;
  }

  get(key: string): any {
    const env = this.find(key);
    if (env) {
      return env.data.get(key);
    }
    return null;
  }
}