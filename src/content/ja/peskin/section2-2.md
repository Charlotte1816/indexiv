---
category: "peskin"
title: "2.2節 行間埋め"
description: "Peskin 2.2節 Elements of Classical Field Theory の行間埋め"
---
参考文献：[@Peskin:1995ev]

## p.15 ラグランジアンの関数形

>In a local field theory the Lagrangian can be written as the spatial integral of a Lagrangian density, denoted by $\mathcal{L}$, which is a function of one or more fields $\phi(x)$ and their derivatives $\partial_\mu \phi(x)$.

以下は[@Tong:2007qft]および[@Kugo:1989aa]を参考にした。

場 $\phi(x)$ の理論の作用を
$$
    S[\phi] = \int d^4 x \ \mathcal{L}(\phi(x), \partial_\mu \phi(x))
$$
の形に制限する理由は以下の通り：

* **局所性**：相互作用が直接的には無限小近傍にしか存在しないとする局所相互作用の仮定

* **$\mathcal{L}$ は実数（エルミート）**：古典的にはエネルギーを実数とするため。量子的には時間発展がユニタリーである（すなわち確率が保存される）ため。

* **高階微分を含まない**：Newton力学のアナロジーとして時間についての微分は1階まで。また高階の微分は次の問題を引き起こす：
  * 負の確率を導く負計量の粒子
  * 光速を超える粒子（タキオン）が生じる

* **Poincaré対称性**や**内部対称性**：理論のLorentz不変性は $\mathcal{L}$ がLorentzスカラーであること，並進不変性は $\mathcal{L}$ が座標 $x$ にあらわに依存しないことを要求する。さらに必要に応じて内部対称性が課される。

* **くりこみ可能性**：典型的な場の量子論においてirrelevantな相互作用を無視する。

くりこみ可能性について少し説明を加えておこう。

たとえば（4次元）実Klein-Gordon理論を考える。
$$
    \mathcal{L} = \frac{1}{2} \partial_\mu \phi \partial^\mu \phi - \frac{1}{2} m^2 \phi^2
$$
上の要請から摂動として次のように項を加えても良いように思える：
$$
    \mathcal{L} = \frac{1}{2} \partial_\mu \phi \partial^\mu \phi - \frac{1}{2} m^2 \phi^2 - \sum_{n\ge 3}\frac{\lambda_n}{n!}\phi^n
$$
しかし結合定数 $\lambda_n$ の次元に関して項を分類することができる。まず作用は無次元であるから質量次元で $[S]=0$ である。次に積分測度は $[d^4 x] = -4$ であるから，ラグランジアン密度の次元は $[\mathcal{L}] = 4$ でなければならない。さらに，$[\partial] = 1$ であるから $[\phi] = 1$ である。したがって $\lambda_n$ の次元は $[\lambda_n] = 4 - n$ である。摂動論の有効性を考えるためには結合定数が考えているエネルギースケール $E$ に対してどのような値を取るかを考える必要がある。そこで次のように分類できる：

* $[\lambda_3] = 1$：このとき無次元パラメータは $\lambda_3/E$ である。この項は高エネルギーでは小さいが，低エネルギーでは大きくなる。このような項を**relevant**という。

* $[\lambda_4] = 0$：このとき無次元パラメータは $\lambda_4$ である。このような項はエネルギースケールに依存しない。このような項を**marginal**という。

* $[\lambda_{n\ge 5}] < 0$：このとき無次元パラメータは $\lambda_n E^{n-4}$ である。このような項は高エネルギーでは大きくなるが，低エネルギーでは小さくなる。このような項を**irrelevant**という。

たとえばGUTスケールやPlanckスケールなどの高エネルギースケール $\Lambda$ の過程を記述できる理論があったとする。この場合のダイナミクスは大量のirrelevantな項によって決まる。このときの無次元パラメータは次のようになる：
$$
    g_n^{\text{high}} = \lambda_n \Lambda^{n-4}
$$
このような理論で $E\ll \Lambda$ の実験を考えるとする。このときの無次元パラメータは次のようになる：
$$
    g_n^{\text{low}} = \lambda_n E^{n-4} = g_n^{\text{high}} \left(\frac{E}{\Lambda}\right)^{n-4}
$$
典型的には $g_n \sim \mathcal{O}(1)$ であり，irrelevantな項は $(E/\Lambda)^{n-4}$ で抑制される。たとえば，Planckスケール $\Lambda \sim 10^{19}$ GeV の過程を記述できる理論があったとして，LHCで探るようなエネルギースケール $E \sim 10^3$ GeV の過程を考えるとする。このときの抑制は $E/\Lambda \sim 10^{-16}$ となる。

したがって我々は典型的な場の量子論を考える限り，高エネルギーの物理を無視して，小数のrelevantな項とmarginalな項に注目するだけで十分である。しかし，高エネルギー理論を理解したい我々（興味ないよ，と言う人もいると思うが）にとって低エネルギー理論はあまりに貧弱である。

より正確な議論は第二部でなされる。

## p.15 汎関数微分について

最小作用の原理から場に対するEuler-Lagrange方程式を導く過程では汎関数微分を用いている。これは非常に基本的な技術であるから，少し説明を加えておくことにする。

<div class="remark">

ここでは数学的に厳密な議論をする気はなく，直観的な議論をする。

</div>

以下は日置善郎さんの[講義ノート](https://www2.yukawa.kyoto-u.ac.jp/~ken-iti.izawa/theory/hioki-file/VR.pdf)を参考にした。

たとえば
$$
    F[\phi] = \int dx \ \mathcal{F}[\phi(x)]
$$
という量は，$\phi$ という関数に対して $F[\phi]$ という量が定まっている。このような「関数の関数」を**汎関数**という。

<div class="recall">

関数 $y=f(x)$ に対して $x$ の微小変化を考える：
$$
    x \to x + dx
$$
このとき関数 $y$ は次のように変化する：
$$
    dy = f(x + dx) - f(x)
$$
また $dy$ と $dx$ の関係は次のようになる：
$$
    dy = \frac{dy}{dx} dx
$$

</div>

関数の微小変化を考える：
$$
    \phi(x) \to \phi(x) + \delta \phi(x)
$$
このとき汎関数 $F[\phi]$ は次のように変化する：
$$
    \delta F = F[\phi + \delta \phi] - F[\phi]
$$
このような $\delta\phi, \delta F$ を $\phi, F$ の**変分**という。この場合 $\delta F$ は積分区間内の全ての点 $x$ での $\delta \phi(x)$ の値に依存するので，$\delta F$ と $\delta \phi(x)$ の関係は，関数のときのアナロジーで次のように書ける：
$$
    \delta F = \int dx \ [\bullet] \ \delta \phi(x)
$$
そうすると $[\bullet]$ の部分が $dy/dx$ と同じ役割を担う量とみなせる。そこで，これを
$$
    [\bullet] = \frac{\delta F}{\delta \phi}
$$
と書き，**汎関数微分**と呼ぶ。

汎関数 $F$ が複数の独立な関数 $\phi_i$ に依存する場合，多変数関数の微分のアナロジーで次のように書ける：
$$
    \boxed{\delta F = \sum_{i=1}^n\int dx \ \frac{\delta F}{\delta \phi_i} \delta \phi_i(x)}
$$

さらに，このような汎関数微分は
$$
\begin{align*}
    \delta F &= F[\phi + \delta \phi] - F[\phi]
    \\
    &= \int dx \ \left[\mathcal{F}(\phi(x) + \delta \phi(x)) - \mathcal{F}(\phi(x))\right]
    \\
    &= \int dx \ \left[\frac{d}{d\phi(x)}\mathcal{F}(\phi(x))\right] \delta \phi(x)
\end{align*}
$$
と書けるから，次のように書ける：
$$
    \frac{\delta F}{\delta \phi} = \frac{d}{d\phi(x)}\mathcal{F}(\phi(x))
$$
汎関数 $F$ が複数の独立な関数 $\phi_i$ に依存する場合は次のように書ける：
$$
    \boxed{\frac{\delta F}{\delta \phi_i} = \frac{\partial}{\partial \phi_i(x)}\mathcal{F}(\phi_1(x), \dots, \phi_n(x))}
$$

以上の議論を作用に適用したのが式(2.2)である。

## p.16-17 Klein-Gordon理論

実Klein-Gordon理論を考える：
$$
\begin{align*}
    \mathcal{L} &= \frac{1}{2}\dot{\phi}^2 - \frac{1}{2}(\nabla \phi)^2 - \frac{1}{2} m^2 \phi^2
    \\
    &= \frac{1}{2}(\partial_\mu\phi)^2 - \frac{1}{2} m^2 \phi^2
    \\
    &= \frac{1}{2}g^{\mu\nu}\partial_\mu \phi \partial_\nu \phi - \frac{1}{2} m^2 \phi^2
\end{align*}
$$
このとき，一方で
$$
    \frac{\partial \mathcal{L}}{\partial \phi} = -m^2 \phi
$$
他方で
$$
\begin{align*}
    \frac{\partial \mathcal{L}}{\partial (\partial_\rho \phi)} &= \frac{1}{2}g^{\mu\nu}\left[\frac{\partial(\partial_\mu\phi)}{\partial(\partial_\rho \phi)}\partial_\nu\phi + \partial_\mu\phi \frac{\partial(\partial_\nu\phi)}{\partial(\partial_\rho \phi)}\right]
    \\
    &= \frac{1}{2}g^{\mu\nu}\left[\delta_\mu^\rho \partial_\nu\phi + \partial_\mu\phi \delta_\nu^\rho\right]
    \\
    &= \frac{1}{2}g^{\rho\nu}\partial_\nu\phi + \frac{1}{2}g^{\mu\rho}\partial_\mu\phi
    \\
    &= \frac{1}{2}g^{\rho\nu}\partial_\nu\phi + \frac{1}{2}g^{\rho\mu}\partial_\mu\phi
    \\
    &= g^{\rho\mu}\partial_\mu\phi
    \\
    &= \partial^\rho \phi
\end{align*}
$$
となる。そうするとEuler-Lagrange方程式
$$
    \partial_\mu \left(\frac{\partial \mathcal{L}}{\partial (\partial_\mu \phi)}\right) - \frac{\partial \mathcal{L}}{\partial \phi} = 0
$$
より運動方程式（Klein-Gordon方程式）が得られる：
$$
    \partial_\mu \partial^\mu \phi + m^2 \phi = 0
$$
また，共役運動量は
$$
    \pi(x) \coloneqq \frac{\partial \mathcal{L}}{\partial \dot{\phi}(x)} = \dot{\phi}(x)
$$
となるから，ハミルトニアンは次のようになる：
$$
\begin{align*}
    \mathcal{H} &\coloneqq \pi \dot{\phi} - \mathcal{L}
    \\
    &= \pi^2 - \left[\frac{1}{2}\pi^2 - \frac{1}{2}(\nabla \phi)^2 - \frac{1}{2} m^2 \phi^2\right]
    \\
    &= \frac{1}{2}\pi^2 + \frac{1}{2}(\nabla \phi)^2 + \frac{1}{2} m^2 \phi^2
\end{align*}
$$

## p.18 チャージの保存則

>The conservation law can also be expressed by saying that the charge is a constant in time.

Noetherチャージは次のように定義される：
$$
    Q = \int_V j^0 \ d^3x
$$
ここで $j^\mu$ はNoetherカレントである：
$$
    j^\mu \coloneqq \frac{\partial \mathcal{L}}{\partial (\partial_\mu \phi)} \Delta \phi - \mathcal{J}^\mu
$$
カレントが保存される場合を考える：
$$
    \partial_\mu j^\mu = \frac{\partial j^0}{\partial t} - \nabla \cdot \bm{j} = 0
$$
このときチャージの時間変化は次のようになる：
$$
    \frac{dQ}{dt} = \int_V \frac{\partial j^0}{\partial t} \ d^3x = \int_V \nabla \cdot \bm{j} \ d^3x = \int_{\partial V} \bm{j} \cdot d\bm{S} = 0
$$
したがって，カレントが考えている空間の境界でゼロになるとき，チャージは保存される。

見慣れた連続の方程式は $-\bm{\nabla}\cdot \bm{j}$ が $+\bm{\nabla}\cdot \bm{j}$ になっているだろう。前者の場合は $\bm{j}$ を空間に**流入**する量と解釈すればよい。流入量が正の場合 $\dot{Q}$ が大きくなる。後者の場合は $\bm{j}$ を空間から**流出**する量と解釈する。

## p.18 複素Klein-Gordon理論

複素Klein-Gordon理論を考える（$\phi$ と $\phi^*$ は独立な場）：
$$
    \mathcal{L} = |\partial_\mu \phi|^2 - m^2 |\phi|^2 = \partial_\mu \phi^* \partial^\mu \phi - m^2 \phi^* \phi
$$
このとき，一方で
$$
    \frac{\partial \mathcal{L}}{\partial \phi} = -m^2 \phi^*
$$
他方で
$$
\begin{align*}
    \frac{\partial \mathcal{L}}{\partial (\partial_\rho \phi)} &= g^{\mu\nu}\left[\frac{\partial(\partial_\mu\phi^*)}{\partial(\partial_\rho \phi)}\partial_\nu\phi + \partial_\mu\phi^* \frac{\partial(\partial_\nu\phi)}{\partial(\partial_\rho \phi)}\right]
    \\
    &= g^{\mu\nu}\left[0 + \partial_\mu\phi^* \delta_\nu^\rho\right]
    \\
    &= g^{\mu\rho}\partial_\mu\phi^*
    \\
    &= \partial^\rho \phi^*
\end{align*}
$$
となる。そうするとEuler-Lagrange方程式
$$
    \partial_\mu \left(\frac{\partial \mathcal{L}}{\partial (\partial_\mu \phi)}\right) - \frac{\partial \mathcal{L}}{\partial \phi} = 0
$$
より次の運動方程式が得られる：
$$
    \partial_\mu \partial^\mu \phi^* + m^2 \phi^* = 0
$$
同様に
$$
    \frac{\partial \mathcal{L}}{\partial \phi^*} = -m^2 \phi,\quad \frac{\partial \mathcal{L}}{\partial (\partial_\mu \phi^*)} = \partial^\mu \phi
$$
となるから次の運動方程式（Klein-Gordon方程式）が得られる：
$$
    \partial_\mu \partial^\mu \phi + m^2 \phi = 0
$$

この理論には明らかに次の対称性がある：
$$
    \phi \to e^{i\alpha} \phi,\quad \phi^* \to e^{-i\alpha} \phi^*
$$
微小変換の形で書くと次のようになる：
$$
    \Delta \phi = i\phi, \quad \Delta \phi^* = -i\phi^*
$$
またラグランジアンは不変なので $\mathcal{J}^\mu = 0$ である。このとき保存カレントは次のようになる：
$$
\begin{align*}
    j^\mu &= \frac{\partial \mathcal{L}}{\partial (\partial_\mu \phi)} \Delta \phi + \frac{\partial \mathcal{L}}{\partial (\partial_\mu \phi^*)} \Delta \phi^*
    \\
    &= (\partial^\mu\phi^*)(i\phi) + (\partial^\mu \phi)(-i\phi^*) = i[(\partial^\mu\phi^*)\phi - \phi^*(\partial^\mu \phi)]
\end{align*}
$$

## p.18-19 能動変換と受動変換

微小並進
$$
    x^\mu \to x^\mu - a^\mu
$$
に対して場 $\phi$ が
$$
    \phi(x) \to \phi(x + a)
$$
のように引数が逆になって変換される理由を説明する。以下の説明は[@Tong:2007qft]を参考にした。

イメージしやすいように具体的に3次元空間における温度場 $\phi(\bm{x})$ を考える。初め $\bm{x}=(1,0,0)$ に「めちゃくちゃ熱いスポット」があるとする。このような空間を $z$ 軸まわりに $90^\circ$ 回転させる：$\bm{x} \to R\bm{x}$。このような「空間自体に作用する変換」を**能動変換**（**active transformation**）という。能動変換に伴って温度場 $\phi$ も変換される。回転後の温度場を $\phi'$ とする。空間自体を回転させたので「めちゃくちゃ熱いスポット」も移動して $\bm{x}=(0,1,0)$ にある。したがって新しい場と古い場の関係は次のようになる：
$$
    \phi'(0,1,0) = \phi(1,0,0) = \phi(R^{-1}(0,1,0))
$$
これが空間の変換に対して場の引数が逆になる理由である。

能動変換に対して，空間に張られている「座標に作用する変換」を**受動変換**（**passive transformation**）という。たとえば，座標を $z$ 軸まわりに $90^\circ$ 回転させる：$\bm{x} \to R\bm{x}$。この場合，温度場 $\phi$ は変化しない。そうすると，もともと $\bm{x}=(1,0,0)$ にあった「めちゃくちゃ熱いスポット」は回転後の座標では $\bm{x}=(0,-1,0)$ にある。したがって新しい座標と古い座標の関係は次のようになる：
$$
    \phi'(0,-1,0) = \phi(0,-1,0) = \phi(R(1,0,0))
$$
このように受動変換では場の引数が逆にならない。能動変換と受動変換は似ているが異なるものである。

## p.19 チャージとしてのハミルトニアン

>By computing this quantity for the Klein-Gordon field, one can recover the result (2.8).

実Klein-Gordon理論を考える：
$$
    \mathcal{L} = \frac{1}{2}\dot{\phi}^2 - \frac{1}{2}(\nabla \phi)^2 - \frac{1}{2} m^2 \phi^2
$$
このとき
$$
    \frac{\partial \mathcal{L}}{\partial \dot{\phi}} = \dot{\phi}
$$
であるから，エネルギー・運動量テンソル
$$
    T^{\mu}{}_{\nu} = \frac{\partial \mathcal{L}}{\partial (\partial_\mu \phi)} \partial_\nu \phi -  \mathcal{L}\delta^{\mu}{}_{\nu}
$$
の時間成分の時間成分は
$$
\begin{align*}
    T^0{}_0 &= \frac{\partial \mathcal{L}}{\partial \dot{\phi}} \dot{\phi} - \mathcal{L}
    \\
    &= \frac{1}{2}\dot{\phi}^2 + \frac{1}{2}(\nabla \phi)^2 + \frac{1}{2} m^2 \phi^2
\end{align*}
$$
共役運動量は $\pi = \dot{\phi}$ であるから，これは確かにハミルトニアン $\mathcal{H}$ と等しい。

これは実Klein-Gordon理論に限らない。というのも値として
$$
    T^0{}_0 = \frac{\partial \mathcal{L}}{\partial \dot{\phi}} \dot{\phi} - \mathcal{L} = \pi \dot{\phi} - \mathcal{L} = \mathcal{H}
$$
が成り立つからである。なお，Belinfante-Rosenfeldテンソルの場合は密度としての等式は成り立たないがチャージとしての等式は成り立つ。

## 参考文献
