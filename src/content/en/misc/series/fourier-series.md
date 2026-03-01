---
category: "misc"
subcategory: "series"
title: "Fourier Series"
description: "About Fourier Series"
order: 196
---
<div class="theorem">

Let $f(x)$ be a bounded periodic function with period $2L$ satisfying the following Dirichlet conditions:

1. $f(x)$ is continuous except at finitely many discontinuities on any interval.

2. $f(x)$ has finitely many extrema on any interval.

Then $f(x)$ can be expanded as a Fourier series:
$$
    f(x) = \frac{a_0}{2} + \sum_{n=1}^{\infty}\left(a_n\cos\frac{n\pi x}{L} + b_{n}\sin\frac{n\pi x}{L}\right)
$$
where
$$
\begin{align*}
    a_n &= \frac{1}{L}\int_{\alpha}^{\alpha + 2L}f(x)\cos\frac{n\pi x}{L}\ dx \quad (n = 0, 1, 2, \ldots)
    \\
    b_n &= \frac{1}{L}\int_{\alpha}^{\alpha + 2L}f(x)\sin\frac{n\pi x}{L}\ dx \quad (n = 1, 2, \ldots)
\end{align*}
$$
Here $\alpha$ is an arbitrary real number.

</div>

Since trigonometric functions can be expressed using exponential functions, the Fourier series can also be represented as a complex Fourier series:
$$
    f(x) = \sum_{n=-\infty}^{\infty}c_n e^{i\omega_n x} \quad \omega_n = \frac{n\pi}{L}\quad (n = 0, \pm 1, \pm 2, \ldots)
$$
where
$$
    c_n = \frac{1}{2L}\int_{\alpha}^{\alpha + 2L}f(x)e^{-i\omega_n x}\ dx
$$
