---
category: "misc"
subcategory: "series"
title: "Taylor級数"
description: "Taylor級数について"
order: 195
---
<div class="theorem">

1. 1 変数のTaylor級数：
    $$
        f(a+x) = \sum_{n=0}^{N}\frac{f^{(n)}(a)}{n!}x^n + R_N
    $$
    ここで剰余項は
    $$
        R_N = \frac{x^{N+1}}{(N+1)!}f^{(N+1)}(a+\theta x)\quad (0<\theta<1)
    $$
    あるいは
    $$
        f(x) = f(a) + f'(a)(x-a) + \frac{f''(a)}{2!}(x-a)^2 + \frac{f'''(a)}{3!}(x-a)^3 + \cdots
    $$
    特に $a=0$ のときはMaclaurin級数という。

2. 2 変数のTaylor級数：
    $$
        f(a+x,b+x) = f(a,b) + xf_x(a,b) + yf_y(a,b) + \frac{1}{2!}[x^2f_{xx}(a,b) + 2xyf_{xy}(a,b) + y^2f_{yy}(a,b)] + \cdots
    $$

3. ベクトルに対するTaylor級数：
    $$
        f(\bm{a}+\bm{x}) = \sum_{n=0}^{N}\frac{[(\bm{x}\cdot\nabla)^n f](\bm{a})}{n!} + R_N(\bm{a}) = f(\bm{a}) + \bm{x}\cdot\nabla f(\bm{a}) + \cdots
    $$

</div>
