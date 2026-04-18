---
title: Dice Hand
type: reference
status: draft
tags: [combat, core, allocation]
related: [pool, entropic-cap, stat, skill, momentum, allocation-phase]
attribution: David Daniel, with Archive as scribe
---

# Dice Hand

The Dice Hand is everything you have for a single Beat — every die available for every decision you will make. Attack, defend, pursue speed: all three draw from the same hand. There are no free resources. A die spent on hitting harder is a die you cannot spend on surviving what comes back. The hand is the budget. The budget is the drama.

---

## Assembly

Each Beat, a character assembles their Dice Hand from three sources:

> **Dice Hand = Base Dice + Skill Dice + Equipment Dice**

- **Base Dice** come from the [[stat|Stat]] governing the action. Swinging a sword uses Physical. Hacking a terminal uses Mental. Delivering a closing argument uses Social.
- **Skill Dice** add +2 dice per rank in a relevant [[skill|Skill]]. Melee 2 adds +4 dice to melee attacks. Multiple Skills may apply to a single action (cap: 4 Skills per action).
- **Equipment Dice** come from [[item|Item]] Quality bonuses (+1 to +4 per equipped item). Using an item costs 1 die in [[employment|Employment]] — the net gain from a Q3 weapon is +3 dice (+4 from Quality, −1 from Employment).

---

## The Entropic Cap

> **Your Dice Hand cannot exceed your current Pool value.**

This is the rule that turns damage into desperation. If your Physical [[pool|Pool]] is 24, your Physical Dice Hand caps at 24 — no matter how many Skills and Items you stack. If that Pool has been hammered down to 8, your Dice Hand is 8.

The cap applies per domain. A character with a full Mental Pool and a shattered Physical Pool assembles a full Mental Dice Hand for mental actions but a crippled Physical hand for physical ones. The injury constrains the domain it hit.

See [[entropic-cap|Entropic Cap]] for the full cascading implications — how a reduced hand compresses Momentum, Defense, and Action simultaneously.

---

## The Three-Bucket Division

Once assembled, the entire Dice Hand is divided during the [[allocation-phase|Allocation Phase]] into three allocations:

| Bucket | Purpose |
|:-------|:--------|
| **[[momentum|Momentum]]** | Purchases [[tempo|Tempo]] (priority) and [[flashstep|Flashstep]] (extra actions) |
| **Defense** | Sets the [[threshold|Threshold]] attackers must overcome to hit you |
| **Action** | The dice you actually roll when performing your actions |

All three must receive at least 0 dice. The total must equal the Dice Hand exactly. This division is made secretly, simultaneously with all other combatants, and revealed all at once. Your opponent does not know how you divided your hand until after everyone has committed.

The fundamental tension of the MRE's combat lives here: every die you commit to one bucket is a die unavailable to the other two.

---

## Domain Specificity

The Dice Hand is domain-specific. A character rolling a Physical attack assembles a Physical Dice Hand (Physical Stat + relevant Physical Skills + Equipment), capped by their Physical Pool. A Social attack in the same Beat would assemble a separate Social Dice Hand, capped by their Social Pool.

In practice, most Beats involve one primary domain per character. Characters who split actions across domains (e.g., a Physical attack and a Social defense in the same Beat via [[flashstep|Flashstep]]) assemble separate hands for each domain, each subject to its own Entropic Cap.

---

## You Died Variant

> **You Died sub-game:** In You Died, the Dice Hand is replaced by a chip allocation drawn from domain-specific chip pools. The three-bucket division (speed, defense, action) operates on the same logic with chip costs instead of die counts.

---

## See Also

- [[stat|Stat]] — provides Base Dice
- [[skill|Skill]] — provides Skill Dice (+2 per rank)
- [[pool|Pool]] — the three-domain resource that caps the Dice Hand
- [[entropic-cap|Entropic Cap]] — the rule enforcing the cap
- [[allocation-phase|Allocation Phase]] — when the hand gets divided
- [[momentum|Momentum]] — one of the three buckets
- [[threshold|Threshold]] — what Defense dice produce

---

*David Daniel, with Archive as scribe*
