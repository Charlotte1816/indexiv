---
category: "peskin"
title: "Chapter 2 Summary"
description: "Summary of Peskin Chapter 2 The Klein-Gordon Field"
---
References: [@Peskin:1995ev]

<div class="memo">

I want to make the summary shorter.

</div>

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

We switch to the **Heisenberg picture**, where it is easier to discuss time-dependent quantities and causality.

Heisenberg picture fields (similarly for $\pi(x)$):
$$
    \phi(x) = \phi(\bm{x},t) = e^{iHt} \phi(\bm{x}) e^{-iHt}
$$
The Heisenberg equation of motion
$$
    i\frac{\partial}{\partial t} \mathcal{O} = [\mathcal{O}, H]
$$
gives the time dependence of $\phi$ and $\pi$:
$$
    i\frac{\partial}{\partial t}\phi(\bm{x},t) = i\pi(\bm{x},t),\quad i\frac{\partial}{\partial t}\pi(\bm{x},t) = -i(-\nabla^2 + m^2)\phi(\bm{x},t)
$$
Combining these yields the Klein-Gordon equation:
$$
    (\partial^\mu \partial_\mu + m^2) \phi(x) = 0
$$

Expressing $\phi(x)$ and $\pi(x)$ in terms of creation and annihilation operators clarifies their time dependence. First, note the identity:
$$
    e^{iHt} a_{\bm{p}} e^{-iHt} = a_{\bm{p}}e^{-iE_{\bm{p}}t}, \quad e^{iHt} a_{\bm{p}}^\dagger e^{-iHt} = a_{\bm{p}}^\dagger e^{iE_{\bm{p}}t}
$$
Using this, we get:
$$
\begin{align*}
    \phi(\bm{x},t) &= \left.\int\frac{d^3p}{(2\pi)^3}\frac{1}{\sqrt{2E_{\bm{p}}}}(a_{\bm{p}}e^{-ip\cdot x} + a_{\bm{p}}^\dagger e^{ip\cdot x})\right|_{p^0=E_{\bm{p}}};
    \\
    \pi(\bm{x},t) &= \frac{\partial}{\partial t}\phi(\bm{x},t)
\end{align*}
$$
Note that the creation and annihilation operators here are in the Schrödinger picture (time-independent).

We can also relate $\phi(x)$ to $\phi(0)$ using $\bm{P}$ instead of just $H$. Note the identity:
$$
    e^{-i\bm{P}\cdot\bm{x}}a_{\bm{p}}e^{i\bm{P}\cdot\bm{x}} = a_{\bm{p}}e^{i\bm{p}\cdot\bm{x}}, \quad e^{-i\bm{P}\cdot\bm{x}}a_{\bm{p}}^\dagger e^{i\bm{P}\cdot\bm{x}} = a_{\bm{p}}^\dagger e^{-i\bm{p}\cdot\bm{x}}
$$
Using this leads to:
$$
    \phi(x) = e^{iP\cdot x}\phi(0)e^{-iP\cdot x},\quad P^\mu = (H, \bm{P})
$$

The expansion of $\phi(x)$ and $\pi(x)$ makes the wave-particle duality of the quantum field $\phi(x)$ explicit.

* On one hand, $\phi(x)$ creates a particle at position $x$.

* On the other hand, $\phi(x)$ is a linear combination of solutions to the Klein-Gordon equation ($e^{-ip\cdot x}, e^{ip\cdot x}$).

Both signs of exponential time dependence appear. If we viewed the Klein-Gordon equation as a wave equation for a wavefunction, these would correspond to positive and negative energy states. However, we view the Klein-Gordon equation as a field equation. In this view, **positive frequency** modes have coefficients that annihilate particles in that single-particle wavefunction, and **negative frequency** modes have coefficients that create particles in that single-particle wavefunction. This resolves the negative energy problem.

### Causality

The amplitude for a particle to propagate from $y$ to $x$ is $D(x-y) = \braket{0|\phi(x)\phi(y)|0}$. The surviving term is:
$$
    D(x-y) = \int\frac{d^3p}{(2\pi)^3}\frac{1}{2E_{\bm{p}}} e^{-ip\cdot(x-y)}
$$
As seen before, this integral is Lorentz invariant.

* If $x-y$ is purely timelike ($x^0-y^0=t, \bm{x}-\bm{y}=0$):
    $$
        D(x-y) \underset{t\to\infty}{\sim} e^{-imt}
    $$
* If $x-y$ is purely spacelike ($x^0-y^0=0, \bm{x}-\bm{y}=\bm{r}$):
    $$
        D(x-y) \underset{r\to\infty}{\sim} e^{-mr} \ne 0
    $$

To discuss causality properly, we should not ask whether particles can propagate over spacelike intervals, but whether a **measurement** performed at one point affects a measurement at another spacelike separated point.

The simplest observable is $\phi(x)$, so we consider the commutator $[\phi(x), \phi(y)]$. If this vanishes for spacelike separated points, measurements at these points do not affect each other (they are simultaneously observable). Since the commutator involving any function of $\phi(x)$ would also vanish, causality is preserved generally.

Calculation yields:
$$
    [\phi(x), \phi(y)] = D(x-y) - D(y-x)
$$

* When $(x-y)^2 < 0$ (spacelike), we can Lorentz transform the second term into the first, so the commutator vanishes.

* When $(x-y)^2 > 0$ (timelike), no such continuous Lorentz transformation exists, so the commutator is non-zero.

Thus, in Klein-Gordon theory, measurements at two spacelike separated points do not affect each other.

To understand the mechanism properly, consider a **complex** Klein-Gordon field, which has distinct particle and antiparticle excitations. $\phi(x)$ being complex allows for a conserved charge. Upon quantization:

* $\phi(x)$ annihilates negatively charged particles and creates positively charged particles.

* $\phi^\dagger(x)$ creates negatively charged particles and annihilates positively charged particles.

Again, the commutator $[\phi(x), \phi^\dagger(y)]$ has non-zero contributions, so for causality to hold, it must vanish for spacelike separations. This has a similar spacetime interpretation to the real case but involves charge. One term represents the propagation of a negatively charged particle from $y$ to $x$, and the other represents the propagation of a positively charged particle from $x$ to $y$. For these to cancel, both particles must exist and have the same mass. Thus, causality requires the existence of antiparticles with the same mass and opposite quantum numbers (charge). In the real Klein-Gordon case, the particle is its own antiparticle.

### Klein-Gordon Propagator

Since the commutator is a c-number, $[\phi(x), \phi(y)] = \braket{0|[\phi(x), \phi(y)]|0}$. Assuming $x^0>y^0$:
$$
    \braket{0|[\phi(x), \phi(y)]|0} \underset{x^0>y^0}{=} \int\frac{d^3p}{(2\pi)^3}\int\frac{dp^0}{2\pi i}\frac{-1}{p^2-m^2}e^{-ip\cdot(x-y)}
$$
If $x^0<y^0$, it vanishes. We define the **retarded** Green's function:
$$
    D_R(x-y) \coloneqq \theta(x^0-y^0)\braket{0|[\phi(x),\phi(y)]|0}
$$
This satisfies the Green's function equation:
$$
    (\partial^\mu \partial_\mu + m^2) D_R(x-y) = -i\delta^{(4)}(x-y)
$$

The integral representation can be found via Fourier transform:
$$
    D_R(x-y) = \int\frac{d^4p}{(2\pi)^4} \frac{-i}{p^2 - m^2} e^{-ip\cdot(x-y)}
$$
The $p^0$ integral can be evaluated using different contours around the poles. Specifically, the contour passing **under** the pole $p^0=-E_{\bm{p}}$ and **over** the pole $p^0=E_{\bm{p}}$ is very useful. This is called the **Feynman prescription**. A convenient mnemonic is to shift the poles slightly instead of the contour:
$$
    D_F(x-y) = \int\frac{d^4p}{(2\pi)^4} \frac{-i}{p^2 - m^2 + i\epsilon} e^{-ip\cdot(x-y)}
$$
Evaluating this yields:
$$
    D_F(x-y) = \begin{cases}
        D(x-y) & x^0>y^0
        \\
        D(y-x) & x^0<y^0
    \end{cases} \eqqcolon \braket{0|T\phi(x)\phi(y)|0}
$$
$T$ is the time-ordering symbol, placing operators with later times to the left. $D_F$ is a Green's function for the Klein-Gordon operator and is called the **Feynman propagator**.

We are still far from performing real calculations. The discussion so far has been on the **free** Klein-Gordon theory, where the equations are linear and non-interacting. Particles live in isolated modes. However, the formalism developed here is crucial as it forms the basis for perturbation theory in interacting theories.

### Particle Creation by a Classical Source

There is a solvable interaction: a Klein-Gordon field coupled to a known external classical source $j(x)$. The equation of motion is:
$$
    (\partial^\mu \partial_\mu + m^2) \phi(x) = j(x)
$$
What happens if we start from the vacuum, turn $j(x)$ on, and then turn it off?

The Lagrangian is:
$$
    \mathcal{L} = \frac{1}{2}(\partial_\mu \phi)^2 - \frac{1}{2} m^2 \phi^2 + j(x)\phi(x)
$$
Before $j(x)$ turns on:
$$
    \phi_0(x) = \int\frac{d^3p}{(2\pi)^3}\frac{1}{\sqrt{2E_{\bm{p}}}}(a_{\bm{p}}e^{-ip\cdot x} + a_{\bm{p}}^\dagger e^{ip\cdot x})
$$
Using the retarded Green's function, the solution is:
$$
\begin{align*}
    \phi(x) &= \phi_0(x) + \int d^4y \ D_R(x-y) j(y)
    \\
    &= \phi_0(x) + i\int d^4y \int \frac{d^3p}{(2\pi)^3}\frac{1}{2E_{\bm{p}}}\theta(x^0-y^0) \left(e^{-ip\cdot(x-y)} - e^{ip\cdot(x-y)}\right) j(y)
\end{align*}
$$
After the source is off (waiting long enough so $\theta(x^0-y^0)=1$ for all relevant $y$), $\phi(x)$ involves the Fourier transform of $j$:
$$
    \tilde{j}(p) = \int d^4y \ e^{ip\cdot y} j(y)
$$
This is evaluated on-shell ($p^2=m^2$). We find:
$$
    \phi(x) = \int\frac{d^3p}{(2\pi)^3}\frac{1}{\sqrt{2E_{\bm{p}}}}\left\{\left(a_{\bm{p}}+\frac{i}{\sqrt{2E_{\bm{p}}}}\tilde{j}(p)\right)e^{-ip\cdot x}+\text{h.c.}\right\}
$$
The Hamiltonian after the source acts is found by substitution:
$$
    H = \int \frac{d^3p}{(2\pi)^3} E_{\bm{p}} \left(a_{\bm{p}}^\dagger + \frac{-i}{\sqrt{2E_{\bm{p}}}}\tilde{j}^*(p)\right) \left(a_{\bm{p}} + \frac{i}{\sqrt{2E_{\bm{p}}}}\tilde{j}(p)\right)
$$
The energy of the system after the source is off is:
$$
    \braket{0|H|0} = \int \frac{d^3p}{(2\pi)^3}\frac{1}{2}|\tilde{j}(p)|^2
$$
where $\ket{0}$ is the ground state of the free theory. Identifying $|\tilde{j}(p)|^2/2E_{\bm{p}}$ as the probability density for creating a particle in mode $\bm{p}$, the total number of particles created is:
$$  
    \int dN = \int \frac{d^3p}{(2\pi)^3} \frac{|\tilde{j}(p)|^2}{2E_{\bm{p}}}
$$
Only Fourier components of $j(x)$ resonant with the Klein-Gordon wave on the mass shell contribute to particle creation. This relates to Bremsstrahlung (Chapter 6).

## Problems

* 2.1 Classical electromagnetism (source-free) Lagrangian formalism.

* 2.2 Quantization of the complex scalar field theory.

* 2.3 Evaluation of the $D(x-y)$ integral.

## References
