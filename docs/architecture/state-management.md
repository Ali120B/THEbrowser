# State management

The renderer owns transient interaction state (pointer capture, menu visibility, draft URL) and mirrors a validated application snapshot. Main owns authoritative persisted domain state and live content handles. Reducers are pure and use explicit commands: `workspace.create`, `stack.rename`, `card.move`, `card.sleep`, and `card.navigate`.

State changes are optimistic only when reversible. Each command has a correlation ID, schema-versioned payload, success/error result, and state revision. Main serializes persistence writes; renderers reconcile from the returned authoritative revision. Sensitive Chromium state remains in its profile partition, not in renderer state.
