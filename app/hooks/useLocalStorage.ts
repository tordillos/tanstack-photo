// https://github.com/TanStack/router/blob/0de8af73ad0fbaa0f355cb4a4b528cdadf2196b9/packages/router-devtools/src/useLocalStorage.ts
import React from "react";

const getItem = (key: string): unknown => {
  try {
    const itemValue = localStorage.getItem(key);
    if (typeof itemValue === "string") {
      return JSON.parse(itemValue);
    }
    return undefined;
  } catch {
    return undefined;
  }
};

export default function useLocalStorage<T>(
  key: string,
  defaultValue: T
): [T, (newVal: T | ((prevVal: T) => T)) => void] {
  const [value, setValue] = React.useState<T>(defaultValue);

  React.useEffect(() => {
    const initialValue = getItem(key) as T;

    if (typeof initialValue !== "undefined" && initialValue !== null) {
      setValue(initialValue);
    }
  }, [defaultValue, key]);

  const setter = React.useCallback(
    (updater: any) => {
      setValue((old) => {
        let newVal = updater;

        if (typeof updater == "function") {
          newVal = updater(old);
        }
        try {
          localStorage.setItem(key, JSON.stringify(newVal));
        } catch {}

        return newVal;
      });
    },
    [key]
  );

  return [value, setter];
}
