---
category: "peskin"
title: "3.1 波動方程式のLorentz不変性"
description: "波動方程式のLorentz不変性について"
order: 31
---
場の方程式がLorentz不変であるとは，すべての場を物理的に変換した時にそれがまた同じ方程式を満たすことをいう。このことはラグランジアンがLorentzスカラーであれば十分である。

任意のLorentz変換
$$
    x^\mu \to x'^\mu = \Lambda^\mu{}_\nu x^\nu
$$
に対してスカラー場は
$$
    \phi(x) \to \phi'(x) = \phi(\Lambda^{-1}x)
$$
と変換される。ベクトル場 $V^\mu(x)$ の場合は向きも順方向に変換される：
$$
    V^\mu(x) \to V'^\mu(x) = \Lambda^\mu{}_\nu V^\nu(\Lambda^{-1}x)
$$
同様にテンソル場の場合は添え字に対応する数の $\Lambda$ が含まれる。このような場を用いてLorentz不変な運動方程式やラグランジアンを構成することができる。

この種の場以外にも他の場が存在する。そこで場に対する可能なすべての変換則を系統的に調べる。簡単のため線形変換に注目する。もし場 $\Phi_a(x)$ が $n$ 成分のmultipletであればLorentz変換に対する変換則は $n\times n$ 行列 $M(\Lambda)$ を用いて次のように書ける：
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
