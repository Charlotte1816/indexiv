---
category: "quantum-field-theory"
title: "Quantum Field Theory"
---
## What

>The clue is in the name: it is the quantization of a classical field, the most familiar example of which is the electromagnetic field.
>
>In standard quantum mechanics, we’re taught to take the classical degrees of freedom and promote them to operators acting on a Hilbert space. The rules for quantizing a field are no different. Thus the basic degrees of freedom in quantum field theory are operator valued functions of space and time. This means that we are dealing with an infinite number of degrees of freedom — at least one for every point in space. This infinity will come back to bite on several occasions.
>
>It will turn out that the possible interactions in quantum field theory are governed by a few basic principles: locality, symmetry and renormalization group flow (the decoupling of short distance phenomena from physics at larger scales). These ideas make QFT a very robust framework: given a set of fields there is very often an almost unique way to couple them together.
>
>[@Tong:2016kpv]

As the name suggests, Quantum Field Theory (QFT) is the theory of quantum "fields". This quantization is performed by promoting classical fields to operator-valued functions of spacetime, similar to canonical quantization in quantum mechanics. This implies that there is at least one degree of freedom at every point in space, meaning that the state space has infinite degrees of freedom in that sense. This infinity can be problematic in several situations. The specific choice of the Lagrangian is almost uniquely determined by a few fundamental principles (locality, symmetry, renormalization group, etc.).

## Why

>In classical physics, the primary reason for introducing the concept of the field is to construct laws of Nature that are local. The old laws of Coulomb and Newton involve "action at a distance". This means that the force felt by an electron (or planet) changes immediately if a distant proton (or star) moves. This situation is philosophically unsatisfactory. More importantly, it is also experimentally wrong. The field theories of
Maxwell and Einstein remedy the situation, with all interactions mediated in a local fashion by the field.
>
>The requirement of locality remains a strong motivation for studying field theories in the quantum world. However, there are further reasons for treating the quantum field as fundamental.
>
>[@Tong:2016kpv]

In classical field theory, the reason for introducing fields is to describe physical laws locally. One reason to consider quantum field theory is the desire to perform a similar description in quantum theory.

>Because the combination of quantum mechanics and special relativity
implies that particle number is not conserved.
>
>[@Tong:2016kpv]

Heisenberg's uncertainty principle can be expressed for a region of length $L$ as follows:
$$
\begin{equation}
    \Delta p \cdot L \gtrsim \hbar \label{eq:uncertainty-principle}
\end{equation}
$$
Since momentum and energy are treated on the same footing in relativity, equation \eqref{eq:uncertainty-principle} can be expressed relativistically as:
$$
    \Delta E \cdot L \gtrsim \hbar c
$$
If the size of the region $L$ is smaller than the Compton wavelength $\lambda_{\text{compton}}$, i.e.,
$$
    L \lesssim \frac{\hbar}{mc} \equiv \lambda_{\text{compton}}
$$
then the energy fluctuation $\Delta E$ exceeds the rest energy of two particles, $2mc^2$, allowing us to consider processes where particles are created. Indeed, such processes occur in reality (see [Experiment](#experiment)). This process cannot be described by the Schrödinger equation. In fact, considering a relativistic "Schrödinger equation" leads to problems such as negative probabilities, negative energies, and the breakdown of causality. To resolve these issues, a theory that can describe the creation and annihilation of particles is needed. Such a theory can be constructed by placing fields as the fundamental constituents.

>Because all particles of the same type are the same.
>
>[@Tong:2016kpv]

In quantum theory, particles of the same type cannot be distinguished. This means that the state remains invariant, up to a sign, under the exchange of identical particles. Particles can be classified by this sign, and experimentally, the correspondence with spin values is known:

| Sign | Type (Statistics) | Spin Value |
| :-: | :-: | :-: |
| $+$ | Boson (Bose-Einstein statistics) | Integer |
| $-$ | Fermion (Fermi-Dirac statistics) | Half-integer |

This relationship between statistics and spin can be derived by placing fields as the fundamental constituents.

## When

## Who

## Example

## Experiment

>An extreme demonstration of particle creation is shown in the picture, which comes from the Relativistic Heavy Ion Collider (RHIC) at Brookhaven, Long Island. This machine crashes gold nuclei together, each containing 197 nucleons. The resulting explosion contains up to 10,000 particles, captured here in all their beauty by the STAR detector.
>
>[@Tong:2016kpv]

A famous experiment regarding particle creation is the one conducted at RHIC. Experimental results show that by colliding gold nuclei containing 197 nucleons, up to 10,000 particles were created.

## Application

>The answer is: almost everything. As I have stressed above, for any relativistic system it is a necessity. But it is also a very useful tool in non-relativistic systems with many particles. Quantum field theory has had a major impact in condensed matter, highenergy physics, cosmology, quantum gravity and pure mathematics. It is literally the language in which the laws of Nature are written.
>
>[@Tong:2016kpv]

Since quantum field theory is a theory that describes quantum systems relativistically, it can be used when one wants to consider such a setup. However, it is actually also useful for describing non-relativistic many-body systems. Furthermore, it has contributed to the development of pure mathematics.

## Remark

## Mathematics

## References

