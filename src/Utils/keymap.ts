import { addAll, is } from '@enact/core/keymap'
import { KEYMAP_ENTER, KEYMAP_PAUSE, KEYMAP_PLAY, KEYMAP_STOP, KEY_ENTER, KEY_PAUSE, KEY_PLAY, KEY_STOP } from '../Constantes/keymap'

/**
 * add keymap with enact core
 * add more keymap depending on what you want
 */

const mapkey = {
  ...KEYMAP_ENTER,
  ...KEYMAP_STOP,
  ...KEYMAP_PLAY,
  ...KEYMAP_PAUSE,
}

export const initKeyMap = () => addAll(mapkey)

export const isEnter = is(KEY_ENTER)
export const isStop = is(KEY_STOP)
export const isPlay = is(KEY_PLAY)
export const isPause = is(KEY_PAUSE)