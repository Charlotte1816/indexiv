---
category: "peskin"
title: "3.3 Dirac方程式の自由粒子解"
description: "Dirac方程式の自由粒子解について"
order: 33
---
Dirac方程式に従う場のダイナミクスを理解するために，まずは平面波解を見つけることから始める。

Dirac場はKlein-Gordon方程式も満たすので，平面波の線形結合で表せる。まずは正の周波数の解を考える：
$$
    \psi(x) = u(p)e^{-ip\cdot x}
$$
ここで $p^2 = m^2,\ p^0 > 0$ である。このときDirac方程式は次のようになる：
$$
    (\gamma^\mu p_\mu - m)u(p) = 0
$$
特に静止系では $p=p_0 = (m, \bm{0})$ なので次のようになる：
$$
    (m\gamma^0-m)u(p_0) = m\begin{pmatrix}
        -1 & 1 \\
        1 & -1
    \end{pmatrix}u(p_0) = 0
$$
解は次のように書ける：
$$
    u(p_0) = \sqrt{m}\begin{pmatrix}
        \xi \\
        \xi
    \end{pmatrix}
$$
ここで $\xi$ は任意の 2 成分スピノールであり慣例的に $\xi^\dagger\xi = 1$ となるように規格化する。また $\sqrt{m}$ は便宜のために書いてある。回転の生成子 $S^{ij}$ によると，$\xi$ は回転群の 2 次元表現によって変換される。したがって解のスピンの方向を通常の方法で決めることができる。たとえば $\xi=(1\ 0)^T$ ならスピンは $x_3$ 方向を向いている。スピン $1/2$ の粒子はスピンの向きが 2 通りあるので，正の周波数の解 $u(p)$ は 2 通りある。

静止系における解が分かったので，ブーストすることで他の座標系における解を見つけることができる：
$$
    u(p) = \begin{pmatrix}
        \sqrt{p\cdot\sigma}\xi \\
        \sqrt{p\cdot\bar{\sigma}}\xi
    \end{pmatrix}
$$

実際には特定のスピノール $\xi$ を扱うのが便利である。特に有用なのは $\sigma^3$ の固有状態である。このとき解は次のようになる：
$$
\begin{align*}
    u(p) &= \begin{pmatrix}
        \sqrt{E-p^3}\begin{pmatrix}
            1 \\
            0
        \end{pmatrix} \\
        \sqrt{E+p^3}\begin{pmatrix}
            1 \\
            0
        \end{pmatrix}
    \end{pmatrix} \xrightarrow{\text{large boost}} \sqrt{2E}\begin{pmatrix}
        0 \\
        0 \\
        1 \\
        0
    \end{pmatrix}
    \\
    u(p) &= \begin{pmatrix}
        \sqrt{E+p^3}\begin{pmatrix}
            0 \\
            1
        \end{pmatrix} \\
        \sqrt{E-p^3}\begin{pmatrix}
            0 \\
            1
        \end{pmatrix}
    \end{pmatrix} \xrightarrow{\text{large boost}} \sqrt{2E}\begin{pmatrix}
        0 \\
        1 \\
        0 \\
        0
    \end{pmatrix}
\end{align*}
$$
$\eta \to \infty$ の極限では状態は質量ゼロの粒子の 2 成分スピノールに縮退する。解の因子 $\sqrt{m}$ はこの極限でスピノル表現を有限に保っている。これらは**ヘリシティ**演算子
$$
    h \coloneqq \hat{p}\cdot\bm{S} = \frac{1}{2}\hat{p}_i\begin{pmatrix}
        \sigma^i & 0 \\
        0 & \sigma^i
    \end{pmatrix}
$$
の固有状態である。$h = +1/2$ の状態を**右巻き**，$h = -1/2$ の状態を**左巻き**という。質量を持つ粒子のヘリシティは座標系に依存するが，質量ゼロの粒子のヘリシティは座標系に依存しない。Weylスピノール $\psi_L,\ \psi_R$ はそれぞれ左巻き，右巻きの粒子に対応する。ヘリシティのLorentz不変性はWeylスピノールがそれぞれLorentz群の異なる表現に属するという事実から明らかである。

解 $u(p)$ に対する規格化条件もLorentz不変な形で書くことができる：
$$
    \bar{u}^r(p)u^s(p) = 2m\delta^{rs}
$$
また慣例的に基底スピノール $\xi^1,\ \xi^2$ は直交するように選ぶ。質量ゼロの粒子に対しては上の規格化条件は意味をなさないので次のようにする：
$$
    u^{\dagger r}(p)u^s(p) = 2E_{\bm{p}}\delta^{rs}
$$

同様に負の周波数の解も考えることができる：
$$
    \psi(x) = v(p)e^{+ip\cdot x},\quad p^2 = m^2,\quad p^0 > 0
$$
このとき線形独立な解は次のようになる：
$$
    v^s(p) = \begin{pmatrix}
        \sqrt{p\cdot\sigma}\eta^s \\
        -\sqrt{p\cdot\bar{\sigma}}\eta^s
    \end{pmatrix}\quad (s=1,2)
$$
これらは次のように規格化する：
$$
    \bar{v}^r(p)v^s(p) = -2m\delta^{rs}
$$
質量ゼロの場合は
$$
    v^{\dagger r}(p)v^s(p) = +2E_{\bm{p}}\delta^{rs}
$$

正の周波数の解 $u(p)$ と負の周波数の解 $v(p)$ は互いに直交する：
$$
    \bar{u}^r(p)v^s(p) = \bar{v}^r(p)u^s(p) = 0
$$
ここで次に注意する：
$$
    u^{r\dagger}(p)v^s(p) \ne 0 \quad v^{r\dagger}(p)u^s(p) \ne 0
$$
しかし次は成り立つ：
$$
    u^{r\dagger}(\bm{p})v^s(-\bm{p}) = v^{r\dagger}(-\bm{p})u^s(\bm{p}) = 0
$$

## スピン和

Feynmanダイアグラムを評価する際にフェルミオンの偏極状態について和を取りたいことがある。以下の公式は**スピン和**と呼ばれるものである：
$$
\begin{align*}
    \sum_{s} u^s(p)\bar{u}^s(p) &= \gamma\cdot p + m
    \\
    \sum_{s} v^s(p)\bar{v}^s(p) &= \gamma\cdot p - m
\end{align*}
$$
