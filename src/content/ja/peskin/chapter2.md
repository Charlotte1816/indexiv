---
category: "peskin"
title: "2章 要約"
description: "Peskin 2章 The Klein-Gordon Field の要約"
---
参考文献：[@Peskin:1995ev]

## 2.1 The Necessity of the Field Viewpoint

前提：非常に小さなスケールや非常に大きなスケールの物理を理解したい。

なぜ**場**の量子化を学ばなければならないのか？

* 単一粒子の相対論的波動方程式は矛盾を生む。

このようなアプローチが上手くいかない理由

* Einsteinの関係 $E=mc^2$ は粒子の生成を許す。
* 摂動論において多粒子状態が中間状態に現れる。
* 遷移振幅が因果律を破る。

場の量子論を学ぶ理由

* 多粒子状態を自然に扱える。
* 異なる粒子数の状態間の遷移を扱える。
* **反粒子** を導入することで因果律を守る。
* スピンと統計の関係を説明できる。
* 非常に良い精度で理論と実験が一致する。

## 2.2 Elements of Classical Field Theory

後で必要になる場の古典論のいくつかを復習する。

### ラグランジアン形式

局所場の理論の作用
$$
    S = \int L \ dt = \int \mathcal{L}(\phi, \partial_\mu \phi) \ d^4x
$$
最小作用の原理よりEuler-Lagrange方程式が得られる
$$
    \partial_\mu \left( \frac{\partial \mathcal{L}}{\partial (\partial_\mu \phi)} \right) - \frac{\partial \mathcal{L}}{\partial \phi} = 0
$$

形式と利点

* ラグランジアン形式は相対論的力学に適している。
* ハミルトニアン形式は量子化に適している。

### ハミルトニアン形式

共役運動量（密度）
$$
    \pi(\bm{x}) = \frac{\partial \mathcal{L}}{\partial \dot{\phi}(\bm{x})}
$$
ハミルトニアン（密度）
$$
    \mathcal{H} = \pi \dot{\phi} - \mathcal{L}
$$

<div class="example">

$$
    \mathcal{L} = \frac{1}{2} (\partial_\mu \phi)^2 - \frac{1}{2} m^2 \phi^2
$$
運動方程式（Klein-Gordon方程式；**古典**場の方程式）
$$
    (\partial^\mu \partial_\mu + m^2) \phi = 0
$$
ハミルトニアン
$$
    H = \int d^3x \ \left[ \frac{1}{2} \pi^2 + \frac{1}{2} (\nabla \phi)^2 + \frac{1}{2} m^2 \phi^2 \right]
$$

</div>

### Noetherの定理

場の古典論における対称性と保存則の関係は**Noetherの定理**に集約される。

場 $\phi$ の微小な連続変換（$\alpha$は微小なパラメータ）
$$
    \phi(x) \to \phi'(x) = \phi(x) + \alpha\Delta \phi(x)
$$
運動方程式を不変に保つ場合，この変換は**対称性**であるという。そのためにはラグランジアンが4-divergenceを除いて不変であれば十分である：
$$
    \mathcal{L}(x) \to \mathcal{L}(x) + \alpha \partial_\mu \mathcal{J}^\mu(x)
$$
ここで $\mathcal{J}^\mu$ はある関数である。

このように対称性が存在する場合，運動方程式を満たすとき次のカレントの保存則が成り立つ：
$$
    \partial_\mu j^\mu(x) = 0 \quad \text{for} \quad j^\mu(x) = \frac{\partial \mathcal{L}}{\partial (\partial_\mu \phi)} \Delta \phi - \mathcal{J}^\mu
$$
このような保存則はチャージ
$$
    Q \coloneqq \int_{\text{all space}} j^0(x) \ d^3x
$$
が時間的に一定であることを意味する。

<div class="example">

最も簡単な例
$$
    \mathcal{L} = \frac{1}{2}(\partial_\mu\phi)^2
$$
対称性変換は
$$
    \phi \to \phi + \alpha \quad (\alpha=\text{const.})
$$
保存カレントは
$$
    j^\mu = \partial^\mu \phi
$$

</div>

<div class="example">

少し非自明な例
$$
    \mathcal{L} = |\partial_\mu \phi|^2 - m^2 |\phi|^2
$$
ここで $\phi$ は**複素数**値の場で運動方程式はKlein-Gordon方程式である。対称性変換は
$$
    \phi \to e^{i\alpha} \phi \quad (\alpha=\text{const.})
$$
保存カレントは
$$
    j^\mu = i[(\partial^\mu\phi^*)\phi - \phi^*( \partial^\mu \phi)]
$$

</div>

微小並進
$$
    x^\mu \to x^\mu - a^\mu \quad (a^\mu = \text{const.})
$$
に対するカレントは**エネルギー・運動量テンソル**といい
$$
    T^{\mu}{}_{\nu} \coloneqq \frac{\partial \mathcal{L}}{\partial (\partial_\mu \phi)} \partial_\nu \phi - \mathcal{L}\delta^\mu{}_\nu
$$
時間並進に対するチャージはハミルトニアン
$$
    H = \int T^{00} \ d^3x = \int \mathcal{H} \ d^3x
$$
空間並進に対するチャージは運動量（正準運動量ではない）
$$
    P^i = \int T^{0i} \ d^3x
$$
これは場によって運ばれる（物理的な）運動量と解釈する。

## 2.3 The Klein-Gordon Field as Harmonic Oscillators

最も単純な実Klein-Gordon場の形式的な取り扱いから議論を始める。

### 場の量子化

アイデア：場の古典論からはじめて，それを「量子化」する。つまり力学変数を正準交換関係（CCR）に従う演算子にする。

<div class="recall">

離散系におけるCCR
$$
    [q_i, p_j] = i\delta_{ij}; \quad [q_i, q_j] = [p_i, p_j] = 0
$$

</div>

自然な一般化（Schrödinger描像）：
$$
    [\phi(\bm{x}), \pi(\bm{y})] = i\delta^{(3)}(\bm{x}-\bm{y}); \quad [\phi(\bm{x}), \phi(\bm{y})] = [\pi(\bm{x}), \pi(\bm{y})] = 0
$$
ここで $\pi(\bm{x})$ は共役運動量**密度**なのでKronecker deltaではなくDirac deltaが現れることに注意。

### 理論を解く

次に理論を「解く」；ハミルトニアンの固有値と固有状態を見つける。

指針：Klein-Gordon方程式をFourier空間で表す。

古典Klein-Gordon場をFourier変換すると（$\phi^*(\bm{p})= \phi(-\bm{p})$ とすれば $\phi(\bm{x})$ は実数）
$$
    \phi(\bm{x},t) = \int \frac{d^3p}{(2\pi)^3} e^{i\bm{p}\cdot\bm{x}} \phi(\bm{p},t)
$$
運動方程式は振動数 $\omega_{\bm{p}} = \sqrt{|\bm{p}|^2 + m^2}$ の単純調和振動子の運動方程式になる：
$$
    \left[\frac{\partial^2}{\partial t^2} + \omega_p^2 \right] \phi(\bm{p},t) = 0
$$
この系は簡単に解ける。

<div class="recall">

単純調和振動子系
$$
    H_{\text{SHO}} = \frac{1}{2}p^2 + \frac{1}{2}\omega^2 \phi^2
$$
固有値を見つけるために $\phi$ と $p$ を昇降演算子で表す：
$$
    \phi = \frac{1}{\sqrt{2\omega}}(a+a^\dagger), \quad p = -i\sqrt{\frac{\omega}{2}}(a - a^\dagger)
$$
CCRは
$$
    [a, a^\dagger] = 1; \quad [a, a] = [a^\dagger, a^\dagger] = 0
$$
ハミルトニアンは
$$
    H_{\text{SHO}} = \omega \left(a^\dagger a + \frac{1}{2}\right)
$$
$a\ket{0}=0$ となる状態 $\ket{0}$ は固有値 $\omega/2$ の固有状態である。さらに，
$$
    [H_{\text{SHO}}, a^\dagger] = \omega a^\dagger,\quad [H_{\text{SHO}}, a] = -\omega a
$$
より状態 $(a^\dagger)^n \ket{0}$ は固有値 $(n+1/2)\omega$ の固有状態である。これらがスペクトルを完全に尽くす。

</div>

同様に
$$
\begin{align*}
    \phi(\bm{x}) &= \int\frac{d^3p}{(2\pi)^3} \frac{1}{\sqrt{2\omega_{\bm{p}}}} \left(a_{\bm{p}} e^{i\bm{p}\cdot\bm{x}} + a_{\bm{p}}^\dagger e^{-i\bm{p}\cdot\bm{x}}\right)
    \\
    \pi(\bm{x}) &= \int\frac{d^3p}{(2\pi)^3} (-i)\sqrt{\frac{\omega_{\bm{p}}}{2}} \left(a_{\bm{p}} e^{i\bm{p}\cdot\bm{x}} - a_{\bm{p}}^\dagger e^{-i\bm{p}\cdot\bm{x}}\right)
\end{align*}
$$
CCRは
$$
    [a_{\bm{p}}, a_{\bm{p}'}^\dagger] = (2\pi)^{3} \delta^{(3)}(\bm{p}-\bm{p}'); \quad [a_{\bm{p}}, a_{\bm{p}'}] = [a_{\bm{p}}^\dagger, a_{\bm{p}'}^\dagger] = 0
$$
ハミルトニアンは
$$
    H = \int \frac{d^3p}{(2\pi)^3} \omega_{\bm{p}} \left(a_{\bm{p}}^\dagger a_{\bm{p}} + \frac{1}{2}[a_{\bm{p}},a_{\bm{p}}^{\dagger}]\right)
$$
第二項は無限大のc数だが，実験ではエネルギー**差**しか測定できないので，この項は無視することができる。しかし深いレベルで問題を引き起こす可能性はある（エピローグへ）。さらに
$$
    [H, a_{\bm{p}}^\dagger] = \omega_{\bm{p}} a_{\bm{p}}^\dagger, \quad [H, a_{\bm{p}}] = -\omega_{\bm{p}} a_{\bm{p}}
$$
より状態 $(a_{\bm{p}}^\dagger)^n \ket{0}$ は固有値 $(n+1/2)\omega_{\bm{p}}$ の固有状態である。これらがスペクトルを完全に尽くす。

### 粒子と統計

運動量は
$$
    \bm{P} = -\int d^3x \ \pi(\bm{x}) \nabla \phi(\bm{x}) = \int \frac{d^3p}{(2\pi)^3} \bm{p} a_{\bm{p}}^\dagger a_{\bm{p}}
$$
よって，演算子 $a_{\bm{p}}^\dagger$ は運動量 $\bm{p}$とエネルギー $\omega_{\bm{p}}$ の状態を生成する。同様に，状態 $a_{\bm{p}}^\dagger a_{\bm{q}}^\dagger\cdots$ は運動量 $\bm{p}+\bm{q}+\cdots$とエネルギー $\omega_{\bm{p}} + \omega_{\bm{q}} + \cdots$ の状態を生成する。

これらの状態は適切な相対論的エネルギー・運動量関係を持つ離散的なスペクトルを持つので，これらの状態を**粒子**と解釈する。**粒子**といっても空間的に局在していなければならないものではないことに注意する。以降は，$\omega_{\bm{p}}$ を粒子のエネルギーとして $E_{\bm{p}}$ と書くことにする。

粒子の統計も決定できる。2粒子状態はCCRより
$$
    a_{\bm{p}}^\dagger a_{\bm{q}}^\dagger \ket{0} = a_{\bm{q}}^\dagger a_{\bm{p}}^\dagger \ket{0}
$$
さらに運動量 $\bm{p}$ の1つのモードは任意個の粒子を持つことができる。したがってKlein-Gordon粒子は**Bose-Einstein統計**に従う。

### 規格化

真空は $\braket{0|0} =1$ となるように規格化するのが自然。

1粒子状態は
$$
    \ket{\bm{p}} = \sqrt{2E_{\bm{p}}} a_{\bm{p}}^\dagger \ket{0}
$$
と規格化するのが良い。なぜなら規格化条件
$$
    \braket{\bm{p}|\bm{q}} = 2E_{\bm{p}} (2\pi)^3 \delta^{(3)}(\bm{p}-\bm{q})
$$
がLorentz不変であるからである。ここで因子 $2$ は単に便利さのために付けている。

Lorentz変換 $\Lambda$ はHilbert空間上のあるユニタリー演算子 $U(\Lambda)$ によって表される。我々の規格化では
$$
    U(\Lambda) \ket{\bm{p}} = \ket{\Lambda \bm{p}}
$$

この規格化を用いる場合，他の場所で $2E_{\bm{p}}$ を付ける必要がある。例えば完全系では
$$
    (\bm{1})_{\text{1-particle}} = \int \frac{d^3p}{(2\pi)^3}  \ket{\bm{p}}\frac{1}{2E_{\bm{p}}}\bra{\bm{p}}
$$
これは1粒子状態の部分空間に対する恒等演算子であり，他の部分空間に対してはゼロである。このような形の積分はLorentz不変な3元運動量積分として頻繁に現れる。

さらにこのような積分は
$$
    \int \frac{d^3p}{(2\pi)^3} \frac{1}{2E_{\bm{p}}} = \left.\int \frac{d^4p}{(2\pi)^4} (2\pi) \delta(p^2 - m^2)\right|_{p^0>0}
$$
と書け，4元運動量空間における双曲面 $p^2=m^2$ の $p^0>0$ 枝上の積分とみなせる。

### 位置固有状態

状態 $\phi(\bm{x})\ket{0}$ の解釈を考える。
$$
    \phi(\bm{x})\ket{0} = \int \frac{d^3p}{(2\pi)^3} \frac{1}{\sqrt{2E_{\bm{p}}}} e^{i\bm{p}\cdot\bm{x}}\ket{\bm{p}}
$$
は確定した運動量を持つ1粒子状態の線形結合である。これは因子 $1/\sqrt{2E_{\bm{p}}}$ を除けば，量子力学における位置固有状態 $\ket{\bm{x}}$ のFourier変換と同じである。ところで，因子 $1/\sqrt{2E_{\bm{p}}}$ は非相対論的な小さい運動量に対してほぼ定数である。そこで演算子 $\phi(\bm{x})$ を，真空に作用して**位置 $\bm{x}$ に粒子を生成する**演算子と解釈する。

この解釈に基づくと，1粒子状態 $\ket{\bm{p}}$ の位置表示は
$$
    \braket{0|\phi(\bm{x})|\bm{p}} = e^{i\bm{p}\cdot\bm{x}}
$$
となる。これは非相対論的量子力学における波動関数と同じである。

## 2.4 The Klein-Gordon Field in Space-Time

## 参考文献
