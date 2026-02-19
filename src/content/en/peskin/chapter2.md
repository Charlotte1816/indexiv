---
category: "peskin"
title: "Chapter 2 Summary"
description: "Summary of Peskin Chapter 2 The Klein-Gordon Field"
---
References: [@Peskin:1995ev]

## 2.1 The Necessity of the Field Viewpoint

Premise: We want to understand physics at very small scales or very large scales.

Why must we learn **Field** Quantization?

* Relativistic wave equations for single particles lead to contradictions.

Reasons why such an approach does not work:

* Einstein's relation $E=mc^2$ allows for particle creation.
* Multi-particle states appear as intermediate states in perturbation theory.
* Transition amplitudes violate causality.

Reasons to learn Quantum Field Theory:

* It naturally handles multi-particle states.
* It can handle transitions between states with different particle numbers.
* It preserves causality by introducing **antiparticles**.
* It can explain the relationship between spin and statistics.
* The theory agrees with experiments with very high precision.

## 2.2 Elements of Classical Field Theory

We review some elements of classical field theory that will be needed later.

### Lagrangian Formalism

Action for a local field theory:
$$
    S = \int L \ dt = \int \mathcal{L}(\phi, \partial_\mu \phi) \ d^4x
$$
The Euler-Lagrange equations are obtained from the principle of least action:
$$
    \partial_\mu \left( \frac{\partial \mathcal{L}}{\partial (\partial_\mu \phi)} \right) - \frac{\partial \mathcal{L}}{\partial \phi} = 0
$$

Formalism and advantages:

* The Lagrangian formalism is suitable for relativistic mechanics.
* The Hamiltonian formalism is suitable for quantization.

### Hamiltonian Formalism

Conjugate momentum (density):
$$
    \pi(\bm{x}) = \frac{\partial \mathcal{L}}{\partial \dot{\phi}(\bm{x})}
$$
Hamiltonian (density):
$$
    \mathcal{H} = \pi \dot{\phi} - \mathcal{L}
$$

<div class="example">

$$
    \mathcal{L} = \frac{1}{2} (\partial_\mu \phi)^2 - \frac{1}{2} m^2 \phi^2
$$
Equation of motion (Klein-Gordon equation; **classical** field equation):
$$
    (\partial^\mu \partial_\mu + m^2) \phi = 0
$$
Hamiltonian:
$$
    H = \int d^3x \ \left[ \frac{1}{2} \pi^2 + \frac{1}{2} (\nabla \phi)^2 + \frac{1}{2} m^2 \phi^2 \right]
$$

</div>

### Noether's Theorem

The relationship between symmetries and conservation laws in classical field theory is summarized in **Noether's Theorem**.

Infinitesimal continuous transformation of the field $\phi$ ($\alpha$ is an infinitesimal parameter):
$$
    \phi(x) \to \phi'(x) = \phi(x) + \alpha\Delta \phi(x)
$$
If this transformation leaves the equations of motion invariant, it is called a **symmetry**. For this, it is sufficient that the Lagrangian is invariant up to a 4-divergence:
$$
    \mathcal{L}(x) \to \mathcal{L}(x) + \alpha \partial_\mu \mathcal{J}^\mu(x)
$$
where $\mathcal{J}^\mu$ is some function.

When such a symmetry exists and the equations of motion are satisfied, the following current conservation law holds:
$$
    \partial_\mu j^\mu(x) = 0 \quad \text{for} \quad j^\mu(x) = \frac{\partial \mathcal{L}}{\partial (\partial_\mu \phi)} \Delta \phi - \mathcal{J}^\mu
$$
Such a conservation law implies that the charge
$$
    Q \coloneqq \int_{\text{all space}} j^0(x) \ d^3x
$$
is constant in time.

<div class="example">

Simplest example:
$$
    \mathcal{L} = \frac{1}{2}(\partial_\mu\phi)^2
$$
The symmetry transformation is
$$
    \phi \to \phi + \alpha \quad (\alpha=\text{const.})
$$
The conserved current is
$$
    j^\mu = \partial^\mu \phi
$$

</div>

<div class="example">

A slightly non-trivial example:
$$
    \mathcal{L} = |\partial_\mu \phi|^2 - m^2 |\phi|^2
$$
Here $\phi$ is a **complex**-valued field, and the equation of motion is the Klein-Gordon equation. The symmetry transformation is
$$
    \phi \to e^{i\alpha} \phi \quad (\alpha=\text{const.})
$$
The conserved current is
$$
    j^\mu = i[(\partial^\mu\phi^*)\phi - \phi^*( \partial^\mu \phi)]
$$

</div>

For an infinitesimal translation
$$
    x^\mu \to x^\mu - a^\mu \quad (a^\mu = \text{const.})
$$
The current is called the **energy-momentum tensor**:
$$
    T^{\mu}{}_{\nu} \coloneqq \frac{\partial \mathcal{L}}{\partial (\partial_\mu \phi)} \partial_\nu \phi - \mathcal{L}\delta^\mu{}_\nu
$$
The charge associated with time translation is the Hamiltonian:
$$
    H = \int T^{00} \ d^3x = \int \mathcal{H} \ d^3x
$$
The charge associated with spatial translation is the momentum (distinct from canonical momentum):
$$
    P^i = \int T^{0i} \ d^3x
$$
This is interpreted as the (physical) momentum carried by the field.

## 2.3 The Klein-Gordon Field as Harmonic Oscillators

We begin the discussion with a formal treatment of the simplest real Klein-Gordon field.

### Quantization of the Field

Idea: Start with classical field theory and "quantize" it. This means promoting dynamical variables to operators that obey canonical commutation relations (CCR).

<div class="recall">

CCR in discrete systems:
$$
    [q_i, p_j] = i\delta_{ij}; \quad [q_i, q_j] = [p_i, p_j] = 0
$$

</div>

Natural generalization (Schrödinger picture):
$$
    [\phi(\bm{x}), \pi(\bm{y})] = i\delta^{(3)}(\bm{x}-\bm{y}); \quad [\phi(\bm{x}), \phi(\bm{y})] = [\pi(\bm{x}), \pi(\bm{y})] = 0
$$
Note that since $\pi(\bm{x})$ is a conjugate momentum **density**, a Dirac delta appears instead of a Kronecker delta.

### Solving the Theory

Next, we "solve" the theory; find the eigenvalues and eigenstates of the Hamiltonian.

Strategy: Express the Klein-Gordon equation in Fourier space.

Fourier transforming the classical Klein-Gordon field (if $\phi^*(\bm{p})= \phi(-\bm{p})$, then $\phi(\bm{x})$ is real):
$$
    \phi(\bm{x},t) = \int \frac{d^3p}{(2\pi)^3} e^{i\bm{p}\cdot\bm{x}} \phi(\bm{p},t)
$$
The equation of motion becomes that of a simple harmonic oscillator with frequency $\omega_{\bm{p}} = \sqrt{|\bm{p}|^2 + m^2}$:
$$
    \left[\frac{\partial^2}{\partial t^2} + \omega_p^2 \right] \phi(\bm{p},t) = 0
$$
This system is easily solved.

<div class="recall">

Simple Harmonic Oscillator (SHO) system:
$$
    H_{\text{SHO}} = \frac{1}{2}p^2 + \frac{1}{2}\omega^2 \phi^2
$$
To find eigenvalues, express $\phi$ and $p$ in terms of ladder operators:
$$
    \phi = \frac{1}{\sqrt{2\omega}}(a+a^\dagger), \quad p = -i\sqrt{\frac{\omega}{2}}(a - a^\dagger)
$$
The CCR are:
$$
    [a, a^\dagger] = 1; \quad [a, a] = [a^\dagger, a^\dagger] = 0
$$
The Hamiltonian is:
$$
    H_{\text{SHO}} = \omega \left(a^\dagger a + \frac{1}{2}\right)
$$
The state $\ket{0}$ such that $a\ket{0}=0$ is an eigenstate with eigenvalue $\omega/2$. Furthermore,
$$
    [H_{\text{SHO}}, a^\dagger] = \omega a^\dagger,\quad [H_{\text{SHO}}, a] = -\omega a
$$
Thus, the states $(a^\dagger)^n \ket{0}$ are eigenstates with eigenvalues $(n+1/2)\omega$. These completely exhaust the spectrum.

</div>

Similarly,
$$
\begin{align*}
    \phi(\bm{x}) &= \int\frac{d^3p}{(2\pi)^3} \frac{1}{\sqrt{2\omega_{\bm{p}}}} \left(a_{\bm{p}} e^{i\bm{p}\cdot\bm{x}} + a_{\bm{p}}^\dagger e^{-i\bm{p}\cdot\bm{x}}\right)
    \\
    \pi(\bm{x}) &= \int\frac{d^3p}{(2\pi)^3} (-i)\sqrt{\frac{\omega_{\bm{p}}}{2}} \left(a_{\bm{p}} e^{i\bm{p}\cdot\bm{x}} - a_{\bm{p}}^\dagger e^{-i\bm{p}\cdot\bm{x}}\right)
\end{align*}
$$
The CCR are:
$$
    [a_{\bm{p}}, a_{\bm{p}'}^\dagger] = (2\pi)^{3} \delta^{(3)}(\bm{p}-\bm{p}'); \quad [a_{\bm{p}}, a_{\bm{p}'}] = [a_{\bm{p}}^\dagger, a_{\bm{p}'}^\dagger] = 0
$$
The Hamiltonian is:
$$
    H = \int \frac{d^3p}{(2\pi)^3} \omega_{\bm{p}} \left(a_{\bm{p}}^\dagger a_{\bm{p}} + \frac{1}{2}[a_{\bm{p}},a_{\bm{p}}^{\dagger}]\right)
$$
The second term is an infinite c-number, but since experiments only measure energy **differences**, this term can be ignored. However, it might cause problems at a deeper level (see Epilogue). Furthermore,
$$
    [H, a_{\bm{p}}^\dagger] = \omega_{\bm{p}} a_{\bm{p}}^\dagger, \quad [H, a_{\bm{p}}] = -\omega_{\bm{p}} a_{\bm{p}}
$$
Thus, the states $(a_{\bm{p}}^\dagger)^n \ket{0}$ are eigenstates with eigenvalues $(n+1/2)\omega_{\bm{p}}$. These completely exhaust the spectrum.

### Particles and Statistics

The momentum is:
$$
    \bm{P} = -\int d^3x \ \pi(\bm{x}) \nabla \phi(\bm{x}) = \int \frac{d^3p}{(2\pi)^3} \bm{p} a_{\bm{p}}^\dagger a_{\bm{p}}
$$
Thus, the operator $a_{\bm{p}}^\dagger$ creates a state with momentum $\bm{p}$ and energy $\omega_{\bm{p}}$. Similarly, the state $a_{\bm{p}}^\dagger a_{\bm{q}}^\dagger\cdots$ creates a state with momentum $\bm{p}+\bm{q}+\cdots$ and energy $\omega_{\bm{p}} + \omega_{\bm{q}} + \cdots$.

Since these states have a discrete spectrum with appropriate relativistic energy-momentum relations, we interpret these states as **particles**. Note that "particles" do not necessarily have to be spatially localized. Henceforth, we will write $\omega_{\bm{p}}$ as $E_{\bm{p}}$ for the particle energy.

The statistics of the particles can also be determined. For a two-particle state, the CCR implies:
$$
    a_{\bm{p}}^\dagger a_{\bm{q}}^\dagger \ket{0} = a_{\bm{q}}^\dagger a_{\bm{p}}^\dagger \ket{0}
$$
Furthermore, a single mode with momentum $\bm{p}$ can contain an arbitrary number of particles. Therefore, Klein-Gordon particles obey **Bose-Einstein statistics**.

### Normalization

It is natural to normalize the vacuum such that $\braket{0|0} =1$.

It is preferable to normalize the one-particle states as:
$$
    \ket{\bm{p}} = \sqrt{2E_{\bm{p}}} a_{\bm{p}}^\dagger \ket{0}
$$
This is because the normalization condition
$$
    \braket{\bm{p}|\bm{q}} = 2E_{\bm{p}} (2\pi)^3 \delta^{(3)}(\bm{p}-\bm{q})
$$
is Lorentz invariant. The factor of $2$ is just for convenience.

A Lorentz transformation $\Lambda$ is represented by a unitary operator $U(\Lambda)$ on the Hilbert space. In our normalization:
$$
    U(\Lambda) \ket{\bm{p}} = \ket{\Lambda \bm{p}}
$$

If this normalization is used, we need to insert $2E_{\bm{p}}$ elsewhere. For instance, in the completeness relation:
$$
    (\bm{1})_{\text{1-particle}} = \int \frac{d^3p}{(2\pi)^3}  \ket{\bm{p}}\frac{1}{2E_{\bm{p}}}\bra{\bm{p}}
$$
This is the identity operator for the subspace of one-particle states and is zero for other subspaces. Integrals of this form frequently appear as Lorentz-invariant integrals over 3-momentum.

Moreover, such an integral can be written as:
$$
    \int \frac{d^3p}{(2\pi)^3} \frac{1}{2E_{\bm{p}}} = \left.\int \frac{d^4p}{(2\pi)^4} (2\pi) \delta(p^2 - m^2)\right|_{p^0>0}
$$
This can be viewed as an integral over the hypersurface $p^2=m^2$ on the $p^0>0$ branch in 4-momentum space.

### Position Eigenstates

Consider the interpretation of the state $\phi(\bm{x})\ket{0}$.
$$
    \phi(\bm{x})\ket{0} = \int \frac{d^3p}{(2\pi)^3} \frac{1}{\sqrt{2E_{\bm{p}}}} e^{i\bm{p}\cdot\bm{x}}\ket{\bm{p}}
$$
This is a linear combination of one-particle states with definite momentum. Apart from the factor $1/\sqrt{2E_{\bm{p}}}$, this is the same as the Fourier transform of the position eigenstate $\ket{\bm{x}}$ in quantum mechanics. By the way, the factor $1/\sqrt{2E_{\bm{p}}}$ is essentially constant for small non-relativistic momenta. Therefore, we interpret the operator $\phi(\bm{x})$ as an operator that acts on the vacuum to **create a particle at position $\bm{x}$**.

Based on this interpretation, the position representation of the one-particle state $\ket{\bm{p}}$ is:
$$
    \braket{0|\phi(\bm{x})|\bm{p}} = e^{i\bm{p}\cdot\bm{x}}
$$
This matches the wavefunction in non-relativistic quantum mechanics.

## 2.4 The Klein-Gordon Field in Space-Time

## References
