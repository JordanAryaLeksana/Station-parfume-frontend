import { atomWithStorage } from "jotai/utils";

export const dropdownStore = atomWithStorage<Record<string, boolean>>(
  "dropdownState",
  {
    CATEGORIES: true, 
    GENDER: false,
  }
);


export const navigationStore = atomWithStorage<string[]>(
  "navigationState",
  []
);