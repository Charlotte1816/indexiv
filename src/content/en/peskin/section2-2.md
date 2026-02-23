---
category: "peskin"
title: "Section 2.2 Gap Filling"
description: "Gap filling for Peskin Section 2.2 Elements of Classical Field Theory"
---
References: [@Peskin:1995ev]

## p.15 Functional Form of the Lagrangian

The following is based on [@Tong:2007qft] and [@Kugo:1989aa].

We restrict the action of a theory with field $\phi(x)$ to the form
$$
    S[\phi] = \int d^4 x \ \mathcal{L}(\phi(x), \partial_\mu \phi(x))
$$
for the following reasons:

* **Locality**: The assumption of local interactions where interactions exist only in infinitesimal neighborhoods.

* **$\mathcal{L}$ is real (Hermitian)**: Classically to ensure energy is real. Quantum mechanically to ensure unitary time evolution (i.e., probability conservation).

* **No higher derivatives**: By analogy with Newtonian mechanics, time derivatives are only first order. Higher derivatives lead to problems:
  * Negative norm particles inducing negative probabilities
  * Tachyons (particles exceeding the speed of light)

* **Poincaré and internal symmetries**: Lorentz invariance requires $\mathcal{L}$ to be a Lorentz scalar, and translation invariance requires $\mathcal{L}$ to be independent of the coordinate $x$. Internal symmetries are imposed as needed.

* **Renormalizability**: In typical quantum field theories, irrelevant interactions are neglected.

Let us add some explanation regarding renormalizability.

Consider, for example, the (4-dimensional) real Klein-Gordon theory:
$$
    \mathcal{L} = \frac{1}{2} \partial_\mu \phi \partial^\mu \phi - \frac{1}{2} m^2 \phi^2
$$
From the above requirements, one might think we could add the following terms as perturbations:
$$
    \mathcal{L} = \frac{1}{2} \partial_\mu \phi \partial^\mu \phi - \frac{1}{2} m^2 \phi^2 - \sum_{n\ge 3}\frac{\lambda_n}{n!}\phi^n
$$
However, we can classify terms by the mass dimension of the coupling constant $\lambda_n$. Since the action is dimensionless, we have $[S]=0$ in mass dimensions. The integration measure has $[d^4 x] = -4$, so the Lagrangian density must have $[\mathcal{L}] = 4$. Since $[\partial] = 1$, we have $[\phi] = 1$. Therefore, $[\lambda_n] = 4 - n$. To assess the validity of perturbation theory, we must consider what values the coupling constants take at the energy scale $E$ we are considering. We can classify as follows:

* $[\lambda_3] = 1$: The dimensionless parameter is $\lambda_3/E$. This term is small at high energies but large at low energies. Such terms are called **relevant**.

* $[\lambda_4] = 0$: The dimensionless parameter is $\lambda_4$. Such terms are independent of energy scale. These are called **marginal**.

* $[\lambda_{n\ge 5}] < 0$: The dimensionless parameter is $\lambda_n E^{n-4}$. Such terms are large at high energies but small at low energies. These are called **irrelevant**.

Suppose we have a theory that can describe physics at high energy scales $\Lambda$ such as GUT or Planck scales. The dynamics are determined by a large number of irrelevant terms. The dimensionless parameters are:
$$
    g_n^{\text{high}} = \lambda_n \Lambda^{n-4}
$$
Now consider experiments at $E\ll \Lambda$ within such a theory. The dimensionless parameters become:
$$
    g_n^{\text{low}} = \lambda_n E^{n-4} = g_n^{\text{high}} \left(\frac{E}{\Lambda}\right)^{n-4}
$$
Typically $g_n \sim \mathcal{O}(1)$, and irrelevant terms are suppressed by factors of $(E/\Lambda)^{n-4}$. For example, consider a theory describing physics at the Planck scale $\Lambda \sim 10^{19}$ GeV, and examine processes at the LHC energy scale $E \sim 10^3$ GeV. The suppression becomes $E/\Lambda \sim 10^{-16}$.

Therefore, as long as we consider typical quantum field theories, we can ignore high-energy physics and focus only on a small number of relevant and marginal terms. However, for those of us who wish to understand high-energy theories (though some may not be interested), low-energy theories are quite impoverished.

A more rigorous discussion appears in the second part.

## p.15 Functional Derivatives

In deriving the Euler-Lagrange equations for fields from the principle of least action, we employ functional derivatives. Since this is a fundamental technique, we add some explanation.

<div class="remark">

Here we provide intuitive rather than mathematically rigorous arguments.

</div>

The following is based on Yoshiro Hioki's [lecture notes](https://www2.yukawa.kyoto-u.ac.jp/~ken-iti.izawa/theory/hioki-file/VR.pdf).

For example, a quantity
$$
    F[\phi] = \int dx \ \mathcal{F}[\phi(x)]
$$
maps the function $\phi$ to the quantity $F[\phi]$. Such "functions of functions" are called **functionals**.

<div class="recall">

For a function $y=f(x)$, consider a small change in $x$:
$$
    x \to x + dx
$$
The function $y$ changes as:
$$
    dy = f(x + dx) - f(x)
$$
The relationship between $dy$ and $dx$ is:
$$
    dy = \frac{dy}{dx} dx
$$

</div>

Consider a small change in the field:
$$
    \phi(x) \to \phi(x) + \delta \phi(x)
$$
The functional $F[\phi]$ changes as:
$$
    \delta F = F[\phi + \delta \phi] - F[\phi]
$$
Such variations $\delta\phi$ and $\delta F$ are called the **variation** of $\phi$ and $F$. Since $\delta F$ depends on $\delta \phi(x)$ at every point $x$ in the integration region, the relationship between $\delta F$ and $\delta \phi(x)$ is, by analogy with functions:
$$
    \delta F = \int dx \ [\bullet] \ \delta \phi(x)
$$
The quantity $[\bullet]$ plays a role analogous to $dy/dx$. We define this as:
$$
    [\bullet] = \frac{\delta F}{\delta \phi}
$$
and call it the **functional derivative**.

When a functional $F$ depends on multiple independent functions $\phi_i$, by analogy with multivariable calculus:
$$
    \boxed{\delta F = \sum_{i=1}^n\int dx \ \frac{\delta F}{\delta \phi_i} \delta \phi_i(x)}
$$

Moreover, such functional derivatives can be written as:
$$
\begin{align*}
    \delta F &= F[\phi + \delta \phi] - F[\phi]
    \\
    &= \int dx \ \left[\mathcal{F}(\phi(x) + \delta \phi(x)) - \mathcal{F}(\phi(x))\right]
    \\
    &= \int dx \ \left[\frac{d}{d\phi(x)}\mathcal{F}(\phi(x))\right] \delta \phi(x)
\end{align*}
$$
Therefore:
$$
    \frac{\delta F}{\delta \phi} = \frac{d}{d\phi(x)}\mathcal{F}(\phi(x))
$$
When $F$ depends on multiple independent functions $\phi_i$:
$$
    \boxed{\frac{\delta F}{\delta \phi_i} = \frac{\partial}{\partial \phi_i(x)}\mathcal{F}(\phi_1(x), \dots, \phi_n(x))}
$$

Applying the above discussion to the action yields equation (2.2).

## p.16-17 Klein-Gordon Theory

Consider the real Klein-Gordon theory:
$$
\begin{align*}
    \mathcal{L} &= \frac{1}{2}\dot{\phi}^2 - \frac{1}{2}(\nabla \phi)^2 - \frac{1}{2} m^2 \phi^2
    \\
    &= \frac{1}{2}(\partial_\mu\phi)^2 - \frac{1}{2} m^2 \phi^2
    \\
    &= \frac{1}{2}g^{\mu\nu}\partial_\mu \phi \partial_\nu \phi - \frac{1}{2} m^2 \phi^2
\end{align*}
$$
On one hand:
$$
    \frac{\partial \mathcal{L}}{\partial \phi} = -m^2 \phi
$$
On the other hand:
$$
\begin{align*}
    \frac{\partial \mathcal{L}}{\partial (\partial_\rho \phi)} &= \frac{1}{2}g^{\mu\nu}\left[\frac{\partial(\partial_\mu\phi)}{\partial(\partial_\rho \phi)}\partial_\nu\phi + \partial_\mu\phi \frac{\partial(\partial_\nu\phi)}{\partial(\partial_\rho \phi)}\right]
    \\
    &= \frac{1}{2}g^{\mu\nu}\left[\delta_\mu^\rho \partial_\nu\phi + \partial_\mu\phi \delta_\nu^\rho\right]
    \\
    &= \frac{1}{2}g^{\rho\nu}\partial_\nu\phi + \frac{1}{2}g^{\mu\rho}\partial_\mu\phi
    \\
    &= \frac{1}{2}g^{\rho\nu}\partial_\nu\phi + \frac{1}{2}g^{\rho\mu}\partial_\mu\phi
    \\
    &= g^{\rho\mu}\partial_\mu\phi
    \\
    &= \partial^\rho \phi
\end{align*}
$$
The Euler-Lagrange equation
$$
    \partial_\mu \left(\frac{\partial \mathcal{L}}{\partial (\partial_\mu \phi)}\right) - \frac{\partial \mathcal{L}}{\partial \phi} = 0
$$
yields the equation of motion (Klein-Gordon equation):
$$
    \partial_\mu \partial^\mu \phi + m^2 \phi = 0
$$
The conjugate momentum is:
$$
    \pi(x) \coloneqq \frac{\partial \mathcal{L}}{\partial \dot{\phi}(x)} = \dot{\phi}(x)
$$
Therefore, the Hamiltonian is:
$$
\begin{align*}
    \mathcal{H} &\coloneqq \pi \dot{\phi} - \mathcal{L}
    \\
    &= \pi^2 - \left[\frac{1}{2}\pi^2 - \frac{1}{2}(\nabla \phi)^2 - \frac{1}{2} m^2 \phi^2\right]
    \\
    &= \frac{1}{2}\pi^2 + \frac{1}{2}(\nabla \phi)^2 + \frac{1}{2} m^2 \phi^2
\end{align*}
$$

## p.18 Charge Conservation

The Noether charge is defined as:
$$
    Q = \int_V j^0 \ d^3x
$$
where $j^\mu$ is the Noether current:
$$
    j^\mu \coloneqq \frac{\partial \mathcal{L}}{\partial (\partial_\mu \phi)} \Delta \phi - \mathcal{J}^\mu
$$
Consider the case where the current is conserved:
$$
    \partial_\mu j^\mu = \frac{\partial j^0}{\partial t} - \nabla \cdot \bm{j} = 0
$$
The time evolution of the charge is:
$$
    \frac{dQ}{dt} = \int_V \frac{\partial j^0}{\partial t} \ d^3x = \int_V \nabla \cdot \bm{j} \ d^3x = \int_{\partial V} \bm{j} \cdot d\bm{S} = 0
$$
Therefore, when the current vanishes at the boundary of the region of interest, the charge is conserved.

The familiar continuity equation has $+\bm{\nabla}\cdot \bm{j}$ instead of $-\bm{\nabla}\cdot \bm{j}$. In the former case, $\bm{j}$ is interpreted as the amount **flowing into** the region. When the inflow is positive, $\dot{Q}$ increases. In the latter case, $\bm{j}$ is interpreted as the amount **flowing out of** the region.

## p.18 Complex Klein-Gordon Theory

Consider the complex Klein-Gordon theory ($\phi$ and $\phi^*$ are independent fields):
$$
    \mathcal{L} = |\partial_\mu \phi|^2 - m^2 |\phi|^2 = \partial_\mu \phi^* \partial^\mu \phi - m^2 \phi^* \phi
$$
On one hand:
$$
    \frac{\partial \mathcal{L}}{\partial \phi} = -m^2 \phi^*
$$
On the other hand:
$$
\begin{align*}
    \frac{\partial \mathcal{L}}{\partial (\partial_\rho \phi)} &= g^{\mu\nu}\left[\frac{\partial(\partial_\mu\phi^*)}{\partial(\partial_\rho \phi)}\partial_\nu\phi + \partial_\mu\phi^* \frac{\partial(\partial_\nu\phi)}{\partial(\partial_\rho \phi)}\right]
    \\
    &= g^{\mu\nu}\left[0 + \partial_\mu\phi^* \delta_\nu^\rho\right]
    \\
    &= g^{\mu\rho}\partial_\mu\phi^*
    \\
    &= \partial^\rho \phi^*
\end{align*}
$$
The Euler-Lagrange equation
$$
    \partial_\mu \left(\frac{\partial \mathcal{L}}{\partial (\partial_\mu \phi)}\right) - \frac{\partial \mathcal{L}}{\partial \phi} = 0
$$
yields the equation of motion:
$$
    \partial_\mu \partial^\mu \phi^* + m^2 \phi^* = 0
$$
Similarly:
$$
    \frac{\partial \mathcal{L}}{\partial \phi^*} = -m^2 \phi,\quad \frac{\partial \mathcal{L}}{\partial (\partial_\mu \phi^*)} = \partial^\mu \phi
$$
yield the Klein-Gordon equation:
$$
    \partial_\mu \partial^\mu \phi + m^2 \phi = 0
$$

This theory clearly possesses the following symmetry:
$$
    \phi \to e^{i\alpha} \phi,\quad \phi^* \to e^{-i\alpha} \phi^*
$$
In infinitesimal form:
$$
    \Delta \phi = i\phi, \quad \Delta \phi^* = -i\phi^*
$$
Since the Lagrangian is invariant, $\mathcal{J}^\mu = 0$. The conserved current is:
$$
\begin{align*}
    j^\mu &= \frac{\partial \mathcal{L}}{\partial (\partial_\mu \phi)} \Delta \phi + \frac{\partial \mathcal{L}}{\partial (\partial_\mu \phi^*)} \Delta \phi^*
    \\
    &= (\partial^\mu\phi^*)(i\phi) + (\partial^\mu \phi)(-i\phi^*) = i[(\partial^\mu\phi^*)\phi - \phi^*(\partial^\mu \phi)]
\end{align*}
$$

## p.18-19 Active and Passive Transformations

We explain why the field transforms as $\phi(x) \to \phi(x + a)$ (with the argument reversed) under an infinitesimal translation:
$$
    x^\mu \to x^\mu - a^\mu
$$
The following explanation is based on [@Tong:2007qft].

To make the image clearer, consider a concrete temperature field $\phi(\bm{x})$ in 3D space. Initially, suppose there is a "very hot spot" at $\bm{x}=(1,0,0)$. We rotate this space $90^\circ$ around the $z$-axis: $\bm{x} \to R\bm{x}$. Such "transformations acting on space itself" are called **active transformations**. The temperature field $\phi$ transforms accordingly. Let $\phi'$ be the transformed field. Since space itself is rotated, the "very hot spot" also moves to $\bm{x}=(0,1,0)$. The relationship between the new and old fields is:
$$
    \phi'(0,1,0) = \phi(1,0,0) = \phi(R^{-1}(0,1,0))
$$
This explains why the field argument is reversed under spatial transformations.

In contrast to active transformations, "transformations acting on the coordinates" are called **passive transformations**. For example, rotate the coordinates $90^\circ$ around the $z$-axis: $\bm{x} \to R\bm{x}$. In this case, the temperature field $\phi$ does not change. The "very hot spot" originally at $\bm{x}=(1,0,0)$ is now at $\bm{x}=(0,-1,0)$ in rotated coordinates. The relationship between new and old coordinates is:
$$
    \phi'(0,-1,0) = \phi(0,-1,0) = \phi(R(1,0,0))
$$
In passive transformations, the field argument is not reversed. Active and passive transformations are similar but distinct.

## p.19 Hamiltonian as a Charge

Consider the real Klein-Gordon theory:
$$
    \mathcal{L} = \frac{1}{2}\dot{\phi}^2 - \frac{1}{2}(\nabla \phi)^2 - \frac{1}{2} m^2 \phi^2
$$
We have:
$$
    \frac{\partial \mathcal{L}}{\partial \dot{\phi}} = \dot{\phi}
$$
The energy-momentum tensor
$$
    T^{\mu}{}_{\nu} = \frac{\partial \mathcal{L}}{\partial (\partial_\mu \phi)} \partial_\nu \phi -  \mathcal{L}\delta^{\mu}{}_{\nu}
$$
has the temporal component:
$$
\begin{align*}
    T^0{}_0 &= \frac{\partial \mathcal{L}}{\partial \dot{\phi}} \dot{\phi} - \mathcal{L}
    \\
    &= \frac{1}{2}\dot{\phi}^2 + \frac{1}{2}(\nabla \phi)^2 + \frac{1}{2} m^2 \phi^2
\end{align*}
$$
Since the conjugate momentum is $\pi = \dot{\phi}$, this equals the Hamiltonian $\mathcal{H}$.

This is not limited to real Klein-Gordon theory. As a value:
$$
    T^0{}_0 = \frac{\partial \mathcal{L}}{\partial \dot{\phi}} \dot{\phi} - \mathcal{L} = \pi \dot{\phi} - \mathcal{L} = \mathcal{H}
$$
holds in general. For the Belinfante-Rosenfeld tensor, the equality as densities does not hold, but the equality as charges does.

## References
