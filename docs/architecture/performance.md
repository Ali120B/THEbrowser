# Performance architecture

Restore structure before content: startup draws workspace metadata and card frames first, then wakes only the active card and a bounded number of explicit candidates. The scheduler considers card focus, audibility, pinned state, download activity, visibility, user sleep choice, and memory pressure; it never sleeps a card with active media/download without clear policy.

Measure cold/warm startup, 10/25/50-card restore, workspace switch, card wake, drag/resize frame time, and memory per active/sleeping card. Use logical geometry and batched bounds updates during drag. Establish regression budgets before optimization; do not trade security or data integrity for synthetic speed.
