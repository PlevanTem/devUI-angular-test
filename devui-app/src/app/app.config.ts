import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';

/**
 * DevUI Theme Configuration Options:
 * 
 * Option 1 (Current): CSS Variables in styles.css
 * - Pros: Simple, direct, easy to debug
 * - Cons: No dynamic theme switching
 * 
 * Option 2 (Official): ThemeService injection
 * - import { ThemeService } from 'ng-devui/theme';
 * - providers: [ThemeService]
 * - Then use themeService.applyTheme(customTheme) in component
 * - Pros: Dynamic switching, type-safe
 * - Cons: More complex setup
 * 
 * For this experimental project, we use Option 1 for simplicity.
 * Production projects should consider Option 2 for better maintainability.
 */

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideAnimations()
  ]
};
