---
title: Cleanup Phase
type: reference
status: draft
tags: [combat, core, poker-hand-model]
related: [poker-hand-model, resolution-phase, planning-phase, strain, gate-state, spontaneous-evolution]
attribution: David Daniel, with Archive as scribe
---

# Cleanup Phase

The Cleanup Phase is where the bill comes due — Phase 5 of the [[poker-hand-model|Poker-Hand Model]], the consequences phase that closes every Beat. [[Strain|Strain]] is rolled and paid. Cooldowns tick. Temporary effects expire. [[Gate-state|Gate State]] is checked. And [[spontaneous-evolution|Spontaneous Evolution]] transforms the Beat's pain into the next Beat's potential. Nothing that happened during the Resolution Phase is free. The Cleanup Phase is where you learn what it cost.

---

## Processing Order

The Cleanup Phase processes in strict sequence:

**1. Roll Strain.** Every character who used a [[power|Power]] this Beat rolls their Strain dice and applies the total to their designated Strain [[pool|Pool]]. ([[strain|Strain]] formula: [[intensity|Intensity]] − [[restriction|Restriction]] discounts, minimum 1d6.)

**2. Tick cooldowns.** Reduce the remaining cooldown on any cooling-down Powers by 1.

**3. End temporary effects.** Remove any effects whose duration expired this Beat.

**4. Check Gate States.** If any character's Pool has reached 0 (from any source — enemy [[damage|Damage]], [[strain|Strain]], environmental effects), they enter [[gate-state|Gate State]]. Under the current working ruling, this is the first moment Gate State is checked — meaning characters whose Pools hit zero during the [[resolution-phase|Resolution Phase]] complete all their declared actions before removal.

**5. Process Spontaneous Evolution.** For every point of damage each character took this Beat (from all sources, including Strain): roll 1d6 per damage point. Each result of 6 generates 1 [[xp|XP]], banked for the next [[planning-phase|Planning Phase]].

**6. Reset.** The Beat is complete. Return to the Planning Phase for the next Beat.

---

## The Consequences Chain

Steps 1 and 4 interact critically. Strain (Step 1) can push a Pool to zero, triggering Gate State (Step 4). A character who entered the Resolution Phase healthy can exit the Cleanup Phase removed from the scene — killed not by the enemy but by the cost of their own Powers. This is the thermodynamic law in action: if you spent too much, you pay even after the fight is over for the Beat.

Step 5 then converts all that suffering — enemy damage *and* Strain — into XP. The character who took the most punishment and paid the highest Strain cost generates the most growth potential. The Cleanup Phase both punishes and rewards.

---

## You Died Variant

> **You Died sub-game:** In You Died, the Cleanup Phase processes identically using chip pools. Strain subtracts chips, Gate State triggers when a chip pool empties, and Spontaneous Evolution rolls d6 per chip lost. The processing order is unchanged.

---

## See Also

- [[poker-hand-model|Poker-Hand Model]] — the five-phase combat structure
- [[resolution-phase|Resolution Phase]] — Phase 4, which precedes Cleanup
- [[planning-phase|Planning Phase]] — Phase 1, which follows Cleanup in the next Beat
- [[strain|Strain]] — the self-damage rolled at Step 1
- [[gate-state|Gate State]] — the condition checked at Step 4
- [[spontaneous-evolution|Spontaneous Evolution]] — the damage-to-XP conversion at Step 5

---

*David Daniel, with Archive as scribe*
