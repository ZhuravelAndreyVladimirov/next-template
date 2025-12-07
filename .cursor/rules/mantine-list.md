Rule: Use Mantine `ListItem` instead of `List.Item` (applies to all Mantine list elements).

- Context: Mantine components in this project must not use `List.Item`.
- Requirement: Always import and render `ListItem` from `@mantine/core` in lists.
- Example: Replace `<List.Item>...</List.Item>` with `<ListItem>...</ListItem>`; applies to any Mantine list usage (e.g., `List` with custom items).
- Scope: Entire codebase (e.g., `src/app/[locale]/page.tsx`).
