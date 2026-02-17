---
category: "quantum-field-theory"
title: "運動方程式"
---
## 定義

**運動方程式**とは，場 $\phi_a$ の実際のダイナミクスを支配する方程式である。ラグランジアン $\mathcal{L}$ が与えられたとき，運動方程式はEuler-Lagrange方程式
$$
    \partial_\mu\left(\frac{\partial\mathcal{L}}{\partial(\partial_\mu\phi_a)}\right) - \frac{\partial\mathcal{L}}{\partial\phi_a} = 0
$$
によって与えられる。[@Tong:2007qft]

## 導出

最小作用の原理にしたがい運動方程式を導く。

場 $\phi_a$ の変分 $\delta\phi_a$ に対して，作用 $S[\phi]$ の変分 $\delta S$ は次のように書ける：
$$
\begin{align*}
    \delta S &= \int_V d^4x\ \left[ \frac{\partial\mathcal{L}}{\partial\phi_a}\delta\phi_a + \frac{\partial\mathcal{L}}{\partial(\partial_\mu\phi_a)}\delta(\partial_\mu\phi_a) \right] \\\\
    &= \int_V d^4x\ \left[\frac{\partial\mathcal{L}}{\partial\phi_a} - \partial_\mu\left(\frac{\partial\mathcal{L}}{\partial(\partial_\mu\phi_a)}\right)\right]\delta\phi_a + \int_V d^4x\ \partial_\mu\left(\frac{\partial\mathcal{L}}{\partial(\partial_\mu\phi_a)}\delta\phi_a\right)
\end{align*}
$$
ここで第二項の被積分関数は，空間無限遠で十分速くゼロに収束することを仮定するとゼロになる。さらに端点条件
$$
    \delta\phi_a(\bm{x}, t_1) = \delta\phi_a(\bm{x}, t_2) = 0
$$
より最小作用の原理 $\delta S = 0$ を満たすためには，第一項の被積分関数がゼロでなければならない。したがって運動方程式は
$$
    \partial_\mu\left(\frac{\partial\mathcal{L}}{\partial(\partial_\mu\phi_a)}\right) - \frac{\partial\mathcal{L}}{\partial\phi_a} = 0
$$
となる。[@Tong:2007qft]

## 例

### 実スカラー場の理論

実スカラー場 $\phi(\bm{x}, t)$ のラグランジアン：
$$
    \mathcal{L} = \frac{1}{2}\eta^{\mu\nu}\partial_\mu\phi\partial_\nu\phi - \frac{1}{2}m^2\phi^2
$$
ここで $\eta^{\mu\nu}$ はMinkowski計量
$$
    \eta^{\mu\nu} = \mathrm{diag}(+1, -1, -1, -1)
$$
である。このとき
$$
    \frac{\partial\mathcal{L}}{\partial\phi} = -m^2\phi,\quad \frac{\partial\mathcal{L}}{\partial(\partial_\mu\phi)} = \partial^\mu\phi
$$
であるから運動方程式は
$$
    \boxed{\partial_\mu\partial^\mu\phi + m^2\phi = 0}
$$
となる。この運動方程式を**Klein-Gordon方程式**と呼ぶ。[@Tong:2007qft]

### 複素スカラー場の理論

複素スカラー場 $\psi(\bm{x}, t)$ のラグランジアン：
$$
    \mathcal{L} = \frac{i}{2}(\psi^* \dot{\psi}-\dot{\psi}^* \psi)-\nabla\psi^* \cdot\nabla\psi - m\psi^* \psi
$$
ここで $\psi^*$ は $\psi$ の複素共役だが独立な変数として扱う。このとき $\psi^*$ に関する微分は
$$
    \frac{ \partial \mathcal{L} }{ \partial \psi^* } = \frac{i}{2}\dot{\psi} -m\psi, \quad \frac{\partial\mathcal{L}}{\partial\dot{\psi}^*} = -\frac{i}{2}\psi, \quad \frac{\partial\mathcal{L}}{\partial(\nabla\psi^*)} = -\nabla\psi
$$
であるから $\psi^*$ に関する運動方程式は
$$
    \boxed{i\frac{\partial\psi}{\partial t} = -\nabla^2\psi + m\psi}
$$
となる。同様に $\psi$ に関する微分は
$$
    \frac{ \partial \mathcal{L} }{ \partial \psi } = -\frac{i}{2}\dot{\psi}^* -m\psi^*, \quad \frac{\partial\mathcal{L}}{\partial\dot{\psi}} = \frac{i}{2}\psi^*, \quad \frac{\partial\mathcal{L}}{\partial(\nabla\psi)} = -\nabla\psi^*
$$
であるから $\psi$ に関する運動方程式は
$$
    \boxed{i\frac{\partial\psi^*}{\partial t} = \nabla^2\psi^* - m\psi^*}
$$
となる。これらの運動方程式は互いに複素共役の関係にある。なおこの運動方程式はSchrödinger方程式に似ているが，古典場の運動方程式であり確率解釈も存在しないことに注意する。またKlein-Gordon方程式の場合は時間発展を決定するために初期条件として $\phi$ と $\dot{\phi}$ の両方が必要だったのに対して，これらの運動方程式の場合は $\psi$ あるいは $\psi^*$ のみで時間発展が決定することに注意する。[@Tong:2007qft]

### 電磁場の理論

電磁場 $A_\mu(\bm{x}, t)$ のラグランジアン：
$$
\begin{align*}
    \mathcal{L} &= -\frac{1}{2}(\partial_\mu A_\nu)(\partial^\mu A^\nu) + \frac{1}{2}(\partial_\mu A^\mu)^2
    \\\\
    &= -\frac{1}{4}F_{\mu\nu}F^{\mu\nu},\quad F_{\mu\nu} = \partial_\mu A_\nu - \partial_\nu A_\mu
\end{align*}
$$
ここで $A_0$ の運動項 $\dot{A}_{0}^{2}$ がないことに注意。このとき
$$
    \frac{\partial\mathcal{L}}{\partial A_{\nu} } = 0,\quad \frac{\partial\mathcal{L}}{\partial(\partial_\mu A_\nu)} = -F^{\mu\nu}
$$
であるから運動方程式は
$$
    \boxed{\partial_\mu F^{\mu\nu} = 0}
$$
となる。これは**Maxwell方程式**である。[@Tong:2007qft]

## References
