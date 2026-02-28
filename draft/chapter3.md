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

### スピン和

Feynmanダイアグラムを評価する際にフェルミオンの偏極状態について和を取りたいことがある。以下の公式は**スピン和**と呼ばれるものである：
$$
\begin{align*}
    \sum_{s} u^s(p)\bar{u}^s(p) &= \gamma\cdot p + m
    \\
    \sum_{s} v^s(p)\bar{v}^s(p) &= \gamma\cdot p - m
\end{align*}
$$

## 3.4 Dirac行列とDirac双一次形式

ここではより一般的な問題を扱いたい：$\bar{\psi}T\psi$ という形の式をLorentz変換の下で明確な変換則を持つ項に分解できるかどうかという問題である。答えはYesであり，理由は $4\times 4$行列 $T$ を以下の16個の $4\times 4$ 行列の線形結合で表すことができるからである：
$$
\begin{align*}
    &\text{1 of these:} &&\bm{1} \\
    &\text{4 of these:} &&\gamma^\mu \\
    &\text{6 of these:} &&\gamma^{\mu\nu} = \frac{1}{2}[\gamma^\mu, \gamma^\nu] = \gamma^{[\mu}\gamma^{\nu]} = -i\sigma^{\mu\nu} \\
    &\text{4 of these:} &&\gamma^{\mu\nu\rho} = \gamma^{[\mu}\gamma^{\nu}\gamma^{\rho]} \\
    &\text{1 of these:} &&\gamma^{\mu\nu\rho\sigma} = \gamma^{[\mu}\gamma^{\nu}\gamma^{\rho}\gamma^{\sigma]}
\end{align*}
$$
各双一次形式はLorentz変換（スピノル表現）の下で反対称テンソルとして変換される。さらに最後の2種類については
$$
    \gamma^5 \coloneqq i\gamma^0\gamma^1\gamma^2\gamma^3
$$
を定義することで $\gamma^{\mu\nu\rho} = +i\epsilon^{\mu\nu\rho\sigma}\gamma_\sigma\gamma^5,\ \gamma^{\mu\nu\rho\sigma} = -i\epsilon^{\mu\nu\rho\sigma}\gamma^5$ と書ける。

$\gamma^5$ の性質は以下の通りである：
$$
    (\gamma^5)^\dagger = \gamma^5;\quad (\gamma^5)^2 = 1;\quad \{\gamma^5, \gamma^\mu\} = 0
$$
最後の性質は $[\gamma^5,\sigma^{\mu\nu}]=0$ を意味する。したがって $\gamma^5$ の表現は可約であり，カイラル表現では次のように表される：
$$
    \gamma^5 = \begin{pmatrix}
        -1 & 0 \\
        0 & +1
    \end{pmatrix}
$$
したがって，左巻き（右巻き）成分のみのDiracスピノールは固有値 $-1$（$+1$）の$\gamma^5$ の固有状態になっている。

ここで各双一次形式の変換則をまとめておこう：
$$
\begin{align*}
    &\text{scalar:} &&1 \\
    &\text{vector:} &&\gamma^\mu \\
    &\text{tensor:} &&\sigma^{\mu\nu} \\
    &\text{pseudo-vector:} &&\gamma^\mu\gamma^5 \\
    &\text{pseudo-scalar:} &&\gamma^5
\end{align*}
$$
ここで**pseudo**という接頭辞は，それらの量が連続的なLorentz変換に対してはベクトルやスカラーとして変換されるがパリティ変換に対して符号変化する，ということを意味している。

また
$$
    j^\mu = \bar{\psi}\gamma^\mu\psi;\quad j^{\mu5} = \bar{\psi}\gamma^\mu\gamma^5\psi
$$
を定義すると，$\psi$ がDirac方程式を満たすとき $j^\mu$ が，さらに $m=0$ のとき $j^{\mu5}$ が保存カレントになることが分かる。$j^\mu$ は電磁場と結合するとき電流密度になる。また $j^{\mu5}$ は**axial vector current**と呼ばれる。さらにこのとき，これらの線形結合
$$
    j^\mu_L \coloneqq \bar{\psi}\gamma^\mu\left(\frac{1-\gamma^5}{2}\right)\psi,\quad j^\mu_R \coloneqq \bar{\psi}\gamma^\mu\left(\frac{1+\gamma^5}{2}\right)\psi
$$
を定義すると，$m=0$ のとき $j^\mu_L$ と $j^\mu_R$ はそれぞれ左巻きと右巻きの粒子の電流密度であり別々に保存される。

2 つのカレント $j^\mu$ と $j^{\mu5}$ に対応する対称性は
$$
    \psi \to e^{i\alpha}\psi,\quad \psi \to e^{i\alpha\gamma^5}\psi
$$
である。前者はDirac理論の対称性である。後者はカイラル変換といい，微分項に対する対称性である。

Dirac双一次形式の積に関する公式は**Fierz恒等式**と呼ばれている。ここではその中の最も単純なものだけを考える：
$$
    (\sigma^\mu)_{\alpha\beta}(\sigma_\mu)_{\gamma\delta} = 2\epsilon_{\alpha\gamma}\epsilon_{\beta\delta}
$$
ここで $\alpha,\ \beta$ などはスピノール添え字である。これを用いるとDiracスピノールの右巻き部分と左巻き部分について次のような恒等式が得られる：
$$
\begin{align*}
    (\bar{u}_{1R}\sigma^\mu u_{2R})(\bar{u}_{3R}\sigma_\mu u_{4R}) &= -(\bar{u}_{1R}\sigma^\mu u_{4R})(\bar{u}_{3R}\sigma_\mu u_{2R})
    \\
    (\bar{u}_{1L}\bar{\sigma}^\mu u_{2L})(\bar{u}_{3L}\bar{\sigma}_\mu u_{4L}) &= -(\bar{u}_{1L}\bar{\sigma}^\mu u_{4L})(\bar{u}_{3L}\bar{\sigma}_\mu u_{2L})
\end{align*}
$$
時には次のような $\sigma^\mu$ と $\bar{\sigma}^\mu$ を結びつける恒等式も必要になる：
$$
    \epsilon_{\alpha\beta}(\sigma^\mu)_{\beta\gamma} = (\bar{\sigma}^{\mu T})_{\alpha\beta}\epsilon_{\beta\gamma}
$$
これらから例えば次のような恒等式も得られる：
$$
    (\bar{u}_{1L}\bar{\sigma}^\mu \sigma^\nu \bar{\sigma}^\lambda u_{2L})(\bar{u}_{3L}\bar{\sigma}_\mu \sigma_\nu \bar{\sigma}_\lambda u_{4L}) = 16(\bar{u}_{1L}\bar{\sigma}^\mu u_{2L})(\bar{u}_{3L}\bar{\sigma}_\mu u_{4L})
$$
その他の恒等式を得る体系的なアプローチが存在する。これは問題3.6にある。

## 3.5 Dirac場の量子化

ラグランジアンは
$$
    \mathcal{L} = \bar{\psi}(i\cancel{\partial}-m)\psi = \bar{\psi}(i\gamma^\mu\partial_\mu - m)\psi
$$
ハミルトニアンは
$$
    \mathcal{H} = \bar{\psi}(-i\bm{\gamma}\cdot\bm{\nabla} + m)\psi
$$
ここで $\bm{\alpha}=\gamma^0\bm{\gamma}$，$\beta=\gamma^0$ と定義すると 1 粒子量子力学のものと同じ形になる。

### 間違った量子化：スピンと統計に関する教訓として

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

### Dirac場の量子化

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

### 伝播関数

* $\braket{0|\psi_a(x)\bar{\psi}_b(y)|0},\ \braket{0|\bar{\psi}_b(y)\psi_a(x)|0}$の計算
* Dirac関数の遅延Green関数の構成
* Feynman伝播関数の構成

## Dirac理論の離散対称性

* 離散変換とLorentz群の連結成分について
* 荷電共役についてのお話
* パリティについて
  * 定義
  * 表現と $\psi$ の変換則
  * Dirac双一次形式の変換則
  * 粒子・反粒子対のパリティ
* 時間反転について
  * 線形なユニタリー演算子として表せない理由
  * 反線形な反ユニタリー演算子として表せる理由
  * スピンの反転について
  * 時間反転の表現と $\psi$ の変換則
  * Dirac双一次形式の変換則
* 荷電共役について
  * 定義
  * 表現と $\psi$ の変換則
  * Dirac双一次形式の変換則
* まとめ

## 参考文献
