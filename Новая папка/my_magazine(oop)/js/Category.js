/**
 * Created by Александр on 25.09.2017.
 */
'use strict';
class Category {
    constructor(catId, name) {
        this.Id = catId;
        this.name = name;
    }

    get id() {
        return (this.Id);
    }
    get Name() {
        return (this.name);
    }

    set id(newValue1) {
        this.Id = newValue1;
    }
    set Name(newValue2) {
        this.name = newValue2;
    }
};
