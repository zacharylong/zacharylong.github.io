/**
 * Active theme switch-point.
 * To change themes, swap the import below:
 *   - './themes/smb3'  →  Super Mario Bros. 3
 *   - './themes/ff6'   →  Final Fantasy VI
 *
 * Also update src/styles/theme.css to match.
 */
import { config } from './themes/smb3';

export const theme = config;
export type { ThemeConfig } from './themes/types';
