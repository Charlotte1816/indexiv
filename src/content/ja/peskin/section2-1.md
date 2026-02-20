---
category: "peskin"
title: "2.1節 行間埋め"
description: "Peskin 2.1節 The Necessity of the Field Viewpoint の行間埋め"
---
参考文献：[@Peskin:1995ev]

## p.13 単一粒子の相対論的波動方程式が失敗する理由

>Since this discussion usually takes place near the end of a graduate-level quantum mechanics course, we will not repeat it here.

簡単な説明だけを与えておくことにする。以下は[@Srednicki:2007qs]を1.1節を参考にした。

前提：量子力学と（特殊）相対論を組み合わせたい。

Schrödinger方程式＋エネルギー運動量関係式を素朴に考える：
$$
    i\hbar\frac{\partial}{\partial t}\psi(\bm{x},t)=\sqrt{-\hbar^2c^2\nabla^2+m^2c^4}\psi(\bm{x},t)
$$

問題点：

* 空間と時間の扱いが非対称。

* 平方根を $\nabla$ で展開すると大域的。

そこで**Klein-Gordon方程式**を考える：
$$
    -\hbar^2\frac{\partial^2}{\partial t^2}\psi(\bm{x},t)+(-\hbar^2c^2\nabla^2+m^2c^4)\psi(\bm{x},t)=0
$$

問題点：

* 時間微分が2階なので確率保存が保証されない。

そこで（特に電子の場合に）**Dirac方程式**を考える：
$$
    i\hbar\frac{\partial}{\partial t}\psi_a(\bm{x})=\left(-i\hbar c(\alpha^j)_{ab}\frac{\partial}{\partial x^j}+mc^2(\beta)_{ab}\right)\psi_b(\bm{x})
$$
ここで $j=1,2,3$ で $a,b=1,2$ はスピン添え字を表すものとする。ここで $\alpha^j,\beta$ は反交換関係
$$
    \{\alpha^j,\alpha^k\}_{ab}=2\delta^{jk}\delta_{ab},\quad\{\alpha^j,\beta\}_{ab}=0,\quad\{\beta,\beta\}_{ab}=\frac{1}{2}\delta_{ab}
$$
を満たす $4\times 4$ 行列で**Dirac行列**という。

問題点：

* 無限個の負のエネルギー固有状態が存在。

そこで，これらの状態は既に占有されていると考える（**Diracの海**）。

問題点：

* 無限個の粒子の理論が必要。

* ボソンの扱い方が不明。

そこで基本的な空間と時間の扱いを見直す：

1. 位置 $\hat{\bm{x}}$ を時刻 $t$ を同様にラベル $\bm{x}$ にする。

2. 時刻 $t$ を位置 $\hat{\bm{x}}$ と同様に演算子 $\hat{t}$ にする。

前者が**場の量子論**（QFT）で，後者を弦の理論に拡張したのが**弦理論**になる。

## p.13 中間状態に現れる多粒子状態について

>Even when there is not enough energy for pair creation, multiparticle states appear, for example, as intermediate states in second-order perturbation theory. We can think of such states as existing only for a very short time, according to the uncertainty principle $\Delta E \cdot \Delta t \geq \hbar$. As we go to higher orders in perturbation theory, arbitrarily many such “virtual” particles can be created.

簡単な説明だけを与えておくことにする。[@Coleman:2018mew]の1.1節も参考になる。量子力学の知識を仮定する。もし不安なら例えば[@griffiths_introduction_2018]の7.1.3節を参照するとよい。

たとえば，ハミルトニアン $H$ に摂動 $\delta V$ を加えると，基底エネルギー $E_0$ は二次の摂動論で次のようになる：
$$
    E_0 \to E_0 + \delta E_0,\quad \delta E_0 = \braket{0|\delta V|0} + \sum_{n}\frac{|\braket{n|\delta V|0}|^2}{E_0 - E_n}
$$
第二項を見ると，**全て**のエネルギーの中間状態が寄与していることが分かる。

## p.13 遷移振幅の物理的意味

>Consider the amplitude for a free particle to propagate from $\bm{x}_0$ to $\bm{x}$.

量子力学の復習をしよう。詳しい導出はしない。[@griffiths_introduction_2018]の6.8節も参考になる。少しの間 $\hbar$ を明示的に書いておくことにする。

時間に依存しないSchrödinger方程式を考える：
$$
    i\hbar\frac{\partial}{\partial t}\ket{\bm{x},t} = \hat{H}(t)\ket{\bm{x},t}
$$
ここで $\ket{\bm{x},t}$ は時間発展を表す演算子 $\hat{U}(t)$ が位置固有状態 $\ket{\bm{x}_0} = \ket{\bm{x},t=0}$ に作用したものとする：
$$
    \ket{\bm{x},t} = \hat{U}(t)\ket{\bm{x},0}
$$
これをSchrödinger方程式に代入すると $\hat{U}(t)$ についての微分方程式を得る：
$$
    i\hbar\frac{\partial}{\partial t}\hat{U}(t) = \hat{H}(t)\hat{U}(t)
$$
これは1階微分方程式である。初期条件は $t=0$ で $\hat{U}(0) = \hat{I}$ である。

ここで考えているのは自由粒子の場合なので，ハミルトニアンは時間に依存しない。

ハミルトニアンが時間に依存しない場合，解は次のようになる：
$$
    \hat{U}(t) = \exp\left(-i\frac{\hat{H}}{\hbar}t\right)
$$
ここで演算子の指数関数はTaylor展開により定義されている。

ちなみにハミルトニアンが時間に依存する場合，解は次のようになる（**Dyson**の公式）：
$$
    \hat{U}(t) = \mathcal{T}\exp\left(-i\frac{1}{\hbar}\int_0^t dt' \hat{H}(t')\right)
$$
ここで $\mathcal{T}$ は時間順序演算子である（たとえば[@griffiths_introduction_2018]の問題11.23を参考にするとよい）。

遷移振幅 $U(t)=\braket{\bm{x}|e^{-iHt}|\bm{x}_0} = \braket{\bm{x},t|\bm{x}_0,0}$ はBornの確率解釈に従えば，その二乗 $|U(t)|^2$ が「粒子が時刻 $t=0$ に位置 $\bm{x}_0$ に存在する状態から，時刻 $t$ に位置 $\bm{x}$ に存在する状態に遷移する確率（密度）」となるような量である。

## p.14 非相対論的量子力学における遷移振幅

まずnotationを確認しておこう。位置固有状態 $\ket{\bm{x}}$ と運動量固有状態 $\ket{\bm{p}}$ は互いにFourier変換で結びつくという事実は知っているものとする。[@Peskin:1995ev]のnotationでは次のようになっている：
$$
    \ket{\bm{x}} = \int\frac{d^3p}{(2\pi)^3} e^{+i\bm{p}\cdot\bm{x}}\ket{\bm{p}},\quad \ket{\bm{p}} = \int d^3x \ e^{-i\bm{p}\cdot\bm{x}}\ket{\bm{x}}
$$
また位置固有状態は次のような直交規格化条件を満たすとする：
$$
    \braket{\bm{x}|\bm{x}'} = \delta^{(3)}(\bm{x}-\bm{x}')
$$
このとき
$$
    \boxed{\braket{\bm{x}|\bm{p}} = \int d^3x' \ e^{-i\bm{p}\cdot\bm{x}'}\braket{\bm{x}|\bm{x}'} = e^{-i\bm{p}\cdot\bm{x}}}
$$

また $\braket{\bm{x}|\bm{x}'}$ をFourier変換すると
$$
\begin{align*}
    \braket{\bm{x}|\bm{x}'} &= \left(\int\frac{d^3p}{(2\pi)^3}e^{-i\bm{p}\cdot\bm{x}}\bra{\bm{p}}\right)\left(\int\frac{d^3p'}{(2\pi)^3}e^{+i\bm{p}'\cdot\bm{x}'}\ket{\bm{p}'}\right)
    \\
    &= \int\frac{d^3p\ d^3p'}{(2\pi)^6}e^{-i(\bm{p}\cdot\bm{x}-\bm{p}'\cdot\bm{x}')}\braket{\bm{p}|\bm{p}'}
\end{align*}
$$
ここで運動量固有状態の規格化条件を
$$
    \braket{\bm{p}|\bm{p}'} = C\delta^{(3)}(\bm{p}-\bm{p}')
$$
とおくと
$$
\begin{align*}
    \braket{\bm{x}|\bm{x}'} &= C\int\frac{d^3p}{(2\pi)^6}e^{-i\bm{p}\cdot(\bm{x}-\bm{x}')} = \frac{C}{(2\pi)^3}\delta^{(3)}(\bm{x}-\bm{x}')
\end{align*}
$$
となるので，運動量固有状態の規格化条件は次のようになる：
$$
    \boxed{\braket{\bm{p}|\bm{p}'} = (2\pi)^3\delta^{(3)}(\bm{p}-\bm{p}')}
$$

そうすると任意の状態 $\ket{\psi}$ について
$$
\begin{align*}
    \braket{\bm{p}'|\left(\int\frac{d^3p}{(2\pi)^3}\ket{\bm{p}}\bra{\bm{p}}\right)|\psi} &= \int\frac{d^3p}{(2\pi)^3}\braket{\bm{p}'|\bm{p}}\braket{\bm{p}|\psi}
    \\
    &= \int\frac{d^3p}{(2\pi)^3}(2\pi)^3\delta^{(3)}(\bm{p}-\bm{p}')\braket{\bm{p}|\psi}
    \\
    &= \braket{\bm{p}'|\psi}
\end{align*}
$$
が成り立つので，運動量固有状態の完全性関係は次のようになる：
$$
    \boxed{\int\frac{d^3p}{(2\pi)^3}\ket{\bm{p}}\bra{\bm{p}} = 1}
$$
以上の結果は流儀によっては異なることがあるので注意する。

さて，非相対論的量子力学において自由粒子のハミルトニアンは
$$
    H = \frac{\bm{p}^2}{2m}
$$
であるから遷移振幅は
$$
    U(t) = \braket{\bm{x}|e^{-i(\bm{p}^2/2m)t}|\bm{x}_0}
$$
ここで $e^{-i(\bm{p}^2/2m)t}$ と $\ket{\bm{x}_0}$ の間に運動量固有状態の完全性関係を挿入すると
$$
    U(t) = \int\frac{d^3p}{(2\pi)^3}\braket{\bm{x}|e^{-i(\bm{p}^2/2m)t}|\bm{p}}\braket{\bm{p}|\bm{x}_0}
$$
ここで $e^{-i(\bm{p}^2/2m)t}$ の演算子 $\bm{p}$ は $\ket{\bm{p}}$ に作用して固有値になり，$\braket{\bm{p}|\bm{x}_0}=e^{i\bm{p}\cdot\bm{x}_0}$ であるから
$$
    U(t) = \int\frac{d^3p}{(2\pi)^3}e^{-i(\bm{p}^2/2m)t}e^{i\bm{p}\cdot(\bm{x}-\bm{x}_0)}
$$
指数関数の中身を平方完成すると
$$
\begin{align*}
    -i\frac{\bm{p}^2}{2m}t + i\bm{p}\cdot(\bm{x}-\bm{x}_0) &= -i\frac{t}{2m}\left(\bm{p}^2 - \frac{2m}{t}\bm{p}\cdot(\bm{x}-\bm{x}_0)\right)
    \\
    &= -i\frac{t}{2m}\left(\bm{p}^2 - \frac{2m}{t}\bm{p}\cdot(\bm{x}-\bm{x}_0) + \frac{m^2}{t^2}(\bm{x}-\bm{x}_0)^2\right) + i\frac{m}{2t}(\bm{x}-\bm{x}_0)^2
    \\
    &= -i\frac{t}{2m}\left(\bm{p} - \frac{m}{t}(\bm{x}-\bm{x}_0)\right)^2 + i\frac{m}{2t}(\bm{x}-\bm{x}_0)^2
\end{align*}
$$
したがって
$$
    U(t) = \frac{1}{(2\pi)^3}\exp\left(i\frac{m}{2t}(\bm{x}-\bm{x}_0)^2\right)\int d^3p \ \exp\left(-i\frac{t}{2m}\left(\bm{p} - \frac{m}{t}(\bm{x}-\bm{x}_0)\right)^2\right)
$$
ここで変数変換を行う：
$$
    \bm{q} = \bm{p} - \frac{m}{t}(\bm{x}-\bm{x}_0)
$$
積分測度は $d^3p = d^3q$ となるから
$$
\begin{align*}
    U(t) &= \frac{1}{(2\pi)^3}\exp\left(i\frac{m}{2t}(\bm{x}-\bm{x}_0)^2\right)\int d^3q \ \exp\left(-i\frac{t}{2m}\bm{q}^2\right)
    \\
    &= \frac{1}{(2\pi)^3}\exp\left(i\frac{m}{2t}(\bm{x}-\bm{x}_0)^2\right)\left(\int_{-\infty}^{\infty} dq \ e^{-i\frac{t}{2m}q^2}\right)^3
\end{align*}
$$
この積分はFrenel積分を用いて評価できる：
$$  
    \int_{-\infty}^{\infty} dx \ e^{-iax^2} = \sqrt{\frac{\pi}{ia}},\quad a=\frac{t}{2m}
$$
したがって非相対論的量子力学における遷移振幅は次のようになる：
$$
    \boxed{U(t) = \left(\frac{m}{2\pi it}\right)^{3/2}\exp\left(i\frac{m}{2t}(\bm{x}-\bm{x}_0)^2\right)\ne 0}
$$

## p.14 相対論的量子力学における遷移振幅

相対論的なエネルギー・運動量関係式 $E = \sqrt{\bm{p}^2 + m^2}$ より遷移振幅は
$$
    U(t) = \braket{\bm{x}|e^{-i\sqrt{\bm{p}^2 + m^2}t}|\bm{x}_0}
$$
ここで運動量固有状態の完全性関係を挿入すると
$$
    U(t) = \frac{1}{(2\pi)^3}\int d^3p \ e^{-it\sqrt{\bm{p}^2 + m^2}}e^{i\bm{p}\cdot\bm{r}}
$$
ここで $\bm{r}=\bm{x}-\bm{x}_0$ とした。$\bm{r}$ との角度が極角となるように球座標 $(p,\theta,\phi)$ をとると
$$
    U(t) = \frac{1}{(2\pi)^3}\int_0^{\infty} dp \int_0^{\pi} d\theta \int_0^{2\pi} d\phi \ p^2 \sin\theta \ e^{-it\sqrt{p^2 + m^2}}e^{ipr\cos\theta}
$$
ここで $r=|\bm{r}|$ とした。$\phi$ の積分は $2\pi$ になるから
$$
    U(t) = \frac{1}{(2\pi)^2}\int_0^{\infty} dp \int_0^{\pi} d\theta \ p^2 \sin\theta \ e^{-it\sqrt{p^2 + m^2}}e^{ipr\cos\theta}
$$
$\theta$ の積分 $u=\cos\theta$ と変数変換すれば次のようになる：
$$
\begin{align*}
    \int_0^{\pi} d\theta \ \sin\theta \ e^{ipr\cos\theta} &= \int_{-1}^{1} du \ e^{ipru} = \frac{e^{ipr}-e^{-ipr}}{ipr} = \frac{2\sin(pr)}{pr}
\end{align*}
$$
したがって
$$
    \boxed{U(t) = \frac{1}{(2\pi)^2 r}\int_0^{\infty} dp \ p \ e^{-it\sqrt{p^2 + m^2}}\sin(pr)}
$$
この積分は修正Bessel関数 $K_\nu$ の公式（公式集[@gradshteyn2007]の3.914を参照）
$$
    \int_0^{\infty} x e^{-\beta\sqrt{\gamma^2+x^2}}\sin(bx)\ dx = \frac{b\beta\gamma^2}{\beta^2+b^2}K_2(\gamma\sqrt{\beta^2+b^2})
$$
において係数を除いて
$$
    x = p,\quad \beta = it,\quad \gamma = m,\quad b = r
$$
としたものであるから次のようになる：
$$
    U(t) = \frac{im^2t}{(2\pi)^2(r^2-t^2)}K_2(m\sqrt{r^2-t^2})
$$

## p.14 遷移振幅の漸近的振る舞い

相対論的な遷移振幅
$$
    U(t) = \frac{1}{(2\pi)^2 r}\int_0^{\infty} dp \ p \ e^{-it\sqrt{p^2 + m^2}}\sin(pr)
$$
の spacelikeな2点 $r^2 \gg t^2$ での漸近的な振る舞いを考える。
$$
    \sin(pr) = \frac{e^{ipr}-e^{-ipr}}{2i}
$$
とすると
$$
    U(t) = \frac{1}{(2\pi)^2 r}\int_0^{\infty} dp \ p \ e^{-it\sqrt{p^2 + m^2}}\frac{e^{ipr}-e^{-ipr}}{2i}
$$
位相関数は
$$
    \Phi(p) = \pm pr - t\sqrt{p^2 + m^2}
$$
微分すると
$$
    \Phi'(p) = \pm r - \frac{tp}{\sqrt{p^2 + m^2}}
$$
極値条件は
$$
    \pm r\sqrt{p^2 + m^2} = tp
$$
極値は
$$
    p_{\pm} = \pm\frac{imr}{\sqrt{r^2 - t^2}}
$$
である（$\Phi$ の $\pm$ と極値の $\pm$ がそれぞれ対応する）。このとき位相関数は次のようになる：
$$
    \Phi(p_{\pm}) = \frac{imr}{\sqrt{r^2-t^2}} r - t \sqrt{-\frac{m^2r^2}{r^2-t^2} + m^2} = \frac{imr^2-imt^2}{\sqrt{r^2-t^2}} = im\sqrt{r^2-t^2}
$$
隠れている $\hbar$ の存在によって鞍点法を適用することができる（仮定 $r^2 \gg t^2$ はこの近似の精度を高める役割を果たす）。そうすると遷移振幅の漸近的な振る舞いの指数部分は次のようになる：
$$
    \boxed{U(t) \sim e^{-m\sqrt{r^2-t^2}} \ne 0}
$$

## p.15 高精度な実験と理論の一致

>The experimental confirmation of these predictions, often to an unprecedented level of accuracy, is our real reason for studying quantum field theory.

この事実を象徴する実験を1つだけ挙げておくことにする。電子の異常磁気モーメント $a_e$ の測定である。実験値は次のように与えられている：
$$
    a_e^{\mathrm{ex}} = 0.00115965218\cdots
$$
一方理論値は次のように与えられている：
$$
    a_e^{\mathrm{th}} = 0.00115965218\cdots
$$
この値はQEDの摂動論の計算によって得ることができる。

## 参考文献
