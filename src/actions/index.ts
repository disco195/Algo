export function setModule(type: MODULES): MODULES_ACTION {
  return { type };
}

export function setDSType(type: DS_TYPE): DS_TYPE_ACTION {
  return { type };
}

export function createSet(type: SORT_CREATE_RANDOM | null) {
  return { type };
}
