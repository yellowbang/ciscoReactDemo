/**
 *  How to to create a class through composition.
 *
 *
 *  var MyMixin1 = function(superclass) {
     *    return class extends superclass {
     *      foo() {
     *          if (super.foo) super.foo();
     *
     *          ...
     *      }
     *    }
     *  }
 *
 *  var MyMixin2 = function(superclass) {
     *    return class extends superclass {
     *      foo() {
     *          if (super.foo) super.foo();
     *
     *          ...
     *      }
     *      bar() {
     *          if (super.bar) super.bar();
     *
     *          ...
     *      }
     *    }
     *  }
 *
 *  class MyClass extends MyMixin2(MyMixin1(MyBaseClass)) {
     *  }
 *
 *  var MyCompoundMixin = function(superclass) { return MyMixin2(MyMixin1(superclass)) };
 *  // using arrow function
 *  var MyCompoundMixin = (superclass) => MyMixin2(MyMixin1(superclass));
 *
 *  class MyClass extends MyCompoundMixin(MyBaseClass) {
     *    ...
     *   }
 */

function abstractMethod() {
    throw new TypeError('Cannot call abstract methods.  Must be overridden by subclasses without calling super.<abstractMethod>');
}

/**
 * Mixin for creating an abstract base class that acts like an interface.  That is it creates methods that are not
 * implementations.  If they are not implemented by a concrete subclass class, a TypeError will be thrown.
 *
 * @param methods
 * @returns {class}
 * @constructor
 */
let Interface = function(methods) {
    let I = class {
        constructor() {
            if (new.target === I) {
                // new.target is an implicit parameter that all functions have.
                // it is to constructor calls what 'this' is to method calls.
                throw new TypeError('Cannot construct instances of an interface directly');
            }

            let self = this;
            methods.forEach(function(method) {
                // check that abstract method is implemented by concrete subclasses
                if (typeof self[method] !== 'function') {
                    throw new TypeError(''.concat('Abstract methods (' + method + ') must be implemented by concrete subclasses'));
                }
            });
        }
    };

    // create abstract methods
    methods.forEach(function(method) {
        I.prototype[method] = abstractMethod;
    });

    return I;
};

/**
 * Mixin for creating an abstract class that extends a given interface, with given abstract methods
 *
 * @example
 *    ///
 // Mixin for creating an abstract class that extends a given interface, with given abstract methods
 //     ///
 // Interface for implementing SelectionManager-s
 ///
 let SelectionManagerI = Interface([
 ///
 // Returns an iterator of items from the the current selection set.
 // ex.
 // for (let selection of sm.selections) { console.log(selection); }
 // @returns {Iterator.<String>} iterator for list of keys from the current selection set.
 ///
 'getSelections',
 ///
 // Adds selections to the current selection set.
 // @param itemKeys {Array} list of
 ///
 'addSelections',
 ///
 // Removes selections from the current selection set.
 // @param itemKeys {Array} list of
 ///
 'removeSelections',
 ///
 // Clears all selections.
 // @see isEmpty
 ///
 'empty',
 ///
 // Returns true if there are no selections.
 // @see isEmpty
 ///
 'isEmpty'
 ]);

 ///
 // Implements most of the SelectionManagerI interface methods.
 //  !!! It is left to concrete subclasses to implement #fireSelectionsChanged !!!
 ///
 /// private properties
 let _selections = Symbol('selections');

 class AbstractSelectionManager extends AbstractClass(SelectionManagerI, [
 ///
 // Allows subclasses to trigger selection events
 // @protected (can only be used within subclasses.  method is not public)
 ///
 'fireSelectionsChanged'
 ]) {

        constructor() {
            super();
            // list of item keys of current selected items
            this[_selections] = [];
        }

        ///
         // Returns an iterator of items from the the current selection set.
         // ex.
         // for (let selection of sm.selections) { console.log(selection); }
         // @implements SelectionManagerI.getSelections
         // @returns {Iterator.<String>} iterator for list of keys from the current selection set.
         ///
        getSelections() {
            return this[_selections].entries();
        }

        ///
         // Expose selections as property
         // ex.
         // for (let selection of sm.selections) { console.log(selection); }
         // @returns {Iterator.<String>} iterator for list of keys from the current selection set.
         ///
        get selections() {
            return this.getSelections();
        }

        ///
         // Adds selections to the current selection set.
         //
         // ex.
         // sm.addSelections(myArray.values());
         //
         // @implements SelectionManagerI.addSelections
         //
         // @param itemKeys {Iterator.<String>} iterable of item keys
         ///
        addSelections(itemKeys) {
            this[_selections].push(itemKeys);

            // selections mutated. inform observers of change
            this.fireSelectionsChanged();
        }

        ///
         // Removes selections from the current selection set.
         //
         // @implements SelectionManagerI.removeSelections
         //
         // @param itemKeys {Iterator} iterable of item keys
         ///
        removeSelections(itemKeys) {

            // selections mutated. inform observers of change
            this.fireSelectionsChanged('removeSelections', itemKeys);
        }

         // Clears all selections.
         // @implements SelectionManagerI.empty
        empty() {
            this[_selections].length = 0;

            // selections mutated. inform observers of change
            this.fireSelectionsChanged();
        }

         // Returns true if there are no selections.
         // @implements SelectionManagerI.isEmpty
        isEmpty() {
            return this[_selections].length === 0;
        }
    }

 class TestSelectionManager extends AbstractSelectionManager {
        fireSelectionsChanged() {
            return 'fireSelectionsChanged';
        }
    }
 let tsm = new TestSelectionManager();
 console.log('isEmpty: %s, selections: %s', tsm.isEmpty(), tsm.selections, tsm.fireSelectionsChanged());

 try {
        // should produce error as AbstractSelectionManager is abstract (does not implement fireSelectionsChanged)
        AbstractSelectionManager();
     * }
 * catch (thrown) {
     *     console.log('expected: %O', thrown);
     * }
 *
 * try {
      *    // should produce error as SelectionManagerI is abstraction
      *    SelectionManagerI();
     * }
 * catch (thrown) {
     *     console.log('expected: %O', thrown);
     * }

 *
 * @param superClass an "interface" or other class
 * @param abstractMethods list of abstract method names
 * @returns {A}
 * @constructor
 */
let AbstractClass = function(superClass, abstractMethods) {
    let A = class extends superClass {
        constructor() {
            // test preconditions
            if (!abstractMethods) {
                throw new TypeError('Must pass a list of abstract methods');
            }

            super();

            let self = this;

            if (new.target === A) {
                // new.target is an implicit parameter that all functions have.
                // it is to constructor calls what 'this' is to method calls.
                throw new TypeError('Cannot construct instances of an abstract class directly');
            }

            abstractMethods.forEach(function(method) {
                if (self[method] === abstractMethod) {
                    throw new TypeError(''.concat('Abstract methods (' + method + ') must be implemented by concrete subclasses'));
                }
            });
        }
    };

    // create abstract methods
    abstractMethods.forEach(function(method) {
        A.prototype[method] = abstractMethod;
    });

    return A;
};

export {Interface, AbstractClass};

