---
title: Damage Reduction
type: reference
status: draft
tags: [combat, core, power]
related: [damage, effect-tag, specificity-modifier, keyword, margin]
attribution: David Daniel, with Archive as scribe
---

# Damage Reduction

Damage Reduction (DR) is the flat subtraction that stands between an incoming hit and your [[pool|Pool]]. A defensive [[effect-tag|Effect Tag]], DR removes a fixed amount of [[damage|Damage]] from every attack that connects — after [[margin|Margin]] is calculated, after offensive Effect Tag bonuses are added, but before the total is applied to the Pool. Each rank of DR removes 2 damage. It cannot reduce damage below 0. DR is not flashy. It is the armor that grinds down the enemy's output, turning devastating blows into manageable ones and grazing hits into nothing.

---

## The Math

| DR Rank | Damage Subtracted |
|:-------:|:-----------------:|
| 1 | −2 |
| 2 | −4 |
| 3 | −6 |

DR is applied in the [[damage|Damage formula]]:

> **Total Damage = Margin + Effect Tag Bonuses − DR**

A hit with Margin 2 and Damage Tag Rank 2 (+4) deals 6 base damage. Against DR Rank 2 (−4), only 2 damage reaches the Pool.

---

## Typed DR

When DR carries a [[keyword|Keyword]], the [[specificity-modifier|Specificity Modifier]] applies at **1.5:1** for defensive effects:

| DR Rank | Generic (1:1) | Typed (1.5:1) |
|:-------:|:-------------:|:-------------:|
| 1 | −2 | −3 |
| 2 | −4 | −6 |
| 3 | −6 | −9 |

Typed DR is stronger but subject to type matchup vulnerabilities. An attacker with an advantaged element can reduce the DR's effectiveness; an attacker with a disadvantaged element hits even harder against it. Generic DR is weaker but applies equally against everything.

---

## You Died Variant

> **You Died sub-game:** In You Died, DR subtracts flat chip values from incoming damage using the same rank-to-reduction table. The Specificity Modifier and type matchup interactions apply identically.

---

## See Also

- [[damage|Damage]] — the formula DR modifies
- [[effect-tag|Effect Tag]] — the category DR belongs to
- [[specificity-modifier|Specificity Modifier]] — the 1.5:1 typed defensive multiplier
- [[keyword|Keyword]] — the type label that activates the multiplier
- [[margin|Margin]] — the base damage DR subtracts from

---

*David Daniel, with Archive as scribe*
