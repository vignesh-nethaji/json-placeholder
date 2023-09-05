import { useState } from "react";

export const useLocalStorage = (keyName, defaultValue) => {
    debugger;
    const [storedValue, setStoredValue] = useState(() => {
        debugger;
        try {
            console.log("aaaaaaaaaaaaaaa");
            const value = window.localStorage.getItem(keyName);

            if (value) {
                return JSON.parse(value);
            } else {
                window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
                return defaultValue;
            }
        } catch (err) {
            return defaultValue;
        }
    });

    const setValue = (newValue) => {
        debugger;
        try {
            window.localStorage.setItem(keyName, JSON.stringify(newValue));
        } catch (err) { }
        setStoredValue(newValue);
    };

    return [storedValue, setValue];
};
