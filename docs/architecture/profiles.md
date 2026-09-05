# Profiles and private browsing

A regular profile maps to a stable Electron partition and isolates cookies, storage, cache, permissions, extensions, history metadata, and downloads policy from other profiles. A card references exactly one profile. Profile deletion requires confirmation and closes/detaches dependent cards safely.

Private cards use an in-memory or otherwise non-persistent partition, are visually distinct, are excluded from normal history/workspace restore, and are destroyed on private-window/session closure. Private mode reduces local persistence; it does not anonymize network traffic, fingerprints, downloads, or activity visible to sites, networks, employers, or extensions.
