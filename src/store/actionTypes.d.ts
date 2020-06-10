/**
 * IMPORTANT
 *
 *
 * SET prefix is used to define retured values from
 * action creators and action in reducers
 *
 * It should always take non-prefixed types
 * as value of its type property
 */
/** */

//
//
//  MODULE TYPES
//
//
type NO_MODULE = "NO_MODULE";
type SORTING = "SORTING_MODULE";
type LISTS = "LISTS_MODULE";
type TREES = "TREES_MODULE";

//
//  SET MODULE ACTIONS
//
type SET_MODULE = { type: SORTING | LISTS | TREES | null };

//
//
//  ACTIONS FOR ROOT REDUCER
//
//
type RESET_MODULE = "RESET_MODULE";

//
//
//  SORTING MODULE ACTIONS
//
//
type SORTING_ALG =
  | "BUBBLE"
  | "SELECTION"
  | "INSERTION"
  | "MERGE"
  | "QUICK"
  | "QUICK_RANDOM"
  | "COUNTING"
  | "RADIX";

type SET_SORTING_ALGO = { type: SORTING_ALG };

type CREATE_RANDOM = { type: "CREATE_RANDOM_SET"; payload: number[] };
type CREATE_USER_DEFINED = { type: "CREATE_USER_DEFINED"; payload: number[] };

type SORT_SET = { type: "SORT_SET" };
