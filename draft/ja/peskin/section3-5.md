---
category: "peskin"
title: "3.5 Dirac場の量子化"
description: "Dirac場の量子化について"
order: 35
---
ラグランジアンは
$$
    \mathcal{L} = \bar{\psi}(i\cancel{\partial}-m)\psi = \bar{\psi}(i\gamma^\mu\partial_\mu - m)\psi
$$
ハミルトニアンは
$$
    \mathcal{H} = \bar{\psi}(-i\bm{\gamma}\cdot\bm{\nabla} + m)\psi
$$
ここで $\bm{\alpha}=\gamma^0\bm{\gamma}$，$\beta=\gamma^0$ と定義すると 1 粒子量子力学のものと同じ形になる。

## 間違った量子化：スピンと統計に関する教訓として

Klein-Gordon場と同様に同時刻正準交換関係
$$
    [\psi_a(\bm{x}),\psi_b^\dagger(\bm{y})] = \delta^{(3)}(\bm{x}-\bm{y})\delta_{ab}
$$
を課す。ここで $a,\ b$ はスピノール添え字である。最初にやることは交換関係を生成・消滅演算子で表しハミルトニアンを対角化することである。3.3節より $u^s(\bm{p})e^{-i\bm{p}\cdot \bm{x}}$ は固有値 $E_{\bm{p}}$ の固有関数であり，$v^s(\bm{p})e^{-i\bm{p}\cdot \bm{x}}$ は固有値 $-E_{\bm{p}}$ の固有関数である。これらは完全系をなす。この基底で場 $\psi$ を展開する：
$$
    \psi(\bm{x}) = \int\frac{d^3p}{(2\pi)^3}\frac{1}{\sqrt{2E_{\bm{p}}}}e^{i\bm{p}\cdot\bm{x}}\sum_{s=1,2}(a_{\bm{p}}^s u^s(\bm{p}) + b_{-\bm{p}}^{s} v^s(-\bm{p}))
$$
ここで $a_{\bm{p}}^s$ と $b_{\bm{p}}^s$ は未知の演算子で交換関係
$$
    [a_{\bm{p}}^r,a_{\bm{q}}^{s\dagger}] = [b_{\bm{p}}^r,b_{\bm{q}}^{s\dagger}] = (2\pi)^3\delta^{(3)}(\bm{p}-\bm{q})\delta^{rs}
$$
を満たすとすると場 $\psi,\ \bar{\psi}$ の交換関係が満たされる。ハミルトニアンは
$$
    H = \int\frac{d^3p}{(2\pi)^3}\sum_{s}(E_{\bm{p}}a_{\bm{p}}^{s\dagger}a_{\bm{p}}^s - E_{\bm{p}}b_{\bm{p}}^{s\dagger}b_{\bm{p}}^s)
$$
となる。第二項では $b^\dagger$ によって多くの粒子を生成することで，エネルギーを無限に下げることができてしまう。

次にこの理論の因果律をチェックする。そのためには交換関係を非同時刻で評価し，光円錐の外側でゼロになるかどうかを確認する必要がある。Heisenberg描像に移り交換関係を評価すると
$$
    [\psi_a(x),\bar{\psi}_b(y)] = (i\cancel{\partial}_x + m)_{ab}[\phi(x),\phi(y)]
$$
ここで $\phi$ は実Klein-Gordon場であり，その交換関係は光円錐の外側でゼロになる。

しかし奇妙な点がある。真空 $\ket{0}$ を $a_{\bm{p}}^s\ket{0} = b_{\bm{p}}^s\ket{0} = 0$ と定義すると，
$$
    [\psi_a(x),\bar{\psi}_b(y)] = \braket{0|\psi_a(x)\bar{\psi}_b(y)|0} - \braket{0|\bar{\psi}_b(y)\psi_a(x)|0}
$$
となる。Klein-Gordon場の場合は粒子が $y$ から $x$ へ粒子が伝播することは $x$ から $y$ へ反粒子が伝播することによって光円錐の外側で相殺された。しかしここでは第二項はゼロであり，このような相殺は第一項だけで生じる。つまり相殺は $y$ から $x$ へ伝播する正エネルギー粒子と負エネルギー粒子の間で生じる。

この観察からさきほど述べた負のエネルギー問題を解決策が導かれる。仮定された交換関係や真空の定義を忘れ，正エネルギー粒子が両方向に伝播する方法を考えてみる。

最初に振幅 $\braket{0|\psi(x)\bar{\psi}(y)|0}$ を考える。これは $y$ から $x$ へ正エネルギー粒子が伝播する振幅である。この場合，状態 $\bar{\psi}(y)\ket{0}$ は正エネルギーあるいは負周波数成分のみから成る必要がある。つまり $\psi(y)$ の $a_{\bm{p}}^\dagger$ 項のみが寄与でき，$b_{\bm{p}}^\dagger$ は真空を消滅させる必要がある。同様に $\bra{0}\psi(x)$ は正周波数成分のみを含む。したがって，
$$
    \braket{0|\psi(x)\bar{\psi}(y)|0} = \braket{0|\int\frac{d^3p}{(2\pi)^3}\frac{1}{\sqrt{2E_{\bm{p}}}}\sum_r a_{\bm{r}}^r u^r(p)e^{-ip\cdot x}\int\frac{d^3q}{(2\pi)^3}\frac{1}{\sqrt{2E_{\bm{q}}}}\sum_{s}a_{\bm{q}}^{s\dagger}\bar{u}^s(q)e^{iq\cdot y}|0}
$$
となる。さらに真空の並進不変性と回転不変性から
$$
    \braket{0|a_{\bm{p}}^r a_{\bm{q}}^{s\dagger}|0} = (2\pi)^3\delta^{(3)}(\bm{p}-\bm{q})\delta^{rs}\cdot A(\bm{p})
$$
となる。ここで $A(\bm{p})$ は未知の関数であるが，ノルムの正定性から $A(\bm{p}) > 0$ でなければならない。そうすると振幅は
$$
    \braket{0|\psi(x)\bar{\psi}(y)|0} = \int\frac{d^3p}{(2\pi)^3}\frac{1}{2E_{\bm{p}}}(\cancel{p}+m)A(\bm{p})e^{-ip\cdot(x-y)}
$$
となる。これがブーストの下で不変であるためには $A(\bm{p})=A(p^2)$ でなければならない。さらに $p^2=m^2$ であるため $A(\bm{p})$ は定数でなければならない。したがって
$$
    \braket{0|\psi_a(x)\bar{\psi}_b(y)|0} = (i\cancel{\partial}_x + m)_{ab}\int\frac{d^3p}{(2\pi)^3}\frac{1}{2E_{\bm{p}}}e^{-ip\cdot(x-y)}\cdot A
$$
となる。振幅 $\braket{0|\bar{\psi}(y)\psi(x)|0}$ に対して同様の議論を行うと $a^\dagger$ は真空を消滅させる必要がある。したがって
$$
    \braket{0|\bar{\psi}_b(y)\psi_a(x)|0} = -(i\cancel{\partial}_x + m)_{ab}\int\frac{d^3p}{(2\pi)^3}\frac{1}{2E_{\bm{p}}}e^{ip\cdot(x-y)}\cdot B
$$
となる。ここで $B$ は正の定数である。$\braket{0|[\psi_a(x),\bar{\psi}_b(y)]|0}$ は光円錐の外側でゼロになるためには $A=-B$ でなければならないが，$A,\ B$ は正の定数であるためこれは不可能である。

しかし，$A=B=1$ とすると
$$
    \braket{0|\psi_a(x)\bar{\psi}_b(y)|0} = -\braket{0|\bar{\psi}_b(y)\psi_a(x)|0}
$$
となる，つまりスピノール場は**反交換**する。さらにすべての観測量は**偶数**個のスピノール場から構成されるため因果律は保つのに十分である。

さらに反交換関係を仮定すると負エネルギー問題が解決される。同時刻反交換関係は
$$
\begin{align*}
    \{\psi_a(\bm{x}),\psi_b^\dagger(\bm{y})\} &= \delta^{(3)}(\bm{x}-\bm{y})\delta_{ab} \\
    \{\psi_a(\bm{x}),\psi_b(\bm{y})\} &= \{\psi_a^\dagger(\bm{x}),\psi_b^\dagger(\bm{y})\} = 0
\end{align*}
$$
である。場 $\psi$ を同様に展開することができ，生成・消滅演算子が
$$
    \{a_{\bm{p}}^r,a_{\bm{q}}^{s\dagger}\} = \{b_{\bm{p}}^r,b_{\bm{q}}^{s\dagger}\} = (2\pi)^3\delta^{(3)}(\bm{p}-\bm{q})\delta^{rs}
$$
を満たせば場 $\psi,\ \bar{\psi}$ の反交換関係が満たされる。ハミルトニアンは以前と同様に
$$
    H = \int\frac{d^3p}{(2\pi)^3}\sum_{s}(E_{\bm{p}}a_{\bm{p}}^{s\dagger}a_{\bm{p}}^s - E_{\bm{p}}b_{\bm{p}}^{s\dagger}b_{\bm{p}}^s)
$$
となる。しかし反交換関係は $b_{\bm{p}}$ と $b_{\bm{p}}^\dagger$ について対称であるため次のように置き換えることができる：
$$
    \tilde{b}_{\bm{p}}^s \coloneqq b_{\bm{p}}^{s\dagger},\quad \tilde{b}_{\bm{p}}^{s\dagger} \coloneqq b_{\bm{p}}^s
$$
そうするとハミルトニアンの第二項は
$$
    -E_{\bm{p}}b_{\bm{p}}^{s\dagger}b_{\bm{p}}^s = E_{\bm{p}}\tilde{b}_{\bm{p}}^{s\dagger}\tilde{b}_{\bm{p}}^s - \text{const.}
$$
となる。真空 $\ket{0}$ を $a_{\bm{p}}^s$ と $\tilde{b}_{\bm{p}}^s$ で消滅する状態と定義すると，すべての励起状態は正のエネルギーを持つ。

ところで $(\tilde{b}^\dagger)^2 = 0$ であるから，状態は同じ運動量の 2 つ以上の粒子で満たすことはできない。また反交換関係より他粒子状態は任意の 2 つの粒子について反対称である。つまり生成・消滅演算子が**反交換**関係に従うならば，対応する粒子は**Fermi-Dirac統計**に従う。

この結論はより一般的な結果の一部である。Lorentz不変性，正エネルギー，正定値性，因果律が満たされるためには，整数スピンの粒子はBose-Einstein統計に従い，半整数スピンの粒子はFermi-Dirac統計に従わなければならない。

## Dirac場の量子化

正しい方法でDirac場を量子化する。今後，$\tilde{b}_{\bm{p}}^s$ を $b_{\bm{p}}^s$ と書き，$\tilde{b}_{\bm{p}}^{s\dagger}$ を $b_{\bm{p}}^{s\dagger}$ と書くことにする。上の間違った量子化は忘れるべきである。

場は
$$
\begin{align*}
    \psi(x) &= \int\frac{d^3p}{(2\pi)^3}\frac{1}{\sqrt{2E_{\bm{p}}}}\sum_{s=1,2}(a_{\bm{p}}^s u^s(p)e^{-ip\cdot x} + b_{\bm{p}}^{s\dagger} v^s(p)e^{ip\cdot x})
    \\
    \bar{\psi}(x) &= \int\frac{d^3p}{(2\pi)^3}\frac{1}{\sqrt{2E_{\bm{p}}}}\sum_{s=1,2}(b_{\bm{p}}^{s} \bar{v}^s(p)e^{-ip\cdot x} + a_{\bm{p}}^{s\dagger} \bar{u}^s(p)e^{ip\cdot x})
\end{align*}
$$
生成・消滅演算子は反交換関係に従う：
$$
    \{a_{\bm{p}}^r,a_{\bm{q}}^{s\dagger}\} = \{b_{\bm{p}}^r,b_{\bm{q}}^{s\dagger}\} = (2\pi)^3\delta^{(3)}(\bm{p}-\bm{q})\delta^{rs}
$$
他の反交換関係はゼロである。場 $\psi$ と $\bar{\psi}$ の同時刻反交換関係は
$$
\begin{align*}
    \{\psi_a(\bm{x}),\psi_b^\dagger(\bm{y})\} &= \delta^{(3)}(\bm{x}-\bm{y})\delta_{ab} \\
    \{\psi_a(\bm{x}),\psi_b(\bm{y})\} &= \{\psi_a^\dagger(\bm{x}),\psi_b^\dagger(\bm{y})\} = 0
\end{align*}
$$
真空は次のように定義する：
$$
    a_{\bm{p}}^s\ket{0} = b_{\bm{p}}^s\ket{0} = 0
$$
ハミルトニアンは
$$
    H = \int\frac{d^3p}{(2\pi)^3}\sum_{s}E_{\bm{p}}(a_{\bm{p}}^{s\dagger}a_{\bm{p}}^s + b_{\bm{p}}^{s\dagger}b_{\bm{p}}^s)
$$
ここで $b_{\bm{p}}$ と $b_{\bm{p}}^\dagger$ の入れ替えで生じる定数項はKlein-Gordon場の場合と同様に無視した。運動量演算子は
$$
    \bm{P} = \int d^3x\ \psi^\dagger(-i\bm{\nabla})\psi = \int\frac{d^3p}{(2\pi)^3}\sum_{s}\bm{p}(a_{\bm{p}}^{s\dagger}a_{\bm{p}}^s + b_{\bm{p}}^{s\dagger}b_{\bm{p}}^s)
$$
したがって，$a_{\bm{p}}^{s\dagger}$ と $b_{\bm{p}}^{s\dagger}$ はエネルギー $E_{\bm{p}}$ と運動量 $\bm{p}$ を持つ粒子を生成する演算子である。そこで $a_{\bm{p}}^{s\dagger}$ で生成される粒子を**フェルミオン**と呼び，$b_{\bm{p}}^{s\dagger}$ で生成される粒子を**反フェルミオン**と呼ぶ。

1粒子状態は内積がLorentz不変になるように
$$
    \ket{\bm{p},s} \coloneqq \sqrt{2E_{\bm{p}}}a_{\bm{p}}^{s\dagger}\ket{0}
$$
と定義する。これはブーストに対してスピノル表現がユニタリーでないにも関わらず，Lorentz変換に対するHilbert空間上の演算子 $U(\Lambda)$ がユニタリーであることを意味する。実際，$U(\Lambda)$ は場 $\psi$ を正しく変換する。

次にフェルミオンのスピンを確認するために角運動量演算子
$$
    \bm{J} = \int d^3x\ \psi^\dagger\left(\bm{x}\times(-i\bm{\nabla}) + \frac{1}{2}\bm{\Sigma}\right)\psi
$$
を考える。非相対論的には第一項が軌道角運動量を，第二項がスピン角運動量を与える。フェルミオンがスピン $1/2$ であることを確認するために，静止した粒子を考えれば十分である。$J_z$ を状態 $a_0^{s\dagger}\ket{0}$ に作用させ，この状態が固有ベクトルであることを確認したい。$J_z$ は真空を消滅させるため $J_z a_0^{s\dagger}\ket{0} = [J_z,a_0^{s\dagger}]\ket{0}$ を計算すればよい。交換子は $J_z$ の $\bm{p}=0$ の消滅演算子を持つ項のみが寄与する。この項について軌道角運動量部分は寄与しない。スピン部分を生成・消滅演算子で表せば
$$
    J_z a_0^{s\dagger}\ket{0} = \sum_r \left(\xi^{s\dagger}\frac{\sigma^3}{2}\xi^r\right)a_0^{r\dagger}\ket{0}
$$
を得る。したがって $\xi^s=(1\ 0)^T$ では 1 粒子状態は固有値 $+1/2$ の $J_z$ の固有状態であり，$\xi^s=(0\ 1)^T$ では 1 粒子状態は固有値 $-1/2$ の $J_z$ の固有状態であることが分かる。

同様に反フェルミオンでは，$\xi^s=(1\ 0)^T$ では固有値 $-1/2$ の $J_z$ の固有状態であり，$\xi^s=(0\ 1)^T$ では固有値 $+1/2$ の $J_z$ の固有状態であることが分かる。

まとめると運動量ゼロの（反）フェルミオンの角運動量は
$$
    J_z a_0^{s\dagger}\ket{0} = \pm\frac{1}{2}a_0^{s\dagger}\ket{0},\quad J_z b_0^{s\dagger}\ket{0} = \mp\frac{1}{2}b_0^{s\dagger}\ket{0}
$$
ここで上の符号は $\xi^s=(1\ 0)^T$ のときで，下の符号は $\xi^s=(0\ 1)^T$ のときである。

Dirac理論にはもう一つ重要な保存量がある。カレント $j^\mu$ に対するチャージは
$$
    Q = \int \frac{d^3p}{(2\pi)^3}\sum_s(a_{\bm{p}}^{s\dagger}a_{\bm{p}}^s - b_{\bm{p}}^{s\dagger}b_{\bm{p}}^s)
$$
である。したがってフェルミオンはチャージ $+1$ を持ち，反フェルミオンはチャージ $-1$ を持つ。これは電磁場と結合した時の（定数倍を除いた）電荷に対応する。

## 伝播関数

* $\braket{0|\psi_a(x)\bar{\psi}_b(y)|0},\ \braket{0|\bar{\psi}_b(y)\psi_a(x)|0}$の計算
* Dirac関数の遅延Green関数の構成
* Feynman伝播関数の構成
