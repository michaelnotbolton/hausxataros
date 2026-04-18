---
title: Damage
type: reference
status: draft
tags: [combat, core, resolution]
related: [pool, margin, threshold, entropic-cap, gate-state, damage-reduction, specificity-modifier]
attribution: David Daniel, with Archive as scribe
---

# Damage

Damage is what makes combat consequential. It is the reduction of a [[pool|Pool]] — the subtraction of capacity from a character's body, mind, or identity. In the MRE, damage does not merely count down a health bar. It degrades capability. Every point of Physical damage shrinks the Physical [[dice-hand|Dice Hand]] through the [[entropic-cap|Entropic Cap]], making the injured character simultaneously more vulnerable, slower, and weaker. Damage is not a cost paid at the end. It is a compounding tax levied on every decision that follows.

---

## The Damage Formula

> **Damage = Margin + Effect Tag Bonuses − Damage Reduction**

- **[[margin|Margin]]** forms the base. A hit that barely lands (Margin 0) deals no base damage from Margin alone.
- **Effect Tag Bonuses** add flat damage per rank. The Damage tag adds +2 per rank (Rank 1 = +2, Rank 2 = +4, Rank 3 = +6).
- **[[damage-reduction|Damage Reduction (DR)]]** subtracts flat damage. Each rank removes 2 damage (Rank 1 = −2, Rank 2 = −4, Rank 3 = −6). DR cannot reduce damage below 0.

**Basic attacks** (no Power, no Effect Tags) always deal a minimum of 1 damage regardless of Margin. Even a grazing punch leaves a mark.

---

## The Specificity Modifier

If the Power carries a [[keyword|Keyword]] (an elemental type):

- **Typed offensive effects** multiply at **2:1** — the Damage tag's output doubles. Damage Rank 2 becomes +8 instead of +4.
- **Typed defensive effects** multiply at **1.5:1** — DR and Shield tags operate at 150% value.
- **Generic (no Keyword)** operates at **1:1** — lower output, but uncounterable.

Then apply the [[hexagon-circuit|Hexagon]] and [[triangle-circuit|Triangle Circuit]] matchups:

| Matchup | Final Damage Multiplier |
|:--------|:-----------------------:|
| Advantaged element | × 1.5 |
| Neutral | × 1.0 |
| Disadvantaged element | × 0.5 |

The full swing between best case (typed, 2:1, advantaged) and worst case (typed, 2:1, disadvantaged) is **3:1**. This is why typing matters. This is why information matters.

---

## Where Damage Goes

Damage is always applied to a specific [[pool|Pool]] — Physical, Mental, or Social — determined by the type of action:

- A sword strike targets Physical Pool.
- A psychic assault targets Mental Pool.
- A devastating insult targets Social Pool.

All three are mechanically equivalent. Social damage at zero is scene removal, the same as Physical damage at zero. The character who just lost their Social Pool is standing, awake, and destroyed.

---

## Damage as Fuel

The MRE's signature mechanic inverts the pain: [[spontaneous-evolution|Spontaneous Evolution]] converts damage into growth. During the [[cleanup-phase|Cleanup Phase]], every point of damage taken that Beat generates a d6 roll. Each 6 produces 1 XP, immediately available for the next [[planning-phase|Planning Phase]]. The character who takes the most punishment gains the most potential — though the [[entropic-cap|Entropic Cap]] ensures they pay for it in capability.

---

## You Died Variant

> **You Died sub-game:** In You Died, damage reduces chip pools rather than numeric Pool values. The Specificity Modifier and type advantage multipliers apply identically. Chip-based damage triggers the same Entropic Cap logic — fewer chips mean fewer resources for the next Beat.

---

## See Also

- [[margin|Margin]] — base damage from excess successes
- [[threshold|Threshold]] — the line between hit and miss
- [[pool|Pool]] — what gets reduced
- [[entropic-cap|Entropic Cap]] — why damage compounds
- [[gate-state|Gate State]] — what happens when a Pool hits zero
- [[damage-reduction|Damage Reduction]] — flat subtraction from incoming damage
- [[specificity-modifier|Specificity Modifier]] — the 2:1 / 1.5:1 / 1:1 typing multiplier
- [[spontaneous-evolution|Spontaneous Evolution]] — damage as fuel for mid-combat growth

---

*David Daniel, with Archive as scribe*
