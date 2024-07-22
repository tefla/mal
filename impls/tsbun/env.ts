import type {BaseType} from "./types.ts";

export class Env {
    data: Map<string, any>;
    outer: Env | null;

    constructor(outer: Env | null = null, binds: string[] = [], exprs: BaseType[] = []) {
        this.data = new Map<string, any>();
        this.outer = outer;
        for (let i = 0; i < binds.length; i++) {
            this.data.set(binds[i], exprs[i]);
        }
    }

    set(key: string, value: any) {
        this.data.set(key, value);
    }

    find(key: string): any {
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