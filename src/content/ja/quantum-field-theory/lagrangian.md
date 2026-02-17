---
category: "quantum-field-theory"
title: "ラグランジアン"
---
## 定義

**ラグランジアン**とは，場のダイナミクスを支配する関数であり，場 $\phi(\bm{x}, t)$，場の時間微分 $\dot{\phi}(\bm{x}, t)$，場の空間微分 $\nabla\phi(\bm{x}, t)$ の関数である．場の量子論では多くの場合ラグランジアンは次の形をしている：
$$
    L(t) = \int d^3x\ \mathcal{L}(\phi, \dot{\phi}, \nabla\phi)
$$
ここで $\mathcal{L}$ は**ラグランジアン密度**と呼ばれるが，単にラグランジアンと呼ばれることも多い。[@Tong:2007qft]

## 関数形の制限

古典力学ではラグランジアン $L$ は位置 $q$ と速度 $\dot{q}$ に依存するが加速度 $\ddot{q}$ には依存しない。場の理論でも同様にラグランジアン $\mathcal{L}$ は場 $\phi$ と場の時間微分 $\dot{\phi}$ に依存するが，場の二階時間微分 $\ddot{\phi}$ には依存しないように制限する。[@Tong:2007qft]

原理的にはラグランジアン $\mathcal{L}$ は場の空間微分 $\nabla\phi$，二階空間微分 $\nabla^2\phi$，三階空間微分 $\nabla^3\phi$ などに依存しても構わない。しかしLorentz不変性を考慮して，場の空間微分 $\nabla\phi$ にのみ依存するラグランジアンを考える。[@Tong:2007qft]

実際，自然法則はLorentz対称性に並進対称性を加えたPoincaré対称性を持つと考えられている。この対称性を考慮して，ラグランジアンが明示的に時空座標 $x^\mu$ に依存することは考えない。[@Tong:2007qft]

ラグランジアンは局所的であるとする。すなわち任意の $\bm{x}, \bm{y}$（$\bm{x}\ne\bm{y}$）に対して $\phi(\bm{x},t)$ と $\phi(\bm{y},t)$ を無限小の差（微分）を除いて結びつける項はないとする。このような局所性は知られている限り，自然界のすべての理論が持つ性質である。[@Tong:2007qft]

## 例

実スカラー場 $\phi(\bm{x}, t)$ のラグランジアン：
$$
    \mathcal{L} = \frac{1}{2}\eta^{\mu\nu}\partial_\mu\phi\partial_\nu\phi - \frac{1}{2}m^2\phi^2
$$
ここで $\eta^{\mu\nu}$ はMinkowski計量
$$
    \eta^{\mu\nu} = \mathrm{diag}(+1, -1, -1, -1)
$$
である。[@Tong:2007qft]

複素スカラー場 $\psi(\bm{x}, t)$ のラグランジアン：
$$
    \mathcal{L} = \frac{i}{2}(\psi^* \dot{\psi}-\dot{\psi}^* \psi)-\nabla\psi^* \cdot\nabla\psi - m\psi^* \psi
$$
ここで $\psi^*$ は $\psi$ の複素共役だが独立な変数として扱う。[@Tong:2007qft]

電磁場 $A_\mu(\bm{x}, t)$ のラグランジアン：
$$
    \mathcal{L} = -\frac{1}{4}F_{\mu\nu}F^{\mu\nu},\quad F_{\mu\nu} = \partial_\mu A_\nu - \partial_\nu A_\mu
$$
ここで $A_0$ の運動項 $\dot{A}_0^2$ がないことに注意。[@Tong:2007qft]

## 参考文献
