import LS2Request from '@enact/webos/LS2Request';
import { createContext } from 'react';

export const LunaContext = createContext<null | LS2Request>(null)

export default LunaContext