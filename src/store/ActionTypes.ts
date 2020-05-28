/**
 *
 * Global Actions Definitions
 * Do not export
 *
 */
const USER_DEFINED = "USER_DEFINED";
const RANDOM = "RANDOM";

/**
 *
 * Sorting Actions
 *
 */
export namespace Sorting {
  const INCREASING = "INCREASING";
  const DECREASING = "DECREASING";

  export const ACTIONS = {
    CREATE: {
      RANDOM: "RANDOM",
      SORTED: { INCREASING, DECREASING },
      NEALRY_SORTED: { INCREASING, DECREASING },
      USER_DEFINED,
    },
    SORT: "SORT",
  };

  export const SORT_TYPE = {
    BUBBLE: "BUBBLE",
    SELECTION: "SELECTION",
    INSERTION: "INSERTION",
    MERGE: "MERGE",
    QUICK: "QUICK",
    RANDOM_QUICK: "RANDOM_QUICK",
    COUNTING: "COUNTING",
    RADIX: "RADIX",
  };
}

/**
 *
 * Lists Actions
 *
 */
export namespace Lists {
  const HEAD = "HEAD";
  const TAIL = "TAIL";
  const SEARCH = "SEARCH";
  const INSERT = { HEAD, TAIL, USER_DEFINED };
  const DELETE = { HEAD, TAIL, USER_DEFINED };
  const PEEK = "PEEK";
  const PUSH = "PUSH";
  const POP = "POP";
  const FRONT = "FRONT";
  const BACK = "BACK";
  const ENQUEUE = "ENQUEUE";
  const DEQUEUE = "DEQUEUE";
  const CREATE = {
    EMPTY: "EMPTY",
    RANDOM_SORTED: "RANDOM_SORTED",
    RANDOM_FIXED_SIZE: "RANDOM_FIXED_SIZE",
    RANDOM,
    USER_DEFINED,
  };

  export const LINKED_LIST = { CREATE, SEARCH, INSERT, DELETE };
  export const STACK = { CREATE, PEEK, PUSH, POP };
  export const QUEUE = { CREATE, PEEK, ENQUEUE, DEQUEUE };
  export const DEQUE = {
    CREATE,
    PEEK: { FRONT, BACK },
    ENQUEUE: { FRONT, BACK },
    DEQUEUE: { FRONT, BACK },
  };
}
