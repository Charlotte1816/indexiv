---
category: "algebra"
subcategory: "linear-algebra"
title: "Determinants"
description: "About determinants"
order: 245
---
<div class="definition">

The **determinant** $\det(A)$ (or $|A|$) of a square matrix $A$ is a function defined as follows:
$$
    \det(A) = \sum_{\sigma}\mathrm{sgn}(\sigma)a_{1\sigma(1)}a_{2\sigma(2)}\cdots a_{n\sigma(n)}
$$
where $\sigma$ is a permutation of $n$ numbers, and $\mathrm{sgn}(\sigma)$ is the sign of $\sigma$. The sign is $+1$ if the number of adjacent transpositions needed to obtain $\sigma$ from the original order is even, and $-1$ if odd.

</div>

<div class="theorem">

1. The determinant of the identity matrix is $1$.

2. $|AB|=|A||B|$.

3. $|A|=|A^T|$.

4. Swapping two rows (or columns) of $A$ reverses the sign of the determinant.

5. Adding or subtracting a linear combination of one row (or column) to another row (or column) does not change the determinant.

6. Multiplying a row (or column) by a constant multiplies the determinant by the same constant.

7. $|\gamma A|=\gamma^n|A|$.

8. $\det (A^{-1}) = \det (A)^{-1}$.

9. If $a_{ij}$ is an entry of $A$ and $a^{ij}$ is an entry of $A^{-1}$, then $a^{ij} = \frac{\Delta_{ji}}{\det(A)}$, where $\Delta_{ji}$ is the **cofactor**, the signed determinant of the matrix obtained by deleting row $j$ and column $i$ from $A$.

10. **Laplace expansion**: $|A| = a_{i1}\Delta_{i1} + a_{i2}\Delta_{i2} + \cdots + a_{in}\Delta_{in}$, where $i$ is any row index.

</div>
