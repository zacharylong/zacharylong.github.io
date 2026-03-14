/**
 * Active theme switch-point.
 * To change themes, swap the import below:
 *   - './themes/cinematic' →  Cinematic Fantasy (primary)
 *   - './themes/smb3'      →  Super Mario Bros. 3
 *   - './themes/ff6'       →  Final Fantasy VI
 *
 * Also update src/styles/theme.css to match.
 */
import { config } from './themes/cinematic';

export const theme = config;
export type { ThemeConfig } from './themes/types';
