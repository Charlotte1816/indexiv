---
category: "peskin"
title: "3.4 Dirac行列とDirac双一次形式"
description: "Dirac行列とDirac双一次形式について"
order: 34
---
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
