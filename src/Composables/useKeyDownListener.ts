import handle, { preventDefault, stopImmediate } from "@enact/core/handle"
import { useEffect } from "react"

type KeyDownType = {
  keyCode: number | null
  key: string | null
}

type EventHandlerType = (params: KeyDownType) => void

const useKeyDownListener = (
  handler?: EventHandlerType,
  withPreventDefault: boolean = false
) => {

  const handleGLobalKeydown = handle(
    (event: KeyboardEvent) => withPreventDefault ? preventDefault(event) : true,
    ({ keyCode, key }: KeyboardEvent) => {
      if(handler) handler({ keyCode, key })
    },
    stopImmediate
  )

  useEffect(() => {
    document.addEventListener('keydown', handleGLobalKeydown, {capture: true})

    return () => {
      document.removeEventListener('keydown', handleGLobalKeydown, {capture: true})
    }
  }, [])
}

export default useKeyDownListener