---
category: "peskin"
title: "2章 要約"
description: "Peskin 2章 The Klein-Gordon Field の要約"
---
参考文献：[@Peskin:1995ev]

<div class="memo">

もう少し要約は短くしたい。

</div>

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

時間に依存する量や因果律の問題を議論しやすいHeisenberg描像に移行する。

Heisenberg描像（$\pi(x)$ についても同様）
$$
    \phi(x) = \phi(\bm{x},t) = e^{iHt} \phi(\bm{x}) e^{-iHt}
$$
Heisenberg運動方程式
$$
    i\frac{\partial}{\partial t} \mathcal{O} = [\mathcal{O}, H]
$$
より $\phi,\pi$ の時間依存性は
$$
    i\frac{\partial}{\partial t}\phi(\bm{x},t) = i\pi(\bm{x},t),\quad i\frac{\partial}{\partial t}\pi(\bm{x},t) = -i(-\nabla^2 + m^2)\phi(\bm{x},t)
$$
これらを組み合わせるとKlein-Gordon方程式が得られる：
$$
    (\partial^\mu \partial_\mu + m^2) \phi(x) = 0
$$

生成・消滅演算子で $\phi(x),\pi(x)$ を表すと，それらの時間依存性をよりよく理解できる。まず以下の恒等式に注意する：
$$
    e^{iHt} a_{\bm{p}} e^{-iHt} = a_{\bm{p}}e^{-iE_{\bm{p}}t}, \quad e^{iHt} a_{\bm{p}}^\dagger e^{-iHt} = a_{\bm{p}}^\dagger e^{iE_{\bm{p}}t}
$$
これを用いると
$$
\begin{align*}
    \phi(\bm{x},t) &= \left.\int\frac{d^3p}{(2\pi)^3}\frac{1}{\sqrt{2E_{\bm{p}}}}(a_{\bm{p}}e^{-ip\cdot x} + a_{\bm{p}}^\dagger e^{ip\cdot x})\right|_{p^0=E_{\bm{p}}};
    \\
    \pi(\bm{x},t) &= \frac{\partial}{\partial t}\phi(\bm{x},t)
\end{align*}
$$
ここでは生成・消滅演算子は常にSchrödinger描像のものであることに注意する。

$\phi(x)$ と $\phi(0)$ を関係づけるために，$H$ ではなく $\bm{P}$ を使うこともできることを言っておく。まず以下の恒等式に注意する：
$$
    e^{-i\bm{P}\cdot\bm{x}}a_{\bm{p}}e^{i\bm{P}\cdot\bm{x}} = a_{\bm{p}}e^{i\bm{p}\cdot\bm{x}}, \quad e^{-i\bm{P}\cdot\bm{x}}a_{\bm{p}}^\dagger e^{i\bm{P}\cdot\bm{x}} = a_{\bm{p}}^\dagger e^{-i\bm{p}\cdot\bm{x}}
$$
これを用いると
$$
    \phi(x) = e^{iP\cdot x}\phi(0)e^{-iP\cdot x},\quad P^\mu = (H, \bm{P})
$$

生成・消滅演算子で $\phi(x),\pi(x)$ を表した式は，量子場 $\phi(x)$ の粒子と波の二重性の解釈を明確にしている。

* 一方では，$\phi(x)$ は位置 $x$ に粒子を生成する演算子である。

* 他方では，$\phi(x)$ はKlein-Gordon方程式の解（$e^{-ip\cdot x}, e^{ip\cdot x}$）の線形結合である。

指数関数の時間依存性の符号は両方現れる：もしKlein-Gordon方程式を波動関数が従う方程式とみなすなら，これらは正および負のエネルギー状態に対応する。しかし，ここではKlein-Gordon方程式は場の方程式であるとみなす。この見方では，**正振動数**モードは，その係数として，その1粒子波動関数にある粒子を**消滅**させる演算子を持ち，**負振動数**モードは，その係数として，その1粒子波動関数にある粒子を**生成**する演算子を持つ。このようにして，負のエネルギー状態の問題が解決される。

### 因果律

粒子が $y$ から $x$ へ伝播する振幅は $D(x-y) = \braket{0|\phi(x)\phi(y)|0}$ である。この式で生き残るのは
$$
    D(x-y) = \int\frac{d^3p}{(2\pi)^3}\frac{1}{2E_{\bm{p}}} e^{-ip\cdot(x-y)}
$$
すでに見たように，この形の積分はLorentz不変である。

* $x-y$ が純粋に時間方向である場合（$x^0-y^0=t, \bm{x}-\bm{y}=0$）
  $$
    D(x-y) \underset{t\to\infty}{\sim} e^{-imt}
  $$

* $x-y$ が純粋に空間方向である場合（$x^0-y^0=0, \bm{x}-\bm{y}=\bm{r}$）
  $$
    D(x-y) \underset{r\to\infty}{\sim} e^{-mr} \ne 0
  $$

因果律を本当に議論するためには，粒子が空間的間隔を超えて伝播できるかどうかではなく，ある点で行われた**測定**が，その点から空間的に離れた別の点で行われる測定に影響を与えるかどうかを問うべきである。

測定しようとする最も単純なものは $\phi(x)$ であるから，交換子 $[\phi(x), \phi(y)]$ を考える。もしこの交換子が空間的に離れた点でゼロであれば，ある点での測定は空間的に離れた別の点での測定に影響を与えないことになる（同時に観測可能）。このとき $\phi(x)$ の任意の関数を含む交換子もゼロなので，因果律は極めて一般的に保存される。

実際，計算すると
$$
    [\phi(x), \phi(y)] = D(x-y) - D(y-x)
$$

* $(x-y)^2 < 0$（spacelike）のとき，第二項だけLorentz変換して第一項に変換できるため，交換子はゼロになる。

* $(x-y)^2 > 0$（timelike）のとき，そのような連続的なLorentz変換は存在しないため，交換子はゼロにならない。

したがって，Klein-Gordon理論において，spacelikeな2点での測定は互いに影響を与えない。

このような機構を適切に理解するには，異なる粒子と反粒子の励起を持つ**複素**Klein-Gordon場を考える必要がある。$\phi(x)$ を複素数値とみなすと保存電荷を追加できる。この理論を量子化すると，

* $\phi(x)$ は正に帯電した粒子を生成し，負に帯電した粒子を消滅させる。

* $\phi^\dagger(x)$ は負に帯電した粒子を生成し，正に帯電した粒子を消滅させる。

再び交換子 $[\phi(x), \phi^\dagger(y)]$ は非ゼロの寄与を持つので，因果律を守るためにはspacelikeな2点についてゼロにならなければならない。これは実Klein-Gordon理論の場合の2つの項と同様の時空の解釈を持つが，電荷が付随している。第一項は $y$ から $x$ への負に帯電した粒子の伝播を表し，第二項は $x$ から $y$ への正に帯電した粒子の伝播を表す。これらが相殺するには，これら両方の粒子が存在し，両方とも同じ質量を持つ必要がある。このように因果律はすべての粒子が同じ質量と反対の量子数（今の場合は電荷）を持つ反粒子の存在を必要とする。なお，実Klein-Gordon理論の場合は，粒子はそれ自身が反粒子である。

### Klein-Gordon propagator

交換子はc数なので $[\phi(x), \phi(y)] = \braket{0|[\phi(x), \phi(y)]|0}$ と書ける。とりあえず $x^0>y^0$ とすると次のようになる：
$$
    \braket{0|[\phi(x), \phi(y)]|0} \underset{x^0>y^0}{=} \int\frac{d^3p}{(2\pi)^3}\int\frac{dp^0}{2\pi i}\frac{-1}{p^2-m^2}e^{-ip\cdot(x-y)}
$$
一方で $x^0<y^0$ とするとゼロになる。そこで
$$
    D_R(x-y) \coloneqq \theta(x^0-y^0)\braket{0|[\phi(x),\phi(y)]|0}
$$
と定義する。これはKlein-Gordon演算子のGreen関数になっている：
$$
    (\partial^\mu \partial_\mu + m^2) D_R(x-y) = -i\delta^{(4)}(x-y)
$$
$x^0< y^0$でゼロになるので，これは**遅延**Green関数である。

また上の積分は次のように求めることもできる：Fourier変換
$$
    D_R(x-y) = \int\frac{d^4p}{(2\pi)^4} e^{-ip\cdot(x-y)} \tilde{D}_R(p)
$$
Green関数の方程式は代数的方程式になる：
$$
    (-p^2 + m^2) \tilde{D}_R(p) = -i
$$
したがって
$$
    D_R(x-y) = \int\frac{d^4p}{(2\pi)^4} \frac{-i}{p^2 - m^2} e^{-ip\cdot(x-y)}
$$
この $p^0$ 積分は4通りの経路で評価することができる。特に極 $p^0=-E_{\bm{p}}$ の下をくぐり，極 $p^0=E_{\bm{p}}$ の上をまたぐ経路が非常に有用である。これを**Feynman処方**と呼ぶ。これを覚える便利な方法は積分を経路を動かさずに極を動かして次のように書くことである：
$$
    D_F(x-y) = \int\frac{d^4p}{(2\pi)^4} \frac{-i}{p^2 - m^2 + i\epsilon} e^{-ip\cdot(x-y)}
$$
この積分を評価すると次を得る：
$$
    D_F(x-y) = \begin{cases}
        D(x-y) & x^0>y^0
        \\
        D(y-x) & x^0<y^0
    \end{cases} \eqqcolon \braket{0|T\phi(x)\phi(y)|0}
$$
記号 $T$ は「時間順序積」記号であり，後に続く演算子を，一番遅い時刻のものが左に来るように並べる。$D_F$ はKlein-Gordon演算子のGreen関数であり伝播関数であるからKlein-Gordon粒子の**Feynman propagator**と呼ばれる。

我々が実際の計算を行えるようになるまでには長い道のりがある。これまでの議論は，場の方程式が線形であり相互作用のない**自由**Klein-Gordon理論についてのみであった。この理論は，個々の粒子は孤立したモードの中に生きており，互いの存在や他の種類の粒子の存在には無関心である。このような理論では散乱などによる観測はできない。しかし，ここで開発した形式論は相互作用のある理論における摂動計算の基礎を与えるという意味で非常に重要である。

### 古典的なソースによる粒子の生成

直ぐに扱える種類の相互作用がある：Klein-Gordon場が外部の既知な古典的なソース場 $j(x)$ に結合している場合である。すなわち場の方程式
$$
    (\partial^\mu \partial_\mu + m^2) \phi(x) = j(x)
$$
を考える。真空状態から出発した場合，$j(x)$ がONになり再びOFFになった後，何が起こるだろうか？

ラグランジアンは
$$
    \mathcal{L} = \frac{1}{2}(\partial_\mu \phi)^2 - \frac{1}{2} m^2 \phi^2 + j(x)\phi(x)
$$
$j(x)$ がONになる前
$$
    \phi_0(x) = \int\frac{d^3p}{(2\pi)^3}\frac{1}{\sqrt{2E_{\bm{p}}}}(a_{\bm{p}}e^{-ip\cdot x} + a_{\bm{p}}^\dagger e^{ip\cdot x})
$$
$j(x)$ がONになっているとき遅延Green関数を用いて
$$
\begin{align*}
    \phi(x) &= \phi_0(x) + \int d^4y \ D_R(x-y) j(y)
    \\
    &= \phi_0(x) + i\int d^4y \int \frac{d^3p}{(2\pi)^3}\frac{1}{2E_{\bm{p}}}\theta(x^0-y^0) \left(e^{-ip\cdot(x-y)} - e^{ip\cdot(x-y)}\right) j(y)
\end{align*}
$$
すべての $j$ が過去になるまで待つと積分領域で $\theta(x^0-y^0)=1$ になるので $\phi(x)$ は $j$ のFourier変換のみを含む：
$$
    \tilde{j}(p) = \int d^4y \ e^{ip\cdot y} j(y)
$$
これは $p^2=m^2$ となる4元運動量 $p$ で評価される。したがって次を得る：
$$
    \phi(x) = \int\frac{d^3p}{(2\pi)^3}\frac{1}{\sqrt{2E_{\bm{p}}}}\left\{\left(a_{\bm{p}}+\frac{i}{\sqrt{2E_{\bm{p}}}}\tilde{j}(p)\right)e^{-ip\cdot x}+\text{h.c.}\right\}
$$
これで $j(x)$ が作用した後のハミルトニアンが分かる（単に置き換えれば良い）：
$$
    H = \int \frac{d^3p}{(2\pi)^3} E_{\bm{p}} \left(a_{\bm{p}}^\dagger + \frac{-i}{\sqrt{2E_{\bm{p}}}}\tilde{j}^*(p)\right) \left(a_{\bm{p}} + \frac{i}{\sqrt{2E_{\bm{p}}}}\tilde{j}(p)\right)
$$
ソースがOFFになった後の系のエネルギーは
$$
    \braket{0|H|0} = \int \frac{d^3p}{(2\pi)^3}\frac{1}{2}|\tilde{j}(p)|^2
$$
ここで $\ket{0}$ は自由理論の基底状態である。$|\tilde{j}(p)|^2/2E_{\bm{p}}$ をモード $\bm{p}$ に粒子を生成する確率密度と同一視することで，この結果を粒子の言葉で解釈できる。そうすると，生成された粒子の数は
$$  
    \int dN = \int \frac{d^3p}{(2\pi)^3} \frac{|\tilde{j}(p)|^2}{2E_{\bm{p}}}
$$
質量殻上 ($p^2=m^2$) のKlein-Gordon波と共鳴する $j(x)$ のFourier成分のみが粒子生成に有効である。このテーマについては問題4.1で再び議論する。6章では制動放射という類似の問題を扱う。

## 問題

* 2.1 古典電磁気学（ソースなし）のラグランジアン形式について

* 2.2 複素スカラー場の理論の量子化について

* 2.3 $D(x-y)$ の積分の具体的な評価

## 参考文献
