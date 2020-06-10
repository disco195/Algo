/**
 * This is the main state of the application any \
 * state other state should be a subset
 *
 * add only the properties you want to persist \
 * across the whole application
 */
interface State {
  module: SORTING | LISTS | TREES | null;
}

/**
 * Sorting Module State
 *
 * Add only properties you want to \
 * persist in the Sorting Module
 */
interface SortingModuleState {
  type: SORTING_ALG;
  dataSet: number[];
  isSorted: boolean;
}

/**
 *
 * NOT READY FOR USE
 *
 * This state interface is currently an example \
 * to show how modules states are defined
 *
 */
interface ListsModuleState extends State {
  type: LIST_STRUCUTRURE;
}
