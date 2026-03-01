---
category: "misc"
subcategory: "series"
title: "収束判定法"
description: "級数の収束判定法について"
order: 194
---
<div class="theorem">

1. **比較判定法**： $|a_n| \leq b_n$ で $\sum b_n$ が収束するとき $\sum a_n$ も収束する。

2. **極限判定法**： $\lim_{n\to\infty} a_n \ne 0$ あるいは極限が存在しないとき $\sum a_n$ は発散する。

3. **比判定法**： $\rho = \lim_{n\to\infty} \left|\frac{a_{n+1}}{a_n}\right|$ とする。
    * $\rho < 1$ のとき $\sum a_n$ は絶対収束する。
    * $\rho > 1$ のとき $\sum a_n$ は発散する。

4. **Cauchyの根判定法**： $\sigma = \lim_{n\to\infty}|a_n|^{1/n}$ とする。
    * $\sigma < 1$ のとき $\sum a_n$ は収束する。
    * $\sigma > 1$ のとき $\sum a_n$ は発散する。
  
5. **積分判定法**： $|a_n|=f(n)$（$f(n)$ は単調減少）とし $\lim_{x\to\infty} f(x) = 0$ とする。任意の $A>0$ に対して
    * $\int_A^\infty f(x) dx$ が収束するとき $\sum a_n$ も収束する。
    * $\int_A^\infty f(x) dx$ が発散するとき $\sum a_n$ も発散する。
  
6. **Gaussの判定法**： $\left|\frac{a_n}{a_{n+1}}\right|=1+\frac{p}{n}+\frac{A_n}{n^q}$（$q>1$，$\{A_n\}$ は有界）が絶対収束することと $p>1$ であることは同値である。

7. **交代級数判定法**： $|a_n|$ が $0$ に単調減少するとき $\sum (-1)^n a_n$ は収束する。

</div>
