---
category: "misc"
subcategory: "series"
title: "級数に関する不等式"
description: "級数に関する不等式について"
order: 193
---
<div class="theorem">

1. **Schwarzの不等式**：
    $$
        \sum |a_n||b_n| \leq \left(\sum |a_n|^2\right)^{1/2} \left(\sum |b_n|^2\right)^{1/2}
    $$
2. **Holderの不等式**：$1/p+1/q=1$ を満たす $p,q>1$ に対して
    $$
        \sum |a_n||b_n| \leq \left(\sum |a_n|^p\right)^{1/p} \left(\sum |b_n|^q\right)^{1/q}
    $$
3. **Minkowskiの不等式**：$p\geq 1$ に対して
    $$
        \left(\sum |a_n + b_n|^p\right)^{1/p} \leq \left(\sum |a_n|^p\right)^{1/p} + \left(\sum |b_n|^p\right)^{1/p}
    $$
4. **相加相乗平均**：$a_i \geq 0$ に対して
    $$
        \frac{a_1+a_2+\cdots + a_n}{n} \geq (a_1 a_2 \cdots a_n)^{1/n}
    $$
5. **Kantorovichの不等式**：$0 < x_1 < x_2 < \cdots < x_n$ とし $\lambda_i \geq 0$ で $\sum \lambda_i = 1$ とするとき
    $$
        \left(\sum \lambda_i x_i\right)\left(\sum \frac{\lambda_i}{x_i}\right) \leq A^2 G^{-2}
    $$
    ここで $A = \frac{1}{2}(x_1 + x_n),\ G=\sqrt{x_1 x_n}$ である。

</div>
