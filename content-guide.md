# Content Guide

1. Add track or unit metadata in `content/tracks/.../index.ts`.
2. Write MDX with frontmatter matching `lessonSchema` from `content/schema.ts`.
3. Reference deterministic practice templates by ID.
4. Keep examples contextual to the track while preserving shared mathematical structure.

## Example diff shape

- Add a new unit folder.
- Add `index.ts` metadata.
- Add one MDX file per topic.
- Update the parent track metadata to include the new unit.
