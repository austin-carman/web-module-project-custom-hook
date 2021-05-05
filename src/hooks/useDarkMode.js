import useLocalStorage from './useLocalStorage'

const useDarkMode = () => {
    const [ storedValue, setValue ] = useLocalStorage('key');

    return [ storedValue, setValue ];
}

export default useDarkMode;