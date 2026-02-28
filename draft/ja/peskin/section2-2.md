---
category: "peskin"
title: "2.2 場の古典論"
description: "場の古典論について"
order: 22
---
後で必要になる場の古典論のいくつかを復習する。

## ラグランジアン形式

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

## ハミルトニアン形式

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

## Noetherの定理

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
