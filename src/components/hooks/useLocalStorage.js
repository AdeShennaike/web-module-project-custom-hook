import {useState} from 'react';

const useLocalStorage = (key, initialValue) => {

    const [value, setValue] = useState( () => {
       if(localStorage.getItem(key)){
           return(JSON.parse(localStorage.getItem(key)))
       }
        else{
            localStorage.setItem(key, JSON.stringify(initialValue))
            return initialValue
        }
    })

    const setStoreVal = (storeVal) => {
        localStorage.setItem(key, JSON.stringify(storeVal))
        setValue(storeVal)
    }

        return ([value, setStoreVal])
}
export default useLocalStorage;