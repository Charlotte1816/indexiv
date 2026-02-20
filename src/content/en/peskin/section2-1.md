---
category: "peskin"
title: "Section 2.1 Complete Guide"
description: "Complete guide for Peskin Section 2.1 The Necessity of the Field Viewpoint"
---
References: [@Peskin:1995ev]

## p.13 Why the Single-Particle Relativistic Wave Equation Fails

>Since this discussion usually takes place near the end of a graduate-level quantum mechanics course, we will not repeat it here.

I will provide only a brief explanation here. The following is based on Section 1.1 of [@Srednicki:2007qs].

Premise: We want to combine quantum mechanics and (special) relativity.

Naively consider the Schrödinger equation + energy-momentum relation:
$$
    i\hbar\frac{\partial}{\partial t}\psi(\bm{x},t)=\sqrt{-\hbar^2c^2\nabla^2+m^2c^4}\psi(\bm{x},t)
$$

Problems:

* Asymmetric treatment of space and time.

* Expanding the square root in terms of $\nabla$ makes it non-local.

Therefore, we consider the **Klein-Gordon equation**:
$$
    -\hbar^2\frac{\partial^2}{\partial t^2}\psi(\bm{x},t)+(-\hbar^2c^2\nabla^2+m^2c^4)\psi(\bm{x},t)=0
$$

Problems:

* Since the time derivative is second order, probability conservation is not guaranteed.

Therefore, (especially in the case of electrons) we consider the **Dirac equation**:
$$
    i\hbar\frac{\partial}{\partial t}\psi_a(\bm{x})=\left(-i\hbar c(\alpha^j)_{ab}\frac{\partial}{\partial x^j}+mc^2(\beta)_{ab}\right)\psi_b(\bm{x})
$$
Here, $j=1,2,3$ and $a,b=1,2$ represent spin indices. Also, $\alpha^j,\beta$ are $4\times 4$ matrices satisfying the anticommutation relations:
$$
    \{\alpha^j,\alpha^k\}_{ab}=2\delta^{jk}\delta_{ab},\quad\{\alpha^j,\beta\}_{ab}=0,\quad\{\beta,\beta\}_{ab}=\frac{1}{2}\delta_{ab}
$$
These are called **Dirac matrices**.

Problems:

* Existence of an infinite number of negative energy eigenstates.

Therefore, we assume these states are already occupied (**Dirac Sea**).

Problems:

* Need a theory of infinite particles.

* Unclear how to handle bosons.

Therefore, we rethink the fundamental treatment of space and time:

1. Demote position $\hat{\bm{x}}$ to a label $\bm{x}$, similar to time $t$.

2. Promote time $t$ to an operator $\hat{t}$, similar to position $\hat{\bm{x}}$.

The former leads to **Quantum Field Theory** (QFT), and extending the latter to string theory leads to **String Theory**.

## p.13 Regarding Multiparticle States Appearing as Intermediate States

>Even when there is not enough energy for pair creation, multiparticle states appear, for example, as intermediate states in second-order perturbation theory. We can think of such states as existing only for a very short time, according to the uncertainty principle $\Delta E \cdot \Delta t \geq \hbar$. As we go to higher orders in perturbation theory, arbitrarily many such “virtual” particles can be created.

I will provide only a brief explanation. Section 1.1 of [@Coleman:2018mew] is also helpful. Knowledge of quantum mechanics is assumed. If you are unsure, referring to Section 7.1.3 of [@griffiths_introduction_2018], for example, might be good.

For instance, if we add a perturbation $\delta V$ to the Hamiltonian $H$, the ground state energy $E_0$ in second-order perturbation theory becomes:
$$
    E_0 \to E_0 + \delta E_0,\quad \delta E_0 = \braket{0|\delta V|0} + \sum_{n}\frac{|\braket{n|\delta V|0}|^2}{E_0 - E_n}
$$
Looking at the second term, we can see that intermediate states of **all** energies contribute.

## p.13 Physical Meaning of Transition Amplitude

>Consider the amplitude for a free particle to propagate from $\bm{x}_0$ to $\bm{x}$.

Let's review quantum mechanics. We won't go into detailed derivations. Section 6.8 of [@griffiths_introduction_2018] is also helpful. I will explicitly write $\hbar$ for a little while.

Consider the time-independent Schrödinger equation:
$$
    i\hbar\frac{\partial}{\partial t}\ket{\bm{x},t} = \hat{H}(t)\ket{\bm{x},t}
$$
Here, $\ket{\bm{x},t}$ is the result of the time evolution operator $\hat{U}(t)$ acting on the position eigenstate $\ket{\bm{x}_0} = \ket{\bm{x},t=0}$:
$$
    \ket{\bm{x},t} = \hat{U}(t)\ket{\bm{x},0}
$$
Substituting this into the Schrödinger equation yields a differential equation for $\hat{U}(t)$:
$$
    i\hbar\frac{\partial}{\partial t}\hat{U}(t) = \hat{H}(t)\hat{U}(t)
$$
This is a first-order differential equation. The initial condition is $\hat{U}(0) = \hat{I}$ at $t=0$.

Since we are considering a free particle here, the Hamiltonian is time-independent.

When the Hamiltonian is time-independent, the solution is as follows:
$$
    \hat{U}(t) = \exp\left(-i\frac{\hat{H}}{\hbar}t\right)
$$
Here, the exponential of the operator is defined by Taylor expansion.

Incidentally, if the Hamiltonian is time-dependent, the solution is as follows (**Dyson** formula):
$$
    \hat{U}(t) = \mathcal{T}\exp\left(-i\frac{1}{\hbar}\int_0^t dt' \hat{H}(t')\right)
$$
Here, $\mathcal{T}$ is the time-ordering operator (refer to problem 11.23 in [@griffiths_introduction_2018], for example).

According to Born's probability interpretation, the square of the transition amplitude $U(t)=\braket{\bm{x}|e^{-iHt}|\bm{x}_0} = \braket{\bm{x},t|\bm{x}_0,0}$, $|U(t)|^2$, is a quantity that represents "the probability (density) that a particle existing at position $\bm{x}_0$ at time $t=0$ transitions to a state existing at position $\bm{x}$ at time $t$".

## p.14 Transition Amplitude in Non-Relativistic Quantum Mechanics

First, let's confirm the notation. It is assumed that you know the fact that position eigenstates $\ket{\bm{x}}$ and momentum eigenstates $\ket{\bm{p}}$ are connected by Fourier transform. In the notation of [@Peskin:1995ev], it is as follows:
$$
    \ket{\bm{x}} = \int\frac{d^3p}{(2\pi)^3} e^{+i\bm{p}\cdot\bm{x}}\ket{\bm{p}},\quad \ket{\bm{p}} = \int d^3x \ e^{-i\bm{p}\cdot\bm{x}}\ket{\bm{x}}
$$
Also, assuming the position eigenstates satisfy the following orthogonality normalization condition:
$$
    \braket{\bm{x}|\bm{x}'} = \delta^{(3)}(\bm{x}-\bm{x}')
$$
Then,
$$
    \boxed{\braket{\bm{x}|\bm{p}} = \int d^3x' \ e^{-i\bm{p}\cdot\bm{x}'}\braket{\bm{x}|\bm{x}'} = e^{-i\bm{p}\cdot\bm{x}}}
$$

Also, Fourier transforming $\braket{\bm{x}|\bm{x}'}$ gives:
$$
\begin{align*}
    \braket{\bm{x}|\bm{x}'} &= \left(\int\frac{d^3p}{(2\pi)^3}e^{-i\bm{p}\cdot\bm{x}}\bra{\bm{p}}\right)\left(\int\frac{d^3p'}{(2\pi)^3}e^{+i\bm{p}'\cdot\bm{x}'}\ket{\bm{p}'}\right)
    \\
    &= \int\frac{d^3p\ d^3p'}{(2\pi)^6}e^{-i(\bm{p}\cdot\bm{x}-\bm{p}'\cdot\bm{x}')}\braket{\bm{p}|\bm{p}'}
\end{align*}
$$
Here, if we set the normalization condition of momentum eigenstates as
$$
    \braket{\bm{p}|\bm{p}'} = C\delta^{(3)}(\bm{p}-\bm{p}')
$$
then
$$
\begin{align*}
    \braket{\bm{x}|\bm{x}'} &= C\int\frac{d^3p}{(2\pi)^6}e^{-i\bm{p}\cdot(\bm{x}-\bm{x}')} = \frac{C}{(2\pi)^3}\delta^{(3)}(\bm{x}-\bm{x}')
\end{align*}
$$
So the normalization condition for momentum eigenstates becomes:
$$
    \boxed{\braket{\bm{p}|\bm{p}'} = (2\pi)^3\delta^{(3)}(\bm{p}-\bm{p}')}
$$

Then, for an arbitrary state $\ket{\psi}$:
$$
\begin{align*}
    \braket{\bm{p}'|\left(\int\frac{d^3p}{(2\pi)^3}\ket{\bm{p}}\bra{\bm{p}}\right)|\psi} &= \int\frac{d^3p}{(2\pi)^3}\braket{\bm{p}'|\bm{p}}\braket{\bm{p}|\psi}
    \\
    &= \int\frac{d^3p}{(2\pi)^3}(2\pi)^3\delta^{(3)}(\bm{p}-\bm{p}')\braket{\bm{p}|\psi}
    \\
    &= \braket{\bm{p}'|\psi}
\end{align*}
$$
holds, so the completeness relation for momentum eigenstates is:
$$
    \boxed{\int\frac{d^3p}{(2\pi)^3}\ket{\bm{p}}\bra{\bm{p}} = 1}
$$
Note that the above results may differ depending on the convention used.

Now, in non-relativistic quantum mechanics, the Hamiltonian for a free particle is:
$$
    H = \frac{\bm{p}^2}{2m}
$$
so the transition amplitude is:
$$
    U(t) = \braket{\bm{x}|e^{-i(\bm{p}^2/2m)t}|\bm{x}_0}
$$
Here, inserting the completeness relation of momentum eigenstates between $e^{-i(\bm{p}^2/2m)t}$ and $\ket{\bm{x}_0}$:
$$
    U(t) = \int\frac{d^3p}{(2\pi)^3}\braket{\bm{x}|e^{-i(\bm{p}^2/2m)t}|\bm{p}}\braket{\bm{p}|\bm{x}_0}
$$
The operator $\bm{p}$ in $e^{-i(\bm{p}^2/2m)t}$ acts on $\ket{\bm{p}}$ to give an eigenvalue, and since $\braket{\bm{p}|\bm{x}_0}=e^{i\bm{p}\cdot\bm{x}_0}$:
$$
    U(t) = \int\frac{d^3p}{(2\pi)^3}e^{-i(\bm{p}^2/2m)t}e^{i\bm{p}\cdot(\bm{x}-\bm{x}_0)}
$$
Completing the square inside the exponential function:
$$
\begin{align*}
    -i\frac{\bm{p}^2}{2m}t + i\bm{p}\cdot(\bm{x}-\bm{x}_0) &= -i\frac{t}{2m}\left(\bm{p}^2 - \frac{2m}{t}\bm{p}\cdot(\bm{x}-\bm{x}_0)\right)
    \\
    &= -i\frac{t}{2m}\left(\bm{p}^2 - \frac{2m}{t}\bm{p}\cdot(\bm{x}-\bm{x}_0) + \frac{m^2}{t^2}(\bm{x}-\bm{x}_0)^2\right) + i\frac{m}{2t}(\bm{x}-\bm{x}_0)^2
    \\
    &= -i\frac{t}{2m}\left(\bm{p} - \frac{m}{t}(\bm{x}-\bm{x}_0)\right)^2 + i\frac{m}{2t}(\bm{x}-\bm{x}_0)^2
\end{align*}
$$
Therefore:
$$
    U(t) = \frac{1}{(2\pi)^3}\exp\left(i\frac{m}{2t}(\bm{x}-\bm{x}_0)^2\right)\int d^3p \ \exp\left(-i\frac{t}{2m}\left(\bm{p} - \frac{m}{t}(\bm{x}-\bm{x}_0)\right)^2\right)
$$
Performing a variable transformation:
$$
    \bm{q} = \bm{p} - \frac{m}{t}(\bm{x}-\bm{x}_0)
$$
The integration measure is $d^3p = d^3q$, so:
$$
\begin{align*}
    U(t) &= \frac{1}{(2\pi)^3}\exp\left(i\frac{m}{2t}(\bm{x}-\bm{x}_0)^2\right)\int d^3q \ \exp\left(-i\frac{t}{2m}\bm{q}^2\right)
    \\
    &= \frac{1}{(2\pi)^3}\exp\left(i\frac{m}{2t}(\bm{x}-\bm{x}_0)^2\right)\left(\int_{-\infty}^{\infty} dq \ e^{-i\frac{t}{2m}q^2}\right)^3
\end{align*}
$$
This integral can be evaluated using Fresnel integrals:
$$  
    \int_{-\infty}^{\infty} dx \ e^{-iax^2} = \sqrt{\frac{\pi}{ia}},\quad a=\frac{t}{2m}
$$
Therefore, the transition amplitude in non-relativistic quantum mechanics is:
$$
    \boxed{U(t) = \left(\frac{m}{2\pi it}\right)^{3/2}\exp\left(i\frac{m}{2t}(\bm{x}-\bm{x}_0)^2\right)\ne 0}
$$

## p.14 Transition Amplitude in Relativistic Quantum Mechanics

From the relativistic energy-momentum relation $E = \sqrt{\bm{p}^2 + m^2}$, the transition amplitude is:
$$
    U(t) = \braket{\bm{x}|e^{-i\sqrt{\bm{p}^2 + m^2}t}|\bm{x}_0}
$$
Inserting the completeness relation of momentum eigenstates here:
$$
    U(t) = \frac{1}{(2\pi)^3}\int d^3p \ e^{-it\sqrt{\bm{p}^2 + m^2}}e^{i\bm{p}\cdot\bm{r}}
$$
Here, we set $\bm{r}=\bm{x}-\bm{x}_0$. Taking spherical coordinates $(p,\theta,\phi)$ such that the angle with $\bm{r}$ is the polar angle:
$$
    U(t) = \frac{1}{(2\pi)^3}\int_0^{\infty} dp \int_0^{\pi} d\theta \int_0^{2\pi} d\phi \ p^2 \sin\theta \ e^{-it\sqrt{p^2 + m^2}}e^{ipr\cos\theta}
$$
Here we set $r=|\bm{r}|$. Since the integral over $\phi$ is $2\pi$:
$$
    U(t) = \frac{1}{(2\pi)^2}\int_0^{\infty} dp \int_0^{\pi} d\theta \ p^2 \sin\theta \ e^{-it\sqrt{p^2 + m^2}}e^{ipr\cos\theta}
$$
For the $\theta$ integral, changing variables to $u=\cos\theta$:
$$
\begin{align*}
    \int_0^{\pi} d\theta \ \sin\theta \ e^{ipr\cos\theta} &= \int_{-1}^{1} du \ e^{ipru} = \frac{e^{ipr}-e^{-ipr}}{ipr} = \frac{2\sin(pr)}{pr}
\end{align*}
$$
Therefore:
$$
    \boxed{U(t) = \frac{1}{(2\pi)^2 r}\int_0^{\infty} dp \ p \ e^{-it\sqrt{p^2 + m^2}}\sin(pr)}
$$
This integral corresponds to the formula for the modified Bessel function $K_\nu$ (see 3.914 in the formula book [@gradshteyn2007]):
$$
    \int_0^{\infty} x e^{-\beta\sqrt{\gamma^2+x^2}}\sin(bx)\ dx = \frac{b\beta\gamma^2}{\beta^2+b^2}K_2(\gamma\sqrt{\beta^2+b^2})
$$
where, except for coefficients:
$$
    x = p,\quad \beta = it,\quad \gamma = m,\quad b = r
$$
Thus, we obtain:
$$
    U(t) = \frac{im^2t}{(2\pi)^2(r^2-t^2)}K_2(m\sqrt{r^2-t^2})
$$

## p.14 Asymptotic Behavior of Transition Amplitude

Consider the asymptotic behavior of the relativistic transition amplitude
$$
    U(t) = \frac{1}{(2\pi)^2 r}\int_0^{\infty} dp \ p \ e^{-it\sqrt{p^2 + m^2}}\sin(pr)
$$
at spacelike separation $r^2 \gg t^2$.
Letting
$$
    \sin(pr) = \frac{e^{ipr}-e^{-ipr}}{2i}
$$
we have
$$
    U(t) = \frac{1}{(2\pi)^2 r}\int_0^{\infty} dp \ p \ e^{-it\sqrt{p^2 + m^2}}\frac{e^{ipr}-e^{-ipr}}{2i}
$$
The phase function is:
$$
    \Phi(p) = \pm pr - t\sqrt{p^2 + m^2}
$$
Differentiating:
$$
    \Phi'(p) = \pm r - \frac{tp}{\sqrt{p^2 + m^2}}
$$
The extremum condition is:
$$
    \pm r\sqrt{p^2 + m^2} = tp
$$
The extremum is:
$$
    p_{\pm} = \pm\frac{imr}{\sqrt{r^2 - t^2}}
$$
(The $\pm$ of $\Phi$ corresponds to the $\pm$ of the extremum). At this point, the phase function becomes:
$$
    \Phi(p_{\pm}) = \frac{imr}{\sqrt{r^2-t^2}} r - t \sqrt{-\frac{m^2r^2}{r^2-t^2} + m^2} = \frac{imr^2-imt^2}{\sqrt{r^2-t^2}} = im\sqrt{r^2-t^2}
$$
Thanks to the hidden presence of $\hbar$, we can apply the method of steepest descent (the assumption $r^2 \gg t^2$ serves to improve the accuracy of this approximation). Then, the exponential part of the asymptotic behavior of the transition amplitude becomes:
$$
    \boxed{U(t) \sim e^{-m\sqrt{r^2-t^2}} \ne 0}
$$

## p.15 High Precision of Agreement Between Experiment and Theory

>The experimental confirmation of these predictions, often to an unprecedented level of accuracy, is our real reason for studying quantum field theory.

I will mention just one experiment that symbolizes this fact. It is the measurement of the electron anomalous magnetic moment $a_e$. The experimental value is given as:
$$
    a_e^{\mathrm{ex}} = 0.00115965218\cdots
$$
While the theoretical value is given as:
$$
    a_e^{\mathrm{th}} = 0.00115965218\cdots
$$
This value can be obtained through calculations in QED perturbation theory.

## References
