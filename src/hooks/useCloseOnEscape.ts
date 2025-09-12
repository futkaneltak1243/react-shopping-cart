import { useEffect } from "react"
export const useCloseOnEscape = (handleClose: () => void) => {
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') handleClose();
        };
        document.addEventListener("keydown", handleEsc)
        return () => document.removeEventListener('keydown', handleEsc);
    }, [handleClose])
}