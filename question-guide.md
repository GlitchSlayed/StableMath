# Question Template Guide

A `QuestionTemplate` must generate and validate deterministically. Use `gradientDescent.ts` as the annotated reference because it shows:

- parameter generation from a seeded RNG
- explicit distractor metadata for meaningful error diagnosis
- a validator that distinguishes sign errors from arithmetic mistakes
- three escalating static hints

## Writing a new template

1. Choose a stable `id`, `topicId`, and difficulty.
2. Generate only the parameters you need.
3. Store any alternative wrong-work signatures in `metadata` so validators can classify them.
4. Provide a full explanation in every `ValidationResult`, including correct answers.
5. Add the template to `lib/question-engine/templates/index.ts` so sessions can discover it.
