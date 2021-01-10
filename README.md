# Always Centred

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/sdoehren)

Always Centred centres and zooms the view on player owned characters.

Always Centred is designed with streaming in mind.  

## Instructions
set "Centre View Continuously?" to on, the rest should be automatic.

## Settings

- Mode: (default: Disabled)  
Disabled: Module off  
Player Characters: Will zoom and centre to include all **player owned** tokens.  
Selected Token:  Will zoom and centre to include only the selected token.  

"Selected Token" can work when multiple tokens are selected but it will only focus on one at a time and may lead to the camera bouncing around a lot.

- Auto Zoom: (default: Enabled)  
Whether the camera will move towards and away from the board as needed.

- Max zoom level:  Ignored if Auto Zoom disabled (default: 1, max:3) 
Maximum tightness to the tabletop; high number tokens appear bigger, low number tokens appear smaller.  
Setting 1: 1 pixel on tabletop=1 pixel in view  
Setting 3: 1 pixel on tabletop=3 pixel in view  
Setting 0.2: 5 pixel on tabletop=1 pixel in view  

- Camera animation speed : Speed at which the camera recentres (default: 500ms; 0=instant)

## Known Limitations
Probably many

## Planned Features
Viewport clean up; remove navigation, controls, players and hotbar.