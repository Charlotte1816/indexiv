---
category: "peskin"
title: "3章 要約"
description: "Peskin 3章 The Dirac Field の要約"
---
参考文献：[@Peskin:1995ev]

前章で最も簡単な相対論的場の方程式について扱った。この章では，その次に簡単なDirac方程式を扱う。これは量子力学的な波動関数ではない。

## 3.1 Lorentz Invariance in Wave Equations

場の方程式が「相対論的に不変である」とは，すべての場を物理的に変換した時にそれがまた同じ方程式を満たすことをいう。このことはラグランジアンがLorentzスカラーであれば十分である。

<div class="example">

Klein-Gordon理論を考える。任意の（能動的な）Lorentz変換
$$
    x^\mu \to x'^\mu = \Lambda^\mu{}_\nu x^\nu
$$
に対してスカラー場は
$$
    \phi(x) \to \phi'(x) = \phi(\Lambda^{-1}x)
$$
と変換される。このときラグランジアンもLorentzスカラーになる。同様の計算により運動方程式も不変である。

</div>

ベクトル場 $V^\mu(x)$ の場合は向きも順方向に変換される：
$$
    V^\mu(x) \to V'^\mu(x) = \Lambda^\mu{}_\nu V^\nu(\Lambda^{-1}x)
$$
同様にテンソル場の場合は添え字に対応する数の $\Lambda$ が含まれる。このような場を用いてLorentz不変な運動方程式やラグランジアンを構成することができる。

<div class="example">

Maxwell方程式は
$$
    \partial_\mu F^{\mu\nu} = 0
$$
そのラグランジアンは
$$
    \mathcal{L} = -\frac{1}{4}F_{\mu\nu}F^{\mu\nu}
$$

</div>

実はこの種の構成要素以外にも他の構成要素が存在する。場に対する可能なすべての変換則を系統的に調べよう。簡単のため線形変換に注目する。もし場 $\Phi_a(x)$ が $n$ 成分のmultipletであればLorentz変換に対する変換則は $n\times n$ 行列 $M(\Lambda)$ を用いて次のように書ける：
$$
    \Phi_a(x) \to M_{ab}(\Lambda)\Phi_b(\Lambda^{-1}x)
$$
最も一般的な非線形変換則もこの線形変換から構築できるのでこれで十分である。

このような変換はLorentz**群**の（行列）**表現**を成す。我々が知りたいのはこの表現が何かということである。

<div class="example">

3 次元の回転群について考える。これは任意の次元 $n$ の表現を持つ。最も重要な非自明な表現はスピン $1/2$ の粒子に対応する 2 次元表現である。この表現は次のように表すことが出来る：
$$
    U = \exp\left(-\frac{i\theta^i\sigma^i}{2}\right)
$$
ここで $\theta^i$ は 3 つの任意のパラメータであり，$\sigma^i$ はPauli行列である。

</div>

任意の連続群に対して，恒等変換に無限に近い変換はあるベクトル空間を成す。これを群の**Lie代数**という。このベクトル空間の基底をLie代数あるいは群の**生成子**という。

<div class="example">

回転群の場合，生成子は角運動量演算子 $J^i$ であり，そのLie代数は次の交換関係によって定まる：
$$
    [J^i, J^j] = i\epsilon^{ijk}J^k
$$
有限の回転は生成子の指数関数で表すことができる：
$$
    U = \exp\left(-i\theta^i J^i\right)
$$
これは軸 $\hat{\theta}^i$ 周りの $\theta$ 回転を表している。さきほどの例ではLie代数の表現
$$
    J^i \to \frac{\sigma^i}{2}
$$
が回転群の表現 $U$ を生成している。

</div>

一般にLie代数の表現を見つけ，それを指数関数化することで群の表現を得ることができる。したがって，我々が為すべきことはLorentz群のLie代数（交換関係）を特定することだ。

<div class="example">

回転群については生成子を微分演算子として表すことで交換関係を見つけることが出来る。実際
$$
    \bm{J} = \bm{x} \times \bm{p} = \bm{x} \times (-i\bm{\nabla})
$$
は回転群のLie代数の表現になっていることが確かめられる。この外積 $\times$ は 3 次元に特有のものであり一般化には不利である。しかし，反対称テンソルとして表せる：
$$
    J^{ij} = -i(x^i\partial^j - x^j\partial^i)
$$
これにより $J^3 = J^{12}$ などのように生成子を表すことができる。

</div>

上の例から 4 次元Lorentz群への一般化は明らかである：
$$
    J^{\mu\nu} = -i(x^\mu\partial^\nu - x^\nu\partial^\mu)
$$
実際，この 6 個の生成子はそれぞれ 3 つのブーストと 3 つの回転を生成する。交換関係は単純な計算から得られる：
$$
    [J^{\mu\nu}, J^{\rho\sigma}] = i(g^{\nu\rho}J^{\mu\sigma} - g^{\mu\rho}J^{\nu\sigma} - g^{\nu\sigma}J^{\mu\rho} + g^{\mu\sigma}J^{\nu\rho})
$$
この代数をLorentz代数という。

## 3.2 The Dirac Equation

次のステップはLorentz代数のすべての表現を見つけることだ。これはそれほど難しくはないが，ここでは特にスピン $1/2$ の場に対応する表現に注目する。

このような表現は次のように構成できる：次の反交換関係を満たす 4 つの $n\times n$ 行列 $\gamma^\mu$ が存在すると仮定する：
$$
    \{\gamma^\mu,\gamma^\nu\} \coloneqq \gamma^\mu\gamma^\nu + \gamma^\nu\gamma^\mu = 2g^{\mu\nu}\times\bm{1}_{n\times n}
$$
これをDirac代数という。このときLorentz代数の $n$ 次元表現は次のように構成できる：
$$
    S^{\mu\nu} = \frac{i}{4}[\gamma^\mu,\gamma^\nu]
$$
このトリックはLorentz計量でもEuclid計量でも任意の次元で成り立つ。

<div class="example">

3 次元Euclid空間では，具体的にPauli行列 $\sigma^j$ を用いて
$$
    \gamma^j = i\sigma^j
$$
とすれば反交換関係を満たす。これにより回転群の表現
$$
    S^{ij} = \frac{1}{2}\epsilon^{ijk}\sigma^k
$$
が得られる。これは既に見たようにスピン $1/2$ の粒子に対応する表現である。

</div>

次に我々が為すべきことは 4 次元Minkowski空間におけるDirac行列 $\gamma^\mu$ を見つけることである。これらは少なくとも $4\times 4$ でなければならない。さらに，Dirac代数のすべての $4\times 4$ 表現はユニタリ同値である。したがって行列表現を 1 つ見つければ十分である。例えば次のような行列表現がある：
$$
    \gamma^0 = \begin{pmatrix}
        0 & 1 \\
        1 & 0
    \end{pmatrix},\quad
    \gamma^i = \begin{pmatrix}
        0 & \sigma^i \\
        -\sigma^i & 0
    \end{pmatrix}
$$
この行列表現を**Weyl表現**あるいは**カイラル表現**という。本書[@Peskin:1995ev]ではこの表現のみを用いる。そうするとブーストと回転の生成子は次のように表される：
$$
    S^{0i} = \frac{i}{2}\begin{pmatrix}
        \sigma^i & 0 \\
        0 & -\sigma^i
    \end{pmatrix},\quad
    S^{ij} = \frac{1}{2}\epsilon^{ijk}\begin{pmatrix}
        \sigma^k & 0 \\
        0 & \sigma^k
    \end{pmatrix} \eqqcolon \frac{1}{2}\epsilon^{ijk}\Sigma^k
$$
この表現に従って変換される 4 成分場 $\psi$ を**Diracスピノール**という。ブースト生成子はエルミートでないためブーストはユニタリーではない（これはベクトル表現でも同じ）。一般にLorentz群は非コンパクトなので有限次元ユニタリ表現を持たない。しかし $\psi$ は波動関数ではなく古典場なので何の問題もない。

新しい種類の場 $\psi$ が従う変換則が分かったので，この場が従う場の方程式を知りたい。Klein-Gordon方程式は明らかにその 1 つであるが，実はさらに乗法を含む方程式がある。それも見つけるためにはまず次の恒等式を使う：
$$
    [\gamma^\mu, S^{\rho\sigma}] = (\mathcal{J}^{\rho\sigma})^{\mu}{}_\nu \gamma^\nu
$$
あるいは同じことだが
$$
    \left(1+\frac{i}{2}\omega_{\rho\sigma}S^{\rho\sigma}\right)\gamma^\mu\left(1-\frac{i}{2}\omega_{\rho\sigma}S^{\rho\sigma}\right) = (1-\frac{i}{2}\omega_{\rho\sigma}\mathcal{J}^{\rho\sigma})^{\mu}{}_\nu \gamma^\nu
$$
これは群の表現の方では次のように書ける：
$$
    \Lambda_{1/2}^{-1}\gamma^\mu\Lambda_{1/2} = \Lambda^\mu{}_\nu\gamma^\nu,\quad \Lambda_{1/2} = \exp\left(-\frac{i}{2}\omega_{\mu\nu}S^{\mu\nu}\right)
$$
これはDirac行列がスピノル表現の下でベクトル表現のように変換されることを意味している。つまりDirac行列のベクトル添え字を潰せばLorentzスカラーが作れる。したがって最も簡単なLorentz不変の方程式は次のようになる：
$$
    (i\gamma^\mu\partial_\mu - m)\psi(x) = 0
$$
これを**Dirac方程式**という。Dirac方程式の解はKlein-Gordon方程式を満たす。

次にDirac理論のラグランジアンを構成するためには 2 つのDiracスピノールを含むLorentzスカラーを見つける必要がある。すぐに思いつくのは$\psi^\dagger\psi$ だが，ブーストがユニタリーではないので，これは不変にならない。解決策は次のように定義することである：
$$
    \bar{\psi} = \psi^\dagger\gamma^0
$$
この量の変換則は
$$
    \bar{\psi} \to \bar{\psi}\Lambda_{1/2}^{-1}
$$
である。これにより，$\bar{\psi}\psi$ はLorentzスカラーとなる。同様に $\bar{\psi}\gamma^\mu\psi$ はベクトルになる。したがってDirac理論のラグランジアンは次のようになる：
$$
    \mathcal{L} = \bar{\psi}(i\gamma^\mu\partial_\mu - m)\psi
$$
$\bar{\psi}$ に対する運動方程式はDirac方程式に，$\psi$ に対する運動方程式はそのエルミート共役になる：
$$
    -i\partial_\mu\bar{\psi}\gamma^\mu - m\bar{\psi} = 0
$$

### Weyl Spinors

スピノル表現の生成子がブロック対角行列であることから，この表現は**可約**であることが分かる。そこで各既約表現に従う場を次のように定義する：
$$
    \psi = \begin{pmatrix}
        \psi_L \\
        \psi_R
    \end{pmatrix}
$$
これら $\psi_L, \psi_R$ を左巻きあるいは右巻き**Weylスピノール**という。これらは無限小回転の生成子 $\bm{\theta}$ とブーストの生成子 $\bm{\beta}$ に対して次のように変換される：
$$
\begin{align*}
    \psi_L &\to \left(1-i\bm{\theta}\cdot\frac{\bm{\sigma}}{2} - \bm{\beta}\cdot\frac{\bm{\sigma}}{2}\right)\psi_L \\
    \psi_R &\to \left(1-i\bm{\theta}\cdot\frac{\bm{\sigma}}{2} + \bm{\beta}\cdot\frac{\bm{\sigma}}{2}\right)\psi_R
\end{align*}
$$
これらの変換則は互いに複素共役の関係にある。量 $\sigma^2\psi_L^*$ は右巻きスピノール $\psi_R$ と同じ変換則を満たす。

Dirac方程式は次のように書ける：
$$
    (i\gamma^\mu\partial_\mu -m)\psi = \begin{pmatrix}
        -m & i(\partial_0 + \bm{\sigma}\cdot\bm{\partial}) \\
        i(\partial_0 - \bm{\sigma}\cdot\bm{\partial}) & -m
    \end{pmatrix}\begin{pmatrix}
        \psi_L \\
        \psi_R
    \end{pmatrix} = 0
$$
これを見ると質量が両方のスピノールを混ぜることが分かる。もし $m=0$ の場合は方程式が分離する：
$$
\begin{align*}
    i(\partial_0 - \bm{\sigma}\cdot\bm{\partial})\psi_L &= 0 \\
    i(\partial_0 + \bm{\sigma}\cdot\bm{\partial})\psi_R &= 0
\end{align*}
$$
これら方程式を**Weyl方程式**という。

記法の簡単化のために次のように定義する：
$$
    \sigma^\mu \coloneqq (1, \bm{\sigma}),\quad \bar{\sigma}^\mu \coloneqq (1, -\bm{\sigma})
$$
そうするとカイラル表現は次のように書ける：
$$
    \gamma^\mu = \begin{pmatrix}
        0 & \sigma^\mu \\
        \bar{\sigma}^\mu & 0
    \end{pmatrix}
$$
Dirac方程式は次のように書ける：
$$
    \begin{pmatrix}
        -m & i\sigma\cdot\partial \\
        i\bar{\sigma}\cdot\partial & -m
    \end{pmatrix}\begin{pmatrix}
        \psi_L \\
        \psi_R
    \end{pmatrix} = 0
$$
Weyl方程式は次のように書ける：
$$
    i\bar{\sigma}\cdot\partial\psi_L = 0,\quad i\sigma\cdot\partial\psi_R = 0
$$

## 3.3 Free-Particle Solutions of the Dirac Equation

Dirac方程式に従う場のダイナミクスを理解するために，まずは平面波解を見つけることから始める。

## 参考文献
