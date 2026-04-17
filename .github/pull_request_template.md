## Summary

- describe the user-facing change

## Workflow Checklist

- [ ] Gherkin was updated first in `haus-xataros/features/` when behavior changed
- [ ] Step definitions and tests were updated from the Gherkin
- [ ] Storybook was reviewed or updated for component, visual, or extensibility changes
- [ ] Implementation was updated after the validation targets were clear

## Verification

- [ ] `npm test`
- [ ] `npm run test:e2e`
- [ ] `npm run build`
- [ ] `npm run build-storybook` if Storybook changed or component review mattered
- [ ] `npm run docker:build` or equivalent container verification if deployability changed

## Notes

- Gherkin changes:
- Test changes:
- Storybook review:
- Build status:
- Deploy or Docker status:
- Known blockers:
