---
category: "algebra"
subcategory: "linear-algebra"
title: "様々な行列の定義"
description: "様々な行列の定義について"
order: 242
---
<div class="definition">

* 主対角成分以外のすべての成分がゼロである行列を**対角行列**と呼ぶ：
  $$
    \begin{pmatrix}
        a_1 & 0 & \cdots & 0 \\
        0 & a_2 & \cdots & 0 \\
        \vdots & \vdots & \ddots & \vdots \\
        0 & 0 & \cdots & a_n
    \end{pmatrix}
  $$

* **単位行列** $I$ とは，対角成分がすべて $1$ である対角行列をいう。また $n\times n$ の恒等行列を $I_n$ と表すこともある。
  $$
    I_n =
    \begin{pmatrix}
        1 & 0 & \cdots & 0 \\
        0 & 1 & \cdots & 0 \\
        \vdots & \vdots & \ddots & \vdots \\
        0 & 0 & \cdots & 1
    \end{pmatrix}
  $$

* 対角成分より上の成分がすべてゼロである行列を**下三角行列**と呼ぶ。
  $$
    \begin{pmatrix}
        a_{11} & 0 & \cdots & 0 \\
        a_{21} & a_{22} & \cdots & 0 \\
        \vdots & \vdots & \ddots & \vdots \\
        a_{n1} & a_{n2} & \cdots & a_{nn}
    \end{pmatrix}
  $$
  同様に，対角成分より下の成分がすべてゼロである行列を**上三角行列**と呼ぶ。
  $$
    \begin{pmatrix}
        a_{11} & a_{12} & \cdots & a_{1n} \\
        0 & a_{22} & \cdots & a_{2n} \\
        \vdots & \vdots & \ddots & \vdots \\
        0 & 0 & \cdots & a_{nn}
    \end{pmatrix}
  $$

* 正方行列 $A$ が**対称**であるとは，$A=A^T$ であることをいう。

* 正方行列 $A$ が**歪対称**であるとは，$A=-A^T$ であることをいう。

* 正方行列 $A$ が**冪等**であるとは，$A^2=A$ であることをいう。

* 正方行列 $A$ が**エルミート**であるとは，$A=A^\dagger$ であることをいう。すべての実対称行列はエルミートである。

* 正方行列 $A$ が**歪エルミート**であるとは，$A=-A^\dagger$ であることをいう。

* 正方行列 $A$ が**ユニタリー**であるとは，$A^\dagger A=I$ であることをいう。実ユニタリー行列は**直交行列**と呼ばれる。ユニタリー行列のすべての固有値の絶対値は $1$ である。

* 正方行列 $A$ が**射影行列**であるとは，エルミートかつ冪等であることをいう。

* 正方行列 $A$ が**正規**であるとは，$A A^\dagger = A^\dagger A$ であることをいう。対角行列，エルミート行列，ユニタリー行列，歪エルミート行列はすべて正規である。

* 正方行列 $A$ が**冪零**であるとは，ある正の整数 $k$ が存在して $A^k=0,\ A^{k-1} \neq 0$ であることをいう。冪零行列のすべての固有値は $0$ である。

</div>
