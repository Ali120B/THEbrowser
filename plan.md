You are acting as the Lead Product Architect, Senior Desktop Application Engineer, Chromium/Electron Engineer, UX Architect, Security Engineer, Performance Engineer, Linux Packaging Engineer, and QA Lead for a new desktop web browser called:

# THE Browser

The product is an original, open-source, Linux-first spatial browser inspired heavily by the publicly observable interaction model, information architecture, and visual philosophy of Stack Browser.

IMPORTANT:
This is NOT BrowserStack.
This is NOT a browser testing platform.
The product is called exactly:

THE Browser

The goal is not to make a mockup, landing page, prototype, fake browser, or browser-themed dashboard.

The goal is to build a genuinely usable daily-driver desktop browser based on Electron + Chromium that can function as a serious primary browser on Linux.

The browser should reproduce the strongest aspects of the Stack Browser experience extremely closely while improving areas where a modern implementation can provide better usability, persistence, performance, accessibility, security, extensibility, and customization.

The finished result should feel like:

“Stack Browser evolved into a mature, modern, open-source Linux browser.”

Do not merely imitate screenshots.

Reconstruct the underlying interaction model.

The browser must actually browse the web.

Websites must load as real Chromium web content.

Navigation must be real.

Cookies must be real.

Logins must work.

Extensions must work.

Downloads must work.

DevTools must work.

Permissions must work.

Authentication must work.

Multiple accounts must work.

Browser sessions must persist.

The spatial UI must manipulate real browser content rather than fake HTML screenshots.

==================================================
1. FIRST OBJECTIVE — RESEARCH BEFORE IMPLEMENTATION
==================================================

Before writing application code, deeply research Stack Browser.

Use public and legally accessible sources only.

Research:

https://stackbrowser.com/

Research all publicly available information you can find about:

- Stack Browser
- Stack Browser UI
- Stack Browser UX
- Stack Browser cards
- Stack Browser stacks
- Stack Browser spaces
- Stack Browser SpaceBar
- Stack Browser Fly Mode
- Stack Browser Special
- Stack Browser profiles
- Stack Browser extensions
- Stack Browser ad/tracker blocking
- Stack Browser Focus Mode
- Stack Browser themes/color realms
- Stack Browser card controls
- Stack Browser URL/navigation UI
- Stack Browser new-card/new-page flow
- Stack Browser floating/card presentation
- Stack Browser bottom navigation/SpaceBar
- Stack Browser drag-and-drop behavior
- Stack Browser resizing behavior
- Stack Browser sleep behavior
- Stack Browser card history
- Stack Browser saved cards
- Stack Browser incognito/private behavior
- Stack Browser workspace organization
- Stack Browser onboarding
- Stack Browser settings
- Stack Browser shortcuts
- Stack Browser command UI
- Stack Browser profile switching
- Stack Browser extension UI
- Stack Browser animations
- Stack Browser website presentation
- Stack Browser desktop behavior

Also inspect:

- official product pages
- official screenshots
- official demos
- publicly available videos
- UI walkthroughs
- public interviews
- public engineering discussions
- reviews
- public community posts
- design/case-study material
- publicly available documentation
- public source/engineering articles where legally available

The supplied YouTube reference is also a UX reference:

https://www.youtube.com/watch?v=vhVNKTBD2K8

Use it specifically to understand the floating/bottom presentation and the newer centered floating page/card creation experience described by the product.

Do not assume that all third-party articles are accurate.

Cross-check important behavior against official/public evidence.

Create a research document before implementation:

docs/research/stack-analysis.md

That document must contain:

1. Observed Stack terminology
2. Observed hierarchy
3. Observed navigation model
4. Observed card model
5. Observed stack model
6. Observed workspace/space model
7. Observed SpaceBar behavior
8. Observed browser chrome
9. Observed URL bar behavior
10. Observed card controls
11. Observed settings controls
12. Observed extension system
13. Observed profile system
14. Observed privacy tools
15. Observed themes
16. Observed animations
17. Observed keyboard interactions
18. Observed drag/drop interactions
19. Observed creation flow
20. Observed session behavior
21. Observed sleep/background behavior
22. Observed UI layouts
23. Screenshots/reference links
24. What is definitely confirmed
25. What is inferred
26. What should be intentionally improved

Do not confuse “Stack Browser” with unrelated browser extensions, products, or BrowserStack.

==================================================
2. PRODUCT VISION
==================================================

THE Browser should be designed around the following principles:

1. Websites are objects in a workspace rather than anonymous tabs.

2. A user's browser should represent what they are doing, not just where they have been.

3. Related websites should remain visually available together.

4. Workspaces should be persistent and spatial.

5. Cards should behave like real application surfaces.

6. The browser should reduce tab overload rather than merely redesign it.

7. Users should be able to visually arrange their online environment.

8. Browser state should survive restarts.

9. Inactive pages should consume as few resources as reasonably possible.

10. The browser should be capable of becoming a user's primary browser.

11. The interface should feel exceptionally polished.

12. Every interaction must feel intentional.

13. The browser should be privacy-conscious by default.

14. The project should remain open-source.

15. There must be no fake functionality.

==================================================
3. TARGET PLATFORM
==================================================

Primary platform:

Linux

Target distribution:

Arch Linux

Primary distributable:

AppImage

The application should ideally run across modern Arch-based systems and common Linux environments without requiring the user to manually configure a development environment.

Support:

- Wayland
- X11

Design for:

- modern Linux desktop environments
- fractional scaling
- HiDPI
- multiple screen resolutions
- variable DPI
- hardware acceleration
- GPU-accelerated rendering where available

Do not make multi-monitor functionality a blocking MVP requirement.

Do, however, avoid architectural decisions that make future multi-monitor support impossible.

==================================================
4. CORE TECHNOLOGY
==================================================

Use:

Electron + Chromium

Use a current stable Electron release at implementation time.

Do not hardcode an obsolete Electron version.

During implementation, inspect the current Electron documentation and select APIs that are current and supported.

Do not use deprecated BrowserView-based architecture for new implementation merely because older Stack engineering material used BrowserView.

Prefer the current Chromium/Electron view architecture, including WebContentsView where appropriate.

Do not use Electron's legacy <webview> architecture as the core browser architecture unless there is a compelling, explicitly documented technical reason.

Architecture must cleanly separate:

- main process
- browser/content process management
- application UI
- IPC layer
- persistence
- browser state
- security/policy layer
- extension management
- downloads
- permissions
- networking
- ad/tracker blocking
- session management
- spatial layout engine

Do not blindly copy an old implementation architecture.

Reproduce the behavior, not obsolete implementation details.

==================================================
5. CORE INFORMATION ARCHITECTURE
==================================================

The primary hierarchy is:

WORKSPACE
    ↓
STACK
    ↓
CARD
    ↓
TABS / PAGE NAVIGATION WITHIN CARD

Use these conceptual names consistently in the code and documentation.

Workspace:
The large working environment.

Stack:
A collection/group of related cards.

Card:
A real browser surface representing a website/application.

Tab:
A browser navigation context that may exist within a card when required by normal browser behavior.

Do not build a traditional tab-first architecture and then merely draw cards over it.

The architecture must fundamentally support spatial cards.

==================================================
6. SPATIAL BROWSER MODEL
==================================================

The workspace should behave like a desktop canvas.

Each card has:

- x position
- y position
- width
- height
- z-index
- active/inactive state
- minimized state
- sleeping state
- pinned state
- stack membership
- profile association
- URL
- title
- favicon
- loading state
- navigation state
- zoom level
- permissions state
- notification state
- audio state
- metadata
- optional color/accent
- card-specific settings

Cards must be:

- draggable
- resizable
- focusable
- closable
- duplicable
- pinnable
- sleepable
- restorable
- reorderable
- movable between stacks
- movable between workspaces
- expandable
- collapsible
- optionally maximizable

The spatial system must support arbitrary card arrangements.

Do not force everything into a rigid grid.

Provide intelligent snapping where useful, but preserve freeform spatial layout.

==================================================
7. CARD INTERACTION MODEL
==================================================

A card must feel like a first-class browser object.

Card header:

- favicon
- website title
- relevant navigation controls
- loading state
- compact URL/navigation affordance
- extensions/access controls where appropriate
- overflow menu
- card actions

Card controls should closely follow the visual language and interaction philosophy of Stack while being implemented using original assets and THE Browser branding.

Card menu must support actions such as:

- reload
- back
- forward
- duplicate card
- move to stack
- move to workspace
- save/pin
- sleep
- wake
- mute/unmute
- zoom
- open in new window
- open in external browser
- inspect / DevTools
- clear site data where appropriate
- permissions
- site settings
- close
- restore closed card where applicable

Do not make every action permanently visible.

Use progressive disclosure.

==================================================
8. STACKS
==================================================

A Stack is a persistent group of Cards.

Users must be able to:

- create stack
- rename stack
- delete stack
- duplicate stack
- reorder stack
- drag cards into stack
- remove cards from stack
- collapse stack
- expand stack
- save stack state
- restore stack
- customize stack appearance
- assign default profile
- assign optional wallpaper/background
- assign optional accent
- quickly navigate to stack

A stack should remember:

- card order
- card positions
- card dimensions
- URLs
- selected tabs
- profile associations
- sleep state
- pinned status
- card labels
- workspace location
- optional stack settings

==================================================
9. WORKSPACES
==================================================

A Workspace contains multiple Stacks.

Examples:

Personal
School
Coding
Projects
Research
Entertainment

The user should be able to:

- create workspace
- rename workspace
- delete workspace
- duplicate workspace
- reorder workspace
- switch workspace instantly
- assign workspace theme
- assign workspace background
- assign workspace profile
- configure workspace startup behavior
- archive workspace
- export workspace
- import workspace

Switching workspace should restore its saved spatial environment.

Do not require re-creating the layout after every restart.

==================================================
10. PERSISTENCE
==================================================

The browser must be local-first.

The application must remember browser state across restarts.

Persist:

- workspaces
- stacks
- cards
- card positions
- card sizes
- z-order
- URLs
- navigation state where safely restorable
- selected tabs
- history where applicable
- pinned cards
- sleep state
- site zoom
- site preferences
- profiles
- installed extensions
- browser preferences
- theme
- backgrounds
- sidebar configuration
- shortcuts
- downloads metadata
- permissions
- search engine settings
- ad/tracker settings
- UI configuration
- recently closed cards
- recently closed stacks
- recently closed workspaces

Critical requirement:

On browser restart, restore the full workspace and card structure.

However:

Cards should initially be restored in an unloaded or suspended state when practical.

The user should immediately see their complete spatial arrangement without requiring every website to fully initialize simultaneously.

When the user activates a card, wake/load its web content.

This is a major performance requirement.

==================================================
11. STORAGE ARCHITECTURE
==================================================

The user explicitly does not want a traditional database server.

Do not require:

- PostgreSQL
- MySQL
- MongoDB
- Redis
- external database services

Use a local persistent storage architecture appropriate for a desktop browser.

Choose the most robust local approach after evaluating:

- structured local files
- Electron storage
- JSON
- IndexedDB where appropriate
- Chromium session storage
- filesystem-backed browser state
- secure operating-system storage

Do not force the entire application into a single JSON file.

Use multiple files or a robust local persistence layer when appropriate.

The architecture must support:

- crash-safe writes
- atomic updates
- migrations
- schema versioning
- backups
- recovery
- import/export

Never corrupt the user's workspace because of an interrupted write.

==================================================
12. DAILY-DRIVER BROWSER FEATURES
==================================================

THE Browser must provide the normal features expected from a modern Chromium browser.

Implement real support for:

Navigation:
- back
- forward
- reload
- stop
- URL entry
- search
- history
- bookmarks
- page find
- zoom
- print
- page save
- copy link
- share/copy URL

Browser management:
- new card
- new tab inside card
- new stack
- new workspace
- close card
- reopen card
- restore session
- browser restart recovery
- private browsing
- profiles

Downloads:
- download manager
- download progress
- pause/resume where Chromium permits
- cancel
- reveal in file manager
- open
- remove from list
- download destination configuration

Permissions:
- camera
- microphone
- location
- notifications
- clipboard
- MIDI where relevant
- USB/device access where relevant
- fullscreen
- popups
- autoplay
- downloads

Media:
- audio
- video
- hardware acceleration
- WebRTC
- microphone
- camera
- screen sharing

Files:
- file upload
- file picker
- drag/drop upload

Printing:
- system printing
- print preview

Developer tooling:
- Chromium DevTools
- inspect element
- console
- network
- application/storage tools
- performance
- security
- sources
- view source

Browser customization:
- default search engine
- homepage/start behavior
- appearance
- privacy
- content settings
- language
- spell check
- downloads
- accessibility

==================================================
13. EXTENSIONS
==================================================

Extension support is a first-class requirement.

Support Chrome/Chromium extensions as broadly as technically possible.

The user should be able to:

- install extensions
- remove extensions
- disable/enable extensions
- inspect extension permissions
- open extension options
- configure extensions
- use extension popups
- allow extension access where supported
- manage extension site access
- load unpacked developer extensions
- support Manifest V3
- support supported legacy functionality where Chromium allows it

The extension system should feel natural inside THE Browser.

Provide an extension management UI.

Provide extension toolbar integration.

Ensure extensions can interact correctly with real browser pages.

Do not create a fake extension marketplace.

Where Chrome Web Store compatibility is possible, document exactly what is supported.

Where Chrome Web Store integration has licensing/distribution limitations, document them clearly and provide alternatives such as direct extension installation or unpacked development mode.

==================================================
14. PROFILES
==================================================

Provide multiple browser profiles.

Each profile should isolate appropriate browser state:

- cookies
- local storage
- session storage
- history
- bookmarks where appropriate
- extensions
- permissions
- cache
- login sessions

Users should be able to have:

Personal
School
Development
Guest
etc.

The system must support profile switching without corrupting active state.

Prefer the ability for individual cards to be associated with specific profiles where technically practical.

This is important for services where the user wants multiple accounts open simultaneously.

==================================================
15. PRIVATE BROWSING
==================================================

Implement real private/incognito browsing using appropriate Chromium session partitioning.

Private browsing must not accidentally leak normal profile persistence into the private context.

Make the private state visually obvious.

Support:

- private cards
- private stacks where appropriate
- private windows
- separate session state
- temporary cookies/storage
- separate history behavior

Clearly document exactly what private mode does and does not protect.

Do not make misleading privacy claims.

==================================================
16. AD + TRACKER BLOCKING
==================================================

THE Browser must include built-in privacy protection.

Provide:

- ad blocking
- tracker blocking
- third-party cookie controls
- privacy controls
- site permission controls
- optional HTTPS-only mode
- anti-tracking configuration
- per-site exceptions
- global enable/disable control

The UI should make this accessible without becoming cluttered.

Design a per-site privacy/security panel.

The user should be able to inspect:

- whether blocking is enabled
- approximate number of blocked requests where supported
- current site permissions
- cookies/site storage controls
- trackers blocked where detectable
- connection/security information
- site permissions

Do not claim that the browser provides absolute anonymity.

==================================================
17. SITE SETTINGS UI
==================================================

Create a polished site settings/security panel inspired by the compact site controls seen in modern browsers and Stack-like card navigation.

When the user interacts with the site/security icon in a card's navigation area, expose:

- connection status
- site identity
- permissions
- notifications
- camera
- microphone
- location
- autoplay
- popups
- clipboard
- downloads
- cookies/site data
- trackers
- ad blocking
- JavaScript where safely configurable
- reset permissions
- clear site data
- open full site settings

This panel should feel integrated into the card header rather than looking like a separate old-fashioned browser dialog.

==================================================
18. URL / ADDRESS BAR
==================================================

The URL bar is a major part of the visual identity.

Recreate the spirit of Stack's compact, integrated navigation bar very closely.

It must remain a real browser address/search field.

Features:

- URL parsing
- search fallback
- autocomplete
- history suggestions
- bookmark suggestions
- workspace/card suggestions
- search engine selection
- paste-and-go
- paste-and-search
- URL editing
- security indicator
- loading indicator
- stop/reload
- back
- forward

The visual treatment must match the overall spatial UI.

Do not make the address bar look like a generic Chrome clone pasted onto the application.

==================================================
19. OPTIONAL TRADITIONAL TAB MODE
==================================================

The primary browsing experience remains spatial/card-based.

However, conventional tabs should exist as an optional compatibility/navigation mechanism.

Users must be able to:

- open multiple tabs inside a card
- switch between tabs
- close tabs
- reopen tabs
- drag tabs when supported
- pin tabs where useful
- use normal Chromium tab behaviors internally

The tab UI should remain visually integrated with THE Browser.

Do not let tabs dominate the main workspace.

The user should feel that:

CARD = the persistent spatial object

TAB = navigation history/context inside that object

==================================================
20. FLOATING PAGE / NEW-CARD EXPERIENCE
==================================================

Implement a highly polished floating “new page” / “new card” experience inspired by the newer Stack-like visual direction described in the supplied video/reference.

When creating a new card/page, show a centered floating creation surface rather than immediately dumping the user into a conventional browser page.

The creation UI should support:

- URL
- search
- recent sites
- bookmarks
- suggested web apps
- pinned sites
- existing stacks
- recent cards
- profile selection if relevant

The floating panel should:

- be centered
- feel lightweight
- have smooth entrance animation
- visually float above the workspace
- preserve the underlying workspace as a backdrop
- support keyboard and mouse use
- close cleanly
- return focus to the originating workspace

When a new card is created, animate it naturally into the spatial environment.

==================================================
21. SPACEBAR / NAVIGATION RAIL
==================================================

Create the equivalent of Stack's SpaceBar concept as one of the primary navigation surfaces.

It should support:

- workspace navigation
- stack navigation
- card access
- pinned apps
- browser controls
- profile switching
- privacy controls
- downloads
- bookmarks
- history
- settings
- focus mode
- extension access
- optional notification indicators

The SpaceBar should be able to exist in more than one layout style.

Support both:

1. Vertical sidebar mode
2. Floating/bottom horizontal mode

The bottom/floating mode is especially important.

The user should be able to toggle between these navigation presentations.

The UI should remain elegant in both modes.

==================================================
22. BOTTOM FLOATING MODE
==================================================

Implement a polished bottom floating navigation mode.

Concept:

A compact floating control surface sits near the bottom of the workspace.

It should resemble a lightweight dock/control bar rather than a permanent bulky navigation panel.

It may contain:

- workspace switcher
- stack switcher
- card jump controls
- new card
- new stack
- search/switch
- profile
- privacy
- downloads
- settings

Use contextual expansion.

Avoid taking permanent vertical space.

When not actively needed, keep it visually quiet.

When hovered/focused, allow expansion.

Animation should feel smooth and intentional.

==================================================
23. FLY MODE / RAPID NAVIGATION
==================================================

Implement a Stack-inspired spatial rapid-navigation mode.

The user should be able to enter a dedicated navigation mode using a configurable shortcut.

In Fly Mode:

- cards become visually selectable
- stacks become selectable
- workspace structure becomes navigable
- directional movement is supported
- active target is visually highlighted
- selection should be fast
- escape returns to normal browsing

Do not blindly reproduce undocumented proprietary shortcut details.

Create a configurable command system.

The navigation should be usable with normal keyboard/mouse input.

Provide optional game-like visual feedback without turning the entire browser into a gimmick.

==================================================
24. COMMAND PALETTE / SPECIAL-STYLE SYSTEM
==================================================

Create an elegant universal command/search interface inspired by Stack's “Special” concept.

It should let users search and execute:

- websites
- bookmarks
- history
- cards
- stacks
- workspaces
- settings
- commands
- extensions
- profile actions
- downloads
- browser preferences

Examples:

“open youtube”

“switch to school”

“move github to coding”

“new stack”

“settings”

“downloads”

“clear site data”

“search history”

“open gmail”

“switch profile”

The command palette should support fuzzy search.

Results should be grouped intelligently.

Keyboard support is optional rather than mandatory, but mouse interaction must remain excellent.

==================================================
25. DRAG AND DROP
==================================================

Support rich drag-and-drop.

Users must be able to:

- drag cards
- resize cards
- move cards between stacks
- move cards between workspaces
- reorder stacks
- reorder workspaces
- drag URLs into the browser
- drag links into the workspace
- drag downloaded files where appropriate
- drag browser content into stacks where appropriate
- rearrange navigation items

Show clear drop targets.

Use polished motion and spatial feedback.

Avoid accidental drops.

==================================================
26. CARD LAYOUT ENGINE
==================================================

Create a real spatial layout engine.

It must support:

- free positioning
- snapping
- alignment
- intelligent sizing
- saved coordinates
- collision handling
- z-index
- focused-card promotion
- card groups
- stack-aware layout
- responsive adaptation

Provide optional layout commands:

- arrange automatically
- tile horizontally
- tile vertically
- fit to workspace
- spread cards
- compact cards
- reset layout
- restore previous layout

The user's custom layout must always be respected.

Do not permanently auto-rearrange their workspace without permission.

==================================================
27. SLEEP / SUSPEND SYSTEM
==================================================

Implement intelligent resource management.

Cards should support states such as:

ACTIVE
BACKGROUND
SLEEPING
WAKING
ERROR

When a card has been inactive for a configurable amount of time:

- reduce CPU work
- reduce unnecessary timers where safe
- suspend where technically possible
- reduce memory pressure
- preserve spatial metadata
- preserve browser state where possible

When activated:

- restore smoothly
- show loading/recovery feedback where necessary

The system must not destroy important form data or user state unnecessarily.

Allow:

- sleep now
- wake
- never sleep
- auto-sleep configuration
- per-site exceptions
- per-stack rules

==================================================
28. SESSION RESTORATION
==================================================

Startup sequence:

1. Start THE Browser quickly.
2. Restore the workspace structure.
3. Restore stacks.
4. Restore cards as lightweight placeholders/suspended states.
5. Restore card positions/sizes.
6. Restore card titles/favicons where cached.
7. Restore browser content lazily.
8. Load active/recent cards first.
9. Avoid simultaneously initializing every saved website.

The user should feel that the browser has instantly remembered everything even when content is still waking.

Crash recovery must do the same.

==================================================
29. THEMING
==================================================

Provide extensive visual customization.

Minimum:

- Light
- Dark
- System
- Custom

Include:

- background colors
- gradients
- glass effects
- translucency
- blur
- accent colors
- per-workspace themes
- per-stack accent
- customizable wallpapers
- motion intensity
- card corner radius
- UI density

Create a polished preset gallery.

The default THE Browser aesthetic should feel premium and spatial.

Do not simply copy Stack's exact color assets.

Use original branding and visual assets.

==================================================
30. VISUAL DESIGN LANGUAGE
==================================================

The design should be:

- premium
- minimal
- spatial
- soft
- highly polished
- slightly futuristic
- calm
- functional
- modern
- playful without being childish

Use:

- rounded surfaces
- subtle shadows
- translucent layers
- soft gradients
- carefully tuned blur
- clean typography
- restrained borders
- contextual controls
- spatial depth
- smooth motion

Avoid:

- generic admin-dashboard aesthetics
- excessive neon
- giant buttons
- excessive borders
- overcrowded browser chrome
- generic Chrome clones
- fake glassmorphism everywhere
- unnecessary decoration

Every pixel must serve hierarchy.

==================================================
31. ANIMATION SYSTEM
==================================================

Animations are important.

Implement:

- card creation
- card closing
- card waking
- card sleeping
- card movement
- stack switching
- workspace switching
- sidebar transitions
- bottom dock appearance
- command palette
- settings overlays
- context menus
- focus states
- drag/drop feedback
- resizing
- maximization
- restoration

Animation principles:

- fast
- smooth
- subtle
- responsive
- interruptible
- GPU-friendly

Avoid animation delays that make the browser feel slow.

Provide reduced-motion accessibility support.

==================================================
32. BROWSER SETTINGS
==================================================

Create a complete settings system.

Categories:

General
Appearance
Workspace
Stacks
Cards
Tabs
Profiles
Privacy & Security
Ad & Tracker Blocking
Passwords
Autofill
Extensions
Downloads
Search
Languages
Accessibility
Performance
System
Shortcuts
Advanced
About

Settings should be searchable.

Do not create fake settings controls.

Every displayed setting must correspond to actual behavior.

==================================================
33. PASSWORDS AND CREDENTIALS
==================================================

Use Chromium's supported credential/password mechanisms and appropriate Linux secure storage integrations where available.

Do not write passwords to plain-text application configuration files.

Provide password management UI.

Support:

- save passwords
- update passwords
- delete passwords
- view saved credentials after appropriate OS/user authentication where supported
- export/import only with strong explicit warnings and safe mechanisms

==================================================
34. SECURITY ARCHITECTURE
==================================================

Security is a first-class requirement.

Use:

- Chromium sandboxing
- context isolation
- secure IPC
- strict preload APIs
- no unnecessary Node integration for untrusted content
- strong origin checks
- permission validation
- safe protocol handling
- safe external-link handling
- secure downloads
- isolation of browser content from application UI
- least privilege
- safe custom protocols
- protection against renderer compromise
- no arbitrary filesystem access from website content

Never expose raw Electron APIs directly to web content.

Never allow a website to call privileged THE Browser APIs without explicit controlled bridges.

All IPC endpoints must validate inputs.

All file-system access must be controlled by trusted application code.

==================================================
35. NETWORKING
==================================================

Support:

- HTTP/HTTPS
- normal Chromium networking
- proxy configuration
- HTTP proxy
- HTTPS proxy
- SOCKS5
- proxy authentication
- per-profile settings
- optional per-workspace proxy
- DNS configuration where practical
- DoH where supported
- certificate handling
- site security inspection

Do not invent unsupported networking features.

Document limitations.

==================================================
36. DEVTOOLS
==================================================

Developer tools are mandatory.

Support proper Chromium DevTools.

Users should be able to:

- inspect
- debug
- console
- network
- application
- performance
- security
- storage
- sources
- Lighthouse-like functionality where Chromium provides it
- device emulation where supported

DevTools must work with individual cards/web contents.

Provide intuitive commands for opening DevTools for the active card.

==================================================
37. LOCALHOST / DEVELOPMENT
==================================================

THE Browser should be comfortable for developers.

Test thoroughly against:

- localhost
- 127.0.0.1
- local HTTPS
- development servers
- WebSockets
- hot reload
- service workers
- devtools
- source maps
- cross-origin development setups

==================================================
38. MEDIA AND WEB PLATFORM COMPATIBILITY
==================================================

Treat web compatibility seriously.

Test:

- modern JavaScript
- CSS
- WebAssembly
- WebGL
- WebGPU where Chromium supports it
- canvas
- WebRTC
- audio
- video
- fullscreen
- service workers
- IndexedDB
- local storage
- session storage
- notifications
- file uploads
- drag/drop
- clipboard
- camera
- microphone
- screen capture

Do not deliberately disable web functionality merely to make the application simpler.

==================================================
39. DRM
==================================================

DRM is not the primary project goal.

Do not let DRM compatibility dominate architecture.

However, do not deliberately break standard Chromium media behavior.

Clearly document what DRM support is available in the selected Electron/Chromium distribution and what is not.

==================================================
40. DEFAULT BROWSER INTEGRATION
==================================================

THE Browser should support becoming the system default browser.

Support:

- HTTP
- HTTPS
- HTML files where appropriate
- system default browser registration
- opening links from external applications
- command-line URL opening

Linux desktop integration must include an appropriate .desktop file.

==================================================
41. COMMAND-LINE INTERFACE
==================================================

Provide a useful CLI entry point.

Examples:

the-browser
the-browser https://example.com
the-browser --new-card https://example.com
the-browser --new-stack
the-browser --profile Personal
the-browser --private https://example.com

Design a sensible CLI before implementation.

==================================================
42. SYSTEM TRAY
==================================================

Optional but desirable.

If implemented:

- minimize to tray
- quick new card
- restore browser
- profile selection
- quit
- current workspace

Do not make tray behavior intrusive.

==================================================
43. NOTIFICATIONS
==================================================

Support real website notifications.

Integrate them into the UI thoughtfully.

Allow:

- global notifications
- per-profile notifications
- per-workspace notification controls
- per-site notification permission
- Focus Mode
- notification mute
- notification indicators on cards/spacebar items

==================================================
44. FOCUS MODE
==================================================

Create a true Focus Mode.

When enabled:

- suppress/mute browser notifications
- visually reduce distractions
- optionally dim secondary cards
- prevent notification popups
- retain browsing functionality

Allow the user to configure Focus Mode.

==================================================
45. BOOKMARKS
==================================================

Provide normal browser bookmarks while keeping them integrated into the spatial model.

Users can:

- bookmark page
- remove bookmark
- edit bookmark
- organize bookmark folders
- search bookmarks
- open bookmark as card
- open bookmark in existing stack
- open bookmark in new stack

Do not turn bookmarks into a giant conventional browser library UI unless the user opens the dedicated bookmark manager.

==================================================
46. HISTORY
==================================================

Provide full browsing history.

Features:

- history search
- chronological browsing
- per-profile history
- clear history
- clear site data
- open result in card
- open result in new card
- open result in existing stack
- inspect date/time

==================================================
47. RECENTLY CLOSED
==================================================

Provide:

- recently closed cards
- recently closed tabs
- recently closed stacks
- restore last closed
- restore selected item
- session recovery

==================================================
48. DOWNLOAD MANAGER
==================================================

Build a proper browser-integrated download manager.

UI should support:

- current downloads
- completed downloads
- failed downloads
- canceled downloads
- progress
- speed
- file size
- destination
- open file
- show in file manager
- retry
- cancel
- clear item

Use actual Chromium download events.

No fake progress.

==================================================
49. CUSTOM CONTEXT MENU
==================================================

Provide thoughtful context menus.

Depending on location, show actions for:

Page
Link
Image
Text selection
Card
Stack
Workspace
Sidebar item
Tab
Download

Support normal browser behaviors such as:

- open link
- open link in new card
- open link in new tab
- copy link
- save image
- copy image
- search selected text
- inspect
- reload
- mute
- close
- move

==================================================
50. SITE PERMISSIONS
==================================================

Implement permission prompts and settings carefully.

The UI must clearly explain:

“What does this site want?”

Avoid scary or misleading language.

Persist permissions appropriately per origin/profile/session.

==================================================
51. CRASH HANDLING
==================================================

The browser must be resilient.

Handle:

- renderer crashes
- content process crashes
- failed loads
- network errors
- extension crashes
- corrupted workspace metadata
- startup failures
- interrupted writes

Provide friendly recovery.

A crashed card should not crash the entire browser.

A broken extension should not corrupt the workspace.

==================================================
52. PERFORMANCE
==================================================

Performance target:

Prioritize functionality and UX while keeping the browser efficient.

The primary performance challenge is multiple persistent web pages.

Build around that reality.

Measure:

- startup time
- workspace restore time
- card creation time
- card wake time
- idle CPU
- memory per active card
- memory per sleeping card
- animation responsiveness
- IPC overhead
- layout recalculation overhead
- extension overhead

Use:

- lazy loading
- background throttling
- sleeping
- efficient view attachment
- virtualization where appropriate
- cached metadata
- minimal DOM re-rendering
- efficient IPC
- debounced layout persistence
- GPU-friendly animation

Never make all cards fully active merely for convenience.

==================================================
53. MEMORY MANAGEMENT
==================================================

Because a Stack-style browser can have many pages open, memory management is crucial.

Implement:

- activity tracking
- memory-pressure detection where available
- automatic sleeping
- wake-on-focus
- configurable sleep timers
- card priorities
- active-card protection
- pinned-card exemptions
- user overrides

Never silently close cards.

==================================================
54. OPEN SOURCE
==================================================

The project must be open source.

Provide:

LICENSE

README.md

CONTRIBUTING.md

SECURITY.md

CODE_OF_CONDUCT.md

CHANGELOG.md

Clear licensing for dependencies.

Do not include copyrighted Stack assets unless they are clearly licensed for redistribution.

Do not copy proprietary source code.

Do not use Stack branding.

Use:

THE Browser

and create original branding.

==================================================
55. ORIGINAL BRANDING
==================================================

Product name:

THE Browser

Do not call it Stack.

Do not reuse Stack's logo.

Do not reuse proprietary artwork.

Do not copy exact brand typography.

The UI may be strongly inspired by publicly observable interaction patterns.

The visual system must become its own coherent identity.

Brand tone:

calm
confident
spatial
modern
technical
friendly

==================================================
56. UI COMPONENT SYSTEM
==================================================

Create a reusable internal design system.

Components should include:

- Button
- IconButton
- Card
- CardHeader
- AddressBar
- SecurityPill
- ContextMenu
- CommandPalette
- Modal
- Popover
- Tooltip
- Sidebar
- SpaceBar
- BottomDock
- StackHeader
- WorkspaceSwitcher
- ProfileSwitcher
- SettingsPanel
- PermissionPanel
- DownloadPanel
- ExtensionPanel
- HistoryPanel
- BookmarkPanel
- Toast
- NotificationIndicator
- SearchResult
- DragOverlay
- ResizeHandle
- LoadingIndicator

No random one-off UI styles unless there is a real reason.

==================================================
57. DESIGN TOKENS
==================================================

Centralize:

- colors
- gradients
- typography
- spacing
- radii
- shadows
- blur
- transitions
- animation durations
- z-index layers
- UI density
- card styles

Allow themes to override design tokens.

==================================================
58. ACCESSIBILITY
==================================================

Support:

- keyboard navigation
- focus rings
- screen reader semantics where practical
- reduced motion
- sufficient contrast
- scalable text
- accessible dialogs
- accessible context menus
- accessible drag alternatives where practical

The browser should remain usable without relying exclusively on spatial drag interactions.

==================================================
59. INPUT
==================================================

Primary interaction:

normal mouse + keyboard

Do not make advanced keyboard mastery mandatory.

Provide intuitive mouse behavior.

Keyboard shortcuts should be available and customizable rather than required for normal operation.

==================================================
60. SHORTCUTS
==================================================

Create a complete shortcut management system.

Categories:

Navigation
Cards
Stacks
Workspaces
Browser
Fly Mode
Command Palette
Developer Tools
Privacy
Media
Downloads

Allow shortcut customization.

Avoid hardcoding shortcuts that conflict with common browser/OS behavior without documenting it.

==================================================
61. SETTINGS SEARCH
==================================================

Settings should have instant search.

Typing:

“dark”
“extensions”
“proxy”
“downloads”
“cookies”
“sleep”
“profile”

should immediately reveal related settings.

==================================================
62. BACKGROUND / WALLPAPER
==================================================

The workspace background may support:

- solid color
- gradient
- image
- animated subtle background
- blur
- per-workspace customization

Wallpaper must never interfere with website readability.

Provide contrast controls.

==================================================
63. WEBSITE CARD PRESENTATION
==================================================

Cards should not necessarily all look identical.

Support visual states:

Default
Focused
Inactive
Sleeping
Loading
Error
Muted
Playing media
Notification
Pinned
Private

States should be communicated subtly.

==================================================
64. RESPONSIVE SPATIAL BEHAVIOR
==================================================

The browser must work across:

1366×768
1920×1080
2560×1440
3440×1440
4K

The spatial system should adapt gracefully.

Do not assume a single display size.

==================================================
65. ARCHITECTURE REQUIREMENTS
==================================================

Before implementation, create:

docs/architecture/system-overview.md
docs/architecture/process-model.md
docs/architecture/browser-content.md
docs/architecture/spatial-layout.md
docs/architecture/state-management.md
docs/architecture/persistence.md
docs/architecture/security.md
docs/architecture/extensions.md
docs/architecture/profiles.md
docs/architecture/privacy.md
docs/architecture/performance.md
docs/architecture/linux.md
docs/architecture/updater.md
docs/architecture/testing.md

Each document should explain:

- responsibilities
- APIs
- data flow
- dependencies
- failure modes
- security implications
- performance implications
- testing strategy

==================================================
66. PROCESS MODEL
==================================================

Document exactly what runs in:

Main process

Renderer/UI process

Web content processes

Preload scripts

Utility processes

Workers

Do not blur trust boundaries.

The UI renderer must never be trusted as a security boundary simply because it is “your application UI.”

==================================================
67. IPC
==================================================

Create typed IPC APIs.

For every IPC endpoint document:

- request
- response
- caller
- permissions
- validation
- error behavior

Avoid huge generic “execute” IPC channels.

Prefer narrowly scoped commands.

==================================================
68. STATE MODEL
==================================================

Define typed domain models for:

Workspace
Stack
Card
Tab
Profile
Permission
Download
Extension
Bookmark
HistoryEntry
Theme
Settings
Session
Layout
Shortcut

Every state object needs a schema version where appropriate.

==================================================
69. MIGRATIONS
==================================================

Persistence must support version migration.

For example:

schemaVersion: 1
schemaVersion: 2
schemaVersion: 3

Users must not lose layouts after application upgrades.

==================================================
70. CLOUD SYNC
==================================================

Cloud synchronization is desired.

However:

THE Browser must remain usable without cloud sync.

Cloud sync must be optional.

No account must be required for basic browsing.

Design a provider-independent sync layer.

The sync architecture should eventually support:

- workspaces
- stacks
- card URLs
- layouts
- bookmarks
- settings
- profiles where safe
- shortcuts
- selected browser metadata

Sensitive credentials should not be synced casually.

Passwords/cookies/session secrets require special treatment and may remain device-local unless an explicit secure sync design is developed.

==================================================
71. CLOUD SYNC SECURITY
==================================================

Design sync for privacy.

Prefer:

end-to-end encryption

client-side encryption

minimal server trust

The server should not need access to plaintext browsing content if avoidable.

Document:

- threat model
- encryption model
- key management
- conflict resolution
- device registration
- logout
- revocation
- recovery
- sync corruption handling

Do not implement fake “encrypted” sync.

==================================================
72. OFFLINE OPERATION
==================================================

After installation, the browser itself must be usable offline.

At minimum, the user must be able to:

- launch
- see workspaces
- see stacks
- see cards
- manipulate layout
- access settings
- inspect local history/bookmarks
- use previously cached metadata
- restore their session
- work with local files

Web content naturally requires network connectivity.

The browser UI itself must never depend on an online service.

==================================================
73. UPDATE SYSTEM
==================================================

Automatic updates are required.

At startup:

1. Browser starts.
2. Update system checks for an update.
3. Check must not block startup.
4. Update downloads in background if appropriate.
5. User receives clear status.
6. Update applies safely.

Update system must support the selected Linux packaging strategy.

Because the primary release is AppImage, design an update mechanism appropriate for AppImage distribution.

Never silently replace application data.

Never silently migrate user data destructively.

==================================================
74. TELEMETRY
==================================================

Default:

ZERO telemetry.

Do not collect:

- browsing history
- visited URLs
- card URLs
- workspace names
- typed searches
- cookies
- personal identifiers

Do not embed unnecessary analytics SDKs.

Any optional crash diagnostics must be:

- explicitly disclosed
- opt-in where practical
- privacy-preserving

The browser should function completely without telemetry.

==================================================
75. PRIVACY TRANSPARENCY
==================================================

Create a privacy dashboard.

Explain:

- what stays local
- what Chromium stores
- what extensions can access
- what sync stores
- what private mode does
- what ad blocking does
- what tracker blocking does
- what cloud sync does

Do not exaggerate privacy.

==================================================
76. IMPORT / EXPORT
==================================================

Support import where technically practical from common Chromium-based browsers.

Import:

- bookmarks
- history
- cookies only where technically/security appropriate
- browser profile metadata
- saved passwords through safe supported mechanisms
- extensions where feasible

Export:

- bookmarks
- workspaces
- stacks
- layouts
- settings
- browser configuration
- optional session backup

Create a portable workspace/session export format.

==================================================
77. BACKUP / RECOVERY
==================================================

Users must be able to back up THE Browser state.

Provide:

Export Workspace

Export Stack

Export Browser Configuration

Backup All

Restore Backup

Backups must include schema/version metadata.

==================================================
78. LOGGING
==================================================

Implement internal diagnostic logging.

Logging must:

- help debug crashes
- distinguish severity
- support log rotation
- avoid sensitive browsing data
- avoid dumping passwords/cookies
- avoid logging full URLs unless explicitly enabled for debugging

Provide a diagnostics screen.

==================================================
79. ERROR EXPERIENCE
==================================================

Errors must feel like part of the browser.

Examples:

Network unavailable
Certificate error
Renderer crash
Extension error
Download failure
Permission failure
Corrupt workspace
Failed sync
Failed update

Do not show raw stack traces to normal users.

Provide an “advanced details” section where useful.

==================================================
80. TESTING
==================================================

Testing is mandatory.

Include:

Unit tests
Integration tests
IPC tests
Persistence tests
Migration tests
Security tests
UI tests
Browser-content tests
Extension tests
Performance tests
Crash recovery tests
Session restoration tests
Linux packaging tests

Test:

- 1 card
- 10 cards
- 25 cards
- 50 cards
- many sleeping cards
- many stacks
- many workspaces

==================================================
81. REAL-WORLD WEBSITE TESTING
==================================================

Test with diverse real websites and web applications.

Examples should include:

- Gmail
- YouTube
- GitHub
- Discord
- Reddit
- Notion
- Google Docs
- Google Drive
- Figma
- Spotify web
- common news sites
- common shopping sites
- localhost development apps

Testing must verify:

- login
- navigation
- dynamic websites
- JavaScript
- scrolling
- media
- forms
- notifications
- drag/drop
- popups
- context menus
- cookies
- local storage

==================================================
82. EXTENSION TEST MATRIX
==================================================

Test extensions representing:

- password manager
- ad blocker
- grammar/writing
- dark mode
- productivity
- developer tools
- content modification
- downloads

Ensure extensions do not break the spatial model.

==================================================
83. SECURITY TESTING
==================================================

Test:

- malicious pages
- malicious redirects
- popup abuse
- permission abuse
- malformed URLs
- custom protocol attacks
- IPC abuse
- preload exposure
- renderer compromise scenarios
- filesystem escape attempts
- unsafe external command invocation
- extension permission misuse

==================================================
84. PERFORMANCE BENCHMARKING
==================================================

Create repeatable benchmarks.

Examples:

Cold startup
Warm startup
10-card restore
25-card restore
50-card restore
First card interaction
Switch workspace
Switch stack
Wake sleeping card
Create card
Close card
Drag card
Resize card
Open command palette

Record metrics.

==================================================
85. PACKAGING
==================================================

Primary output:

THE Browser AppImage

Also produce development/build documentation.

The eventual repository should contain a clean packaging workflow.

Example:

npm run build
npm run package
npm run package:appimage

Actual commands may differ.

Ensure:

- application icon
- .desktop integration
- MIME associations where appropriate
- default browser registration
- correct file permissions
- portable AppImage behavior where appropriate

==================================================
86. REPOSITORY STRUCTURE
==================================================

Create a professional repository.

Example structure:

the-browser/
├── apps/
│   ├── desktop/
│   └── ...
├── src/
│   ├── main/
│   ├── renderer/
│   ├── browser/
│   ├── views/
│   ├── spatial/
│   ├── state/
│   ├── persistence/
│   ├── security/
│   ├── extensions/
│   ├── profiles/
│   ├── downloads/
│   ├── privacy/
│   ├── sync/
│   └── shared/
├── assets/
├── tests/
├── docs/
│   ├── research/
│   ├── architecture/
│   ├── product/
│   └── qa/
├── scripts/
├── packaging/
├── plan.md
├── README.md
├── LICENSE
├── SECURITY.md
├── CONTRIBUTING.md
└── ...
You may improve this structure if engineering evidence suggests a better organization.

Do not follow this example blindly.

==================================================
87. NO GIANT FILES

Do not create a 10,000-line main.ts.

Do not create a giant index.html.

Do not place all state into one JavaScript object.

Do not put all IPC in one enormous file.

Separate responsibilities.

==================================================
88. CODE QUALITY

Require:

strict typing where applicable
linting
formatting
clear naming
modular architecture
error handling
comments for non-obvious code
typed interfaces
documented assumptions
tests
migrations
logging

Avoid overengineering purely for theoretical problems.

==================================================
89. NO MOCK FUNCTIONALITY

ABSOLUTE RULE:

Never create UI that looks functional but is not.

Do not create:

fake tabs
fake browser pages
fake loading
fake downloads
fake extension installation
fake navigation
fake settings
fake notifications
fake permissions
fake ad blocking
fake history
fake bookmarks
fake profiles
fake sync
fake browser content

During early phases, clearly mark features that are not implemented.

Do not represent unfinished functionality as complete.

==================================================
90. DESIGN IMPLEMENTATION PRIORITY

Visual similarity to Stack should be treated as a major design target, but not at the expense of functionality.

Priority order:

Real browser functionality
Stable Chromium content management
Spatial card architecture
Workspace/stack state
Navigation UX
Performance
Security
Extensions
Privacy
Visual fidelity
Advanced customization
Cloud sync
Extra polish

However, visual UX must be continuously developed rather than postponed until the end.

==================================================
91. ACCEPTANCE CRITERIA

THE Browser should not be considered complete until:

real websites load
cards are real browser content
multiple cards work
cards can be moved
cards can be resized
cards persist
stacks persist
workspaces persist
profiles work
extensions work
downloads work
DevTools work
permissions work
private mode works
history works
bookmarks work
ad/tracker blocking works
site settings work
sleep/wake works
crash recovery works
startup restoration works
AppImage builds
Linux integration works
zero telemetry is honored
settings work
update mechanism works
tests pass
security boundaries have been reviewed
==================================================
92. IMPORTANT PRODUCT DECISION

Do not attempt to implement the entire browser in one phase.

The project MUST be decomposed into granular stages.

The first deliverable is not “write the entire browser.”

The first deliverable is:

plan.md

and the architecture documentation.

==================================================
93. PLAN.MD REQUIREMENTS

Create:

plan.md

It must be extremely detailed.

Do not make it a generic checklist.

Each phase must contain:

Phase number
Phase name
Objective
Why it exists
Dependencies
Architecture affected
Files/modules expected
Engineering tasks
UI tasks
browser-engine tasks
security tasks
persistence tasks
testing tasks
performance tasks
documentation tasks
acceptance criteria
manual QA checklist
automated tests
risks
fallback plan
definition of done

Every phase should produce something demonstrably usable.

==================================================
94. PHASE STRUCTURE

Use a granular phase strategy similar to:

PHASE 0
Research + requirements + feasibility

PHASE 1
Technical architecture

PHASE 2
Electron/Chromium foundation

PHASE 3
Secure process model and IPC

PHASE 4
Real browser-content engine

PHASE 5
Basic browser navigation

PHASE 6
Spatial card engine

PHASE 7
Card interaction system

PHASE 8
Stacks

PHASE 9
Workspaces

PHASE 10
SpaceBar / navigation rail

PHASE 11
Floating bottom mode

PHASE 12
New-card floating creation UI

PHASE 13
Address bar + browser chrome

PHASE 14
Command palette / Special-like system

PHASE 15
Fly Mode

PHASE 16
Persistence architecture

PHASE 17
Session restoration

PHASE 18
Sleep/suspend system

PHASE 19
Profiles

PHASE 20
Private browsing

PHASE 21
Extensions

PHASE 22
Downloads

PHASE 23
Bookmarks

PHASE 24
History

PHASE 25
Permissions/site settings

PHASE 26
Privacy/ad/tracker blocking

PHASE 27
DevTools

PHASE 28
Linux integration

PHASE 29
Themes/customization

PHASE 30
Animation/polish

PHASE 31
Performance optimization

PHASE 32
Security hardening

PHASE 33
Sync architecture

PHASE 34
Cloud sync implementation

PHASE 35
Crash recovery

PHASE 36
Updater

PHASE 37
Testing

PHASE 38
AppImage packaging

PHASE 39
Release candidate

PHASE 40
Final production audit

You may split these further.

If one phase is too large, divide it.

==================================================
95. PHASE DEPENDENCIES

The plan must explicitly show dependencies.

Example:

Spatial cards
depends on:
Chromium content architecture
layout engine
IPC

Stacks
depends on:
cards
persistence

Workspace restoration
depends on:
workspaces
persistence
browser session management

Extensions
depends on:
real browser content
session architecture
profiles

Sync
depends on:
stable local state model

Do not build features before their architectural dependencies exist.

==================================================
96. DOCUMENT THE CORE DATA MODEL

The architecture docs must define what a:

Workspace
Stack
Card
Tab
Profile
Session
Theme
Permission
Download

actually means.

Include sample schemas.

==================================================
97. DOCUMENT BROWSER CONTENT LIFECYCLE

Document:

Create card
Attach content
Navigate
Background
Sleep
Wake
Close
Restore
Crash
Recover
Destroy

The lifecycle must be explicit.

==================================================
98. DOCUMENT SPATIAL LAYOUT LIFECYCLE

Document:

Create
Move
Resize
Focus
Snap
Reorder
Persist
Restore
Recover

Do not implement spatial layout through ad hoc DOM offsets without an architectural model.

==================================================
99. VISUAL QA

Create a visual regression strategy.

Capture screenshots for:

empty workspace
one card
multiple cards
multiple stacks
multiple workspaces
sidebar mode
bottom floating mode
dark theme
light theme
command palette
site settings
extensions
downloads
settings
card sleeping
card loading
private card

Compare screenshots after major UI changes.

==================================================
100. STACK-INSPIRED, NOT STACK-BRANDED

The target is:

Very close interaction philosophy.

Very close spatial browsing model.

Very close density and UX quality.

Very close feeling.

Potentially better usability.

Original implementation.

Original code.

Original branding.

Original assets.

Original design system.

Do not use proprietary Stack source code.

Do not copy proprietary Stack assets.

Do not misrepresent THE Browser as Stack.

==================================================
101. “BETTER THAN STACK” REQUIREMENT

Do not merely clone weaknesses.

During research, identify opportunities to improve:

discoverability
persistence
performance
accessibility
Linux support
settings
extension support
recovery
privacy
customization
search
error handling
downloads
developer experience

For every major difference from Stack, explain:

WHAT STACK DOES
WHY IT WORKS
WHAT COULD BE BETTER
WHAT THE BROWSER WILL DO

Do not change core interaction concepts merely to be different.

Improve only when there is a measurable UX or technical reason.

==================================================
102. DAILY DRIVER STANDARD

Ask this question continuously:

“Could a normal person use THE Browser as their primary browser every day?”

If the answer is no, keep improving.

The application should not feel like a student project.

It should feel like a serious consumer desktop product.

==================================================
103. DEVELOPMENT WORKFLOW

At the start of every phase:

Read plan.md.
Read relevant architecture documents.
Read the current implementation.
Identify completed acceptance criteria.
Identify regressions.
Implement only the next required scope.
Run tests.
Run manual QA.
Update documentation.
Update plan.md status.
Do not silently skip incomplete tasks.
==================================================
104. NEVER DESTROY WORKING FEATURES

When implementing later phases:

Do not rewrite previously stable features unnecessarily.

Do not replace the browser engine just because a new feature is easier to implement another way.

Do not break:

navigation
layouts
persistence
extensions
profiles
privacy
startup restoration

Perform regression testing after architecture changes.

==================================================
105. FINAL DELIVERABLE

At the end of the project, the repository must contain:

A real production-quality Electron + Chromium browser.

It must build into:

THE Browser.AppImage

It must launch on a supported Arch Linux installation.

It must be capable of being used as a real daily browser.

The UI should immediately communicate:

“Spatial browser.”

The hierarchy should immediately communicate:

Workspace → Stack → Cards.

The main browsing experience should immediately feel:

calm
spatial
organized
fast
premium

The product should feel strongly reminiscent of the public Stack Browser interaction model while remaining clearly branded and implemented as THE Browser.

==================================================
106. FIRST TASK — DO NOT CODE THE ENTIRE PRODUCT

Your FIRST task is:

Research.

Then produce:

plan.md

docs/research/stack-analysis.md

docs/architecture/system-overview.md

docs/architecture/process-model.md

docs/architecture/browser-content.md

docs/architecture/spatial-layout.md

docs/architecture/state-management.md

docs/architecture/persistence.md

docs/architecture/security.md

docs/architecture/extensions.md

docs/architecture/profiles.md

docs/architecture/privacy.md

docs/architecture/performance.md

docs/architecture/linux.md

docs/architecture/updater.md

docs/architecture/testing.md

Also create:

docs/product/ux-principles.md

docs/product/ui-system.md

docs/product/interaction-model.md

docs/product/feature-matrix.md

docs/product/stack-vs-the-browser.md

The feature matrix must explicitly classify each feature as:

Confirmed from Stack public material
Strongly inferred
THE Browser improvement
Normal browser requirement
Future feature

==================================================
107. FINAL RULE

Do not start by writing thousands of lines of code.

Do not create a superficial prototype.

Do not create fake browser functionality.

Do not create a static screenshot imitation.

First understand the product.

Then design the architecture.

Then define the data model.

Then define the browser-content lifecycle.

Then define the spatial system.

Then define the persistence model.

Then define the security model.

Then produce the detailed implementation plan.

Only after the plan and architecture are internally coherent should implementation begin.

THE Browser should be treated as a serious long-term software product, not a one-off demo.



==================================================
107. EXECUTION STATUS — 2026-09-05
==================================================

**Phase 0 — Research + requirements + feasibility: COMPLETE (documentation baseline).**

Delivered:

- `docs/research/stack-analysis.md`
- architecture documents specified in First Task
- product documents specified in First Task
- `context.md` and a truthful README progress indicator

Verification note: this environment's network proxy rejected the official Stack site and supplied YouTube reference during this pass. The research document distinguishes confirmed terminology, strong inference, and THE Browser decisions; live-source validation remains mandatory before visual-fidelity work.

**Phases 1–5 — Initial Electron foundation: COMPLETE (narrow vertical slice).**

Implemented in `src/`: Electron main/renderer separation, a frozen capability-based preload bridge, a real `WebContentsView` with isolated and sandboxed web content, navigation policy, popup routing to an owned card, basic navigation controls, persistent one-workspace/one-stack card metadata, and unit tests for URL policy and local state writes. The package pins Electron with a current-major compatible range selected for implementation; `npm view electron` and online Electron documentation access were unavailable behind this environment’s network policy, so the exact latest release must be revalidated before release.

**Next phase:** Phase 6 spatial card engine: model freeform card geometry, resize/focus/layout persistence, and host multiple live/sleeping content views without weakening the secure process boundary.
