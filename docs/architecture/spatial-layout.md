# Spatial layout

Layout is a pure, testable model—not ad-hoc DOM offsets. Each card has logical canvas coordinates, minimum/maximum dimensions, z-index, stack membership, and optional presentation state. The renderer converts pointer input into intentions (`move`, `resize`, `focus`, `snap`) and a reducer produces a new layout; main applies only validated pixel bounds to content views.

## Lifecycle

Create assigns non-overlapping suggested bounds. Move and resize clamp to safe canvas limits and offer non-destructive snapping. Focus advances z-order deterministically. Stack changes are atomic domain operations. Persist records logical coordinates and display/DPI metadata. Restore scales/clamps cards to visible bounds; recovery falls back to a cascade layout if geometry is invalid.

Keyboard alternatives provide move/resize increment commands, focus cycling, maximize/restore, and accessible names for every card. Dragging a card over a stack drop target must visibly announce the intended result before committing it.
