---
category: "peskin"
title: "3.2 Dirac方程式"
description: "Dirac方程式について"
order: 32
---
次のステップはLorentz代数のすべての表現を見つけることである。これはそれほど難しくはないが，ここでは特にスピン $1/2$ の場に対応する表現に注目する。

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
この行列表現を**Weyl表現**あるいは**カイラル表現**という。ここではこの表現のみを用いる。そうするとブーストと回転の生成子は次のように表される：
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
