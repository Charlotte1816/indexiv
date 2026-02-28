---
category: "peskin"
title: "2.4 時空上のKlein-Gordon場"
description: "時空上のKlein-Gordon場について"
order: 24
---
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

## 因果律

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

## Klein-Gordon propagator

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

## 古典的なソースによる粒子の生成

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
