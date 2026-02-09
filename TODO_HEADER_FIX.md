# Header Mobile Tagline Fix

## Issue
The tagline "Bâtir vos projets, façonner votre confort, la solidité de nos engagements" next to the logo was being hidden by other elements on mobile devices (LanguageToggle, ThemeToggle, Hamburger menu).

## Solution
Show "..." (ellipsis) on mobile devices that is clickable to reveal the full tagline.

## Files Edited
- `src/components/Header.tsx`

## Changes Made
Modified `src/components/Header.tsx`:
- Added `showFullTagline` state to control visibility
- Replaced static "..." with clickable button that toggles between "..." and full tagline
- Added hover effect for better UX
- Full tagline still shows automatically on sm+ screens (640px and above)

## Status: ✅ COMPLETED

