/**
 * implementation of StepCounter object
 * take a single parameter k
 * return a new object, representing a step counter with the given initial value 0
 *       increment()
 *       decrement()
 *       getValue()
 * your implementation must encapsulated the provided counter object anduse it for it's implementation.
 */

function getFixedCounter(k) {
    var value = 0;
    return {
        increment: () => {value += k}, // increment() method increments the current counter by a fixed amount of k steps.

        decrement: () => {value -= k},

        getValue: () => value,
    }

}