class BaseObject {

    class() {
        return this.constructor;
    }

    className() {
        return this.class().name;
    }

    static Class() {
        return this.prototype.constructor;
    }

    static ClassName() {
        return this.Class().name;
    }

    static Instance() {
        if (!this._Instance) {
            this._Instance = new(this.Class())();
        }
        return this._Instance;
    }


}