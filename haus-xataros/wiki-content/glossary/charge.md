---
title: Charge
type: reference
status: draft
tags: [combat, core, power, restriction]
related: [time-bands, restriction-bonus, tempo, momentum, allocation-phase, resolution-phase, gate-state]
attribution: David Daniel, with Archive as scribe
---

# Charge

Charge is the Restriction that trades time for power. When a Power carries the Charge tag, its activation is delayed to a later [[time-bands|Time Band]] — pushed down the resolution ladder so it fires after faster actions have already landed. In exchange, Charge grants [[restriction-bonus|Restriction Bonus]] Effect Ranks, making the eventual hit significantly stronger. The deal is transparent and dangerous: everyone at the table sees the windup, and the opponent has every earlier band in the Beat to disrupt, dodge, or destroy the caster before the charged action arrives. Charge is the big swing. The telegraphed haymaker. The speech that takes the whole courtroom scene to build to.

---

## The Charge Ladder

Charge maps directly to Time Bands:

| Charge Level | Time Band | Delay |
|:------------:|:---------:|:------|
| **Charge 0** | General | None — default timing |
| **Charge 1** | ASAP | Slight delay. Resolves after General band. |
| **Charge 2** | End of Beat (EoB) | Major delay. Resolves last in the Beat. |
| **Charge 3** | General (NEXT Beat) | Full Beat delay. Resolves at the default band of the following Beat. |

Each Charge level pushes the action one band further down the ladder and grants additional [[restriction-bonus|Restriction Bonus]] Effect Ranks. The deeper the delay, the larger the bonus — and the wider the window of vulnerability.

---

## How Charge Works in Practice

1. During the [[allocation-phase|Allocation Phase]], the player commits to using a Charged power. The Charge level is baked into the Power's build — it was chosen during Power construction and cannot be changed on the fly.
2. During the [[resolution-phase|Resolution Phase]], the Charged action does not fire at its normal position. It waits, resolving at the Time Band dictated by its Charge level.
3. Every action at a faster band resolves before the Charged action lands. An opponent at General band acts before Charge 1. An opponent at Priority +2 acts *well* before Charge 2.

The vulnerability is structural. A Charge 2 power broadcasts itself: the opponent has Priority +3 through General to respond — stun the caster, move out of range, put up a shield, or simply hit them hard enough to trigger [[gate-state|Gate State]].

---

## Tempo Buyoff

[[Tempo|Tempo]] can erase the timing penalty while preserving the power bonus. Each Tempo purchased moves a Charged action one band faster:

| Starting Position | Tempo Spent | Final Band |
|:-----------------|:-----------:|:-----------|
| Charge 1 (ASAP) | 1 Tempo | General |
| Charge 1 (ASAP) | 2 Tempo | Priority +1 |
| Charge 2 (EoB) | 1 Tempo | ASAP |
| Charge 2 (EoB) | 2 Tempo | General |
| Charge 2 (EoB) | 3 Tempo | Priority +1 |

The Restriction Bonus stays. Only the timing penalty is removed. A character who builds a Charge 2 power with enormous Effect Rank bonuses and then invests [[momentum|Momentum]] into Tempo to fire it at General band is paying twice — once in the Restriction's narrative constraints, once in Momentum dice — but gets the best of both worlds: full power at standard speed.

This is expensive. Each Tempo costs 3 Momentum dice. Pushing a Charge 2 action to General costs 6 Momentum dice in Tempo alone. That is 6 dice not available for [[threshold|Defense]] or Action. The math is punishing by design.

---

## The Restriction Bonus

Charge is a [[restriction-bonus|Restriction]] — it adds Effect Ranks to the Power's budget during construction. The exact bonus per Charge level follows the standard Restriction Bonus formula (see [[restriction-bonus|Restriction Bonus]]). The result: a Charged power has more tags, higher tag ranks, or both compared to an uncharged power of the same [[intensity|Intensity]].

A Charge 2 Damage power doesn't just hit later — it hits *harder*. The extra Effect Ranks translate to higher Damage tag ranks, which translate to more flat damage per hit, which can be further multiplied by the [[specificity-modifier|Specificity Modifier]] and type advantage. The delay is the price. The price is real.

---

## Strategic Notes

**Charge users are predictable — and that's the point.** The MRE's design philosophy is [[creative-reciprocity|Creative Reciprocity]]: specificity produces both power and vulnerability. Charge is the purest expression of this. The vulnerability (everyone knows what's coming and has time to react) *is* the condition that justifies the power (the hit, when it lands, is devastating).

**Tempo buyoff is the luxury play.** Characters with large [[dice-hand|Dice Hands]] and high Momentum allocations can afford to push Charged powers into faster bands. Characters with small hands cannot — they accept the delay or they don't use Charged powers. This creates a natural class of "patient power" characters who build around Charge, accepting the risk in exchange for knockout potential.

**Charge interacts critically with Gate State timing.** Under the current working ruling (Gate State checked at Cleanup, not during Resolution), a character whose Pool reaches 0 before their Charged action fires still gets to complete that action. This makes Charge-based builds viable for "glass cannon" strategies: accept the hit, survive long enough to fire, and hope the charged blow is decisive. If the ruling were reversed, Charged powers would become much more vulnerable. (See [[open-questions/gate-state-timing|Gate State Timing]].)

---

## You Died Variant

> **You Died sub-game:** In You Died, Charge operates identically — delaying card-based actions to later Time Bands in exchange for enhanced effects. Chip costs replace Momentum dice for Tempo buyoff. Certain Geist trigger cards can provide free Charge reduction.

---

## Open Questions

> **⚠️ Source Note:** The Charge-to-Time Band mapping in this article reflects both the Chapter 5 Draft and the Glossary, which agree on the core mapping (Charge 0/1/2/3 → Immediate/ASAP/EoB/Next Beat). The wiki-era Priority tier system (+1, +2, +3 above General) extends the *upward* end of the ladder but does not change Charge's downward mapping. The Tempo buyoff rate (1 Tempo per band step) is provisional.

---

## See Also

- [[time-bands|Time Bands]] — the ladder Charge pushes you down
- [[tempo|Tempo]] — the tool that buys off Charge's delay
- [[momentum|Momentum]] — the sub-pool that funds Tempo
- [[restriction-bonus|Restriction Bonus]] — what Charge grants in exchange for delay
- [[gate-state|Gate State]] — the threat that makes Charge vulnerable
- [[open-questions/gate-state-timing|Gate State Timing]] — the ruling that determines Charge's risk profile
- [[allocation-phase|Allocation Phase]] — when Charged powers are committed

---

*David Daniel, with Archive as scribe*
