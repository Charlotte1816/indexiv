---
category: "peskin"
title: "2.3節 行間埋め"
description: "Peskin 2.3節 The Klein-Gordon Field as Harmonic Oscillators の行間埋め"
---
参考文献：[@Peskin:1995ev]

## p.19 理論と「解く」とは？

ハミルトニアンの固有値と固有状態を求めることを理論を「解く」と呼ぶのはなぜか？一言でいえば，系の時間発展が完全に分かるからだろう。我々が基本的に知りたいことは，"D'où venons-nous ? Que sommes-nous ? Où allons-nous ?"（我々はどこから来たのか 我々は何者か 我々はどこへ行くのか）ということである。「必ず当たる占い」のようなものだ。しかし完全に解けるような理論はごくわずかである。完全に解ける理論から「少しずれた」理論なら摂動的には解けるかもしれないが，それもまたごくわずかだろう。完全に解ける非自明なモデルはとても貴重なので大切にしよう。

## p.20 古典場の実性

古典Klein-Gordon場をFourier変換すると（notationに注意）
$$
    \phi(\bm{x}) = \int\frac{d^3p}{(2\pi)^3}e^{i\bm{p}\cdot\bm{x}}\phi(\bm{p})
$$
ここで $\phi(\bm{x})$ が実数 $\phi^*=\phi$ である条件を考える。まず
$$
    \phi^*(\bm{x}) = \int\frac{d^3p}{(2\pi)^3}e^{-i\bm{p}\cdot\bm{x}}\phi^*(\bm{p})
$$
だが，積分変数を $\bm{p} \to -\bm{p}$ と変数変換すると，積分測度は $d^3p \to -d^3p$ となるが，積分区間を変換前に合わせると負符号がちょうど相殺して
$$
    \phi^*(\bm{x}) = \int\frac{d^3p}{(2\pi)^3}e^{i\bm{p}\cdot\bm{x}}\phi^*(-\bm{p})
$$
となる。したがって $\phi^*=\phi$ であるためには $\phi^*(-\bm{p})=\phi(\bm{p})$ が必要である。

## p.20 Fourier空間のKlein-Gordon方程式

場 $\phi(\bm{x})$ のFourier変換に対して
$$
\begin{align*}
    (\partial^\mu\partial_\mu+m^2)\phi(\bm{x},t) &= (\partial_\mu\partial^\mu+m^2)\int\frac{d^3p}{(2\pi)^3}e^{i\bm{p}\cdot\bm{x}}\phi(\bm{p},t)
    \\
    &= \int\frac{d^3p}{(2\pi)^3}\left[\partial_\mu\partial^\mu(e^{i\bm{p}\cdot\bm{x}}\phi(\bm{p},t))+m^2e^{i\bm{p}\cdot\bm{x}}\phi(\bm{p},t)\right]
\end{align*}
$$
ここで
$$
\begin{align*}
    \partial_\mu\partial^\mu(e^{i\bm{p}\cdot\bm{x}}\phi(\bm{p},t)) &= \frac{\partial^2}{\partial t^2}(e^{i\bm{p}\cdot\bm{x}}\phi(\bm{p},t)) - \nabla^2(e^{i\bm{p}\cdot\bm{x}}\phi(\bm{p},t))
    \\
    &= e^{i\bm{p}\cdot\bm{x}}\frac{\partial^2}{\partial t^2}\phi(\bm{p},t) - (i\bm{p})^2e^{i\bm{p}\cdot\bm{x}}\phi(\bm{p},t)
    \\
    &= e^{i\bm{p}\cdot\bm{x}}\left(\frac{\partial^2}{\partial t^2}+\bm{p}^2\right)\phi(\bm{p},t)
\end{align*}
$$
となるので
$$
    (\partial^\mu\partial_\mu+m^2)\phi(\bm{x},t) = \int\frac{d^3p}{(2\pi)^3}e^{i\bm{p}\cdot\bm{x}}\left(\frac{\partial^2}{\partial t^2}+\bm{p}^2+m^2\right)\phi(\bm{p},t)
$$
したがってKlein-Gordon方程式は運動量空間で
$$
    \boxed{\left[\frac{\partial^2}{\partial t^2}+(\bm{p}^2+m^2)\right]\phi(\bm{p},t) = 0}
$$

## p.21 調和振動子のスペクトル

調和振動子の真空から生成される固有状態がスペクトルを全て埋め尽くすことを簡単に示すことにする。以下は[@Shimizu:2004]を参考にした。

任意の固有状態 $\ket{\psi}$ を取る：$H\ket{\psi} = E\ket{\psi}$。消滅演算子を作用させるとエネルギー
$$
    E,\quad E-\omega,\quad E-2\omega,\quad \ldots
$$
の固有状態
$$
    \ket{\psi},\quad a\ket{\psi},\quad a^2\ket{\psi},\quad \ldots
$$
が得られる。エネルギーは下に有界であるから次が成り立つ：
$$
    \exists n \in \mathbb{N} \text{ such that } a^n\ket{\psi} = 0
$$

Schrödinger表現（位置表示）では，上の式は一階微分方程式であり規格化条件の下で解は一意である。von Neumannの定理より有限次元系であればどの表現を取っても同じスペクトルが得られるから，真空 $\ket{0}$ は一意であり $a^{n-1}\ket{\psi} = \ket{0}$ となる。したがって任意の固有状態 $\ket{\psi}$ は真空から生成される固有状態である。

さて，無限自由度の場の理論では一般にvon Neumannの定理は成り立たない。そこでどのように状態空間を構成するかというと，状況によっていくつか使い分けがあるそうだ。例えば次のようなものがある：

* Fock空間と呼ばれる（くりこまれた）自由粒子の集合にとる。常にこれが正しいHilbert空間を与える保証はないことに注意する。

* 最初は有限自由度にしておいて，最後に無限自由度極限を取る。ただし極限の取り方に注意が必要。

* [GNS構成法](https://en.wikipedia.org/wiki/Gelfand–Naimark–Segal_construction)（Gelfand–Naimark–Segal construction）を用いる。

* とりあえず興味のあるスペクトルだけ考えて，後で辻褄を合わせる。

## p.21 場の生成消滅演算子による展開

## p.21 場の正準交換関係

## p.21 ハミルトニアンの生成消滅演算子による表現

## p.22 ハミルトニアンと生成消滅演算子の交換関係

## p.22 運動量の生成消滅演算子による表現

## p.22 Lorentzブースト

## p.22 デルタ関数の公式

## p.23 規格化とLorentz変換

## p.23 Lorentz不変な3元運動量積分

## 参考文献
