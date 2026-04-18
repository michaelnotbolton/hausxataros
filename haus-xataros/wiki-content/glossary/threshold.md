---
title: Threshold
type: reference
status: draft
tags: [combat, core, resolution]
related: [dice-hand, allocation-phase, margin, damage, defense-dice, success]
attribution: David Daniel, with Archive as scribe
---

# Threshold

Every action in the MRE meets a number. Not a target in the dramatic sense — a wall. The Threshold is the count of successes your roll must meet or exceed before anything you intended actually happens. Fall short and the action fails. Meet it exactly and you barely succeed. Exceed it and the excess — the [[margin|Margin]] — becomes the force of your success. In combat, Margin becomes damage. The Threshold is the line between intention and impact.

---

## The Rule

> **Threshold = 1 + target's Defense Successes**

When a character is attacked, their Defense dice (allocated during the [[allocation-phase|Allocation Phase]]) are rolled. Each die showing 5 or 6 is one [[success|Success]]. Those successes, plus a base of 1, form the Threshold the attacker must overcome.

A target with 0 Defense dice still has a base Threshold of 1. Nothing is free — even an undefended target requires a minimal degree of competence to hit.

---

## For Attacks

1. The attacker rolls their Action dice. Count successes (5 or 6 on each d6).
2. The defender rolls their Defense dice. Count successes.
3. Threshold = 1 + defender's successes.
4. If attacker's successes ≥ Threshold → hit. If not → miss (see [[failure-gradient|Failure Gradient]]).
5. [[margin|Margin]] = attacker's successes − Threshold.

**Example.** Attacker rolls 8 Action dice, gets 4 successes. Defender allocated 5 Defense dice, rolls 2 successes. Threshold = 1 + 2 = 3. Attacker's 4 successes exceed the Threshold of 3 → hit with Margin 1.

---

## For Skill Checks

Outside of combat, the Judge sets a Threshold based on difficulty:

| Difficulty | Threshold |
|:-----------|:---------:|
| Trivial | Automatic — no roll |
| Easy | 1 |
| Moderate | 2 |
| Hard | 3 |
| Extreme | 4+ |

The same success/margin math applies. A character who exceeds a Moderate Threshold by 2 (Margin 2) achieves a stronger result than one who barely meets it (Margin 0).

---

## The Allocation Tradeoff

Because Defense dice come from the same [[dice-hand|Dice Hand]] as [[momentum|Momentum]] and Action dice, every die allocated to Defense is a die not available for speed or offense. A high Threshold makes you harder to hit — but it means you allocated fewer dice to Momentum (slower, no Tempo or Flashstep) and fewer to Action (weaker attacks).

The [[entropic-cap|Entropic Cap]] compounds this: as your [[pool|Pool]] shrinks from damage, your total Dice Hand shrinks, which means fewer dice available for Defense even if you allocate the same *proportion*. A Defense allocation that felt comfortable at Pool 30 becomes dangerously thin at Pool 15.

---

## Stat-Capped Thresholds

A subtlety worth noting: Defense dice can only produce successes, and the number of Defense dice is constrained by the Dice Hand, which is constrained by the Stat. A character with a Stat of 1 in a domain has a maximum Pool of 12 and (at full health) a maximum Dice Hand of 12 — even if they put *every* die into Defense, that's 12 dice producing an average of 4 successes, for a Threshold of about 5. A Stat 5 character at full health can produce much higher Thresholds simply because they have more dice to allocate.

This means dump stats create structural vulnerabilities. A character with Physical 1 has a permanently low ceiling on their Physical Defense Threshold, regardless of how cleverly they allocate.

---

## See Also

- [[margin|Margin]] — what happens when you exceed the Threshold
- [[damage|Damage]] — what Margin becomes in combat
- [[allocation-phase|Allocation Phase]] — where Defense dice get committed
- [[dice-hand|Dice Hand]] — the budget Defense is drawn from
- [[failure-gradient|Failure Gradient]] — what happens when you miss
- [[success|Success]] — a die result of 5 or 6

---

*David Daniel, with Archive as scribe*
