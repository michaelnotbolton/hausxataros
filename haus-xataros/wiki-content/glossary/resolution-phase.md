---
title: Resolution Phase
type: reference
status: draft
tags: [combat, core, poker-hand-model]
related: [poker-hand-model, reveal-phase, cleanup-phase, time-bands, momentum, damage, threshold, margin, success]
attribution: David Daniel, with Archive as scribe
---

# Resolution Phase

The Resolution Phase is where the hand pays out — Phase 4 of the [[poker-hand-model|Poker-Hand Model]], when every allocation becomes a roll, every roll becomes a number, and every number becomes a consequence. Actions resolve from fastest to slowest across the [[time-bands|Time Band]] ladder, and within each band, [[momentum|Momentum]] order determines who acts first. This is where dice hit the table, [[threshold|Thresholds]] are tested, [[margin|Margins]] are calculated, and [[damage|Damage]] is dealt. Everything before this was preparation. This is the fight.

---

## Resolution Order

Actions resolve in strict Time Band order, from fastest to slowest:

1. **Priority +3** — [[flashstep|Flashstep]] Tier 3 cascade actions; [[tempo|Tempo]] 3 single actions
2. **Priority +2** — Flashstep Tier 2 cascade actions; Tempo 2 single actions
3. **Priority +1** — Flashstep Tier 1 cascade actions; Tempo 1 single actions
4. **General** — All standard, uncharged actions
5. **ASAP** — [[charge|Charge]] 1 actions (unless bought off with Tempo)
6. **End of Beat** — Charge 2 actions, environmental effects, heavily telegraphed abilities

Within each Time Band, characters act in Momentum order (most [[success|Successes]] on Momentum dice → first). Ties broken by: Mental [[stat|Stat]] Rank → Physical Stat Rank → coin flip.

---

## The Action Sequence

For each action that resolves:

1. **Declare the action** — which [[power|Power]] or [[scene-action|Scene Action]] is being performed, and against which target.
2. **Roll Action dice** — count [[success|Successes]] (5 or 6 on each d6).
3. **Roll Defense dice** — the target rolls their allocated Defense dice and counts Successes.
4. **Calculate [[threshold|Threshold]]** — Threshold = 1 + target's Defense Successes.
5. **Compare** — if attacker's Successes ≥ Threshold, the action hits. Otherwise, consult the [[failure-gradient|Failure Gradient]].
6. **Calculate [[margin|Margin]]** — Margin = attacker's Successes − Threshold.
7. **Apply [[damage|Damage]]** — Damage = Margin + Effect Tag bonuses − [[damage-reduction|Damage Reduction]]. Apply to the appropriate [[pool|Pool]].

---

## The Cinematic Resolution Principle

Within each Time Band, unless timing differences are mechanically encoded, all actions resolve simultaneously — "when the camera is on your character." The table collectively imagines how simultaneous events reconcile. This is the MRE's default: two characters at the same band, same Momentum, are understood to be acting at the same moment. The narrative sorts it out.

---

## You Died Variant

> **You Died sub-game:** In You Died, the Resolution Phase uses chip-draw evaluation instead of dice rolls. The Time Band order, Momentum sequencing, and action-by-action resolution process are structurally identical. Chip-based Thresholds and Margins replace die-based ones.

---

## See Also

- [[poker-hand-model|Poker-Hand Model]] — the five-phase combat structure
- [[reveal-phase|Reveal Phase]] — Phase 3, which precedes Resolution
- [[cleanup-phase|Cleanup Phase]] — Phase 5, which follows Resolution
- [[time-bands|Time Bands]] — the resolution ladder
- [[momentum|Momentum]] — the ordering within each band
- [[threshold|Threshold]] — the hit/miss boundary
- [[margin|Margin]] — the magnitude of success or failure
- [[damage|Damage]] — what hits produce

---

*David Daniel, with Archive as scribe*
