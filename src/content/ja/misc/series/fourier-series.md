---
category: "misc"
subcategory: "series"
title: "Fourier級数"
description: "Fourier級数について"
order: 196
---
<div class="theorem">

$f(x)$ が周期 $2L$ の有界な周期関数であり次のDirichlet条件を満たすとする：

1. 任意の区間について $f(x)$ は有限個の不連続点を除いて連続である。

2. 任意の区間について $f(x)$ は有限個の極値を持つ。

このとき $f(x)$ はFourier級数展開できる：
$$
    f(x) = \frac{a_0}{2} + \sum_{n=1}^{\infty}\left(a_n\cos\frac{n\pi x}{L} + b_{n}\sin\frac{n\pi x}{L}\right)
$$
ここで
$$
\begin{align*}
    a_n &= \frac{1}{L}\int_{\alpha}^{\alpha + 2L}f(x)\cos\frac{n\pi x}{L}\ dx \quad (n = 0, 1, 2, \ldots)
    \\
    b_n &= \frac{1}{L}\int_{\alpha}^{\alpha + 2L}f(x)\sin\frac{n\pi x}{L}\ dx \quad (n = 1, 2, \ldots)
\end{align*}
$$
である。ここで $\alpha$ は任意の実数である。

</div>

三角関数は指数関数で表すことができるので、Fourier級数は次のような複素Fourier級数としても表すことができる：
$$
    f(x) = \sum_{n=-\infty}^{\infty}c_n e^{i\omega_n x} \quad \omega_n = \frac{n\pi}{L}\quad (n = 0, \pm 1, \pm 2, \ldots)
$$
ここで
$$
    c_n = \frac{1}{2L}\int_{\alpha}^{\alpha + 2L}f(x)e^{-i\omega_n x}\ dx
$$
である。
