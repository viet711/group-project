import { useEffect, useState } from 'react'

const useDebounced = (value: string, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value)
    useEffect(() => {
        const Handler = setTimeout(() => setDebouncedValue(value), delay)
        return () => clearTimeout(Handler)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])
    return debouncedValue
}

export default useDebounced