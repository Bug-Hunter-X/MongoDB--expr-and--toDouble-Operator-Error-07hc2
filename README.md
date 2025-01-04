# MongoDB $expr and $toDouble Operator Error

This repository demonstrates a bug encountered when using the `$expr` and `$toDouble` operators in a MongoDB query.

## Bug Description
The query attempts to convert a field to a double and then compare it to a value. However, it fails with the error: `$toDouble is not a valid operator`.

## Bug Reproduction
1. Clone this repository.
2. Run `node bug.js`.
3. Observe the error message.

## Bug Solution
The solution involves using the `$toDecimal` operator instead of `$toDouble`.

## Solution Reproduction
1. Clone this repository.
2. Run `node bugSolution.js`.
3. Observe the successful query execution.