---
category: "algebra"
subcategory: "linear-algebra"
title: "行列式"
description: "行列式について"
order: 245
---
<div class="definition">

正方行列 $A$ の**行列式** $\det(A)$（あるいは $|A|$）とは次で定義される関数である：
$$
    \det(A) = \sum_{\sigma}\mathrm{sgn}(\sigma)a_{1\sigma(1)}a_{2\sigma(2)}\cdots a_{n\sigma(n)}
$$
ここで $\sigma$ は $n$ 個の数の順列であり，$\mathrm{sgn}(\sigma)$ は $\sigma$ の符号である。符号は $\sigma$ を元の順序から得るために必要な隣接する数の交換の回数が偶数であれば $+1$，奇数であれば $-1$ である。

</div>

<div class="theorem">

1. 単位行列の行列式は $1$ である。

2. $|AB|=|A||B|$ である。

3. $|A|=|A^T|$ である。

4. $A$ の 2 つの行（あるいは列）を交換すると，行列式の符号が反転する。

5. ある行（あるいは列）に他の行（あるいは列）の線形結合を加えたり，または引いたりしても，行列式の値は変わらない。

6. ある行（あるいは列）を定数倍すると，行列式も同じ定数倍される。

7. $|\gamma A|=\gamma^n|A|$ である。

8. $\det (A^{-1}) = \det (A)^{-1}$ である。

9. $a_{ij}$ を $A$ の成分，$a^{ij}$ を $A^{-1}$ の成分とすると，$a^{ij} = \frac{\Delta_{ji}}{\det(A)}$ である。ここで $\Delta_{ji}$ は $A$ の $j$ 行 $i$ 列を削除して得られる行列の行列式に符号をつけたもので**余因子**と呼ばれるものである。

10. **Laplace 展開**：$|A| = a_{i1}\Delta_{i1} + a_{i2}\Delta_{i2} + \cdots + a_{in}\Delta_{in}$ である。ここで $i$ は任意の行番号である。

</div>
