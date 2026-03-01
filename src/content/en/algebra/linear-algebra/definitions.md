---
category: "algebra"
subcategory: "linear-algebra"
title: "Definitions of Various Matrices"
description: "Definitions of various matrices"
order: 242
---
<div class="definition">

* A matrix where all entries except on the main diagonal are zero is called a **diagonal matrix**:
  $$
    \begin{pmatrix}
        a_1 & 0 & \cdots & 0 \\
        0 & a_2 & \cdots & 0 \\
        \vdots & \vdots & \ddots & \vdots \\
        0 & 0 & \cdots & a_n
    \end{pmatrix}
  $$

* The **identity matrix** $I$ is a diagonal matrix whose diagonal entries are all $1$. An $n\times n$ identity matrix is also denoted as $I_n$.
  $$
    I_n =
    \begin{pmatrix}
        1 & 0 & \cdots & 0 \\
        0 & 1 & \cdots & 0 \\
        \vdots & \vdots & \ddots & \vdots \\
        0 & 0 & \cdots & 1
    \end{pmatrix}
  $$

* A matrix where all entries above the main diagonal are zero is called a **lower triangular matrix**.
  $$
    \begin{pmatrix}
        a_{11} & 0 & \cdots & 0 \\
        a_{21} & a_{22} & \cdots & 0 \\
        \vdots & \vdots & \ddots & \vdots \\
        a_{n1} & a_{n2} & \cdots & a_{nn}
    \end{pmatrix}
  $$
  Similarly, a matrix where all entries below the main diagonal are zero is called an **upper triangular matrix**.
  $$
    \begin{pmatrix}
        a_{11} & a_{12} & \cdots & a_{1n} \\
        0 & a_{22} & \cdots & a_{2n} \\
        \vdots & \vdots & \ddots & \vdots \\
        0 & 0 & \cdots & a_{nn}
    \end{pmatrix}
  $$

* A square matrix $A$ is **symmetric** if $A=A^T$.

* A square matrix $A$ is **skew-symmetric** if $A=-A^T$.

* A square matrix $A$ is **idempotent** if $A^2=A$.

* A square matrix $A$ is **Hermitian** if $A=A^\dagger$. All real symmetric matrices are Hermitian.

* A square matrix $A$ is **skew-Hermitian** if $A=-A^\dagger$.

* A square matrix $A$ is **unitary** if $A^\dagger A=I$. Real unitary matrices are called **orthogonal matrices**. All eigenvalues of a unitary matrix have absolute value $1$.

* A square matrix $A$ is a **projection matrix** if it is both Hermitian and idempotent.

* A square matrix $A$ is **normal** if $A A^\dagger = A^\dagger A$. Diagonal matrices, Hermitian matrices, unitary matrices, and skew-Hermitian matrices are all normal.

* A square matrix $A$ is **nilpotent** if there exists a positive integer $k$ such that $A^k=0$ and $A^{k-1} \neq 0$. All eigenvalues of a nilpotent matrix are $0$.

</div>
