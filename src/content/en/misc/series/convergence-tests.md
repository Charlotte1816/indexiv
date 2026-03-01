---
category: "misc"
subcategory: "series"
title: "Convergence Tests"
description: "Convergence tests for series"
order: 194
---
<div class="theorem">

1. **Comparison Test**: If $|a_n| \leq b_n$ and $\sum b_n$ converges, then $\sum a_n$ also converges.

2. **Divergence Test**: If $\lim_{n\to\infty} a_n \ne 0$ or the limit does not exist, then $\sum a_n$ diverges.

3. **Ratio Test**: Let $\rho = \lim_{n\to\infty} \left|\frac{a_{n+1}}{a_n}\right|$.
    * If $\rho < 1$, then $\sum a_n$ converges absolutely.
    * If $\rho > 1$, then $\sum a_n$ diverges.

4. **Cauchy Root Test**: Let $\sigma = \lim_{n\to\infty}|a_n|^{1/n}$.
    * If $\sigma < 1$, then $\sum a_n$ converges.
    * If $\sigma > 1$, then $\sum a_n$ diverges.
  
5. **Integral Test**: Let $|a_n|=f(n)$ where $f(n)$ is monotonically decreasing, and $\lim_{x\to\infty} f(x) = 0$.
    * If $\int_A^\infty f(x) dx$ converges for any $A>0$, then $\sum a_n$ also converges.
    * If $\int_A^\infty f(x) dx$ diverges, then $\sum a_n$ also diverges.
  
6. **Gauss's Test**: If $\left|\frac{a_n}{a_{n+1}}\right|=1+\frac{p}{n}+\frac{A_n}{n^q}$ (where $q>1$ and $\{A_n\}$ is bounded), then the series converges absolutely if and only if $p>1$.

7. **Alternating Series Test**: If $|a_n|$ decreases monotonically to $0$, then $\sum (-1)^n a_n$ converges.

</div>
