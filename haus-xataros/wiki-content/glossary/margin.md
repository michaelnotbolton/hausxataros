---
title: Margin
type: reference
status: draft
tags: [combat, core, resolution]
related: [success, threshold, damage, failure-gradient, dice-hand]
attribution: David Daniel, with Archive as scribe
---

# Margin

Margin is the distance between what you needed and what you got. After counting [[success|Successes]] and comparing them to the [[threshold|Threshold]], the difference is your Margin — the measure of how decisively you succeeded or how badly you failed. In the MRE, meeting the bar is not the same as clearing it. A hit with Margin 0 barely connects. A hit with Margin 4 is a statement. And a miss at Margin −5 is a catastrophe that feeds the [[entropy-pool|Entropy Pool]] and darkens the battlefield for everyone.

---

## The Formula

> **Margin = Successes − Threshold**

- **Positive Margin** (Successes > Threshold): The action succeeds. Margin becomes base [[damage|Damage]] for attacks, or degree of success for [[scene-action|Scene Actions]] and skill checks.
- **Margin 0** (Successes = Threshold): The action barely succeeds. For attacks, this produces no base damage from Margin alone — but [[damage|Effect Tag bonuses]] still apply, and [[damage|basic attacks]] always deal a minimum of 1 damage regardless.
- **Negative Margin** (Successes < Threshold): The action fails. The magnitude of the negative Margin determines the tier of the [[failure-gradient|Failure Gradient]] — Soft (−1 to −2), Hard (−3 to −4), or Catastrophic (−5 or worse).

---

## Margin as Damage

In combat, positive Margin is the base layer of the [[damage|Damage formula]]:

> **Damage = Margin + Effect Tag Bonuses − Damage Reduction**

A high Margin means a clean hit — the attack connected decisively and the base damage reflects it. [[damage|Effect Tags]] (like the Damage tag) add flat bonuses on top, and [[damage-reduction|Damage Reduction]] subtracts from the total. But Margin is the foundation. A character who consistently produces high Margins is a character whose [[dice-hand|Dice Hand]] is outperforming the target's Defense — and that gap tends to widen as the [[entropic-cap|Entropic Cap]] degrades the losing side's options.

---

## Margin as Consequence

Negative Margin is not a blank. It is fuel for the [[failure-gradient|Failure Gradient]]:

| Negative Margin | Tier | Consequence |
|:---------------:|:-----|:------------|
| −1 to −2 | Soft Failure | Action fails, minimal consequence |
| −3 to −4 | Hard Failure | Action fails, creates a complication |
| −5 or worse | Catastrophic Failure | Action fails spectacularly, feeds the [[entropy-pool|Entropy Pool]] |

The worse the miss, the more the world pushes back. This is not symmetrical with positive Margin — a hit at Margin +5 is excellent, but a miss at Margin −5 is actively dangerous.

---

## You Died Variant

> **You Died sub-game:** In You Died, Margin is calculated identically — chip-draw successes minus Threshold. Positive Margin feeds into chip-based damage, and negative Margin triggers the same three-tier Failure Gradient.

---

## See Also

- [[success|Success]] — a die result of 5 or 6
- [[threshold|Threshold]] — the number that defines the boundary
- [[damage|Damage]] — what positive Margin produces in combat
- [[failure-gradient|Failure Gradient]] — what negative Margin produces
- [[entropy-pool|Entropy Pool]] — the Judge resource fed by Catastrophic Failures

---

*David Daniel, with Archive as scribe*
